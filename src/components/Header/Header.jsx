import React, { useContext } from 'react';
import Menu from '@components/Menu/Menu';
import Link from 'next/link';
import AppContext from '@context/AppContext';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/imagotipo.png';
import arrow from '@icons/arrow.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import styles from './Header.module.scss';

const Header = () => {
  const { state, toggleOrder, toggleMenu } = useContext(AppContext);

  return (
    <>
      <nav className={styles.nav}>
        <img src={menu.src} alt="menu" className={styles.menu} />
        <div className={`${styles['navbar-left']} prevent-select`}>
          <Link href="/">
            <img src={logo.src} alt="logo" className={styles['nav-logo']} />
          </Link>
          <ul>
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
              <Link href="/">Furniture</Link>
            </li>
            <li>
              <Link href="/">Toys</Link>
            </li>
            <li>
              <Link href="/">Others</Link>
            </li>
          </ul>
        </div>
        <div className={styles['navbar-right']}>
          <ul>
            <li
              role="presentation"
              className={`${styles['more-clickable-area']} ${styles['navbar-email']} ${styles.pointer} prevent-select`}
              onClick={() => toggleMenu()}
              onKeyDown={() => toggleMenu()}
            >
              alejandroch@dev.com
              <img className={styles.arrow} src={arrow.src} alt="arrow" />
            </li>
            <li role="presentation" className={styles['navbar-shopping-cart']} onClick={() => toggleOrder()} onKeyDown={() => toggleOrder()}>
              <img src={shoppingCart.src} alt="shopping cart" />
              {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
            </li>
          </ul>
        </div>
        {state.menuIsOpen && <Menu />}
      </nav>
      {/* {state.orderIsOpen && <MyOrder />} */}
    </>
  );
};

export default Header;
