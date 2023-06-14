import React from "react"
import styles from "./jose.module.scss"
import Header from "../Header"
import Footer from "../Footer"
import Video from "../../video/Jose.mp4"
import Github from "../../img/foodie/github.svg"
import Link from "../../icons/link.svg"

const Jose = () => {
  return (
    <div>
      <Header />
      <div className={styles.titleWrap}>
        <h1 className={styles.title}>Jose Gallery</h1>
        <p>
          Jose gallery is a web for one of my photographer friends to showcase
          his works.
        </p>
      </div>
      <div className={styles.container}>
        <div>
          <div className={styles.step}>Background</div>
          <p className={styles.desc}>
            A freelance project built by me and my teammate. I took charge of
            design and front-end (React) development.
          </p>
        </div>
        <div className={styles.stepWrap}>
          <div className={styles.step}>Quick view</div>
          <div className={styles.prototype}>
            <video controls width='100%' autoplay>
              <source src={Video} type='video/mp4' />
            </video>
          </div>
        </div>
        <div className={styles.stepWrap}>
          <div className={styles.step}>Link</div>
          <a
            href='https://joseheart8.netlify.app/'
            className={styles.githubWrap}>
            <img src={Link} alt='github' className={styles.icon} />
            View the website
          </a>
          <a
            href='https://github.com/Lada496/your-photo-album/blob/main/README.md'
            className={styles.githubWrap}>
            <img src={Link} alt='github' className={styles.icon} />
            Related articles
          </a>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Jose
