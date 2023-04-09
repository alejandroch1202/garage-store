import React from 'react';
import ProductItem from '@components/ProductItem/ProductItem';
import useGetProducts from '@hooks/useGetProducts';
import styles from './ProductList.module.scss';

// const API = 'https://express-api-alejandroch1202.vercel.app/api/v1/products';
const API = 'https://fakestoreapi.com/products?limit=20&offset=0';

const ProductList = () => {
  const products = useGetProducts(API);

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
