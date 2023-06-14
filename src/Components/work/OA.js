import React from "react"
import styles from "./oa.module.scss"
import Header from "../Header"
import Footer from "../Footer"
import Sitemap from "../../img/OA/sitemap.png"
import Hero from "../../img/OA/OA-hero.png"
import W1 from "../../img/OA/w-dashboard.png"
import W2 from "../../img/OA/w-login.png"
import W3 from "../../img/OA/w-after-login.png"
import W4 from "../../img/OA/w-homepage.png"
import W5 from "../../img/OA/w-homepage-mobile.png"
import W6 from "../../img/OA/w-menu-expanded-mobile.png"
import D7 from "../../img/OA/D-assignment.png"
import D2 from "../../img/OA/D-course.png"
import D3 from "../../img/OA/D-download.png"
import D1 from "../../img/OA/D-homepage.png"
import D6 from "../../img/OA/D-material-dpwnload.png"
import D5 from "../../img/OA/D-QA.png"
import D4 from "../../img/OA/D-update.png"
import M5 from "../../img/OA/M-QA.png"
import M3 from "../../img/OA/M-course.png"
import M4 from "../../img/OA/M-download.png"
import M1 from "../../img/OA/M-homepage.png"
import M2 from "../../img/OA/M-menu-expanded.png"
import M6 from "../../img/OA/M-submission.png"
import T2 from "../../img/OA/T-course.png"
import T1 from "../../img/OA/T-homepage.png"

const OA = () => {
  return (
    <div>
      <Header />
      <div className={styles.hero}>
        <img src={Hero} alt='dashboard' />
      </div>
      <div className={styles.titleWrap}>
        <h1 className={styles.title}>Ousar Academy</h1>
        <p>It's an E-learning dashboard design from web to mobile.</p>
        <div className={styles.projectTypeWrap}>
          <div className={styles.titleBox}>
            <h4>Project Type</h4>
            <p>School Team Project</p>
          </div>
          <div className={styles.titleBox}>
            <h4>Duration</h4>
            <p>4 Weeks</p>
          </div>
          <div className={styles.titleBox}>
            <h4>Tools</h4>
            <p>Figma, Whimsical</p>
          </div>
          <div className={styles.titleBox}>
            <h4>Role</h4>
            <p>UIUX Designer</p>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div>
          <div className={styles.step}>Background</div>
          <p className={styles.desc}>
            A real client project from my school required a Responsive web
            design (RWD) E-learning dashboard.
          </p>
        </div>
        <div className={styles.stepWrap}>
          <div className={styles.step}>Site map</div>
          <img src={Sitemap} alt='dashboard' />
        </div>
        <div className={styles.stepWrap}>
          <div className={styles.step}>Wireframe (Desktop to Mobile)</div>
        </div>
      </div>
      <div className={styles.finalDesignWrap}>
        <img src={W1} alt='dashboard' style={{ width: "40%" }} />
        <img src={W2} alt='dashboard' style={{ width: "40%" }} />
        <img src={W3} alt='dashboard' style={{ width: "40%" }} />
        <img src={W4} alt='dashboard' style={{ width: "30%" }} />
        <img src={W5} alt='dashboard' />
        <img src={W6} alt='dashboard' />
      </div>
      <div className={styles.container}>
        <div className={styles.stepWrap}>
          <div className={styles.step}>Desktop Design</div>
        </div>
      </div>
      <div className={styles.finalDesignWrap}>
        <img src={D1} alt='dashboard' style={{ width: "64%" }} />
        <img src={D2} alt='dashboard' style={{ width: "64%" }} />
        <img src={D3} alt='dashboard' style={{ width: "64%" }} />
        <img src={D4} alt='dashboard' style={{ width: "64%" }} />
        <img src={D5} alt='dashboard' style={{ width: "64%" }} />
        <img src={D6} alt='dashboard' style={{ width: "64%" }} />
        <img src={D7} alt='dashboard' style={{ width: "64%" }} />
      </div>
      <div className={styles.container}>
        <div className={styles.stepWrap}>
          <div className={styles.step}>Tablet & Mobile Design</div>
        </div>
      </div>
      <div className={styles.finalDesignWrap}>
        <img src={T1} alt='dashboard' style={{ width: "30%" }} />
        <img src={T2} alt='dashboard' style={{ width: "30%" }} />
        <img src={M1} alt='dashboard' />
        <img src={M2} alt='dashboard' />
        <img src={M3} alt='dashboard' />
        <img src={M4} alt='dashboard' />
        <img src={M5} alt='dashboard' />
        <img src={M6} alt='dashboard' />
      </div>
      <Footer />
    </div>
  )
}

export default OA
