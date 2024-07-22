import React, { useEffect } from 'react'
import { useTheme } from '../Context/ThemeContext'

const Home = () => {  
  return (
    <div>
      {/* <h1 className=' text-3xl font-bold'>Home Page</h1> */}
      <h1 className='text-3xl font-bold dark:text-white'>Home Page</h1>
      <p className='dark:text-white'>Welcome to Home Page</p>
    </div>
  )
}

export default Home