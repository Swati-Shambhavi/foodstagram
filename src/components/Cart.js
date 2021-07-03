import React, { useContext, useState } from 'react';
import style from '../scss/Cart.module.scss';
import Modal from './UI/Modal';
import CartContext from '../store/cart-context';
import CartItem from './CartItem.js';
import Checkout from './Checkout';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [showCheckout, setShowCheckout] = useState(false);
  const hasItems = cartCtx.items.length > 0;
  const [submitInfo, setSubmitInfo] = useState({
    isSubmitting: false,
    hasSubmitted: false,
  });

  const cartItems = (
    <ul>
      {cartCtx.items.map((cartitem) => (
        <>
          <CartItem key={cartitem.id} cartitem={cartitem} />
        </>
      ))}
    </ul>
  );
  const showCheckoutHandler = (e) => {
    setShowCheckout(true);
  };
  const onConfirmOrderHandler = (data) => {
    setSubmitInfo({ hasSubmitted: false, isSubmitting: true });
    fetch('https://practice-ca38b-default-rtdb.firebaseio.com/UserData.json', {
      method: 'POST',
      body: JSON.stringify({ userData: data, mealData: cartCtx }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Some error');
        }
        return res.json();
      })
      .then((data) => {
        console.log('data posted');
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
    setSubmitInfo({ isSubmitting: false, hasSubmitted: true });
    cartCtx.clearCartItems();
  };
  // const beforeSubmitJsx = (
  //   <>
  //     {' '}
  //     {cartItems}
  //     <div className={style.cart}>
  //       <div className={style['cart__total']}>
  //         <span className={style['cart__total-text']}>Total amount: </span>
  //         <span className={style['cart__total-value']}>
  //           Rs.{cartCtx.totalAmount.toFixed(2)}
  //         </span>
  //       </div>
  //       {showCheckout && (
  //         <Checkout onConfirm={onConfirmOrderHandler} onCancel={props.onHide} />
  //       )}
  //       {!showCheckout && (
  //         <div className={style['cart__action']}>
  //           <button
  //             className={style['cart__action-close']}
  //             onClick={props.onHide}
  //           >
  //             close
  //           </button>
  //           {hasItems && (
  //             <button
  //               className={style['cart__action-order']}
  //               onClick={showCheckoutHandler}
  //             >
  //               order
  //             </button>
  //           )}
  //         </div>
  //       )}
  //     </div>
  //   </>
  // );
  return (
    <Modal onClick={props.onHide}>
      {!submitInfo.isSubmitting && !submitInfo.hasSubmitted && (
        <>
          {cartItems}
          <div className={style.cart}>
            <div className={style['cart__total']}>
              <span className={style['cart__total-text']}>Total amount: </span>
              <span className={style['cart__total-value']}>
                Rs.{cartCtx.totalAmount.toFixed(2)}
              </span>
            </div>
            {showCheckout && (
              <Checkout
                onConfirm={onConfirmOrderHandler}
                onCancel={props.onHide}
              />
            )}
            {!showCheckout && (
              <div className={style['cart__action']}>
                <button
                  className={style['cart__action-close']}
                  onClick={props.onHide}
                >
                  close
                </button>
                {hasItems && (
                  <button
                    className={style['cart__action-order']}
                    onClick={showCheckoutHandler}
                  >
                    order
                  </button>
                )}
              </div>
            )}
          </div>
        </>
      )}
      {submitInfo.isSubmitting && <p>Placing you order... Please wait.</p>}
      {submitInfo.hasSubmitted && (
        <>
          <p>Your order has been placed successfully!</p>
          <div className={style['cart__action']}>
            <button
              className={style['cart__action-close']}
              onClick={props.onHide}
            >
              close
            </button>
          </div>
        </>
      )}
    </Modal>
  );
};

export default Cart;
