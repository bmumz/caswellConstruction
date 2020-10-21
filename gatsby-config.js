module.exports = {
  siteMetadata: {
    title: `Caswell Construction`,
    description: `Windows, Doors and More!`,
    keywords: [
      "Caswell Construction",
      "general contractor Norfolk County",
      "general contractor Delhi Ontario",
      "Norfolk County renovations",
      "renovations Norfolk County",
      "small business Norfolk County",
      "Delhi Ontario contractors",
      "Delhi Ontario construction",
      "Nofolk County Ontario contractors",
      "Norfolk County painters",
      "Norfolk County flooring",
      "Norfolk County decking",
      "Duradek installation Norfolk County",
      "painters in Delhi",
    ],
    author: `Brandi Mummery`,
    siteUrl: `https://www.caswellconstruction.ca`,
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
