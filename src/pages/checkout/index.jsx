import React, { useContext, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '@containers/Layout/Layout'
import OrderItem from '@components/OrderItem/OrderItem'
import arrow from '@icons/arrow-dark.svg'
import styles from './index.module.scss'
import AppContext from '@context/AppContext'

const Checkout = () => {
  const { state } = useContext(AppContext)
  const date = `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`
  const order = { id: crypto.randomUUID(), date, products: [...state.lastOrder] }
  const productsLength = order.products.length

  useEffect(() => {
    const orders = JSON.parse(localStorage.getItem('GS_ORDERS'))
    if (!orders.some((item) => item.id === order.id)) {
      orders.push(order)
      localStorage.setItem('GS_ORDERS', JSON.stringify(orders))
    }
  }, [])

  const sumTotal = () => {
    const reducer = (accumalator, currentValue) => accumalator + currentValue.price
    const sum = order.products.reduce(reducer, 0).toFixed(2)
    return sum
  }

  order.total = sumTotal()

  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <Layout>
        <div className={styles.Checkout}>
          <div className={styles['Checkout-container']}>
            <div className={styles['title-container']}>
              <Link href='/orders'>
                <img className={styles.arrow} src={arrow.src} alt='back' />
              </Link>
              <h1 className={styles.title}>My order</h1>
            </div>
            <div className={styles['Checkout-content']}>
              <div className={styles.order}>
                <p>
                  <span>{date}</span>
                  <span>{productsLength} articles</span>
                </p>
                <p>$ {order.total} </p>
              </div>
            </div>

            {order.products.map((product) => (
              <OrderItem product={product} key={`orderItem-${product.id}`} />
            ))}
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Checkout
