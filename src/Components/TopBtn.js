import React from "react"
import ArrowUp from "../icons/chevron-up.svg"
import styles from "./topBtn.module.scss"

const TopBtn = () => {
  return (
    <div className={styles.container}>
      <button>
        Back to top
        <img src={ArrowUp} alt='arrow' />
      </button>
    </div>
  )
}

export default TopBtn
