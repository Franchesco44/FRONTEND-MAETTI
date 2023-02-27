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
    setFilterUbicacion: (state, payload) => {
      state.dataCopy = state.data.filter((p) => p.ubicacion === payload.payload)
    },
    setFilterAlquiler: (state, payload) => {
      state.dataCopy = state.data.filter((p) => p.alquiler === payload.payload)
    },
    setFilterAll: (state) => {
      state.dataCopy = state.data
    }
  }
})

export const { setPropiedades, setFilterUbicacion, setFilterAlquiler, setFilterAll } = propiedadesSlice.actions

export default propiedadesSlice.reducer