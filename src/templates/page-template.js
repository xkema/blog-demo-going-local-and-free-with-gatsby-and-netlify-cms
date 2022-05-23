// src/templates/page-template.js

import { graphql } from 'gatsby';
import React from 'react'
import Layout from '../components/Layout.js';
import PageHeader from '../components/PageHeader.js';

const PageTemplate = (props) => {

  console.log(props.data);

  return (
    <Layout page={props.data.markdownRemark.frontmatter}>
      <PageHeader frontmatter={props.data.markdownRemark.frontmatter} />
      <div
        dangerouslySetInnerHTML={{
          __html: props.data.markdownRemark.html
        }}
        className='
          container
          py-8 px-4
          md:px-0
          prose
          prose-p:text-stone-900
          prose-img:rounded-lg
      '>
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
        featuredImage {
          childImageSharp {
            gatsbyImageData
            resize(width: 1200, height: 630, fit: CONTAIN, background: "#fafaf9") {
              src
            }
          }
        }
      }
      html
    }
  }
`

export default PageTemplate
