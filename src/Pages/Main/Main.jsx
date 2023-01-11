import React, {useState, useEffect} from 'react';
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

function Main(props) {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const {categoryId, sort, sortByOrder} = useSelector(state => state.filter);
    const [searchValue, setSearchValue] = useState('');
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
     if(window.location.search) {
         const params = qs.parse(window.location.search.substring(1))
         const sort = sortName.find(obj => obj.sort === params.sort)
         dispatch(setFilters({
             ...params,
             sort,
         }))
         console.log(sort)
     }
    }, [])

    useEffect(() => {
        setIsLoading(true)
        const queryString = qs.stringify({
            sort: sort.sort, categoryId, sortByOrder,
        })
        navigate(`?${queryString}`)
        axios.get(`https://63ad51503e46516916562f86.mockapi.io/items?category=${categoryId > 0 ? categoryId : ''}&sortBy=${sort.sort}&order=${sortByOrder}`)
            .then(res => {
                setProducts(res.data)
                setIsLoading(false);
            })
    }, [categoryId, sort, sortByOrder])


    return (
        <SearchContext.Provider value={{searchValue, setSearchValue}}>
            <Header/>
            <main className='page'>
                <Category
                />
                <Catalog
                    products={products}
                    isLoading={isLoading}
                />
            </main>
        </SearchContext.Provider>
    );
}

export default Main;