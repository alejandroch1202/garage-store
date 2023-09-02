import React, { useContext, useState, useEffect } from 'react'
import Error from '@components/Error/Error'
import ProductItem from '@components/ProductItem/ProductItem'
import useGetProducts from '@hooks/useGetProducts'
import AppContext from '@context/AppContext'
import styles from './ProductList.module.scss'

const API = 'http://192.168.0.102:3005/api/v1/products?limit=50&offset=0'

const ProductList = () => {
  const { state } = useContext(AppContext)
  const [products, setProducts] = useState([])
  const fetchProducts = useGetProducts(API)

  useEffect(() => {
    setProducts(fetchProducts)

    if (state.filter) {
      const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(state.filter.toLowerCase()))
      setProducts(filteredProducts)
    }
  }, [fetchProducts, state.filter])

  return (
    <>
      { products.length > 0
        ? <section className={styles['main-container']}>
          <div className={styles.ProductList}>
            {products.map((product) => (
              <ProductItem product={product} key={product.id} />
            ))}
          </div>
        </section>
        : <Error message={'No products found'} />}
    </>
  )
}

export default ProductList
