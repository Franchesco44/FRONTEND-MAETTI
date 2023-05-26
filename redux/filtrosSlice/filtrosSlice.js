import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isOpen: false,
    isSugerenciasOpen: false
}

export const filtrosSlice = createSlice({
    name: 'filtros',
    initialState,
    reducers: {
        setFilterOpen: (state, payload) => {
            state.isOpen = payload.payload
        },
        setSugerencias: (state, payload) => {
            state.isSugerenciasOpen = payload.payload
        }
    }
})

export const { setFilterOpen, setSugerencias } = filtrosSlice.actions

export default filtrosSlice.reducer