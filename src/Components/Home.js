import React from "react"
import HeaderImg from "../img/headerImg.gif"
import styles from "./home.module.scss"
import Header from "./Header"
import Footer from "./Footer"
import All from "./filter/All"
import { Link } from "react-scroll"
import Arrow from "../icons/chevron-down.svg"

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
          <button>
            View my work
            <img src={Arrow} alt='arrow' />
          </button>
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
