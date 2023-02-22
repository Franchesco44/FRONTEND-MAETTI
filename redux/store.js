import { configureStore } from '@reduxjs/toolkit'
import translateSlice from './translateSlice/translateSlice'

export const store = configureStore({
  reducer: {
    translate: translateSlice
  },
})