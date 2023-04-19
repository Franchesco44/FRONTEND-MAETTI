import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  value: true
}
export const translateSlice = createSlice({
  name: 'translate',
  initialState,
  reducers: {
    english: (state) => {
      state.value = true
    },
    español: (state) => {
      state.value = false
    }
  }
})

export const { english, español } = translateSlice.actions

export default translateSlice.reducer