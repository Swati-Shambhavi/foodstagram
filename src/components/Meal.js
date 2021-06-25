import React, { useState } from 'react';
import style from '../scss/AvailableMeals.module.scss';
import Card from './UI/Card';
import MealOrderForm from './MealOrderForm';
import BorderBottom from './BorderBottom';

const Meal = ({ name, des, price, pic }) => {
  const [amount, setAmount] = useState(0);
  const onAddHandler = () => {
    setAmount((prevAmount) => {
      return prevAmount + 1;
    });
  };
  return (
    <Card>
      <div className={style.meals__info}>
        <h1>{name}</h1>
        <img src={pic} alt="photo of meal" />
        <p className={style['meals__info-des']}>{des}</p>
        <p className={style['meals__info-price']}>Rs. {price.toFixed(2)}</p>
      </div>
      <BorderBottom />
      <div className="meals__orderForm">
        <MealOrderForm amount={amount} onAdd={onAddHandler} />
      </div>
    </Card>
  );
};

export default Meal;
