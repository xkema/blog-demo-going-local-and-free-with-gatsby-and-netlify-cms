// gatby-node.js

const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: {
          # Same filter duplicated here to demonstrate. One is adequate to filter the "pages" collection.
          frontmatter: {contentKey: {eq: "page"}},
          fields: {slug: {ne: null}}
        }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  result.data.allMarkdownRemark.edges.forEach((edge) => {
    createPage({
      path: edge.node.fields.slug,
      component: path.resolve(`./src/templates/default-template.js`)
    });
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    // Create node filed "slug" for only "page" content.
    // At least a single page with a "contentKey" has to be exist! If not you should add manually to the markdown files!
    if (node.frontmatter.contentKey === 'page') {
      const slug = createFilePath({ node, getNode, basePath: `src/pages` });
      createNodeField({
        node,
        name: `slug`,
        value: slug,
      });
    }
  }
}
