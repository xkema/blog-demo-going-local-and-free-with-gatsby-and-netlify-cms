// gatby-node.js

const { accessSync, constants } = require('fs');
const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: {
          # Same filter duplicated here to demonstrate. One is adequate to filter the "pages" collection.
          frontmatter: {contentKey: {in: ["page", "design"]}},
          fields: {slug: {ne: null}}
        }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              contentKey
            }
          }
        }
      }
    }
  `);

  result.data.allMarkdownRemark.edges.forEach((edge) => {
    // Assumption 1: Every page has a template with its slug in "{{slug}}-template.js" format.
    let pageTemplatePath = path.resolve(`./src/templates/${edge.node.fields.slug.replaceAll('/', '')}-template.js`);
    // Add a special case for the index layout (We need to match the slug "/" to "index-template.js" manually.)
    if (edge.node.fields.slug === '/') {
      pageTemplatePath = path.resolve(`./src/templates/index-template.js`);
    }
    // Check if there is a template for the target page. If not fallback to the default template.
    // If any layout won't be used by any page, there will be a warning message in the Gatsby build logs like "The GraphQL query in the non-page component". That's OK!
    try {
      accessSync(pageTemplatePath, constants.R_OK | constants.W_OK)
    } catch (err) {
      // Assumption 2: Every page has a template with its "contentKey" in "{{contentKey}}-template.js" format.
      pageTemplatePath = path.resolve(`./src/templates/${edge.node.frontmatter.contentKey}-template.js`);
      try {
        accessSync(pageTemplatePath, constants.R_OK | constants.W_OK)
      } catch (err) {
        // Assumption 3: Every page falls back to the `default-template.js` it there is no custom template for it.
        pageTemplatePath = path.resolve(`./src/templates/default-template.js`)
      }
    }

    createPage({
      path: edge.node.fields.slug,
      component: pageTemplatePath,
      context: {
        pageId: edge.node.id,
      },
    });
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    // Create node filed "slug" for only "page" and "design" content types.
    // At least a single page with a "contentKey" has to be exist! If not you should add manually to the markdown files!
    if (['page', 'design'].includes(node.frontmatter.contentKey)) {
      const slug = createFilePath({ node, getNode, basePath: `src` });
      createNodeField({
        node,
        name: `slug`,
        value: slug,
      });
    }
  }
}
