// src/components/Navigation.js

import { Link } from 'gatsby'
import React from 'react'

const Navigation = (props) => {
  return (
    <nav>
      <Link to='/'>/index</Link>
      <Link to='/about'>/about</Link>
      <Link to='/designs'>/designs</Link>
    </nav>
  )
}

export default Navigation
