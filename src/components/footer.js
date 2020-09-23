import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMobileAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons"

const Footer = () => {
  return (
    <div>
      {/* <div className="footer__contact">
        <p className="footer__title">Contact</p>
        <p>
          {" "}
          <FontAwesomeIcon icon={faMobileAlt} />
        </p>{" "}
        <p> 226-206-0546</p>
      </div> */}
      <div className="footer footer--copyright">
        © 2020 Caswell Construction. All Rights Reserved.
      </div>
    </div>
  )
}

export default Footer
