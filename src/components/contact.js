import React from "react"
import layoutStyles from "./layout/layout.module.scss"

const Contact = () => {
  return (
    <div>
      <div className={layoutStyles.infoContainer}>
        <h1 className={layoutStyles.title} id="contact">
          Contact Us
        </h1>
        Call or text
        <h2 className={layoutStyles.phone}>226-206-0546</h2>
      </div>
    </div>
  )
}

export default Contact
