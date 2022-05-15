// src/components/Layout.js

import React from 'react'
import Navigation from './Navigation.js'

const Layout = (props) => {
  return (
    <div className="Layout">
      <header>
        <Navigation />
      </header>
      <main>
        {props.children}
      </main>
      <footer>
        <Navigation />
      </footer>
    </div>
  )
}

export default Layout
