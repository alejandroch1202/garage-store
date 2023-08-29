import React, { useContext } from 'react'
import Head from 'next/head'
import Layout from '@containers/Layout/Layout'
import OrderItem from '@components/OrderItem/OrderItem'
import styles from './index.module.scss'
import AppContext from '@context/AppContext'

const Checkout = () => {
  const { state } = useContext(AppContext)
  const productsLength = state.cart.length

  const sumTotal = () => {
    const reducer = (accumalator, currentValue) => accumalator + currentValue.price
    const sum = state.cart.reduce(reducer, 0).toFixed(2)
    return sum
  }

  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <Layout>
        <div className={styles.Checkout}>
          <div className={styles['Checkout-container']}>
            <h1 className={styles.title}>My order</h1>
            <div className={styles['Checkout-content']}>
              <div className={styles.order}>
                <p>
                  <span>03.25.21</span>
                  <span>{productsLength} articles</span>
                </p>
                <p>$ {sumTotal()} </p>
              </div>
            </div>

            {state.cart.map((product) => (
              <OrderItem product={product} key={`orderItem-${product.id}`} />
            ))}
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Checkout
