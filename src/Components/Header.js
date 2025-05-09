import React from "react"
import styles from "./header.module.scss"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className={styles.navWrap}>
      <Link to='/'>
        <li>Home</li>
      </Link>
      <Link
        to='https://drive.google.com/file/d/1VDXbpuLCAEe1PwDAphOKcxxinPR8MxA2/view?usp=sharing'
        target='_blank'>
        <li>Resume</li>
      </Link>
    </div>
  )
}

export default Header
