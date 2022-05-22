// src/components/Layout.js

import { ChevronDoubleUpIcon } from '@heroicons/react/outline'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Navigation from './Navigation.js'

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
    <div className='
      bg-stone-50
      bg-[url(/img/noisy-texture-100x100-o4-d12-c-4481bd-t1.png)]
      bg-fixed
    '>
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
