import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"

import ContactForm from "./contactForm"

const Contact = () => {
  return (
    <div>
      <div id="contact" className="contact">
        <div className="container">
          <h1 className="contact__title">Contact Us</h1>

          <div className="contact__container">
            <div className="contact__methodContainer">
              <p className="contact__method">
                <FontAwesomeIcon icon={faMobileAlt} /> 226-206-0546
              </p>
              <p className="contact__method">
                <FontAwesomeIcon icon={faFacebook} />{" "}
                <a
                  href="https://www.facebook.com/caswellconstruction03"
                  target="_blank"
                  rel="noreferrer"
                  className="contact--link"
                >
                  Caswell Construction
                </a>
              </p>
              <p className="contact__method">
                <FontAwesomeIcon icon={faInstagram} />{" "}
                <a
                  href="https://www.instagram.com/caswellconstruction03"
                  target="_blank"
                  rel="noreferrer"
                  className="contact--link"
                >
                  @caswellconstruction03
                </a>
              </p>
              <p className="contact__blurb">
                {" "}
                We'd be happy to answer any questions you may have about your
                next project— and provide a free quote!
              </p>
              <p className="contact__blurb">
                Please fill out the form below and we'll be in touch as soon as
                possible.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
