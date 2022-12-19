import React from 'react'
import { NavLink } from 'react-router-dom'
import {  navbar } from '../../utils/navbar'
import { SideNavItem, SideNavWr } from './style'

const SideNav = () => {
  return (
    <>
        <SideNavWr style={{color: "white"}}>
          {navbar.map((value)=> value.component &&(
            <NavLink to={`${value.path}`}>
            <SideNavItem>{value.title}</SideNavItem>
            </NavLink>
          ))}
        </SideNavWr>
    </>
  )
}

export default SideNav