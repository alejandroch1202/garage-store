import React from 'react';
import styles from './OrderItem.module.scss';

const OrderItem = ({ product }) => {
  return (
    <div className={styles.OrderItem}>
      <figure>
        {/* <img src={product?.images[0]} alt={product?.title} /> */}
        <img src={product?.image} alt={product?.title} />
      </figure>
      <p>{product?.title}</p>
      <p>$ {product?.price.toFixed(2)}</p>
    </div>
  );
};

export default OrderItem;
