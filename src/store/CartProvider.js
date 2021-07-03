import React, { useReducer } from 'react';
import CartContext from './cart-context';

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const updatedTotalAmount =
        state.totalAmount + action.payload.price * action.payload.amount;

      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      const existingCartItem = state.items[existingCartItemIndex];

      let updatedItems;
      if (existingCartItem) {
        let updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.payload.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.payload);
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };

    case 'REMOVE_FROM_CART':
      const availableItemToBeRemovedIndex = state.items.findIndex(
        (item) => item.id == action.payload.id
      );
      const availableItemToBeRemoved =
        state.items[availableItemToBeRemovedIndex];
      const updatedTotalAmountR =
        state.totalAmount - availableItemToBeRemoved.price;
      let updatedItemsAfterRemove;

      if (availableItemToBeRemoved.amount == 1) {
        updatedItemsAfterRemove = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        let updatedItemAfterRemove = {
          ...availableItemToBeRemoved,
          amount: availableItemToBeRemoved.amount - 1,
        };
        updatedItemsAfterRemove = [...state.items];
        updatedItemsAfterRemove[availableItemToBeRemovedIndex] =
          updatedItemAfterRemove;
      }
      return {
        items: updatedItemsAfterRemove,
        totalAmount: updatedTotalAmountR,
      };
    case 'CLEAR_CART':
      return { items: [], totalAmount: 0 };
  }
};

const initialCartState = {
  items: [],
  totalAmount: 0,
};

const CartProvider = (props) => {
  const addItemToCartHandler = (item) => {
    dispatchCart({ type: 'ADD_TO_CART', payload: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCart({ type: 'REMOVE_FROM_CART', payload: id });
  };
  const clearCartItemsAfterSubmit = () => {
    dispatchCart({ type: 'CLEAR_CART' });
  };
  const [cartState, dispatchCart] = useReducer(cartReducer, initialCartState);

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItems: addItemToCartHandler,
    removeItems: removeItemFromCartHandler,
    clearCartItems: clearCartItemsAfterSubmit,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
