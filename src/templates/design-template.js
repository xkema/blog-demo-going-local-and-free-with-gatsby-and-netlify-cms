// src/templates/design-template.js

import { graphql } from 'gatsby';
import React from 'react'
import Layout from '../components/Layout.js';

const DesignTemplate = (props) => {

  console.log(props.data);

  return (
    <Layout>
      <div>
        <h1>Design Content Template</h1>
        <div>{props.data.markdownRemark.frontmatter.title}</div>
        <div>{props.data.markdownRemark.frontmatter.description}</div>
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
      frontmatter {
        title
        description
      }
    }
  }
`

export default DesignTemplate
