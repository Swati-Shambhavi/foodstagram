import React from 'react';
import style from '../../scss/Footer.module.scss';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style['footer__head']}>
        <div className={style['footer__head--1']}>
          <h3>Cities Covered</h3>
          <div className={style['footer__head--cities']}>
            <span>Patna</span>
            <span>Nawada</span>
            <span>Bodh Gaya</span>
            <span>Kolkata</span>
          </div>
        </div>
        <div className={style['footer__head--2']}>
          <span>About</span>
          <span>Contact us</span>
          <span>Teams and conditions</span>
          <span>Services</span>
        </div>
        <div className={style['footer__head--3']}>
          <span>About</span>
          <span>Contact us</span>
          <span>Teams </span>
          <span>Services</span>
        </div>
        <div className={style['footer__head--4']}>
          <span>About</span>
          <span>Contact us</span>
          <span>Teams</span>
          <span>Services</span>
        </div>
        {/* <div className={style['footer__head--1']}></div> */}
      </div>
      <div className={style[`footer__foot`]}>
        <div className={style['footer__foot--1']}>
          <span>
            {' '}
            <FaFacebook size="3rem" />
          </span>
          <span>
            <FaWhatsapp size="3rem" />
          </span>
          <span>
            <FaInstagram size="3rem" />
          </span>
          <span>
            <FaTwitter size="3rem" />
          </span>
        </div>
        <div className={style['footer__foot--2']}>
          &copy;Copyright. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
