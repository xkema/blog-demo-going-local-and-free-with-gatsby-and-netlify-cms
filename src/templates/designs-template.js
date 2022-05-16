// src/templates/designs-template.js

import { graphql, Link } from 'gatsby';
import React from 'react'
import Layout from '../components/Layout.js';

const DesignsTemplate = (props) => {

  console.log(props.data);

  return (
    <Layout>
      <div>
        <h1>Designs Page Template</h1>
        <h2>{props.data.markdownRemark.frontmatter.title}</h2>
        <p>{props.data.markdownRemark.frontmatter.description}</p>
        <div
          dangerouslySetInnerHTML={{
            __html: props.data.markdownRemark.html
          }}>
        </div>
        <ul>
          {
            props.data.allMarkdownRemark.edges.map((edge) => {
              return (
                <li key={edge.node.id}>
                  <h1>{edge.node.frontmatter.title}</h1>
                  <p>{edge.node.frontmatter.description}</p>
                  <Link to={edge.node.fields.slug}>{edge.node.fields.slug}</Link>
                </li>
              );
            })
          }
        </ul>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($pageId: String = "") {
    markdownRemark(
      id: { eq: $pageId }
    ) {
      id
      fields {
        slug
      }
      frontmatter {
        title
        description
      }
      html
    }
    allMarkdownRemark(
      filter: {frontmatter: {contentKey: {eq: "design"}}}
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            description
          }
        }
      }
    }
  }
`

export default DesignsTemplate
