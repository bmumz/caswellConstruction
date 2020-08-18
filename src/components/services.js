import React from "react"
import layoutStyles from "./layout/layout.module.scss"

const Services = () => {
  return (
    <div>
      <div className={layoutStyles.infoContainer}></div>
      <h1 className={layoutStyles.title} id="services">
        Our Services
      </h1>
    </div>
  )
}

export default Services
