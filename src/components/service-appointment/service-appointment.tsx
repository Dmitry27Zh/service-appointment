import { useEffect, useState } from 'react'
import Select, { ActionMeta } from 'react-select'
import { CategoriesList, PlacesList, SelectOption, ServiceAppointmentData } from '../../types/api'
import api from '../../API/api'

function ServiceAppointment(): JSX.Element {
  const [categories, setCategories] = useState<CategoriesList | null>(null)
  const [places, setPlaces] = useState<PlacesList | null>(null)
  const initialData: ServiceAppointmentData = {
    category: null,
    place: null,
  }
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
    if (places) {
      const options = places.map((place) => ({
        value: String(place.id),
        label: `${place.title} – ${place.address}`,
      }))

      return <Select options={options} name="place" value={data.place} onChange={onChange} />
    }
  }

  return (
    <div className="container">
      <h2 className="mb-5 pt-4 pb-4">Service appointment</h2>
      <div className="row mb-3">
        <div className="col">{renderCategories()}</div>
        <div className="col">{renderPlaces()}</div>
      </div>
      <div className="row">
        <div className="col"></div>
        <div className="col"></div>
      </div>
    </div>
  )
}

export default ServiceAppointment
