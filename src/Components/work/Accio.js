import React from "react"
import styles from "./accio.module.scss"
import Header from "../Header"
import Bulb from "../../icons/lightbulb-on-outline.svg"
import InterviewResult from "../../img/accio/Interview-results.png"
import CA from "../../img/accio/CA.png"
import Logo from "../../img/accio/Logo.png"
import Color from "../../img/accio/colorConcept.png"
import Typo from "../../img/accio/Typo.png"
import Sitemap from "../../img/accio/siteMap.png"
import FinalDesign from "../../img/accio/finalDesign.png"
import BM from "../../img/accio/BM.png"
import Quantitative from "../../img/accio/Quantitive.png"
import Footer from "../Footer"
import Hero from "../../img/accio/accio-hero.png"
import Alert from "../../icons/alert.svg"
import JM from "../../img/accio/JM.png"
import DS from "../../img/accio/DS.png"
import A1 from "../../img/accio/accio-1.png"
import A2 from "../../img/accio/accio-2.png"
import A3 from "../../img/accio/accio-3.png"
import A4 from "../../img/accio/accio-4.png"
import A5 from "../../img/accio/accio-5.png"
import A6 from "../../img/accio/accio-6.png"
import A7 from "../../img/accio/accio-7.png"
import A8 from "../../img/accio/accio-8.png"
import A9 from "../../img/accio/accio-9.png"
import A10 from "../../img/accio/accio-10.png"
import A11 from "../../img/accio/accio-11.png"

const Accio = () => {
  return (
    <div>
      <Header />
      <div className={styles.hero}>
        <img src={Hero} alt='movie app' />
      </div>
      <div className={styles.titleWrap}>
        <h1 className={styles.title}>Accio</h1>
        <p>
          Accio is a digital health playground. Connect with friends, create
          challenges and track your progress to meet your physical health goals.
        </p>
        <div className={styles.projectTypeWrap}>
          <div className={styles.titleBox}>
            <h4>Project Type</h4>
            <p>Team project</p>
          </div>
          <div className={styles.titleBox}>
            <h4>Duration</h4>
            <p>6 Weeks</p>
          </div>
          <div className={styles.titleBox}>
            <h4>Tools</h4>
            <p>Figma, FigJam, Google Survey</p>
          </div>
          <div className={styles.titleBox}>
            <h4>Role</h4>
            <p>UIUX Designer</p>
          </div>
        </div>
      </div>
      <p className={styles.phase}>Discover</p>
      <div className={styles.container}>
        <div>
          <div className={styles.step}>Background</div>
          <p>
            The phenomenon my teammates and I observe is that many of late
            generation Y and early generation Z know that exercising is
            beneficial to health, but are unable to foster and maintain an
            exercise habit.
          </p>
        </div>
        <div className={styles.stepWrap}>
          <div className={styles.step}>Quantitative</div>
          <p className={styles.sectionTitle}>
            We designed a survey to investigate what factors would foster and
            maintain an exercise habit, and understand their exercise
            experience.
          </p>
          <img src={Quantitative} alt='exercise app' />
        </div>
        <div className={styles.stepWrap}>
          <div className={styles.step}>Qualitative</div>
          <p className={styles.sectionTitle}>
            Findings after we conducted 1:1 interview with the interviewees
          </p>
          <ul>
            <li className={styles.insightsWrap}>
              Most of the interviewees lost motivation when exercising without
              friends
            </li>
            <li className={styles.insightsWrap}>
              Some of the interviewees lack of fun and freshness in working out{" "}
            </li>
          </ul>
          <img src={InterviewResult} alt='exercise app' />
        </div>
        <div className={styles.stepWrap}>
          <div className={styles.step}>Challenges</div>
          <div className={styles.keyWrap}>
            <p className={styles.key}>
              <img src={Alert} alt='movie app' />
              How to maintain exercising as a habit?
            </p>
            <p className={styles.key}>
              <img src={Alert} alt='movie app' />
              How might we turn a workout into a fun activity?
            </p>
            <p className={styles.key}>
              <img src={Alert} alt='movie app' />
              How to stay motivated for the long-term?
            </p>
          </div>
        </div>
        <div className={styles.stepWrap}>
          <div className={styles.step}>Key Features</div>
          <div className={styles.keyWrap}>
            <p className={styles.key}>
              <img src={Bulb} alt='exercise app' />
              Create daily group exercises with friends
            </p>
            <p className={styles.key}>
              <img src={Bulb} alt='exercise app' />
              Prompt and timely feedback from friends makes exercise enjoyable
            </p>
            <p className={styles.key}>
              <img src={Bulb} alt='exercise app' />
              Track self-progress to stay motivated
            </p>
          </div>
        </div>
        <div className={styles.stepWrap}>
          <div className={styles.step}>Competitive Analysis</div>
          <img src={CA} alt='exercise app' />
        </div>
      </div>
      <p className={styles.phase}>Define</p>
      <div className={styles.container}>
        <div className={styles.stepWrap}>
          <div className={styles.step}>User Journey Map</div>
          <div className={styles.BMWrap}>
            <img src={JM} alt='exercise app' />
          </div>
        </div>
        <div className={styles.stepWrap}>
          <div className={styles.step}>Business Model</div>
          <div className={styles.BMWrap}>
            <img src={BM} alt='exercise app' />
          </div>
        </div>
      </div>
      <p className={styles.phase}>Design</p>
      <div className={styles.container}>
        <div>
          <div className={styles.step}>Logo Concept</div>
          <div className={styles.logowrap}>
            <img
              src={Logo}
              alt='exercise app'
              style={{ width: "100px", marginRight: "24px" }}
            />
            <p>
              The shape of the logo of Accio is to convey the idea “Swish and
              Flick” to summon all the friends around you, which matches our
              brand image.
            </p>
          </div>
        </div>
        <div>
          <div className={styles.stepWrap}>
            <div className={styles.step}>Design System</div>
            <img src={DS} alt='exercise app' />
          </div>
        </div>
        <div className={styles.stepWrap}>
          <div className={styles.step}>Site Map</div>
          <img src={Sitemap} alt='exercise app' />
        </div>

        <div className={styles.stepWrap}>
          <div className={styles.step}>Final Design</div>
        </div>
      </div>
      <div className={styles.finalDesignWrap}>
        <img src={A1} alt='movie app' />
        <img src={A2} alt='movie app' />
        <img src={A3} alt='movie app' />
        <img src={A4} alt='movie app' />
        <img src={A5} alt='movie app' />
        <img src={A6} alt='movie app' />
        <img src={A7} alt='movie app' />
        <img src={A8} alt='movie app' />
        <img src={A9} alt='movie app' />
        <img src={A10} alt='movie app' />
        <img src={A11} alt='movie app' />
      </div>
      <p className={styles.phase}>Reflection</p>
      <div className={styles.container}>
        <div className={styles.step}>Conclusion</div>
        <p>
          In this project, I prioritized the metrics of the problem people
          nowadays face. However, my suggestions for this project are all
          aligned with my team. That's how we came up with this brand name:
          Accio means “I summon” from the Harry Potter spell. We hope to summon
          friends to exercise together with the magic power of “Accio.”
        </p>
        <div className={styles.step}>Next Step</div>
        <ul>
          <li className={styles.insightsWrap}>
            Continue to optimize functions and plan further features
          </li>
          <li className={styles.insightsWrap}>
            A virtual training coach to guide your exercise
          </li>
          <li className={styles.insightsWrap}>
            Add more personalized workout menus for users
          </li>
          <li className={styles.insightsWrap}>
            More real-time feedback (such as vibration and sound) to interact
            with friends while exercising
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  )
}

export default Accio
