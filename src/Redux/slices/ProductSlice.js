import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk(
    'product/getProducts',
    async (params) => {
        const {
            categoryId,
            sort,
            sortByOrder
        } = params
        const res = await axios.get(`https://63ad51503e46516916562f86.mockapi.io/items?category=${categoryId > 0 ? categoryId : ''}&sortBy=${sort.sort}&order=${sortByOrder}`)
        return res.data
    }
)

const initialState = {
    items: [],
    status: 'loading',
}

const ProductSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setItems(state, action) {
            state.items = action.payload;
        },
    },
    extraReducers: {
        [getProducts.pending]: (state) => {
            state.status = 'loading';
            state.items = [];
        },
        [getProducts.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.status = 'success';
        },
        [getProducts.rejected]: (state) => {
            state.items = [];
            state.status = 'error';
        }
    }
})

export const {setItems} = ProductSlice.actions;
export default ProductSlice.reducer