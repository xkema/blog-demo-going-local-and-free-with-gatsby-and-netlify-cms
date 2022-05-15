// src/templates/page-template.js

import { graphql } from 'gatsby';
import React from 'react'
import Layout from '../components/Layout.js';

const PageTemplate = (props) => {

  console.log(props.data);

  return (
    <Layout>
      <div>
        <h1>Page Template</h1>
        <h2>{props.data.markdownRemark.frontmatter.title}</h2>
        <p>{props.data.markdownRemark.frontmatter.description}</p>
        <div
          dangerouslySetInnerHTML={{
            __html: props.data.markdownRemark.html
          }}>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($pageId: String = "") {
    markdownRemark(id: { eq: $pageId }) {
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
  }
`

export default PageTemplate
