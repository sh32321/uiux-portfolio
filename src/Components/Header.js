import React from "react"
import styles from "./header.module.scss"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className={styles.navWrap}>
      <Link
        to='https://drive.google.com/file/d/1Q8uBhN_fQmGF9Psae40-xxnMvNhnKJWf/view?usp=sharing'
        target='_blank'>
        <li>Resume</li>
      </Link>
    </div>
  )
}

export default Header
