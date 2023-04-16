import React from 'react';
import styles from './OrderItem.module.scss';

const OrderItem = ({ product }) => {
  return (
    <div className={styles.OrderItem}>
      <figure>
        <img src={product?.image} alt={product?.name} />
      </figure>
      <p>{product?.name}</p>
      <p>$ {product?.price.toFixed(2)}</p>
    </div>
  );
};

export default OrderItem;
