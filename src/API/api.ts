import axios from 'axios'
import { GetCarCategoriesList, GetPlacesList, GetSchedule } from './data/requests'
import { RequestSettings, Request } from '../types/api'

const getData = async <T extends Request>(settings: RequestSettings<T>): Promise<T['success']> => {
  const request = await axios(settings)

  return request.data
}

async function getCarCategoriesList() {
  const data = await getData<GetCarCategoriesList>({ method: 'GET', url: 'http://faceprog.ru/tsapi/car-categories/' })

  return data
}

async function getPlacesList() {
  const data = await getData<GetPlacesList>({ method: 'GET', url: 'http://faceprog.ru/tsapi/places/' })

  return data
}

async function getSchedule(id: number) {
  const data = await getData<GetSchedule>({
    method: 'GET',
    url: 'http://faceprog.ru/tsapi/schedule/',
    params: { place_id: id },
  })

  return data
}

const api = {
  getCarCategoriesList,
  getPlacesList,
  getSchedule,
}

export default api
