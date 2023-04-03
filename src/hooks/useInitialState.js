import { useState } from 'react';

const initialState = {
  cart: [],
  orderIsOpen: false,
  shoppingIsOpen: false,
  menuIsOpen: false,
  mobileIsOpen: false,
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.includes(payload) ? state.cart : [...state.cart, payload],
    });
  };

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((items) => items.id !== payload.id),
    });
  };

  const closeAll = () => {
    setState({
      ...state,
      shoppingIsOpen: false,
      orderIsOpen: false,
      menuIsOpen: false,
      mobileIsOpen: false,
    });
  };

  const toggleOrder = () => {
    setState({
      ...state,
      orderIsOpen: !state.orderIsOpen,
    });
  };

  const toggleMenu = () => {
    setState({
      ...state,
      menuIsOpen: !state.menuIsOpen,
    });
  };

  const toggleMobile = () => {
    setState({
      ...state,
      mobileIsOpen: !state.mobileIsOpen,
    });
  };

  const toggleShopping = () => {
    setState({
      ...state,
      shoppingIsOpen: !state.shoppingIsOpen,
    });
  };

  return {
    state,
    addToCart,
    removeFromCart,
    closeAll,
    toggleOrder,
    toggleMenu,
    toggleMobile,
    toggleShopping,
  };
};

export default useInitialState;
