import React from 'react';
import styles from './CartButton.module.scss'
import {Link, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";


function CartButton(props) {
    const {items, totalPrice} = useSelector(state => state.cart)
    return (
        <Link className={styles.root} to='/cart'>

            <span className='cart-button__price'>{totalPrice} Р.</span>
            <span className={styles.root__counter}>{items.length + items.map(obj => {
                return obj.count
            })}</span>

        </Link>

)
    ;
}

export default CartButton;