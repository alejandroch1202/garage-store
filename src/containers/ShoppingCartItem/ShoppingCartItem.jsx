import React, { useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CartItem from '@components/CartItem/CartItem'
import AppContext from '@context/AppContext'
import arrow from '@icons/left-arrow.svg'
import styles from './ShoppingCartItem.module.scss'

const ShoppingCartItem = () => {
  const { state, toggleShopping } = useContext(AppContext)

  const sumTotal = () => {
    const reducer = (accumalator, currentValue) => accumalator + currentValue.price
    const sum = state.cart.reduce(reducer, 0).toFixed(2)
    return sum
  }

  return (
    <aside className={styles.ShoppingCartItem}>
      <div className={styles.container}>
        <div className={styles['title-container']}>
          <Image className={`${styles['more-clickable-area']} ${styles.pointer}`} src={arrow} alt='arrow' onClick={() => toggleShopping()} />
          <p className={styles.title}>Shopping cart</p>
        </div>
        <div className={styles['my-order-content']}>
          <div className={styles['my-orders']}>
            {state.cart.map((product) => (
              <CartItem product={product} key={`orderItem-${product.id}`} />
            ))}
          </div>
          <div className={styles.order}>
            <p>
              <span>Total</span>
            </p>
            <p>$ {sumTotal()}</p>
          </div>
          <Link className={styles['primary-button']} href='/checkout'>
            Checkout
          </Link>
        </div>
      </div>
    </aside>
  )
}

export default ShoppingCartItem
