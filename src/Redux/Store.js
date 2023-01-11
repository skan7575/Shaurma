import { configureStore } from '@reduxjs/toolkit'
import filter from "./slices/FilterCategorySlice"



export const store = configureStore({
    reducer: {
        filter,
    },
})
