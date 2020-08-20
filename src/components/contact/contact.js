import React from "react"
import contactStyles from "../contact/contact.module.scss"

const Contact = () => {
  return (
    <div>
      <div className={contactStyles.infoContainer}>
        <h1 className={contactStyles.title} id="contact">
          Contact Us
        </h1>
        Call or text
        <h2 className={contactStyles.title}>226-206-0546</h2>
      </div>
    </div>
  )
}

export default Contact
