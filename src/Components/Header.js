import React from "react"
import styles from "./header.module.scss"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className={styles.navWrap}>
      <Link to='/'>
        <li>Resume</li>
      </Link>
    </div>
  )
}

export default Header
