import React from 'react';
import addToCart from '@icons/icon_shopping_cart_white.svg';
import closeImg from '@icons/close.svg';
import styles from './ProductInfo.module.scss';

const ProductInfo = () => {
  return (
    <>
      <div className={styles.ProductInfo}>
        <div className={styles['close-img']}>
          <img src={closeImg.src} alt="close" />
        </div>
        <img className={styles['product-image']} src="https://cdn.lorem.space/images/watch/.cache/640x480/david-svihovec-HM-Y497t5CU-unsplash.jpg" alt="bike" />
        <div>
          <p>$ 70,00</p>
          <p>Smart Watch</p>
          <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
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
