import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Main() {
  let footerStyle = {
    minHeight: "70.2vh",
    margin: "50px auto",
  };
  return (
    <div className='text-center'>
      <Navbar></Navbar>
      <div style={footerStyle}>
      <Outlet />
      </div>
      <Footer></Footer>
    </div>
  )
}
