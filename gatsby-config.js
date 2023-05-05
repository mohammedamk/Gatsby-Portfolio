/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

const { title } = require('process')

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  // plugins: [
  //   "gatsby-transformer-remark",
  //   {
  //     resolve: `gatsby-source-filesystem`,
  //     options: {
  //       name: `markdown`,
  //       path: `${__dirname}/src/markdown/`,
  //     },
  //   },
  // ],

  siteMetadata: {
    title: "Web-Warrior",
    description: "Web dev portfolio",
    copyright: "This web Site is copyright@2023-Vowel web"
  },
}
