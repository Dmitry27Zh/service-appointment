import api from '../API/api'

export type Method = 'get' | 'post' | 'GET' | 'POST'

export type MethodLowerCase = Exclude<Method, 'GET' | 'POST'>

type GetCarCategoriesListReturn = ReturnType<typeof api.getCarCategoriesList>

export type CategoriesList = Awaited<GetCarCategoriesListReturn>
