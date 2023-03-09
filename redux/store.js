import { configureStore } from '@reduxjs/toolkit'
import navSlice from './navSlice/navSlice'
import propiedadesSlice from './propiedadesSlice/propiedadesSlice'
import translateSlice from './translateSlice/translateSlice'

export const store = configureStore({
  reducer: {
    translate: translateSlice,
    propiedades: propiedadesSlice,
    nav: navSlice
  },
})