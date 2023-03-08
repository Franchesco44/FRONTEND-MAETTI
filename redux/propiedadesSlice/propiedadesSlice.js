import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
  dataCopy: []
}
export const propiedadesSlice = createSlice({
  name: 'propiedades',
  initialState,
  reducers: {
    setPropiedades: (state, payload) => {
      state.data = payload.payload
      state.dataCopy = payload.payload
    },
    setFilter: (state, payload) => {
      if(payload.payload === "todo"){
        state.dataCopy = state.data
      }else if(payload.payload === "noche" || payload.payload === "mensual"){
        state.dataCopy = state.data.filter((p) => p.alquiler === payload.payload)
      }else if(payload.payload === "menor a mayor"){
        state.dataCopy = state.dataCopy.sort(function(a, b) {
          return a.precio - b.precio;
        })
      }else if(payload.payload === "mayor a menor"){
        state.dataCopy = state.dataCopy.sort(function(a, b) {
          return a.precio - b.precio;
        }).reverse()
      }else{
        state.dataCopy = state.data.filter((p) => p.ubicacion === payload.payload)
      }
    }
  }
})

export const { setPropiedades, setFilterUbicacion, setFilterAlquiler, setFilterAll, setFilter } = propiedadesSlice.actions

export default propiedadesSlice.reducer