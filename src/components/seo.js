import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, keywords, description }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          keywords
          siteUrl
        }
      }
    }
  `)
  return (
    <Helmet>
      <html lang="en" />
      <title>{`${title} `}</title>

      <meta property="og:title" content={`${title}`} />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        name="description"
        content={`${description}`}
      />
      <meta
        name="keywords"
        content={`${keywords} ${data.site.siteMetadata.keywords}`}
      />
      <meta name="author" content={data.site.siteMetadata.author} />
      <meta
        property="og:url"
        name="url"
        content={data.site.siteMetadata.siteUrl}
      />
      <meta
        property="og:image"
        content="https://i.ibb.co/R47CzV1/tools-Desktop.png"
      />
    </Helmet>
  )
}

export default SEO
