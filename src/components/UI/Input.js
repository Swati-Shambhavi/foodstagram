import React from 'react';
import style from '../../scss/MealOrderForm.module.scss';

const Input = React.forwardRef((props, ref) => {
  return (
    <div>
      <label htmlFor={props.input.id} className={style.mealOrderForm__amt}>
        {props.label}
      </label>
      <input {...props.input} ref={ref} className={style.input} />
    </div>
  );
});

export default Input;
