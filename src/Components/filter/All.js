import React from "react"
import Recipe from "../../img/recipe.png"
import Chatwis from "../../img/chatwis.png"
import Moviescape from "../../img/Moviescape.png"
import styles from "./all.module.scss"
import { Link } from "react-router-dom"
import Accio from "../../img/Accio.png"
import Jose from "../../img/Jose.png"
import OA from "../../img/OA.png"

const All = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bigCardsWrap}>
        <div class={styles.bigCard}>
          <img src={Moviescape} />
          <div class={styles.info}>
            <h1>Moviescape</h1>
            <p>UIUX, End-to-end Design</p>
            <Link
              to='/work/moviescape'
              target='_top'
              className={styles.viewBtn}>
              <li>View More</li>
            </Link>
          </div>
        </div>
        <div class={styles.bigCard}>
          <img src={Accio} />
          <div class={styles.info}>
            <h1>Accio</h1>
            <p>UIUX, End-to-end Design</p>
            <Link to='/work/accio' target='_top' className={styles.viewBtn}>
              <li>View More</li>
            </Link>
          </div>
        </div>
      </div>
      <div class={styles.cardsWrap}>
        <div class={styles.card}>
          <img src={Chatwis} />
          <div class={styles.info}>
            <h1>Chatwis.ai</h1>
            <p>UI, Design to Develop</p>
            <Link to='/work/chatwis' target='_top' className={styles.viewBtn}>
              <li>View More</li>
            </Link>
          </div>
        </div>
        <div class={styles.card}>
          <img src={Recipe} />
          <div class={styles.info}>
            <h1>Foodie Recipe</h1>
            <p>Design, Coding, React</p>
            <Link to='/work/recipe' target='_top' className={styles.viewBtn}>
              <li>View More</li>
            </Link>
          </div>
        </div>
        <div class={styles.card}>
          <img src={OA} />
          <div class={styles.info}>
            <h1>Ousar Academy</h1>
            <p>Responsive Design</p>
            <Link
              to='/work/ousar-academy'
              target='_top'
              className={styles.viewBtn}>
              <li>View More</li>
            </Link>
          </div>
        </div>
        <div class={styles.card}>
          <img src={Jose} />
          <div class={styles.info}>
            <h1>Jose Gallery</h1>
            <p>Design, Coding, React</p>
            <Link to='/work/jose' target='_top' className={styles.viewBtn}>
              <li>View More</li>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default All
