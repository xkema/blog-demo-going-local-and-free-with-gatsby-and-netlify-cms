// gatsby-config.js

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/`,
        name: `content`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-netlify-cms`
  ]
}
