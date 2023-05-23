import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
  dataCopy: [],
  isVehiculos: false,
  busqueda: ""
}
export const vehiculosSlice = createSlice({
  name: 'vehiculos',
  initialState,
  reducers: {
    setVehiculos: (state, payload) => {
      state.data = payload.payload
      state.dataCopy = payload.payload
    },
    setIsVehiculo: (state, payload) => {
      state.isVehiculos = payload.payload
    },
    setLocalizacionVehiculos: (state, payload) => {
      if(payload.payload !== ""){
        state.dataCopy = state.data.filter((p) => p.zona === payload.payload)
        state.busqueda = payload.payload
      }else{
        state.dataCopy = state.data
      }
    }
  }
})

export const { setVehiculos, setIsVehiculo, setLocalizacionVehiculos } = vehiculosSlice.actions

export default vehiculosSlice.reducer