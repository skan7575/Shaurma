import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import styles from './Cart.module.scss'

function Cart(props) {
    const navigate = useNavigate();
    const goBack = () => navigate(-1)
    return (
        <main className={styles.cart}>
            <form action="">
                <div className={styles.cart__container}>
                    <h1 className={styles.cart__title}>Корзина</h1>
                    <button className={styles.cart__clear} type='button'>Очистить корзину</button>
                </div>

                <ul></ul>
                <div>
                    <span>Количество позиций:</span>
                    <span>Сумма заказа:</span>
                </div>
                <div>
                    <button className={styles.cart__back} onClick={goBack} type='button'>Вернуться назад</button>
                    <button>Оплатить</button>
                </div>
            </form>
        </main>
    );
}

export default Cart;