import axios from 'axios'
import { GetCarCategoriesList } from './data/requests'
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

const api = {
  getCarCategoriesList,
}

export default api
