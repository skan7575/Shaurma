import React, {useState, useEffect} from 'react';
import Catalog from "../../Components/Catalog/Catalog";
import Header from "../../Components/Header/Header";
import Category from "../../Components/Category/Category";
import SearchContext from "../../Context/SearchValue";


function Main(props) {
    const [searchValue, setSearchValue] = useState('')
    const [categoryId, setCategoryId] = useState(0)
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [sortByOrder, setSortByOrder] = useState('desc')
    const [sortSwitchProperty, setSortSwitchProperty] = useState(false)
    const [sort, setSort] = useState({
        name: 'популярности',
        sort: 'rating'
    })

    useEffect(() => {
        setIsLoading(true)
        fetch(`https://63ad51503e46516916562f86.mockapi.io/items?category=${categoryId > 0 ? categoryId : ''}&sortBy=${sort.sort}&order=${sortByOrder}`)
            .then(res => {
                return res.json()
            })
            .then(res => {
                setProducts(res)
                setIsLoading(false);
            })
    }, [categoryId, sort, sortByOrder])

    const sortSwitch = () => {
        if (sortByOrder === 'desc') {
            setSortByOrder('asc')
            setSortSwitchProperty(true)
        } else {
            setSortByOrder('desc')
            setSortSwitchProperty(false)
        }
    }

    return (
        <SearchContext.Provider value={{searchValue, setSearchValue}}>
            <Header />
            <main className='page'>
                <Category
                    sortSwitchProperty={sortSwitchProperty}
                    sortByOrder={sortSwitch}
                    onChangeSort={(i) => setSort(i)}
                    sort={sort}
                    value={categoryId}
                    onClickCategory={(index) => {
                        setCategoryId(index)
                    }}
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