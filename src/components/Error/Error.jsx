import React from 'react'
import infoImg from '@icons/info.svg'
import styles from './Error.module.scss'

const Error = () => {
  return (
    <div className={styles.Error}>
      <img src={infoImg.src} alt='info' />
      <p>
        <span>Sorry! </span> Something went wrong
      </p>
    </div>
  )
}

export default Error
