import { GetCarCategoriesList, GetPlacesList, GetSchedule } from './../data/requests'

const categoriesList: GetCarCategoriesList['success'] = [
  { id: 1, code: 'L1', description: 'Мопеды, мотоциклы и т.п.' },
  { id: 2, code: 'M1', description: 'Легковые машины' },
  { id: 3, code: 'M2', description: 'Пассажирские ТС, более 8 мест, Максимальная масса меньше 5 тонн.' },
  { id: 4, code: 'M3', description: 'Пассажирские ТС, более 8 мест, максимальная масса более 5 тонн.' },
]

const placesList: GetPlacesList['success'] = [
  {
    address: 'Москва, Чермянская улица, 6 строение 10',
    available_car_category: [
      { car_category_id: 1, price: 1000 },
      { car_category_id: 2, price: 1000 },
    ],
    coords: { lat: 55.8882, lng: 37.6274 },
    id: 1,
    title: 'Бибирево',
  },
  {
    address: 'Люберцы, улица Инициативная, 3Б',
    available_car_category: [
      { car_category_id: 1, price: 1000 },
      { car_category_id: 2, price: 1200 },
      { car_category_id: 4, price: 4000 },
    ],
    coords: { lat: 55.686, lng: 37.8937 },
    id: 2,
    title: 'Люберцы',
  },
  {
    address: 'Домодедово, Комсомольская улица, 1А',
    available_car_category: [
      { car_category_id: 1, price: 1000 },
      { car_category_id: 2, price: 1000 },
      { car_category_id: 3, price: 2500 },
    ],
    coords: { lat: 55.4559, lng: 37.7592 },
    id: 5,
    title: 'Домодедово',
  },
]

const schedule: GetSchedule['success'] = {
  days: ['2022-11-02', '2022-11-03', '2022-11-04', '2022-11-05', '2022-11-06', '2022-11-07', '2022-11-08'],
  times: {
    '2022-11-02': ['10:00', '10:20', '10:40', '11:00', '16:20', '18:00'],
    '2022-11-03': ['10:00', '10:40', '10:40', '11:00', '16:20', '18:00'],
    '2022-11-04': ['10:00', '10:20', '10:40', '11:00'],
    '2022-11-05': ['10:00', '10:20', '10:40', '11:20'],
    '2022-11-06': ['10:00', '10:20', '10:40', '11:40'],
    '2022-11-07': ['10:00', '10:20', '10:40', '12:00'],
    '2022-11-08': ['10:00', '10:20', '10:40', '14:00'],
  },
}

export const data: {
  [k: string]: any
} = {
  'car-categories': categoriesList,
  places: placesList,
  schedule: schedule,
}
