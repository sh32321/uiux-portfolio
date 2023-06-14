import React from "react"
import Email from "../icons/email.svg"
import Linkedin from "../icons/linkedin.svg"
import styles from "./footer.module.scss"
import Github from "../icons/github.svg"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className={styles.footerWrap}>
      <a href='#'>
        <img src={Email} alt='email' className={styles.icons} />
      </a>
      <a href='#'>
        <img src={Linkedin} alt='linkedin' className={styles.icons} />
      </a>
      <a href='#'>
        <img src={Github} alt='linkedin' className={styles.icons} />
      </a>
    </div>
  )
}

export default Footer
