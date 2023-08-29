import React from 'react'
import OrderData from '@components/OrderData/OrderData'
import Head from 'next/head'
import Layout from '@containers/Layout/Layout'
import styles from './index.module.scss'

const Orders = () => {
  const orderData = [
    {
      id: 1,
      date: '04.06.2023',
      amount: 4,
      price: 120
    },
    {
      id: 2,
      date: '04.07.2023',
      amount: 2,
      price: 80
    },
    {
      id: 3,
      date: '04.08.2023',
      amount: 3,
      price: 100
    },
    {
      id: 4,
      date: '04.09.2023',
      amount: 5,
      price: 150
    }
  ]

  return (
    <>
      <Head>
        <title>My Orders</title>
      </Head>
      <Layout>
        <div className={styles.Orders}>
          <div className={styles['Orders-container']}>
            <h1 className={styles.title}>My orders</h1>
            <div className={styles['Orders-content']}>
              {orderData.map((data) => (
                <OrderData data={data} key={`orderData-${data.id}`} />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Orders
