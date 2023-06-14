import React from "react"
import Email from "../icons/email.svg"
import Linkedin from "../icons/linkedin.svg"
import styles from "./footer.module.scss"
import Github from "../icons/github.svg"

const Footer = () => {
  return (
    <div className={styles.footerWrap}>
      <a href='mailto: sh32321@gmail.com' target='_blank'>
        <img src={Email} alt='email' className={styles.icons} />
      </a>
      <a href='https://www.linkedin.com/in/guolily/' target='_blank'>
        <img src={Linkedin} alt='linkedin' className={styles.icons} />
      </a>
      <a href='https://github.com/sh32321' target='_blank'>
        <img src={Github} alt='linkedin' className={styles.icons} />
      </a>
    </div>
  )
}

export default Footer
