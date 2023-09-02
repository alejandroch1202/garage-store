import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Layout from '@containers/Layout/Layout'
import OrderItem from '@components/OrderItem/OrderItem'
import arrow from '@icons/arrow-dark.svg'
import styles from './index.module.scss'

const Order = () => {
  const router = useRouter()
  const [order, setOrder] = useState({})

  useEffect(() => {
    const orders = JSON.parse(localStorage.getItem('GS_ORDERS'))
    const findOrder = orders.find((item) => item.id === router.query.id)
    setOrder(findOrder)
  }, [])

  return (
    <>
      <Head>
        <title>Order</title>
      </Head>
      <Layout>
        { order && <div className={styles.Checkout}>
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
                  <span>{order.date}</span>
                  <span>{order?.products?.length} articles</span>
                </p>
                <p>$ {order.total} </p>
              </div>
            </div>

            {order?.products?.map((product) => (
              <OrderItem product={product} key={`orderItem-${product.id}`} />
            ))}
          </div>
        </div> }
      </Layout>
    </>
  )
}

export default Order
