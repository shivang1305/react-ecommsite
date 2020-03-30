require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Ecommerce Web Site`,
    description: `A basic Ecommerce website made using ReactJS(frontend) and NodeJS(backend) also 
    it uses Gatsby(open source framework of ReactJS) & Netlify for deployment which is a free 
    platform for web hosting. `,
    author: `@shivang`,
  },
  plugins: [
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    /* this (optional) plugin enables Progressive Web App + Offline functionality
       To learn more, visit: https://gatsby.dev/offline
       `gatsby-plugin-offline`, */

    /* this is gatsby-source-contentful plugin (using deleivery api) */
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },

    {
      resolve: "gatsby-plugin-snipcart",
      options: {
        apiKey: process.env.SNIPCART_KEY,
        autopop: true,
      },
    },
  ],
}
