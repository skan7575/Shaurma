import React, {useEffect, useState} from 'react';
import {addItem, removeItem} from "../../Redux/slices/cartSlice";
import './Prodcut.scss'
import {useDispatch, useSelector} from "react-redux";

function Product({id, image, optionOne, size, name, price}) {
    const dispatch = useDispatch();
    const cartItem = useSelector(state => state.cart.items.find(obj => obj.id === id))
    const addedCount = cartItem ? cartItem.count : 0

    // выбор дефолта OptionOne при загрузке страницы
    useEffect(() => {
        setActiveType(optionOne[0])
        setActiveSize(size[0])
    }, [])


    const [activeType, setActiveType] = useState(0)
    const [activeSize, setActiveSize] = useState('')


    function handleSubmitForm(e) {
        e.preventDefault()

    }
    const onClickAdd = () => {
        const items = {
            optionOne: typesName[activeType],
            name,
            id,
            image,
            sizes: activeSize,
            price,
        };
        dispatch(addItem(items))
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
                    <button onClick={() => {
                        dispatch(removeItem({id}))
                    }} className={'1' <= 0 ? 'counter__delete' : 'counter__delete active'}>
                    </button>
                    <button onClick={onClickAdd} className='product__add-cart-button'>
                        Добавить
                        {addedCount <= 0 ? '' :
                            <span className='counter__value'>{addedCount}</span>}
                    </button>
                </div>

            </div>
        </form>

    </div>);
}

export default Product;