import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: [],
    discountPercent: 0,
    promoCode: ''
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart: (state, action)=> {}, 
        decrementQuantity: (state, action)=> {},
        removeFromCart: (state, action)=> {},
        applyPromoCode: (state, action)=> {},
        clearCart: ()=> initialState
    }
})

export const {addToCart, decrementQuantity, removeFromCart, applyPromoCode, clearCart} = cartSlice.actions
export default cartSlice.reducer