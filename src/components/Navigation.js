// src/components/Navigation.js

import { Link } from 'gatsby'
import React, { useState } from 'react'
import { MenuIcon, ScissorsIcon, XIcon } from '@heroicons/react/outline'

const Navigation = (props) => {

  const [navbarStatus, setNavbarStatus] = useState(false);
  /**
   * Hamburger menu controls
   */
  const handleNavbarClick = () => {
    setNavbarStatus((prevState) => {
      return !prevState;
    });
  }

  return (
    <nav className='
      bg-gradient-to-r from-stone-100 to-stone-300
      shadow
      relative
      md:flex md:no-wrap md:items-center
    '>
      <div className='py-5 px-5'>
        <span className='block w-6 h-6'>
          <ScissorsIcon className='stroke-stone-500' />
        </span>
      </div>
      <div className={`
        bg-stone-50
        absolute
        shadow
        ${!navbarStatus ? 'hidden' : 'block'}
        top-full
        w-full
        divide-y divide-stone-200 divide-dashed
        text-stone-500
        font-medium
        md:bg-transparent
        md:block
        md:relative
        md:shadow-none
        md:w-auto
        md:divide-y-0 md:divide-x
      `}>
        <Link to='/' activeClassName='bg-white/50' className='
          block
          px-5 py-3
          md:py-5
          transition-colors
          hover:bg-white/50
          md:inline-block
        '>
          Home
        </Link>
        <Link to='/about' activeClassName='bg-white/50' className='
          block
          px-5 py-3
          md:py-5
          transition-colors
          hover:bg-white/50
          md:inline-block
        '>
          About
        </Link>
        <Link to='/designs' activeClassName='bg-white/50' className='
          block
          px-5 py-3
          md:py-5
          transition-colors
          hover:bg-white/50
          md:inline-block
        '>
          Designs
        </Link>
        <Link to='/contact' activeClassName='bg-white/50' className='
          block
          px-5 py-3
          md:py-5
          transition-colors
          hover:bg-white/50
          md:inline-block
        '>
          Contact
        </Link>
      </div>
      <div className='py-5 px-5 absolute top-0 right-0 md:hidden'>
        <button className='w-6 h-6 block' onClick={handleNavbarClick}>
          {
            !navbarStatus ? <MenuIcon className='stroke-stone-500' /> : <XIcon className='stroke-stone-500' />
          }
        </button>
      </div>
    </nav>
  )
}

export default Navigation
