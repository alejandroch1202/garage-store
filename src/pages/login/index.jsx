import React, { useRef } from 'react'
import Layout from '@containers/Layout/Layout'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@logos/logo.png'
import styles from './index.module.scss'

const Login = () => {
  const form = useRef(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(form.current)
    const data = {
      usename: formData.get('email'),
      password: formData.get('password')
    }
    console.log(data)
  }

  return (
    <Layout>
      <Head>
        <title>Log in</title>
      </Head>
      <div className={styles.Login}>
        <div className={styles['Login-container']}>
          <Image src={logo.src} alt='logo' className={styles.logo} height={100} width={100} />
          <form action='/' className={styles.form} ref={form}>
            <label htmlFor='email' className={styles.label}>
              Email address
            </label>
            <input type='text' name='email' placeholder='alejandroch@dev.com' className={`${styles.input} ${styles['input-email']}`} />
            <label htmlFor='password' className={styles.label}>
              Password
            </label>
            <input type='password' name='password' placeholder='*********' className={`${styles.input} ${styles['input-password']}`} />
            <button onClick={handleSubmit} className={`${styles['primary-button']} ${styles['login-button']}`}>
              Log in
            </button>
            <Link href='/recovery'>Forgot my password</Link>
          </form>
          <Link href='/signup' className={`${styles['secondary-button']} ${styles['signup-button']}`}>
            <p>Sign up</p>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Login
