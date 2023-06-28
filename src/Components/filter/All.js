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
        <div className={styles.blockWrap}>
          <Link to='/work/moviescape' target='_top'>
            <div
              class={styles.bigCard}
              style={{ backgroundColor: "#fff5dc", marginBottom: "24px" }}>
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
          </Link>
        </div>
        <Link to='/work/accio' target='_top'>
          <div
            class={styles.bigCard}
            style={{
              background: "linear-gradient(180deg, #E0EAFC 0%, #CFDEF3 100%",
              marginBottom: "32px",
            }}>
            <img src={Accio} />
            <div class={styles.info}>
              <h1>Accio</h1>
              <p>UIUX, End-to-end Design</p>
              <Link to='/work/accio' target='_top' className={styles.viewBtn}>
                <li>View More</li>
              </Link>
            </div>
          </div>
        </Link>
      </div>
      <div class={styles.cardsWrap}>
        <div
          class={styles.card}
          style={{
            backgroundColor: "#FFEACB",
          }}>
          <img src={Chatwis} />
          <div class={styles.info}>
            <h2>Chatwis.ai</h2>
            <p>UI, Design to Develop</p>
            <Link to='/work/chatwis' target='_top' className={styles.viewBtn}>
              <li>View More</li>
            </Link>
          </div>
        </div>
        <div
          class={styles.card}
          style={{
            backgroundColor: "#E8FFEA",
          }}>
          <img src={Recipe} />
          <div class={styles.info}>
            <h2>Foodie Recipe</h2>
            <p>Design, Coding, React</p>
            <Link to='/work/recipe' target='_top' className={styles.viewBtn}>
              <li>View More</li>
            </Link>
          </div>
        </div>
        <div
          class={styles.card}
          style={{
            backgroundColor: "#FFFFEF",
          }}>
          <img src={OA} />
          <div class={styles.info}>
            <h2>Ousar Academy</h2>
            <p>Responsive Design</p>
            <Link
              to='/work/ousar-academy'
              target='_top'
              className={styles.viewBtn}>
              <li>View More</li>
            </Link>
          </div>
        </div>
        <div
          class={styles.card}
          style={{
            backgroundColor: "#000000",
          }}>
          <img src={Jose} />
          <div class={styles.info}>
            <h2>Jose Gallery</h2>
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
