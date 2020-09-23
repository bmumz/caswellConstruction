import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPaintRoller,
  faTools,
  faHammer,
  faHome,
} from "@fortawesome/free-solid-svg-icons"

const Services = () => (
  <div>
    <div className="container"></div>
    <h1 id="services">Our Services</h1>
    <div className="services">
      <div className="services__container">
        <div className="services__icon">
          <FontAwesomeIcon icon={faHome} />
        </div>

        <b className="services__title">Duradek Installation</b>
        <p className="services__blurb">
          A waterproof vinyl decking membrane that comes in various patterns,
          textures and colours.{" "}
        </p>
      </div>
      <div className="services__container">
        <div className="services__icon">
          <FontAwesomeIcon icon={faPaintRoller} />
        </div>

        <b className="services__title">Professional Painting</b>
        <p className="services__blurb">
          From small projects to large, interiors to exteriors, we offer it all
          when it comes to painting services.
        </p>
      </div>
      <div className="services__container">
        <div className="services__icon">
          <FontAwesomeIcon icon={faTools} />
        </div>
        <b className="services__title">Flooring Installation</b>
        <p className="services__blurb">
          We install it all— hardwood, vinyl, linoleum, laminate, ceramic tile,
          and of course, more rustic options.
        </p>
      </div>
      <div className="services__container">
        <div className="services__icon">
          <FontAwesomeIcon icon={faHammer} />
        </div>
        <b className="services__title">Small Renovations</b>
        <p className="services__blurb">
          From a small bathroom to a large basement— We offer services including
          reframing, drywalling and finishing.
        </p>
      </div>
    </div>
  </div>
)

export default Services
