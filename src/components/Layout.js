// src/components/Layout.js

import { ChevronDoubleUpIcon } from '@heroicons/react/outline'
import React from 'react'
import Navigation from './Navigation.js'

const Layout = (props) => {
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
        <Navigation />
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
      </footer>
    </div>
  )
}

export default Layout
