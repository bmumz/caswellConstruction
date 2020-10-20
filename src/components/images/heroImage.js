import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const HeroImage = () => {
  const data = useStaticQuery(graphql`
    query {
      desktopImage: file(relativePath: { eq: "toolsDesktop.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img
      fluid={data.desktopImage.childImageSharp.fluid}
      className="image__desktop"
    />
  )
}

export default HeroImage
