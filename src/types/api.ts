import api from '../API/api'

export type Method = 'get' | 'post' | 'GET' | 'POST'

export type MethodLowerCase = Exclude<Method, 'GET' | 'POST'>

type APICategories = ReturnType<typeof api.getCarCategoriesList>
export type CategoriesList = Awaited<APICategories>

type APIPlaces = ReturnType<typeof api.getPlacesList>
export type PlacesList = Awaited<APIPlaces>
