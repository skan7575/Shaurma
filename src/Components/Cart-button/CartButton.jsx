import React from 'react';
import styles from './CartButton.module.scss'
import {Link, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";


function CartButton(props) {
    const {items, totalPrice} = useSelector(state => state.cart)
    const totalCount = items.reduce((sum, item) => sum + item.count, 0);
    return (
        <Link className={styles.root} to='/cart'>

            <span className='cart-button__price'>{totalPrice} Р.</span>
            <span className={styles.root__counter}>{totalCount}</span>

        </Link>

)
    ;
}

export default CartButton;