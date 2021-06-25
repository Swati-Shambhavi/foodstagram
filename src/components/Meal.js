import React from 'react';
import style from '../scss/AvailableMeals.module.scss';
import Card from './UI/Card';

const Meal = ({ name, des, price, pic }) => {
  return (
    <Card>
      <div className={style.meals__info}>
        <h1>{name}</h1>
        <img src={pic} alt="photo of meal" />
        <p className={style['meals__info-des']}>{des}</p>
        <p className={style['meals__info-price']}>Rs. {price}</p>
      </div>
    </Card>
  );
};

export default Meal;
