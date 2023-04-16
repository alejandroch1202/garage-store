import React from 'react';
import Link from 'next/link';
import styles from './MobileMenu.module.scss';

const MobileMenu = () => {
  return (
    <div className={styles['mobile-menu']}>
      <ul>
        <li>
          <Link href="/">CATEGORIES</Link>
        </li>
        <li>
          <Link href="/">All</Link>
        </li>
        <li>
          <Link href="/">Clothes</Link>
        </li>
        <li>
          <Link href="/">Electronics</Link>
        </li>
        <li>
          <Link href="/">Furnitures</Link>
        </li>
        <li>
          <Link href="/">Toys</Link>
        </li>
        <li>
          <Link href="/">Other</Link>
        </li>
      </ul>

      <ul>
        <li>
          <Link href="/orders">My orders</Link>
        </li>
        <li>
          <Link href="/account">My account</Link>
        </li>
      </ul>

      <ul>
        <li>
          <Link href="/" className={styles.email}>
            alejandroch@dev.com
          </Link>
        </li>
        <li>
          <Link href="/login" className={styles['sign-out']}>
            Sign out
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
