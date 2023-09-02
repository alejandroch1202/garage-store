import React from 'react'
import infoImg from '@icons/info.svg'
import styles from './Error.module.scss'

const Error = ({ message }) => {
  const text = message || 'Something went wrong'
  return (
    <div className={styles.Error}>
      <img src={infoImg.src} alt='info' />
      <p>
        <span>Sorry! </span> {text} </p>
    </div>
  )
}

export default Error
