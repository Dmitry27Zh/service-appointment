import { useEffect, useMemo, useState } from 'react'
import Select, { ActionMeta } from 'react-select'
import { CategoriesList, PlacesList, Schedule, SelectOption, ServiceAppointmentData } from '../../types/api'
import api from '../../API/api'

function ServiceAppointment(): JSX.Element {
  const [categories, setCategories] = useState<CategoriesList | null>(null)
  const [places, setPlaces] = useState<PlacesList | null>(null)
  const [schedule, setSchedule] = useState<Schedule | null>(null)
  const initialData: ServiceAppointmentData = useMemo(
    () => ({
      category: null,
      place: null,
      day: null,
      time: null,
    }),
    []
  )
  const [data, setData] = useState(initialData)

  useEffect(() => {
    api
      .getCarCategoriesList()
      .then((data) => {
        setCategories(data)

        return api.getPlacesList()
      })
      .then((data) => {
        setPlaces(data)
      })
  }, [])
  useEffect(() => {
    setData((prevState) => ({ ...initialData, category: prevState.category }))
  }, [data.category, initialData])
  useEffect(() => {
    setData((prevState) => ({ ...initialData, category: prevState.category, place: data.place }))

    if (data.place) {
      api.getSchedule().then((data) => setSchedule(data))
    } else {
      setSchedule(null)
    }
  }, [data.place, initialData])

  const onChange = (option: SelectOption, meta: ActionMeta<SelectOption>) => {
    const name = meta.name

    if (option && name) {
      setData((prevState) => ({ ...prevState, [name]: option }))
    }
  }

  const renderCategories = () => {
    if (categories) {
      const options = categories.map((category) => ({
        value: String(category.id),
        label: category.description,
      }))

      return <Select options={options} name="category" value={data.category} onChange={onChange} />
    } else {
      return 'loading...'
    }
  }
  const renderPlaces = () => {
    const category = data.category

    if (category && !places) {
      return 'loading'
    }

    if (places && category) {
      const placesToRender = places.filter(({ available_car_category }) => {
        return available_car_category.some((inspectionPrice) => {
          return inspectionPrice.car_category_id === Number(category.value)
        })
      })
      const options = placesToRender.map((place) => ({
        value: String(place.id),
        label: `${place.title} – ${place.address}`,
      }))

      return <Select options={options} name="place" value={data.place} onChange={onChange} />
    }
  }
  const renderPrice = () => {
    if (places && data.place) {
      const place = places.find((place) => place.id === Number(data.place?.value))

      const price = place?.available_car_category.find(
        (availableCategory) => availableCategory.car_category_id === Number(data.category?.value)
      )?.price

      return (
        <p>
          Стоимость услуг составит: <b>${price}</b>
        </p>
      )
    }
  }
  const renderScheduleDay = () => {
    if (data.place && !schedule) {
      return 'loading...'
    }

    if (schedule) {
      const options = schedule.days.map((day) => ({
        value: day,
        label: day,
      }))

      return <Select options={options} name="day" value={data.day} onChange={onChange} />
    }
  }

  return (
    <div className="container">
      <h2 className="mb-5 pt-4 pb-4">Service appointment</h2>
      {renderPrice()}
      <div className="row mb-3">
        <div className="col">{renderCategories()}</div>
        <div className="col">{renderPlaces()}</div>
      </div>
      <div className="row">
        <div className="col">{renderScheduleDay()}</div>
        <div className="col"></div>
      </div>
    </div>
  )
}

export default ServiceAppointment
