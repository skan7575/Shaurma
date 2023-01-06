import React from 'react';
import styles from './CartButton.module.scss'
import {Link, useNavigate} from "react-router-dom";


function CartButton(props) {

    return (
        <Link className={styles.root} to='/cart'>

            <span className='cart-button__price'>520</span>
            <span className={styles.root__counter}>2ед.</span>

        </Link>

)
    ;
}

export default CartButton;