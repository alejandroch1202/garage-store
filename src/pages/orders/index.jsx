import React, { useEffect, useState } from 'react'
import OrderData from '@components/OrderData/OrderData'
import Head from 'next/head'
import Layout from '@containers/Layout/Layout'
import styles from './index.module.scss'

const Orders = () => {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    setOrders(JSON.parse(localStorage.getItem('GS_ORDERS')))
  }, [])

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
              {orders?.map((data) => (
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
