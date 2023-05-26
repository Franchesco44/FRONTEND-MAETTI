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
    setBusqueda: (state, payload) => {
      //Ubicacion
      if(payload.payload.ubicacion !== ""){
        console.log(payload.payload.ubicacion)
        state.dataCopy = state.data.filter((p) => p.zona === payload.payload.ubicacion)
        state.busqueda = payload.payload.ubicacion
      }else{
        state.dataCopy = state.data
      }
      //Renta
      if(payload.payload.renta == "noche"){
        state.dataCopy = state.dataCopy.filter((p) => p.alquiler === "noche")
      }else if(payload.payload.renta == "mes"){
        state.dataCopy = state.dataCopy.filter((p) => p.alquiler === "mensual")
      }
      //Huespedes
      if(payload.payload.huespedes > 0){
        state.dataCopy = state.dataCopy.filter((p) => p.huespedes > payload.payload.huespedes)
      }
      //Rango de precios
      if(payload.payload.min === 0 && payload.payload.max === 0){
        state.dataCopy = state.dataCopy.filter((p) => p.precio > 0)
      }else if(payload.payload.min !== 0 && payload.payload.max === 0){
        state.dataCopy = state.dataCopy.filter((p) => p.precio > payload.payload.min)
      }else if(payload.payload.max !== 0  && payload.payload.min === 0 ){
        state.dataCopy = state.dataCopy.filter((p) => p.precio < payload.payload.max)
      }else{
        state.dataCopy = state.dataCopy.filter((p) => p.precio > payload.payload.min)
        state.dataCopy = state.dataCopy.filter((p) => p.precio < payload.payload.max)
      }
      //Orden
      if(payload.payload.orden === "mayor a menor"){
        state.dataCopy = state.dataCopy.sort(function(a, b) {
          return a.precio - b.precio;
        }).reverse()
      }else if(payload.payload.orden === "menor a mayor"){
        state.dataCopy = state.dataCopy.sort(function(a, b) {
          return a.precio - b.precio;
        })
      }
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
    }
  }
})

export const { setPropiedades, setFilterUbicacion, setFilterAlquiler, setFilterAll, setFilterProperties, setIsPropiedades, setIsInicio, setBusqueda
} = propiedadesSlice.actions

export default propiedadesSlice.reducer