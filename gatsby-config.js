module.exports = {
  siteMetadata: {
    title: `Caswell Construction`,
    description: `Windows, Doors and More!`,
    keywords: [
      "Caswell Construction",
      "caswellconstruction.ca",
      "Caswell Construction Delhi",
      "Caswell Construction Delhi Ontario",
      "Caswell Construction Norfolk County",
      "Caswell Construction Norfolk County Ontario",
      "small construction Norfolk County",
      "small construction Norfolk County Ontario",
      "small construction Delhi Ontario",
      "small construction Simcoe",
      "small construction Simcoe Ontario",
      "general contractor Norfolk County",
      "general contractor Norfolk County Ontario",
      "general contractor Simcoe Ontario",
      "general contractor Tillsonburg Ontario",
      "general contractor Delhi Ontario",
      "Norfolk County renovations",
      "renovation company Norfolk County Ontario",
      "renovation company Delhi Ontario",
      "renovation company Norfolk Ontario",
      "renovations Norfolk County",
      "small business Norfolk County",
      "small business Norfolk County Ontario",

      "Delhi Ontario contractors",
      "Delhi Ontario construction",
      "Nofolk County Ontario contractors",
      "Norfolk County painters",
      "Norfolk County flooring",
      "Norfolk County decking",
      "Duradek installation Norfolk County",
      "painters in Delhi Ontario",
    ],
    author: `Brandi Mummery`,
    siteUrl: `https://www.caswellconstruction.ca`,
  },

  plugins: [
    `gatsby-plugin-sitemap`,
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
