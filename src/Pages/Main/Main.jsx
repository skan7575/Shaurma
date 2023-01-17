import React, {useState, useEffect, useRef} from 'react';
import Catalog from "../../Components/Catalog/Catalog";
import Header from "../../Components/Header/Header";
import Category from "../../Components/Category/Category";
import SearchContext from "../../Context/SearchValue";
import {useSelector, useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

import {setFilters} from "../../Redux/slices/FilterCategorySlice";
import axios from "axios"
import qs from "qs"
import {sortName} from "../../Components/Sort/Sort";
import {getProducts} from "../../Redux/slices/ProductSlice";

function Main(props) {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const {categoryId, sort, sortByOrder} = useSelector(state => state.filter);
    const {status, items} = useSelector(state=> state.products)


    const [searchValue, setSearchValue] = useState('');
    const isSearch = useRef(false)

    useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1))
            const sort = sortName.find(obj => obj.sort === params.sort)
            dispatch(setFilters({
                ...params,
                sort,
            }))
        }
        isSearch.current = true
    }, [])
    useEffect(() => {
        if (!isSearch.current) {
            axiosProduct();
        } else {
            axios.get(`https://63ad51503e46516916562f86.mockapi.io/items?category=${categoryId > 0 ? categoryId : ''}&sortBy=${sort.sort}&order=${sortByOrder}`)
                .then(res => {
                    dispatch(getProducts({
                        categoryId,
                        sort,
                        sortByOrder
                    }))
                })
                .catch(err => {
                    console.log(err)
                })
        }
        isSearch.current = false;

    }, [categoryId, sort, sortByOrder])


    const axiosProduct = async () => {
        const queryString = qs.stringify({
            sort: sort.sort, categoryId, sortByOrder,
        })
        navigate(`?${queryString}`)
            dispatch(getProducts({
                categoryId,
                sort,
                sortByOrder
            }))

    }


    return (
        <SearchContext.Provider value={{searchValue, setSearchValue}}>
            <Header/>
            <main className='page'>
                <Category
                />
                <Catalog
                    products={items}
                    status={status}
                />
            </main>
        </SearchContext.Provider>
    );
}

export default Main;