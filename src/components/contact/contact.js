import React from "react"
import contactStyles from "../contact/contact.module.scss"
import layoutStyles from "../layout/layout.module.scss"

const Contact = () => {
  return (
    <div>
      <div className={contactStyles.infoContainer}>
        <h1 className={layoutStyles.title} id="contact">
          Contact Us
        </h1>
        Call or text
        <h2 className={contactStyles.subtitle}>226-206-0546</h2>
      </div>
    </div>
  )
}

export default Contact
