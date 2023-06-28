import React from "react"
import UserJourney from "../../img/moviescape/userJourney.png"
import Header from "../Header"
import CA from "../../img/moviescape/CA.png"
import LoFi from "../../img/moviescape/lo-fi.png"
import Iteration from "../../img/moviescape/Iteration.png"
import styles from "./moviescape.module.scss"
import Bulb from "../../icons/lightbulb-on-outline.svg"
import Video from "../../video/moviescape.mp4"
import PA from "../../img/moviescape/PA.png"
import PB from "../../img/moviescape/PB.png"
import Footer from "../Footer"
import Hero from "../../img/moviescape/moviescape-header.png"
import Alert from "../../icons/alert.svg"
import IterationV2 from "../../img/moviescape/Iteration-v2.png"
import H1 from "../../img/moviescape/Buy tickets-hp.png"
import H2 from "../../img/moviescape/Movie-hp.png"
import H3 from "../../img/moviescape/Theatre-hp.png"
import H4 from "../../img/moviescape/Tickets-hp.png"
import H5 from "../../img/moviescape/add tickets-hp.png"
import H6 from "../../img/moviescape/select seats.png"
import Confirmation from "../../img/moviescape/confirmation.png"
import Payment from "../../img/moviescape/payment.png"
import SendTickets from "../../img/moviescape/sendTickets.png"
import Recipient from "../../img/moviescape/selectRecipient.png"
import TicketType from "../../img/moviescape/selectTicketsType.png"
import SentSuccessful from "../../img/moviescape/sentSuccessful.png"
import Detail from "../../img/moviescape/Detail.png"
import Reviews from "../../img/moviescape/Users Review.png"
import LinkToFile from "../../icons/link.svg"
import { Link } from "react-scroll"
import TopBtn from "../TopBtn"

const Moviescape = () => {
  return (
    <div id='top'>
      <Header />
      <div className={styles.hero}>
        <img src={Hero} alt='movie app' />
      </div>
      <div className={styles.titleWrap}>
        <h1 className={styles.title}>Moviescape</h1>
        <p className={styles.titleDesc}>
          A better experience of purchasing movie tickets and enjoying it with
          your loved ones.
        </p>
        <div className={styles.projectTypeWrap}>
          <div className={styles.titleBox}>
            <h4>Project Type</h4>
            <p>Side project</p>
          </div>
          <div className={styles.titleBox}>
            <h4>Duration</h4>
            <p>8 Weeks</p>
          </div>
          <div className={styles.titleBox}>
            <h4>Tools</h4>
            <p>Figma, Miro, Google sheets</p>
          </div>
          <div className={styles.titleBox}>
            <h4>Role</h4>
            <p>Solo Designer</p>
          </div>
          <div className={styles.titleBox}>
            <h4>Prototyoe</h4>
            <a
              href='https://www.figma.com/proto/WUblK6BD0PKc2rDo1N9N9t/UX-research?page-id=252%3A2162&type=design&node-id=252-2922&viewport=417%2C498%2C0.25&scaling=scale-down&starting-point-node-id=252%3A2794&show-proto-sidebar=1'
              target='_blank'>
              <img src={LinkToFile} />
              Link to Figma
            </a>
          </div>
        </div>
      </div>
      <p className={styles.phase}>Overview</p>
      <div className={styles.container}>
        <div>
          <div className={styles.step}>Background</div>
          <p>
            Moviescape is designed to revolutionize the way users purchase
            tickets and enjoy their cinematic experiences by just a few taps.
            With the nearest theatre location, Moviescape provides a seamless
            ticket-buying process with a system seat’s suggestion and allows
            users to effortlessly share their tickets with loved ones.
          </p>
        </div>

        <div className={styles.stepWrap}>
          <div className={styles.step}>Competitive Analysis</div>
          <p>App experience considerations</p>
          <ul>
            <li className={styles.insightsWrap}>
              The flow complexity from browsing to purchasing tickets
            </li>
            <li className={styles.insightsWrap}>
              All of the functions and features are easy to operate
            </li>
            <li className={styles.insightsWrap}>
              Clear information architecture
            </li>
          </ul>
          {/* </div> */}
          <img src={CA} alt='movie app' />
        </div>
        <div className={styles.stepWrap}>
          <div className={styles.step}>User Journey Map</div>
          <p className={styles.sectionTitle}>Findings</p>
          <ul>
            <li className={styles.insightsWrap}>
              Users want to compare movie showtime according to different
              locations
            </li>
            <li className={styles.insightsWrap}>
              Users need a seat suggestion while selecting seats
            </li>
            <li className={styles.insightsWrap}>
              Users need to share multiple tickets with friends at once
            </li>
          </ul>
          <img src={UserJourney} alt='movie app' />
        </div>

        <div className={styles.stepWrap}>
          <div className={styles.step}>Challenges</div>
          <div className={styles.keyWrap}>
            <p className={styles.key}>
              <img src={Alert} alt='movie app' />
              How to share multiple tickets at once?
            </p>
            <p className={styles.key}>
              <img src={Alert} alt='movie app' />
              How might we offer a better exprience to browse locations and
              showtimes without a click?
            </p>
            <p className={styles.key}>
              <img src={Alert} alt='movie app' />
              How to improve users' purchase experience?
            </p>
          </div>
        </div>
        <div className={styles.stepWrap}>
          <div className={styles.step}>Key Features</div>
          <div className={styles.keyWrap}>
            <p className={styles.key}>
              <img src={Bulb} alt='movie app' />
              Group tickets sharable
            </p>
            <p className={styles.key}>
              <img src={Bulb} alt='movie app' />A page of combining location and
              showtime info
            </p>
            <p className={styles.key}>
              <img src={Bulb} alt='movie app' />
              Decrease users' hesitancy while selecting seats
            </p>
          </div>
        </div>
      </div>

      <p className={styles.phase}>Design Process</p>
      <div className={styles.container}>
        <div>
          <div className={styles.step}>Initial Low-Fi Wireframe</div>
          <img src={LoFi} alt='movie app' />
        </div>
        <div className={styles.stepWrap}>
          <div className={styles.step}>Usability Test</div>
          <p className={styles.sectionTitle}>
            Findings after I conducted 1:1 usability test with 5 participants by
            the low-fi prototype
          </p>
          <ul>
            <li className={styles.insightsWrap}>
              Participants wanted to remove friend's email input in sharing
              tickets pop-up
            </li>
            <li className={styles.insightsWrap}>
              Participants were confused where the exact seat legend they were
              currently selecting
            </li>
          </ul>
          <div className={styles.UTWrap}>
            <img src={PA} alt='movie app' />
            <img src={PB} alt='movie app' />
          </div>
        </div>
        <div className={styles.stepWrap}>
          <div className={styles.step}>Iteration</div>
          <div className={styles.UTWrap}>
            <img src={Iteration} alt='movie app' />
            <img src={IterationV2} alt='movie app' />
          </div>
        </div>
        <div className={styles.stepWrap}>
          <div className={styles.step}>Final Design</div>
        </div>
      </div>
      <div className={styles.finalDesignWrap}>
        <img src={H3} alt='movie app' />
        <img src={H2} alt='movie app' />
        <img src={H1} alt='movie app' />
        <img src={Detail} alt='movie app' />
        <img src={Reviews} alt='movie app' />
        <img src={H5} alt='movie app' />
        <img src={H6} alt='movie app' />
        <img src={Confirmation} alt='movie app' />
        <img src={Payment} alt='movie app' />
        <img src={H4} alt='movie app' />
        <img src={SendTickets} alt='movie app' />
        <img src={Recipient} alt='movie app' />
        <img src={TicketType} alt='movie app' />
        <img src={SentSuccessful} alt='movie app' />
      </div>
      <div className={styles.container}>
        <div className={styles.stepWrap}>
          <div className={styles.step}>Prototype</div>
          <p>A user flow of</p>
          <ul>
            <li className={styles.insightsWrap}>
              Browsing movies and purchasing tickets
            </li>
            <li className={styles.insightsWrap}>
              Sharing tickets with your friends
            </li>
            <li className={styles.insightsWrap}>
              Checking the nearest location and movie showtime
            </li>
          </ul>
          <div className={styles.prototype}>
            <video controls width='40%' height='760px' autoplay>
              <source src={Video} type='video/mp4' />
            </video>
            <a
              href='https://www.figma.com/proto/WUblK6BD0PKc2rDo1N9N9t/UX-research?page-id=252%3A2162&type=design&node-id=252-2922&viewport=417%2C498%2C0.25&scaling=scale-down&starting-point-node-id=252%3A2794&show-proto-sidebar=1'
              target='_blank'>
              <img src={LinkToFile} />
              Link to Figma
            </a>
          </div>
        </div>
      </div>
      <p className={styles.phase}>Reflection</p>
      <div className={styles.container}>
        <div className={styles.step}>Conclusion</div>
        <p>
          Moviescape gave me a lot of chances to interview people and test this
          product. However, from the process, I began to explore design
          alternatives and discovered that those findings opened my mind and
          eventually led to a better final solution. Moviescape is designed to
          offer a better end-to-end experience for moviegoing as well as to
          flock your loved one to you!
        </p>
        <div className={styles.step}>Next Step</div>
        <ul>
          <li className={styles.insightsWrap}>
            Enhance visual perception such as trailer viewing experience to
            attract users
          </li>
          <li className={styles.insightsWrap}>
            Implement a virtual seat view feature giving users the actual
            distance from seats to screens to improve a better seat selection
            experience
          </li>
          <li className={styles.insightsWrap}>
            Allow users to purchase concession items for pick up, such as
            popcorn promotion to increase business value
          </li>
        </ul>
        <Link to='top' spy={true} smooth={true}>
          <TopBtn />
        </Link>
      </div>
      <Footer />
    </div>
  )
}

export default Moviescape
