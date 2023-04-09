import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import addToCartImage from '@icons/bt_add_to_cart.svg';
import addedToCartImage from '@icons/bt_added_to_cart.svg';
import styles from './ProductItem.module.scss';

const ProductItem = ({ product }) => {
  const { state, addToCart, setProduct } = useContext(AppContext);

  const handleClick = (item) => {
    addToCart(item);
  };

  const handleInfo = (item) => {
    setProduct(item);
  };

  return (
    <div className={styles.ProductItem}>
      <img role="presentation" src={product.image} alt={product.title} onClick={() => handleInfo(product)} onKeyDown={() => handleInfo(product)} />
      {/* <img src={product.images[0]} alt={product.title} /> */}
      <div className={styles['product-info']}>
        <div>
          <p>$ {product.price.toFixed(2)}</p>
          <p>{product.title}</p>
        </div>
        <figure role="presentation" className={styles['more-clickable-area']} onClick={() => handleClick(product)} onKeyDown={() => handleClick(product)}>
          {state.cart.includes(product) ? (
            <img className={`${styles.disabled} ${styles['add-to-cart-btn']}`} src={addedToCartImage.src} alt="added to cart" />
          ) : (
            <img className={`${styles['add-to-cart-btn']} ${styles.pointer}`} src={addToCartImage.src} alt="add to cart" />
          )}
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
