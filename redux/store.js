import { configureStore } from '@reduxjs/toolkit'
import navSlice from './navSlice/navSlice'
import propiedadesSlice from './propiedadesSlice/propiedadesSlice'
import translateSlice from './translateSlice/translateSlice'
import vehiculosSlice from './vehiculosSlice/vehiculosSlice'
import beneficiosSlice from './beneficiosSlice/beneficiosSlice'
import filtrosSlice from './filtrosSlice/filtrosSlice'

export const store = configureStore({
  reducer: {
    translate: translateSlice,
    propiedades: propiedadesSlice,
    vehiculos: vehiculosSlice,
    nav: navSlice,
    beneficios: beneficiosSlice,
    filter: filtrosSlice
  },
})