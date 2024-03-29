import React from 'react'
import Link from 'next/link'
import styles from './Menu.module.scss'

const Menu = () => {
  return (
    <div className={styles.Menu}>
      <ul>
        <li>
          <Link href='/orders' className={styles.title}>
            My orders
          </Link>
        </li>
        <li>
          <Link href='/account'>My account</Link>
        </li>
        <li>
          <Link href='/login'>Sign out</Link>
        </li>
      </ul>
    </div>
  )
}

export default Menu
