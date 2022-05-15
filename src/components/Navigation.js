// src/components/Navigation.js

import { Link } from 'gatsby'
import React from 'react'

const Navigation = (props) => {
  return (
    <nav>
      <Link to='/' activeStyle={{"fontWeight": "bold"}}>/index</Link>
      <Link to='/about' activeStyle={{"fontWeight": "bold"}}>/about</Link>
      <Link to='/designs' activeStyle={{"fontWeight": "bold"}}>/designs</Link>
    </nav>
  )
}

export default Navigation
