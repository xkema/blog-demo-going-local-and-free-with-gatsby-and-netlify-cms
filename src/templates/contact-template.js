import { graphql } from 'gatsby';
import React from 'react'
import Layout from '../components/Layout.js';
import PageHeader from '../components/PageHeader.js';

const ContactTemplate = (props) => {

  console.log(props);

  return (
    <Layout>
      <PageHeader frontmatter={props.data.markdownRemark.frontmatter} />
      <div
        dangerouslySetInnerHTML={{
          __html: `
            ${props.data.markdownRemark.html}
            <ul>
              <li>
                <a href="mailto:${props.data.settings.frontmatter.settings.email}" rel="noreferrer nofollow">
                  Mail
                </a>
              </li>
              <li>
                <a href="${props.data.settings.frontmatter.settings.facebook}" rel="noreferrer nofollow">
                  Facebook
                </a>
              </li>
              <li>
                <a href="${props.data.settings.frontmatter.settings.twitter}" rel="noreferrer nofollow">
                  Twitter
                </a>
              </li>
              <li>
                <a href="${props.data.settings.frontmatter.settings.youtube}" rel="noreferrer nofollow">
                  YouTube
                </a>
              </li>
            </ul>
          `
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
      }
      html
    }
    settings: markdownRemark(frontmatter: {contentKey: {eq: "setting"}}) {
      frontmatter {
        title
        description
        settings {
          siteTitle
          email
          facebook
          twitter
          youtube
        }
      }
    }
  }
`

export default ContactTemplate
