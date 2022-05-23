// src/templates/designs-template.js

import { graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react'
import Layout from '../components/Layout.js';
import PageHeader from '../components/PageHeader.js';


const DesignsTemplate = (props) => {

  console.log(props.data);

  return (
    <Layout page={props.data.markdownRemark.frontmatter}>
      <PageHeader frontmatter={props.data.markdownRemark.frontmatter} />
      <div className='container py-8 px-4 md:px-0'>
        <div
          dangerouslySetInnerHTML={{
            __html: props.data.markdownRemark.html
          }}
          className='
            prose
            prose-p:text-stone-900
            mb-6
        '>
        </div>
        <ul className='
          grid
          gap-4
          md:grid-cols-3
          place-items-center
        '>
          {
            props.data.allMarkdownRemark.edges.map((edge) => {
              return (
                <li key={edge.node.id} className='
                  bg-stone-100
                  rounded-lg
                  overflow-clip
                  shadow
                '>
                  <GatsbyImage
                    image={edge.node.frontmatter.featuredImage.childImageSharp.gatsbyImageData}
                    alt={"Please always fill the alternative text attributes!"}
                  />
                  <div className='
                    text-center
                    p-4
                    space-y-2
                  '>
                    <h1 className='text-lg font-medium'>{edge.node.frontmatter.title}</h1>
                    <p>{edge.node.frontmatter.description}</p>
                    <Link to={edge.node.fields.slug} title={edge.node.fields.slug} className='
                      bg-stone-200
                      inline-block
                      py-2 px-4
                      rounded-full
                      transition-colors
                      hover:bg-stone-300
                    '>
                      See the Detail
                    </Link>
                  </div>
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
            featuredImage {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`

export default DesignsTemplate
