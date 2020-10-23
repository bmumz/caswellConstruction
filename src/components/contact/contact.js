import React from "react"
import ContactForm from "./contactForm"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMobileAlt, faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"

const Contact = () => {
  return (
    <div>
      <div id="contact" className="contact">
        <div className="container">
          <h1 className="contact__title">Contact Us</h1>
          <div className="contact__container">
            <div className="contact__blurb">
              <h2>Request your free quote today!</h2>
              <p>
                We'd be happy to answer any questions you may have about your
                next project!
              </p>
              <p>
                Please fill out the contact form, or get in touch in any of the
                following ways:
              </p>
              <p className="contact__method">
                <FontAwesomeIcon icon={faMobileAlt} /> 226-206-0546
              </p>
              <p className="contact__method">
                <FontAwesomeIcon icon={faEnvelopeOpen} />{" "}
                caswellconstruction03@gmail.com
              </p>
              <p className="contact__method">
                <a
                  href="https://www.facebook.com/caswellconstruction03"
                  target="_blank"
                  rel="noreferrer"
                  className="contact--link"
                >
                  <FontAwesomeIcon icon={faFacebook} /> Caswell Construction
                </a>
              </p>
              <p className="contact__method">
                <a
                  href="https://www.instagram.com/caswellconstruction03"
                  target="_blank"
                  rel="noreferrer"
                  className="contact--link"
                >
                  <FontAwesomeIcon icon={faInstagram} /> @caswellconstruction03
                </a>
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
