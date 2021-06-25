import React from 'react';
import style from '../scss/MealOrderForm.module.scss';

const MealOrderForm = (props) => {
  return (
    <div className={style.mealOrderForm}>
      <p className={style.mealOrderForm__amt}>
        Amount:
        <span className={style.mealOrderForm__amtVal}>{props.amount}</span>
      </p>

      <p>
        <button className={style.mealOrderForm__add} onClick={props.onAdd}>
          Add
        </button>
      </p>
    </div>
  );
};

export default MealOrderForm;
