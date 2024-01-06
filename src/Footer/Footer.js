import React from 'react'
import styles from './footer.module.css'

export const Footer = () => {
  return (
    <div className={`text-center bg-primary text-white position-fixed bottom-0 w-100 ${styles.cl}`}>
        &copy; Rights belongs to me.
    </div>
  )
}
