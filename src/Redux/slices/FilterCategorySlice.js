import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    categoryId: 0,
    sort: {
        name: 'популярности',
        sort: 'rating'
    },
    sortSwitchProperty: false,
    sortByOrder: 'desc'
}

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategoryId(state, action) {
            state.categoryId = action.payload;
        },
        setSort(state, action) {
            state.sort = action.payload
        },
        setSortSwitchProperty(state, action) {
            state.sortSwitchProperty = action.payload
        },
        setSortByOrder(state, action) {
            state.sortByOrder = action.payload
        },
        setFilters(state, action) {
            state.sort = action.payload.sort;
            state.sortByOrder = action.payload.sortByOrder
            state.categoryId = Number(action.payload.categoryId)
            state.sortSwitchProperty = Boolean(action.payload.sortSwitchProperty)
        }
    }
})

export const {setCategoryId, setSort, setSortSwitchProperty, setSortByOrder, setFilters} = filterSlice.actions;
export default filterSlice.reducer