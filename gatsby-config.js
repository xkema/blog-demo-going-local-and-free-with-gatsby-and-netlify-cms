// gatsby-config.js

/**
 * A flag to control Netlify CMS avbailability on production builds.
 * (CMS will only be avaiable on local development environment.)
 */
let includeNetlifyCms = process.env.NODE_ENV === 'development';

/**
 * Reference as a variable to modify it on runtime.
 */
const gatsbyConfig = {
  pathPrefix: `/blog-demo-going-local-and-free-with-gatsby-and-netlify-cms`,
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/uploads/`,
        name: `uploads`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/`,
        name: `pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/`,
        name: `content`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1024,
              linkImagesToOriginal: false,
              showCaptions: true,
            }
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Quicksand:300,400,500,600,700']
        }
      }
    },
  ]
}

// Include Netlify CMS plugin if environment is local. (See the top!)
if (includeNetlifyCms) {
  gatsbyConfig.plugins.push(`gatsby-plugin-netlify-cms`);
}

module.exports = gatsbyConfig;
