import React from 'react';
import style from '../scss/Hero.module.scss';

const Hero = () => {
  return (
    <React.Fragment>
      <div className={`${style.hero}`}>
        <div className={style.hero__text}>
          <div className={style['hero__text-primary']}>
            <span>
              <h1 className="hero__text-one">Search,</h1>
            </span>
            <span>
              <h1 className="hero__text-one">Order,</h1>
            </span>
            <span>
              <h1 className="hero__text-one">Post!</h1>
            </span>
          </div>
          <div className={style['hero__text-secondary']}>
            <h2 className={style.hero__textMain}>
              Delicious food, delivered to you.
            </h2>
            <p className={style['hero__text-secondary']}>
              All our meals are cooked with high quality ingredients and with
              love.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Hero;
