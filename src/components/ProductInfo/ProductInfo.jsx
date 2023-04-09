import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import addToCart from '@icons/icon_shopping_cart_white.svg';
import closeImg from '@icons/close.svg';
import styles from './ProductInfo.module.scss';

const ProductInfo = () => {
  const { state, toggleInfo } = useContext(AppContext);

  return (
    <>
      <div className={styles.ProductInfo}>
        <div className={styles['close-img']}>
          <img role="presentation" src={closeImg.src} alt="close" onClick={toggleInfo} onKeyDown={toggleInfo} />
        </div>
        <img className={styles['product-image']} src={state.product?.image} alt="bike" />
        <div>
          <p>$ {state.product?.price.toFixed(2)}</p>
          <p>{state.product?.title}</p>
          <p className={styles.description}>{state.product?.description}</p>
          <button className={styles['add-to-cart-button']}>
            <img src={addToCart.src} alt="add to cart" />
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
