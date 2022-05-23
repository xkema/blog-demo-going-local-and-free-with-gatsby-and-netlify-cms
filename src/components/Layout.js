// src/components/Layout.js

import { ChevronDoubleUpIcon } from '@heroicons/react/outline'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Navigation from './Navigation.js'
import Seo from './Seo.js'

const Layout = (props) => {

  // Get settings data for.
  const settings = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: {contentKey: {eq: "setting"}}) {
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
  `)

  return (
    <div>
      <Seo page={props.page} settings={settings.markdownRemark.frontmatter.settings} />
      <header className='
        sticky
        top-0
        z-30
      '>
        <Navigation settings={settings.markdownRemark.frontmatter.settings} />
      </header>
      <main>
        {props.children}
      </main>
      <footer className='
        bg-gradient-to-r from-stone-800 to-stone-900
        text-stone-200
        text-center
        py-8 px-4
      '>
        <span className='inline-block w-5 h-5'>
          <ChevronDoubleUpIcon />
        </span>
        <hr className='my-4 mx-[25vw] border-stone-600' />
        <p>{settings.markdownRemark.frontmatter.settings.siteTitle}</p>
      </footer>
    </div>
  )
}

export default Layout
