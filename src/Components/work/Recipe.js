import React from "react"
import styles from "./recipe.module.scss"
import Header from "../Header"
import Video from "../../video/Foodie.mp4"
import Design from "../../img/foodie/color-logo.png"
import GitHub from "../../img/foodie/github.svg"
import Footer from "../Footer"
import Link from "../../icons/link.svg"

const recipe = () => {
  return (
    <div>
      <Header />
      <div className={styles.titleWrap}>
        <h1 className={styles.title}>Foodie</h1>
        <p>
          Foodie is a website, with recipes and guidance for you to be a
          professional chef easily.
        </p>
      </div>
      <div className={styles.container}>
        <div>
          <div className={styles.step}>Background</div>
          <p className={styles.desc}>
            Foodie is my personal school project from design to development.
            It's a responsiveness friendly website!
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
          <div className={styles.step}>Design</div>
          <img src={Design} alt='exercise app' />
        </div>
        <div className={styles.stepWrap}>
          <div className={styles.step}>Links</div>
          <a
            href='https://github.com/sh32321/recipe'
            className={styles.githubWrap}>
            <img src={GitHub} alt='github' className={styles.icon} />
            View my code playground
          </a>
          <a
            href='https://github.com/sh32321/recipe'
            className={styles.githubWrap}>
            <img src={Link} alt='github' className={styles.icon} />
            View the website
          </a>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default recipe
