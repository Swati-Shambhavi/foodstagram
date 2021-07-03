import React, { useContext } from 'react';
import style from '../scss/AvailableMeals.module.scss';
import Card from './UI/Card';
import MealOrderForm from './MealOrderForm';
import CartContext from '../store/cart-context';

const Meal = ({ name, des, price, pic, id }) => {
  const cartCtx = useContext(CartContext);
  const addAmountHandler = (amt) => {
    cartCtx.addItems({
      id: id,
      name: name,
      amount: amt,
      price: price,
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
      <div className="meals__orderForm">
        <MealOrderForm id={id} onAddToCart={addAmountHandler} />
      </div>
    </Card>
  );
};

export default Meal;
