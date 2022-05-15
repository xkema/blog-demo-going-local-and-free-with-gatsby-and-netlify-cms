// src/templates/page-template.js

import { graphql } from 'gatsby';
import React from 'react'

const PageTemplate = (props) => {

  console.log(props.data);

  return (
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
