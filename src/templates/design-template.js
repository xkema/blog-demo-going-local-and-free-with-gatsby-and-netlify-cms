// src/templates/design-template.js

import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
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
