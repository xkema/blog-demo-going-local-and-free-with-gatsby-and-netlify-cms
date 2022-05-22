// src/templates/page-template.js

import { graphql } from 'gatsby';
import React from 'react'
import Layout from '../components/Layout.js';
import PageHeader from '../components/PageHeader.js';

const PageTemplate = (props) => {

  console.log(props.data);

  return (
    <Layout>
      <PageHeader frontmatter={props.data.markdownRemark.frontmatter} />
      <div className='container py-4 px-4 md:px-0'
        dangerouslySetInnerHTML={{
          __html: props.data.markdownRemark.html
        }}>
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
