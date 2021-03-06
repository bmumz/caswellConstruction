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
      "general contractors Norfolk County",
      "general contractors Norfolk County Ontario",
      "general contractors Simcoe",
      "general contractors Simcoe Ontario",
      "general contractors Tillsonburg",
      "general contractors Tillsonburg Ontario",
      "general contractors Brantford",
      "general contractors Brantford Ontario",
      "general contractor Norfolk County",
      "general contractor Norfolk County Ontario",
      "general contractor Simcoe Ontario",
      "general contractor Tillsonburg Ontario",
      "general contractor Delhi Ontario",
      "Norfolk County painters",
      "Norfolk County drywall",
      "Norfolk County decks",
      "Norfolk County exterior painting",
      "Norfolk County interior painting",
      "Norfolk County renovations",
      "renovation company Norfolk County Ontario",
      "renovation company Delhi Ontario",
      "renovation company Delhi ",
      "renovation company Norfolk Ontario",
      "renovations Norfolk County",
      "small business Norfolk County",
      "small business Norfolk County Ontario",
      "Benjamin Moore",
      "sponsored by Benjamin Moore",
      "Delhi Ontario contractors",
      "Delhi Ontario construction",
      "Delhi Ontario general contractor",
      "Nofolk County Ontario contractors",
      "Norfolk County painters",
      "Norfolk County flooring",
      "Norfolk County decking",
      "Duradek installation Norfolk County",
      "painters in Delhi Ontario",
      "flooring in Delhi Ontario",
      "flooring in Norfolk County",
      "flooring installation in Norfolk County",
      "flooring installation in Delhi Ontario",
      "drywall contractor Delhi",
      "drywall contractor Delhi, Ontario",
      "drywall contractor Norfolk County",
      "drywall contractor Norfolk County Ontario",
      "drywall services Delhi Ontario",
      "carpet installation Delhi Ontario",
      "carpet installation Delhi",
      "carpet installation Norfolk",
      "carpet installation Norfolk County Ontario",
      "carpet installation Norfolk County",
    ],
    author: `Brandi Mummery`,
    siteUrl: `https://www.caswellconstruction.ca`,
  },

  plugins: [
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.caswellconstruction.ca",
        sitemap: "https://www.caswellconstruction.ca/sitemap.xml",
      },
    },
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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || "none",
        head: true,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-embedder"
        ],
      },
    },
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-instagram-embed`,
  
   
  ],
}
