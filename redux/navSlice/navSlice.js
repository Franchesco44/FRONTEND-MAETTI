import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isFixed: true
}

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setStaticNav: (state, payload) => {
            state.isFixed = payload.payload
        }
    }
})

export const { setStaticNav } = navSlice.actions

export default navSlice.reducer