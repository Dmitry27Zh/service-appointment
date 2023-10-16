import axios from 'axios'
import { GetCarCategoriesList, GetPlacesList, GetSchedule } from './data/requests'
import { Method } from '../types/api'

const getData = async (settings: { method: Method; url: string }) => {
  const request = await axios(settings)

  return request.data
}

async function getCarCategoriesList() {
  const settings: Omit<GetCarCategoriesList, 'success'> = {
    method: 'GET',
    url: 'http://faceprog.ru/tsapi/car-categories/',
  }
  type Data = GetCarCategoriesList['success']
  const data: Data = await getData(settings)

  return data
}

async function getPlacesList() {
  const settings: Omit<GetPlacesList, 'success'> = {
    method: 'GET',
    url: 'http://faceprog.ru/tsapi/places/',
  }
  type Data = GetPlacesList['success']
  const data: Data = await getData(settings)

  return data
}

async function getSchedule() {
  const settings: Omit<GetSchedule, 'success' | 'params'> = {
    method: 'GET',
    url: 'http://faceprog.ru/tsapi/schedule/',
  }
  type Data = GetSchedule['success']

  return {
    days: ['2020-01-01', '2020-01-02', '2020-01-03', '2020-01-04'],
    times: {
      '2020-01-01': ['01:00', '01:05', '01:15'],
      '2020-01-02': ['01:05'],
      '2020-01-03': ['17:30', '17:40', '17:45'],
      '2020-01-04': ['20:20', '20:10', '20:45'],
    },
  } as Data
}

const api = {
  getCarCategoriesList,
  getPlacesList,
  getSchedule,
}

export default api
