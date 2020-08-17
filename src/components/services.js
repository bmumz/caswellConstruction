import React from "react"
import bodyStyles from "./layout/body.module.scss"

const Services = () => {
  return (
    <div>
      <div className={bodyStyles.infoContainer}></div>
      <h1 className={bodyStyles.title} id="services">
        Our Services
      </h1>
    </div>
  )
}

export default Services
