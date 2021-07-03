import React, { useContext } from 'react';
import style from '../scss/Header.module.scss';
import CartContext from '../store/cart-context';
import { Link, NavLink } from 'react-router-dom';
import logo from '../images/logo.png';
import { FaShoppingCart } from 'react-icons/fa';

const Header = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  return (
    <>
      <nav>
        <ul className={style.nav}>
          <li className={`${style.nav__item} ${style.nav__itemLogo}`}>
            <Link to="/">
              {' '}
              <img src={logo} alt="" />
            </Link>
          </li>

          <li className={style.nav__item}>
            <NavLink activeClassName={style.active} to="/">
              Home
            </NavLink>
          </li>
          <li className={style.nav__item}>
            <Link to="/about">About us</Link>
          </li>

          <li className={`${style.nav__item} ${style.nav__itemContact}`}>
            <Link to="/contact">Contact</Link>
          </li>
          <li
            className={`${style.nav__item} ${style.nav__itemBtn} ${style.nav__itemBtnCart}`}
          >
            <a href="#" onClick={props.onShow}>
              <span className={` ${style['nav__itemBtn--span']} `}>
                <FaShoppingCart />
              </span>
              <span className={` ${style['nav__itemBtn--span']} `}>Cart</span>{' '}
              <span className={`${style['nav__itemBtn--span']}`}>
                {numberOfCartItems}
              </span>
            </a>
          </li>
          <li className={`${style.nav__item} ${style.nav__itemBtn}`}>
            <a href="#">
              <span>Login</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
