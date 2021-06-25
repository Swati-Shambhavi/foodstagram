import React from 'react';
import style from '../scss/Header.module.scss';

const Header = () => {
  return (
    <>
      <nav>
        <ul className={style.nav}>
          <li className={`${style.nav__item} ${style.nav__itemLogo}`}>
            Foodstagram
          </li>
          <li className={style.nav__item}>About us</li>

          <li className={style.nav__item}>
            Menu
            {/* <svg className={style['nav__item-menuIcon']}>
              <use xlinkHref="../images/sprite.svg#icon-cart"></use>
            </svg> */}
          </li>
          <li className={`${style.nav__item} ${style.nav__itemContact}`}>
            Contact
          </li>

          <li className={style.nav__item}>
            <span>Cart</span>
            {/* <span>3</span> */}
          </li>
          <li className={`${style.nav__item} ${style.nav__itemBtn}`}>
            <a href="#">Login</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
