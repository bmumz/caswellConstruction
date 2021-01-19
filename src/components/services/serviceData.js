import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPaintRoller,
  faTools,
  faHammer,
  faScroll,
} from "@fortawesome/free-solid-svg-icons"

export const ServiceData = [
  {
    icon: <FontAwesomeIcon icon={faScroll} />,
    name: "Duradek Installation",
    description:
      "A waterproof vinyl decking membrane that comes in various patterns, textures and colours.",
  },
  {
    icon: <FontAwesomeIcon icon={faPaintRoller} />,
    name: "Professional Painting",
    description:
      "From small projects to large, interiors to exteriors, we offer it all when it comes to paint services!",
  },
  {
    icon: <FontAwesomeIcon icon={faTools} />,
    name: "Flooring Installation",
    description:
      "We install it all— hardwood, vinyl, linoleum, laminate, ceramic, tile, and of course, more rustic options!",
  },
  {
    icon: <FontAwesomeIcon icon={faHammer} />,
    name: "Small Renovations",
    description:
      "From bathrooms to basements— we offer services including reframing, drywalling and finishing. ",
  },
]
