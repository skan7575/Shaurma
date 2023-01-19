import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import styles from './Cart.module.scss'
import {useDispatch, useSelector} from "react-redux";
import CartItem from "../Cart-Item/cartItem";

import {clearCart} from "../../Redux/slices/cartSlice";


function Cart(props) {
    const {items, totalPrice} = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const goBack = () => navigate(-1)

    return (
        <main className={styles.cart}>
            <form className={styles.cart__form} action="">
                <div className={styles.cart__container}>
                    <h1 className={styles.cart__title}>Корзина</h1>
                    {items.length > 0 ?
                        <button
                            className={styles.cart__clear}
                            onClick={() => {
                                dispatch(clearCart())
                            }}
                            type='button'
                            disabled={items.length === 0}
                        >
                            Очистить корзину
                        </button>
                        : ''}
                </div>
                {items.length > 0 ?
                    <div className={styles.container}>
                        <ul className={styles.cart__list}>
                            {
                                items.map(item => {
                                    return <CartItem
                                        type={item.optionOne}
                                        size={item.sizes}
                                        count={item.count}
                                        img={item.image}
                                        title={item.name}
                                        price={item.price}
                                        id={item.id}
                                    />
                                })}
                        </ul>
                        <div  className={styles.cart__footer}>
                            <span className={styles.cart__totalPrice}>Всего позиций: {items.length}</span>
                            <span className={styles.cart__totalPrice}>Сумма заказа: {totalPrice}</span>
                        </div>
                    </div>
                    :
                    <h2 className={styles.cart__low}>Корзина пустая иди-ка добавь что-то!!!</h2>
                }

                <div>
                    <button className={styles.cart__back} onClick={goBack} type='button'>Вернуться назад</button>
                    {items.length > 0 ? <button>Оплатить</button> : ''}

                </div>
            </form>
        </main>
    );
}

export default Cart;