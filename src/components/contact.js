import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMobileAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons"

const Contact = () => {
  return (
    <div>
      <h1 id="contact">Contact Us</h1>
      <div className="contact">
        <div className="contact__container">
          <div className="contact__icon">
            <FontAwesomeIcon icon={faMobileAlt} />
          </div>

          <h2 className="contact__phone">226-206-0546</h2>
        </div>
        <div className="contact__container">
          <div className="contact__icon">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>

          <h2 className="contact__email">email form</h2>
        </div>
      </div>
    </div>
  )
}

export default Contact
