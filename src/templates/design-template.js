// src/templates/design-template.js

import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react'
import Layout from '../components/Layout.js';
import PageHeader from '../components/PageHeader.js';

const DesignTemplate = (props) => {

  console.log(props.data);

  return (
    <Layout page={props.data.markdownRemark.frontmatter}>
      <PageHeader frontmatter={props.data.markdownRemark.frontmatter} />
      <div className='
        container
        py-8 px-4 md:px-0
      '>
        <div className='
          grid
          gap-4
          grid-cols-1
          md:grid-cols-2
        '>
          {
            props.data.markdownRemark.frontmatter.images &&
            props.data.markdownRemark.frontmatter.images.map((data) => {
              return (
                <div key={data.image.id}>
                  <div className='shadow rounded-lg overflow-clip'>
                    <GatsbyImage
                      image={data.image.childImageSharp.gatsbyImageData}
                      alt={data.title}
                    />
                  </div>
                  <div className='text-sm text-center leading-4 mt-1 p-1 rounded-lg'>
                    <h1 className='font-medium text-stone-700'>{data.title}</h1>
                    <p className='text-stone-500'>{data.description}</p>
                  </div>
                </div>
              );
            })
          }
          <div className='md:col-span-2'>
            <GatsbyImage
              image={props.data.markdownRemark.frontmatter.featuredImage.childImageSharp.gatsbyImageData}
              alt={"Please always fill the alternative text attributes!"}
            />
          </div>
        </div>
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
        featuredImage {
          childImageSharp {
            gatsbyImageData
            resize(width: 1200, height: 630, fit: CONTAIN, background: "#fafaf9") {
              src
            }
          }
        }
        images {
          title
          description
          image {
            id
            childImageSharp {
              gatsbyImageData(
                aspectRatio: 1
                transformOptions: {fit: COVER}
              )
            }
          }
        }
      }
    }
  }
`

export default DesignTemplate
