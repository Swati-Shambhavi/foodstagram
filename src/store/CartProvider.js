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
        ...state,
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
        ...state,
        items: updatedItemsAfterRemove,
        totalAmount: updatedTotalAmountR,
      };
    case 'CLEAR_CART':
      return { ...state, items: [], totalAmount: 0 };
    case 'LOGIN':
      return { ...state, token: action.payload, isLoggedIn: true };
    case 'LOGOUT':
      return {
        ...state,
        token: null,
        isLoggedIn: false,
      };
  }
};

//by performing the below 2 steps we are checking if the user has logged in before, we are checking the token value in local storage; cz we set the localstorage to token value in loginHandler
const initialToken = localStorage.getItem('token');
const initialIsLoggedIn = !!initialToken;
const initialCartState = {
  items: [],
  totalAmount: 0,
  token: initialToken,
  isLoggedIn: initialIsLoggedIn,
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

  const loginHandler = (token) => {
    dispatchCart({ type: 'LOGIN' });
    localStorage.setItem('token', token);
  };
  const logoutHandler = () => {
    dispatchCart({ type: 'LOGOUT' });
    localStorage.removeItem('token');
  };
  const [cartState, dispatchCart] = useReducer(cartReducer, initialCartState);

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItems: addItemToCartHandler,
    removeItems: removeItemFromCartHandler,
    clearCartItems: clearCartItemsAfterSubmit,
    token: cartState.token,
    isLoggedIn: cartState.isLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
