import React, {useEffect, useState} from 'react';

import './Prodcut.scss'

function Product({image, optionOne, size, name, price}) {

    // выбор дефолта OptionOne при загрузке страницы
    useEffect(() => {
        setActiveType(optionOne[0])
        setActiveSize(size[0])
    }, [])


    const [activeType, setActiveType] = useState(0)
    const [activeSize, setActiveSize] = useState('')
    const [count, setCount] = useState(0)

    function handleSubmitForm(e) {
        e.preventDefault()

    }

    const handleCounterProduct = () => {
        setCount(count + 1)
    }
    const typesName = ['Синий', 'Желтый', 'панировка', 'без панировки']

    return (<div className='product'>
        <img className='product__image' src={image} alt=""/>
        <h3 className='product__title'>{name}</h3>
        <form onSubmit={handleSubmitForm}>
            {optionOne.length < 1 ? ''
                : <ul className='product__list'>
                    {optionOne.map(item => {
                        return <>
                            <li key={item} onClick={() => {
                                setActiveType(item)
                            }}
                                className={activeType === item ? 'product__list-item product__list-item-active' : 'product__list-item'}>
                                {typesName[item]}
                            </li>
                        </>
                    })}

                </ul>}
            <ul className='product__list'>
                {size.map(item => {
                    return <li key={item} onClick={() => {
                        setActiveSize(item)
                    }}
                               className={activeSize === item ? 'product__list-item product__list-item-active' : 'product__list-item'}>{item}</li>
                })}
            </ul>
            <div className='product__container'>
                <span className='product__price'>от {price} ₽</span>
                <div className='product__add-container'>
                    <button className={count <= 0 ? 'counter__delete' : 'counter__delete active'}
                            onClick={() => {
                                if (count <= 0) {
                                    return count
                                } else {
                                    setCount(count - 1)
                                }

                            }}> -
                    </button>
                    <button onClick={handleCounterProduct} className='product__add-cart-button'>
                        Добавить
                        <span className='counter__value'>{count}</span>
                    </button>
                </div>

            </div>
        </form>

    </div>);
}

export default Product;