import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../shared/Footer'
import Navbar from '../shared/Navbar'

const Main = () => {
  const location = useLocation()
  const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup')
  return (
    <div className='w-11/12 mx-auto'>
        {noHeaderFooter || <Navbar></Navbar>}
        <Outlet></Outlet>
        {noHeaderFooter || <Footer></Footer>}
    </div>
  )
}

export default Main