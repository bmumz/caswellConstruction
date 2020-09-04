import React from "react"
import layoutStyles from "./layout/layout.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPaintRoller,
  faTools,
  faHammer,
} from "@fortawesome/free-solid-svg-icons"

const Services = () => {
  return (
    <div>
      <div className={layoutStyles.infoContainer}></div>
      <h1 className={layoutStyles.title} id="services">
        Our Services
        <div className={layoutStyles.rowContainer}>
          <div className={layoutStyles.serviceBlobs}>
            <FontAwesomeIcon icon={faTools} />
          </div>
          <div className={layoutStyles.serviceBlobs}>
            <FontAwesomeIcon icon={faHammer} />
          </div>
          <div className={layoutStyles.serviceBlobs}>
            <FontAwesomeIcon icon={faPaintRoller} />
          </div>
        </div>
      </h1>
    </div>
  )
}

export default Services
