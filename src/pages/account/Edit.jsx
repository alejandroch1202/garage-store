import React from 'react';
import Layout from '@containers/Layout/Layout';
import Head from 'next/head';
import styles from './Edit.module.scss';

const Edit = () => {
  return (
    <Layout>
      <Head>
        <title>Edit</title>
      </Head>
      <div className={styles.MyAccount}>
        <div className={styles['MyAccount-container']}>
          <h1 className={styles.title}>My account</h1>
          <form action="/" className={styles.form}>
            <div>
              <label htmlFor="name" className={styles.label}>
                Name
              </label>
              <input className={styles.input} placeholder="Alejandro Chavez" />
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input className={styles.input} placeholder="alejandroch@dev.com" />
              <label htmlFor="password" className={styles.label}>
                Password
              </label>
              <input className={styles.input} />
            </div>
            <input type="submit" value="Save" className={`${styles['primary-button']} ${styles['login-button']}`} />
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Edit;
