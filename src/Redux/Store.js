import { configureStore } from '@reduxjs/toolkit'
import filter from "./slices/FilterCategorySlice"
import cart from "./slices/cartSlice";
import products from "./slices/ProductSlice";

export const store = configureStore({
    reducer: {
        filter,
        cart,
        products
    },
})
