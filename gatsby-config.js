module.exports = {
  siteMetadata: {
    title: `Caswell Construction`,
    description: `Windows, Doors and More!`,
    author: `@gatsbyjs`,
  },

  plugins: [
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-embedder",
            options: {
              customTransformers: [
                // Your custom transformers
              ],
              services: {
                // The service-specific options by the name of the service
              },
            },
          },
        ],
      },
    },

    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `caswell`,
        short_name: `caswell-construction`,
        start_url: `/`,
        background_color: `#444444`,
        theme_color: `#444444`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
  ],
}
