import React, { useRef } from 'react';
import Image from 'next/image';
import Layout from '@containers/Layout/Layout';
import Head from 'next/head';
import logo from '@logos/logo.png';
import styles from './index.module.scss';

const Sent = () => {
  const form = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      password: formData.get('password'),
      rePassword: formData.get('password'),
    };
    console.log(data);
  };

  return (
    <Layout>
      <Head>
        <title>New password</title>
      </Head>
      <div className={styles.Login}>
        <div className={styles['Login-container']}>
          <Image src={logo.src} alt="logo" className={styles.logo} height={100} width={100} />
          <h3 className={styles.title}>Create a new password</h3>
          <p className={styles.subtitle}>Enter a new password for your account</p>
          <form action="/" className={styles.form} ref={form}>
            <label htmlFor="email" className={styles.label}>
              New password
            </label>
            <input type="text" name="email" placeholder="*********" className={`${styles.input} ${styles['input-email']}`} />

            <label htmlFor="password" className={styles.label}>
              Re-enter password
            </label>
            <input type="password" name="password" placeholder="*********" className={`${styles.input} ${styles['input-password']}`} />

            <button onClick={handleSubmit} className={`${styles['primary-button']} ${styles['login-button']}`}>
              Confirm
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Sent;
