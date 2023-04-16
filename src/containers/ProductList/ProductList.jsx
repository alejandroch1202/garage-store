import React from 'react';
import Error from '@components/Error/Error';
import ProductItem from '@components/ProductItem/ProductItem';
import useGetProducts from '@hooks/useGetProducts';
import styles from './ProductList.module.scss';

// const API = 'https://fakestoreapi.com/products?limit=20&offset=0';
const API = 'http://localhost:3005/api/v1/products?limit=30&offset=0';

const ProductList = () => {
  const products = useGetProducts(API);

  if (products.length === 0) {
    return <Error />;
  }

  return (
    <section className={styles['main-container']}>
      <div className={styles.ProductList}>
        {products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
