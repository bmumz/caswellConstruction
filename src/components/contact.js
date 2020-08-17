import React from "react"
import bodyStyles from "./layout/body.module.scss"

const Contact = () => {
  return (
    <div>
      <div className={bodyStyles.infoContainer}>
        <h1 className={bodyStyles.title} id="contact">
          Contact Us
        </h1>
        Call or text
        <h2 className={bodyStyles.phone}>226-206-0546</h2>
      </div>
    </div>
  )
}

export default Contact
