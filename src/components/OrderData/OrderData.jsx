import React from 'react'
import Image from 'next/image'
import arrowImg from '@icons/arrow.svg'
import styles from './OrderData.module.scss'

const OrderData = ({ data }) => {
  return (
    <div className={styles.OrderData}>
      <div>
        <p>{data.date}</p>
        <p>{data.amount} articles</p>
      </div>
      <p className={styles.price}>$ {data.price}</p>
      <Image src={arrowImg} alt='arrow' />
    </div>
  )
}

export default OrderData
