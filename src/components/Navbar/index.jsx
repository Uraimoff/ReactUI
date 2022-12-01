import React from 'react'
import { Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div>
        <div>Navbar</div>
        <Outlet/>
    </div>
    </>
  )
}

export default Navbar