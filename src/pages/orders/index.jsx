import React, { useContext } from 'react'
import AppContext from '@context/AppContext'
import OrderData from '@components/OrderData/OrderData'
import Head from 'next/head'
import Layout from '@containers/Layout/Layout'
import styles from './index.module.scss'

const Orders = () => {
  const { state } = useContext(AppContext)

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
              {state.orders.map((data) => (
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
