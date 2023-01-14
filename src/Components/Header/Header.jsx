import React from 'react';
import Logo from '../../Images/logo.svg'
import './Header.scss'
import CartButton from "../Cart-button/CartButton";
import Search from "../Search/Search";


function Header() {

    return (
        <header className='header'>
            <div className='header__container'>
                <img className='header__logo' src={Logo} alt=""/>
                <div className='header__about'>
                    <p className='header__about-title'>Шаурма</p>
                    <p className='header__about-subtitle'>самая вкусная шаурма во вселенной</p>
                </div>
            </div>
            <Search />
            <CartButton/>
        </header>
    );
}

export default Header;