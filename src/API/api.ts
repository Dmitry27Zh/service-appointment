import axios from 'axios'
import { GetCarCategoriesList, GetPlacesList, GetSchedule } from './data/requests'
import { RequestSettings, Request } from '../types/api'
import { BASE_URL } from '../constants'
import { data as mockData } from './mock/data'

const http = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
})

const getData = async <T extends Request>(settings: RequestSettings<T>): Promise<T['success']> => {
  try {
    const request = await http(settings)

    if (request.statusText === 'OK') {
      return request.data
    } else {
      throw new Error()
    }
  } catch (e) {
    const dataName = settings.url.match(/\/([^/]*)\/$/)?.[1]

    if (dataName && dataName in mockData) {
      return mockData[dataName]
    }
  }
}

async function getCarCategoriesList() {
  const data = await getData<GetCarCategoriesList>({ method: 'GET', url: '/tsapi/car-categories/' })

  return data
}

async function getPlacesList() {
  const data = await getData<GetPlacesList>({ method: 'GET', url: '/tsapi/places/' })

  return data
}

async function getSchedule(id: number) {
  const data = await getData<GetSchedule>({
    method: 'GET',
    url: '/tsapi/schedule/',
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
