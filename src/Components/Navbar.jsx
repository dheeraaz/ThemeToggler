import React from 'react'
import { NavLink } from 'react-router-dom'
import ToggleBtn from './ToggleBtn'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center px-8 min-h-[8vh] bg-blue-800 dark:bg-slate-800'>
        <div className='flex gap-6 text-lg dark:text-white'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/blog'>Blog</NavLink>
        </div>
        <div>
          <ToggleBtn />
        </div>
    </nav>
  )
}

export default Navbar