import api from '../API/api'

export type Method = 'get' | 'post' | 'GET' | 'POST'

export type MethodLowerCase = Exclude<Method, 'GET' | 'POST'>

type APICategories = ReturnType<typeof api.getCarCategoriesList>
export type CategoriesList = Awaited<APICategories>

type APIPlaces = ReturnType<typeof api.getPlacesList>
export type PlacesList = Awaited<APIPlaces>

type APIShedule = ReturnType<typeof api.getSchedule>
export type Schedule = Awaited<APIShedule>

type ServiceAppointmentDataName = 'category' | 'place' | 'day' | 'time'

export type SelectOption = {
  value: string
  label: string
} | null

export type ServiceAppointmentData = {
  [K in ServiceAppointmentDataName]: SelectOption
}

export type Request = {
  method: Method
  url: string
  success: any
  params?: object
}
export type RequestSettings<T extends Request> = Omit<T, 'success'>
