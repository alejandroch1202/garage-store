import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Sent from './Sent';
import logo from '@logos/logo.png';
import Layout from '@containers/Layout/Layout';
import Head from 'next/head';
import styles from './index.module.scss';

const Recovery = () => {
  const [sent, setSent] = useState(false);

  const handleSent = () => {
    setSent(true);
  };

  return sent ? (
    <Layout>
      <Head>
        <title>Recovery</title>
      </Head>
      <Sent />
    </Layout>
  ) : (
    <Layout>
      <Head>
        <title>Recovery</title>
      </Head>
      <div className={styles.Recovery}>
        <div className={styles['Recovery-container']}>
          <Image src={logo} alt="logo" className={styles.logo} />
          <h3 className={styles.title}>Password recovery</h3>
          <p className={styles.subtitle}>Inform the email address used to create your account</p>
          <form action="/" className={styles.form}>
            <label htmlFor="email" className={styles.label}>
              Email address
            </label>
            <input type="text" id="email" placeholder="alejandroch@dev.com" className={`${styles.input} ${styles['input-email']}`} required />
            <input type="submit" value="Submit" className={`${styles['primary-button']} ${styles['login-button']}`} onClick={handleSent} />
            <Link href="/login" className={styles['back-login']}>
              Back to log in
            </Link>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Recovery;
