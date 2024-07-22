import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'

const AppLayout = () => {
  return (
    <>
        <Navbar />
        <main className='bg-blue-400 min-h-[92vh] dark:bg-slate-500'>
            <Outlet />
        </main>
    </>
  )
}

export default AppLayout