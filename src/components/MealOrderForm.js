import React, { useContext, useRef, useState } from 'react';
import style from '../scss/MealOrderForm.module.scss';
import Input from './UI/Input';
import CartContext from '../store/cart-context';
import { FaCartPlus } from 'react-icons/fa';

const MealOrderForm = (props) => {
  const cartCtx = useContext(CartContext);
  const amountInpurRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    const inputAmount = parseInt(amountInpurRef.current.value);

    props.onAddToCart(inputAmount);
  };
  return (
    <React.Fragment>
      <form action="#" className={style.mealOrderForm} onSubmit={submitHandler}>
        <Input
          ref={amountInpurRef}
          label="Amount"
          input={{
            id: `amount_${props.id}`,
            type: 'number',
            min: '1',
            max: '10',
            step: '1',
            defaultValue: '1',
          }}
        />
        <button className={style.mealOrderForm__add} type="submit">
          <span>
            <FaCartPlus />
          </span>
          <span>Add</span>
        </button>
      </form>
    </React.Fragment>
  );
};

export default MealOrderForm;
