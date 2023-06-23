import React from "react"
import HeaderImg from "../img/headerImg.gif"
import styles from "./home.module.scss"
import Header from "./Header"
import Footer from "./Footer"
import All from "./filter/All"
import { Link } from "react-scroll"
import Lottie from "lottie-react"
import Arrow from "../icons/11514-swipe-down-arrows.json"

const Home = () => {
  return (
    <>
      <Header />
      <section>
        <p className={styles.title}>Hi! I'm Lily. </p>
        <p className={styles.description}>
          I am a UIUX designer and a React (front-end) lover in Canada.
        </p>
        <img src={HeaderImg} className={styles.headerImg} />
        <Link to='work' spy={true} smooth={true}>
          <Lottie
            animationData={Arrow}
            loop={true}
            // style={{ width: "100px" }}
            className={styles.arrowBtn}
          />
        </Link>
      </section>
      <div id='work'>
        <All />
      </div>
      <Footer />
    </>
  )
}

export default Home
