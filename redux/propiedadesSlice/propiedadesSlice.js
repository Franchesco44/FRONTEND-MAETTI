import { createSlice } from '@reduxjs/toolkit'
import { STATIC_STATUS_PAGES } from 'next/dist/shared/lib/constants'

const initialState = {
  data: [],
  dataCopy: [],
  isPropiedades: true,
  isInicio: true,
  busqueda: ""
}
export const propiedadesSlice = createSlice({
  name: 'propiedades',
  initialState,
  reducers: {
    setPropiedades: (state, payload) => {
      state.data = payload.payload
      state.dataCopy = payload.payload
    },
    setLocalizacion: (state, payload) => {
      if(payload.payload !== ""){
        state.dataCopy = state.data.filter((p) => p.zona === payload.payload)
        state.busqueda = payload.payload
      }else{
        state.dataCopy = state.data
      }
    },
    setNoche: (state, payload) => {
      if(state.busqueda !== ""){
        state.dataCopy = state.data.filter((p) => p.zona === state.busqueda)
        state.dataCopy = state.dataCopy.filter((p) => p.alquiler === "noche")
      }else{
        state.dataCopy = state.data.filter((p) => p.alquiler === "noche")
      }
      
    },
    setMensual: (state, payload) => {
      if(state.busqueda !== ""){
        state.dataCopy = state.data.filter((p) => p.zona === state.busqueda)
        state.dataCopy = state.dataCopy.filter((p) => p.alquiler === "mensual")
      }else{
        state.dataCopy = state.data.filter((p) => p.alquiler === "mensual")
      }
      
    },
    setMayorAMenor: (state, payload) => {
      state.dataCopy = state.dataCopy.sort(function(a, b) {
        return a.precio - b.precio;
      }).reverse()
    },
    setMenorAMayor: (state, payload) => {
      state.dataCopy = state.dataCopy.sort(function(a, b) {
        return a.precio - b.precio;
      })
    },
    setFilterAll: (state, payload) => {
      state.dataCopy = state.data
      state.busqueda = ""
    },
    setIsPropiedades: (state, payload) => {
      state.isPropiedades = payload.payload
    },
    setIsInicio: (state, payload) => {
      state.isInicio = payload.payload
    },
    setPrice: (state, payload) => {
        if(payload.payload.min === 0 && payload.payload.max === 0){
          state.dataCopy = state.data.filter((p) => p.precio > 0)
        }else if(payload.payload.min !== 0 && payload.payload.max === 0){
          state.dataCopy = state.data.filter((p) => p.precio > payload.payload.min)
        }else{
          state.dataCopy = state.data.filter((p) => p.precio > payload.payload.min && p.precio < payload.payload.max)
        }
    }
  }
})

export const { setPropiedades, setFilterUbicacion, setFilterAlquiler, setFilterAll, setFilterProperties, setIsPropiedades, setIsInicio, 
setLocalizacion, setNoche, setMensual, setMayorAMenor, setMenorAMayor, setPrice
} = propiedadesSlice.actions

export default propiedadesSlice.reducer