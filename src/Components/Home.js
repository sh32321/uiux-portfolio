import React from "react"
import HeaderImg from "../img/headerImg.gif"
import styles from "./home.module.scss"
import Header from "./Header"
import Footer from "./Footer"
import All from "./filter/All"

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
      </section>
      <All />
      <Footer />
    </>
  )
}

export default Home
