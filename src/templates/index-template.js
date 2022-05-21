import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react'
import Layout from '../components/Layout.js';

const IndexTemplate = (props) => {

  console.log(props.data);

  return (
    <Layout>
        <div className='
          container
          flex
          flex-col
          justify-evenly
          items-center
          px-4
          min-h-[80vh]
        '>
          <div className='text-center p-4'>
            <h1 className='text-3xl text-stone-700'>Hola Mundo!</h1>
            <h2 className='text-stone-500'>I'm a designer!</h2>
          </div>
          <div className='
            bg-stone-100
            p-4 mb-4
            shadow
            border border-stone-200
          '>
            <GatsbyImage
              image={props.data.markdownRemark.frontmatter.featuredImage.childImageSharp.gatsbyImageData}
              alt={"Please always fill the alternative text attributes!"}
            />
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
        featuredImage {
          childImageSharp {
            gatsbyImageData(
              aspectRatio: 1
              transformOptions: {fit: COVER, cropFocus: CENTER}
            )
          }
        }
      }
      html
    }
  }
`

export default IndexTemplate
