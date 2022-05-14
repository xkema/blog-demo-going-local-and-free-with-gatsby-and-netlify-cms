// src/pages/index.js

import { graphql } from 'gatsby';
import React from 'react';

const Index = (props) => {

  console.log(props.data);
  
  return (
    <div>
      <h1>Hello Gatsby!</h1>
      <p>(with bare minimums)</p>
      <ul>
        {
          props.data.allMarkdownRemark.edges.map((edge) => {
            return (
              <li key={edge.node.id}>
                <h1>{edge.node.frontmatter.title}</h1>
                <p>{edge.node.frontmatter.description}</p>
              </li>
            );
          })
        }
      </ul>
    </div>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            contentKey
            description
          }
        }
      }
    }
  }
`

export default Index
