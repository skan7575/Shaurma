import React, {useContext} from 'react';
import Product from "../Product/Product";
import './Catalog.scss'
import SkeletonProduct from "../Skeleton/Skeleton";
import SearchContext from "../../Context/SearchValue";
function Catalog({products, isLoading}) {

    const {searchValue} = useContext(SearchContext)

    const productArr = products.filter(obj => {
        return !!obj.name.toLowerCase().includes(searchValue.toLowerCase());
    }).map(obj => {
        return <Product
            key={obj.id}
            optionOne={obj.types}
            price={obj.price}
            name={obj.name}
            image={obj.imageUrl}
            size={obj.sizes}
        />
    })
    const skeleton = [...new Array(6)].map(() => {
        return <SkeletonProduct/>
    })

    return (
        <>
            <ul className='catalog'>
                {isLoading
                    ? skeleton
                    : productArr
                }
            </ul>
        </>
    );
}

export default Catalog;