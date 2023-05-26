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
    },
    setBusquedaVehiculos: (state, payload) => {
      //Ubicacion
      if(payload.payload.ubicacion !== ""){
        console.log(payload.payload.ubicacion)
        state.dataCopy = state.data.filter((p) => p.zona === payload.payload.ubicacion)
        state.busqueda = payload.payload.ubicacion
      }else{
        console.log("Sin ubicacion")
        state.dataCopy = state.data
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
    }
  }
})

export const { setVehiculos, setIsVehiculo, setLocalizacionVehiculos, setBusquedaVehiculos } = vehiculosSlice.actions

export default vehiculosSlice.reducer