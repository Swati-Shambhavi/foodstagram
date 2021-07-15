import React, { useContext } from 'react';
import style from '../scss/Header.module.scss';
import CartContext from '../store/cart-context';
import { Link, NavLink } from 'react-router-dom';
import logo from '../images/logo.png';
import { FaShoppingCart, FaSignInAlt } from 'react-icons/fa';

const Header = (props) => {
  const cartCtx = useContext(CartContext);
  const isLoggedIn = cartCtx.isLoggedIn;
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const logoutHandler = () => {
    cartCtx.logout();
  };
  return (
    <div className={style.headFixed}>
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
            <Link to="/about">About</Link>
          </li>

          <li className={`${style.nav__item} ${style.nav__itemContact}`}>
            <Link to="/contact">Contact</Link>
          </li>
          {/* <div className={style.action}> */}
          <li
            className={`${style.nav__item} ${style.nav__itemBtn} ${style.nav__itemBtnCart}`}
          >
            <a href="#" onClick={props.onShow}>
              <span className={` ${style['nav__itemBtn--span']} `}>
                <FaShoppingCart size="2.5rem" />
              </span>{' '}
              <span className={`${style['nav__itemBtn--span']}`}>
                {numberOfCartItems}
              </span>
              <span className={` ${style['nav__itemBtn--span']} `}></span>{' '}
            </a>
          </li>
          <li className={`${style.nav__item} ${style.nav__itemBtn}`}>
            <a href="#">
              {/* <Link to="/login">{!isLoggedIn && 'Login'}</Link> */}
              {/* <span onClick={logoutHandler}>{isLoggedIn && 'Logout'}</span> */}

              <span onClick={logoutHandler}>
                <FaSignInAlt size="2.5rem" />
              </span>
            </a>
          </li>
          {/* </div> */}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
