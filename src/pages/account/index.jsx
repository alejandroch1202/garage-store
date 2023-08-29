import React, { useState } from 'react'
import Layout from '@containers/Layout/Layout'
import Head from 'next/head'
import Edit from './Edit'
import styles from './index.module.scss'

const Account = () => {
  const [editing, setEditing] = useState(false)

  const handleEdit = () => {
    setEditing(true)
  }

  return editing
    ? (
      <Edit />
      )
    : (
      <Layout>
        <Head>
          <title>My Account</title>
        </Head>
        <div className={styles.MyAccount}>
          <div className={styles['MyAccount-container']}>
            <h1 className={styles.title}>My account</h1>
            <form action='/' className={styles.form}>
              <div>
                <label htmlFor='name' className={styles.label}>
                  Name
                </label>
                <p className={styles.value}>Alejandro Chavez</p>
                <label htmlFor='email' className={styles.label}>
                  Email
                </label>
                <p className={styles.value}>alejandroch@dev.com</p>
                <label htmlFor='password' className={styles.label}>
                  Password
                </label>
                <p className={styles.value}>*********</p>
              </div>
              <input type='submit' value='Edit' className={`${styles['secondary-button']} ${styles['login-button']}`} onClick={handleEdit} />
            </form>
          </div>
        </div>
      </Layout>
      )
}

export default Account
