import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import arrowImg from '@icons/arrow.svg'
import styles from './OrderData.module.scss'

const OrderData = ({ data }) => {
  return (
    <div className={styles.OrderData}>
      <div>
        <p>{data.date}</p>
        <p>{data.products.length} articles</p>
      </div>
      <p className={styles.price}>$ {data.total}</p>
      <Link href={`/orders/${data.id}`}>
        <Image src={arrowImg} alt='arrow' />
      </Link>
    </div>
  )
}

export default OrderData
