import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    totalPrice: 0,
    items: [],
}

const cart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            const findItem = state.items.find(obj => obj.id === action.payload.id)
            if (findItem) {
                findItem.count++
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1
                });
            }
            state.totalPrice = state.items.reduce((sum, obj) => {
                return obj.price * obj.count + sum
            }, 0)
        },
        removeItem(state, action) {
            const findItem = state.items.find(obj => obj.id === action.payload.id)

            if (findItem.count > 1) {
                findItem.count--
                state.totalPrice = state.items.reduce((sum, obj) => {
                    return state.totalPrice - obj.price
                }, state.totalPrice)
            }
        },
        clearItem(state, action) {
            state.items = state.items.filter(obj => {
                if (obj.id === action.payload.id) {
                    state.totalPrice = state.totalPrice - obj.price * obj.count
                }
                return obj.id !== action.payload.id
            })

        },
        clearCart(state, action) {
            state.totalPrice = 0
            state.items = []
        }
    }
})

export const {addItem, removeItem, clearItem, clearCart} = cart.actions;
export default cart.reducer