// src/templates/design-template.js

import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react'
import Layout from '../components/Layout.js';
import PageHeader from '../components/PageHeader.js';

const DesignTemplate = (props) => {

  console.log(props.data);

  return (
    <Layout>
      <PageHeader frontmatter={props.data.markdownRemark.frontmatter} />
      <div className='
        container
        py-4 px-4 md:px-0
      '>
        <GatsbyImage
          image={props.data.markdownRemark.frontmatter.image.childImageSharp.gatsbyImageData}
          alt={"Please always fill the alternative text attributes!"}
        />
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
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export default DesignTemplate
