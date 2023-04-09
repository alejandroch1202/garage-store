import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from '@context/AppContext';
import close from '@icons/close.svg';
import styles from './CartItem.module.scss';

const CartItem = ({ product }) => {
  const { removeFromCart } = useContext(AppContext);

  const handleRemove = (product) => {
    removeFromCart(product);
  };

  return (
    <div className={styles.CartItem}>
      <figure>
        {/* <img src={product?.images[0]} alt={product?.title} /> */}
        <img src={product?.image} alt={product?.title} />
      </figure>
      <p>{product?.title}</p>
      <p>$ {product?.price.toFixed(2)}</p>
      <Image className={`${styles.pointer} ${styles['more-clickable-area']}`} src={close} alt="close" onClick={() => handleRemove(product)} />
    </div>
  );
};

export default CartItem;
