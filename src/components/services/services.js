import React from "react"
import { ServiceData } from "./serviceData"

export default function Services() {
  return (
    <>
      <h1 id="services">Our Services</h1>
      <div className="services">
        {ServiceData.map((service, index) => (
          <div key={index} className="test">
            <span className="service__icon">{service.icon}</span>
            <span className="service__title">{service.name}</span>
            <span className="service__blurb">{service.description}</span>
          </div>
        ))}
      </div>
    </>
  )
}
