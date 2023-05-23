import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
  dataCopy: []
}
export const beneficiosSlice = createSlice({
  name: 'beneficios',
  initialState,
  reducers: {
    setBeneficios: (state, payload) => {
      state.data = payload.payload
      state.dataCopy = payload.payload
    }
  }
})

export const { setBeneficios } = beneficiosSlice.actions

export default beneficiosSlice.reducer