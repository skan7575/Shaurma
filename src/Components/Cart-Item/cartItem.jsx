import React from 'react';
import styles from "./cartItem.module.scss"
import {useDispatch} from "react-redux";
import {addItem, clearItem, removeItem} from "../../Redux/slices/cartSlice";

function CartItem({price, title, img, count, size, type, id}) {
    const dispatch = useDispatch()
    console.log(type)

    const onClickAdd = (e) => {
        e.preventDefault()
        dispatch(addItem({id}))
    }
    const onClickMinus = (e) => {
        e.preventDefault()
        dispatch(removeItem({id}))
    }
    const onClickRemove = (e) => {
        e.preventDefault()
        dispatch(clearItem({id}))
    }

    return (
        <li className={styles.item}>
            <img className={styles.item__image} src={img} alt=""/>
            <div>
                <h1 className={styles.item__title}>{title}</h1>
                {size ? <p>{size}</p> : ''}
                {type ? <p>{type}</p> : ''}
            </div>

            <span className={styles.item__price}>{price} Р.</span>
            <span>{count}</span>
            <button onClick={onClickMinus}>Минус</button>
            <button onClick={onClickAdd}>Плюс</button>
            <button onClick={onClickRemove}>удалить</button>

        </li>
    );
}

export default CartItem;