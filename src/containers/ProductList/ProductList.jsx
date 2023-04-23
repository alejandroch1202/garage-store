import React, { useContext } from 'react';
import Error from '@components/Error/Error';
import ProductItem from '@components/ProductItem/ProductItem';
import useGetProducts from '@hooks/useGetProducts';
import AppContext from '@context/AppContext';
import styles from './ProductList.module.scss';

const API = 'http://192.168.0.101:3005/api/v1/products?limit=50&offset=0';

const ProductList = () => {
  const { state } = useContext(AppContext);
  let products = useGetProducts(API);

  // TESTING
  if (state.filter) {
    products = products.filter((product) => product.name.toLowerCase().includes(state.filter));
  }

  if (products?.length === 0) {
    return <Error />;
  }

  return (
    <section className={styles['main-container']}>
      <div className={styles.ProductList}>
        {products?.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
