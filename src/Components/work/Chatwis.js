import React from "react"
import styles from "./chatwis.module.scss"
import Header from "../Header"
import Wireframe from "../../img/chatwis/chatwis-wireframe.png"
import Logo from "../../img/chatwis/ChatwisIteration.png"
import Video from "../../video/Chatwis.mp4"
import Footer from "../Footer"
import Hero from "../../img/chatwis/chatwis-hero.png"
import LM1 from "../../img/chatwis/LM-1.png"
import LM2 from "../../img/chatwis/LM-2.png"
import LM3 from "../../img/chatwis/LM-3.png"
import LM4 from "../../img/chatwis/LM-4.png"
import LM5 from "../../img/chatwis/LM-5.png"
import LM6 from "../../img/chatwis/LM-6.png"
import LM7 from "../../img/chatwis/LM-7.png"
import LM8 from "../../img/chatwis/LM-8.png"
import LM9 from "../../img/chatwis/LM-9.png"
import DM1 from "../../img/chatwis/DM-1.png"
import DM2 from "../../img/chatwis/DM-2.png"
import DM3 from "../../img/chatwis/DM-3.png"
import DM4 from "../../img/chatwis/DM-4.png"
import DM5 from "../../img/chatwis/DM-5.png"
import DM6 from "../../img/chatwis/DM-6.png"
import DM7 from "../../img/chatwis/DM-7.png"
import DM8 from "../../img/chatwis/DM-8.png"
import DM9 from "../../img/chatwis/DM-9.png"
import LinkToFile from "../../icons/link.svg"
import TopBtn from "../TopBtn"
import { Link } from "react-scroll"

const Chatwis = () => {
  return (
    <div id='top'>
      <Header />
      <div className={styles.hero}>
        <img src={Hero} alt='movie app' />
      </div>
      <div className={styles.titleWrap}>
        <h1 className={styles.title}>Chatwis</h1>
        <p>A trending AI chatbot app.</p>
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
            <p>Figma</p>
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
            It's the project implemented from design to development. My teammate
            and I took charge of the process of design and is now proceed to iOS
            development. Look forward to seeing it on launch!
          </p>
        </div>
        <div className={styles.stepWrap}>
          <div className={styles.step}>Wireframe</div>
          <img src={Wireframe} alt='movie app' />
        </div>
        <div className={styles.stepWrap}>
          <div className={styles.step}>Logo Iteration</div>
          <img src={Logo} alt='movie app' className={styles.logoWrap} />
        </div>
        <div className={styles.stepWrap}>
          <div className={styles.step}>Light mode</div>
          {/* <img src={LightMode} alt='movie app' /> */}
        </div>
      </div>
      <div className={styles.finalDesignWrap}>
        <img src={LM1} alt='movie app' />
        <img src={LM2} alt='movie app' />
        <img src={LM3} alt='movie app' />
        <img src={LM4} alt='movie app' />
        <img src={LM5} alt='movie app' />
        <img src={LM6} alt='movie app' />
        <img src={LM7} alt='movie app' />
        <img src={LM8} alt='movie app' />
        <img src={LM9} alt='movie app' />
      </div>
      <div className={styles.container}>
        <div className={styles.stepWrap}>
          <div className={styles.step}>Dark mode</div>
        </div>
      </div>
      <div className={styles.finalDesignWrap}>
        <img src={DM1} alt='movie app' />
        <img src={DM2} alt='movie app' />
        <img src={DM3} alt='movie app' />
        <img src={DM4} alt='movie app' />
        <img src={DM5} alt='movie app' />
        <img src={DM6} alt='movie app' />
        <img src={DM7} alt='movie app' />
        <img src={DM8} alt='movie app' />
        <img src={DM9} alt='movie app' />
      </div>
      <div className={styles.container}>
        <div className={styles.stepWrap}>
          <div className={styles.step}>Prototype - Turtorial</div>
          <div className={styles.prototype}>
            <video controls width='40%' height='760px' autoplay>
              <source src={Video} type='video/mp4' />
            </video>
            <a
              href='https://www.figma.com/proto/GT7DloE4yOMWhzYflqe5CO/Chatwis.ai?page-id=432%3A7208&type=design&node-id=1696-11620&viewport=729%2C-81%2C0.13&scaling=scale-down&starting-point-node-id=435%3A13543&show-proto-sidebar=1'
              target='_blank'>
              <img src={LinkToFile} />
              Link to Figma prototype
            </a>
          </div>
        </div>
        <Link to='top' spy={true} smooth={true}>
          <TopBtn />
        </Link>
      </div>
      <Footer />
    </div>
  )
}

export default Chatwis
