import React, { useContext } from 'react';
import style from '../scss/CartItem.module.scss';
import CartContext from '../store/cart-context';

const CartItem = ({ cartitem }) => {
  const cartCtx = useContext(CartContext);
  const incrementByOneHandler = () => {
    cartCtx.addItems({
      id: cartitem.id,
      name: cartitem.name,
      amount: 1,
      price: cartitem.price,
    });
  };

  const decrementByOneHandler = () => {
    cartCtx.removeItems({ id: cartitem.id });
  };
  return (
    <div>
      <li key={cartitem.id} className={style.cartitem}>
        <div className={style['cartitem__left']}>
          <h2 className={style['cartitem__name']}>{cartitem.name}</h2>
          <div className={style['cartitem__price']}>
            {cartitem.price} x {cartitem.amount}
          </div>
        </div>
        <div className={style['cartitem__action']}>
          <span>
            <button
              className={style['cartitem__action-sub']}
              onClick={decrementByOneHandler}
            >
              -
            </button>
          </span>
          <span className={style['cartitem__action-amount']}>
            {' '}
            {cartitem.amount}
          </span>
          <span>
            <button
              className={style['cartitem__action-add']}
              onClick={incrementByOneHandler}
            >
              +
            </button>
          </span>
        </div>
      </li>
    </div>
  );
};

export default CartItem;
