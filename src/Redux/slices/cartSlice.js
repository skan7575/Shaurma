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
            const findItem = state.items.find(obj => obj.id === action.payload.id && obj.sizes === action.payload.sizes && obj.optionOne === action.payload.optionOne)
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

            if(findItem.count > 1) {
                findItem.count--
            } else if (findItem.count === 1) {
                state.items = state.items.filter(obj => {
                    return obj.id !== action.payload.id
                })
            }
        },
        clearItem(state, action) {
            state.items = state.items.filter(obj => {
             return obj.id !== action.payload.id
            })
        },
        clearCart(state, action) {
            state.totalPrice = 0
            state.items = []
        }
    }
})

export const {addItem, removeItem, clearItem, clearCart } = cart.actions;
export default cart.reducer