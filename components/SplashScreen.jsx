import React from 'react'
import styles from '../styles/loader.module.css'
const SplashScreen = () => {
  return (
    <div className='h-[100vh] bg-white flex flex-col justify-center items-center'>
      <div className={styles.loader}>
      <p className={styles.heading}>Loading</p>
      <div className={styles.loading}>
        <div className={styles.load}></div>
        <div className={styles.load}></div>
        <div className={styles.load}></div>
        <div className={styles.load}></div>
       </div>
       </div>
       </div>
  )
}

export default SplashScreen