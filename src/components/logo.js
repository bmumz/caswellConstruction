import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div>
      <div className="logo">
        <div className="logo__img">
          <Img fluid={data.logo.childImageSharp.fluid} />
        </div>

        <div className="logo__text">
          <h1 className="logo__title">Caswell</h1>
          <h3 className="logo__subtitle">Construction</h3>
        </div>
      </div>
    </div>
  )
}

export default Logo
