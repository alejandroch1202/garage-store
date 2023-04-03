import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@logos/logo.png';
import email from '@icons/email.svg';
import styles from './Sent.module.scss';

const Sent = () => {
  return (
    <div className={styles.Sent}>
      <div className={styles['form-container']}>
        <Image src={logo} alt="logo" className={styles.logo} />
        <h1 className={styles.title}>Email has been sent!</h1>
        <p className={styles.subtitle}>Please check your inbox for instructions on how to reset the password</p>

        <div className={styles['email-image']}>
          <Image src={email} alt="email" />
        </div>
        <Link href="/login" className={`${styles['primary-button']} ${styles['login-button']}`}>
          <p>Login</p>
        </Link>

        <p className={styles.resend}>
          <span>Didnt receive the email?</span>
          <Link href="#"> Resend</Link>
        </p>
      </div>
    </div>
  );
};

export default Sent;
