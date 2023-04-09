import React from 'react';
import Layout from '@containers/Layout/Layout';
import Head from 'next/head';
import styles from './index.module.scss';

const Signup = () => {
  return (
    <Layout>
      <Head>
        <title>Sign up</title>
      </Head>
      <div className={styles.Signup}>
        <div className={styles['Signup-container']}>
          <h1 className={styles.title}>My account</h1>

          <form action="/" className={styles.form}>
            <div>
              <label htmlFor="name" className={styles.label}>
                Name
              </label>
              <input type="text" id="name" placeholder="Alejandro Chavez" className={`${styles.input} ${styles['input-name']}`} />

              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input type="text" id="email" placeholder="alejandroch@dev.com" className={`${styles.input} ${styles['input-email']}`} />

              <label htmlFor="password" className={styles.label}>
                Password
              </label>
              <input type="password" id="password" placeholder="*********" className={`${styles.input} ${styles['input-password']}`} />
            </div>
            <input type="submit" value="Create" className={`${styles['primary-button']} ${styles['login-button']}`} />
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Signup;
