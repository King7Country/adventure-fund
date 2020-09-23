require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})



module.exports = {
  siteMetadata: {
    title: `Adventure Fund`,
    description: `Site template built using React and Gatsby, content queried with GraphQL from Contentful CMS. Continuous deployment using Netlify and Git.`,
    author: `King Country Web Development`,
    keywords: `web development, web design, freelance, web developer, template, react, gatsby, contentful`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-162021154-2",
        head: true,
      },
    },
    'gatsby-plugin-emotion',
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
    resolve: 'gatsby-source-contentful',
    options: {
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-lodash`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images/
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Open sans \:300,400,400i,700` // you can also specify font weights and styles
        ],
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Adventure Fund`,
        short_name: `AF`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#baccdd`,
        display: `standalone`,
        icon: `src/images/kingcountry-icon.png`, // This path is relative to the root of the site.
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,

  ],
}
