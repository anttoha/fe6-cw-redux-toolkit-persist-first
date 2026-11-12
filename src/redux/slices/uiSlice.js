import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isCartOpen: false,
    orderPlaced: false
}

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        openCart: (state) => {
            state.isCartOpen = true
        },
        closeCart: (state) => {
            state.isCartOpen = false
        },
        setOrderPlaced: (state, action) => {
            state.orderPlaced = action.payload
        }
    }
})

export const {openCart, closeCart, setOrderPlaced} = uiSlice.actions
export default uiSlice.reducer