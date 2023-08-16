import React from "react"
import styles from "./recipe.module.scss"
import Header from "../Header"
import Video from "../../video/Foodie.mp4"
import Design from "../../img/foodie/color-logo.png"
import GitHub from "../../img/foodie/github.svg"
import Footer from "../Footer"
import LinkToFile from "../../icons/link.svg"
import TopBtn from "../TopBtn"
import { Link } from "react-scroll"

const recipe = () => {
  return (
    <div id='top'>
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
            Foodie is my personal school project from scratch. I am responsible
            from design to development which I utilized React a front-end
            language to implement all the logic functions. It's also a
            responsiveness-friendly website!
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
            className={styles.githubWrap}
            target='_blank'>
            <img src={GitHub} alt='github' className={styles.icon} />
            View my code playground
          </a>
          <a
            href='https://recipe-foodie.netlify.app/'
            className={styles.githubWrap}
            target='_blank'>
            <img src={LinkToFile} alt='github' className={styles.icon} />
            View the website
          </a>
        </div>
        <Link to='top' spy={true} smooth={true}>
          <TopBtn />
        </Link>
      </div>
      <Footer />
    </div>
  )
}

export default recipe
