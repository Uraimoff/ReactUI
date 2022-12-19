import React from 'react'
import SideNav from '../../SideNav'
import Buttons from '../Buttons'

const AllComponent = () => {
    const component =[
        {
            element: <Buttons/>
        }
    ]

  return (
    <>
    <SideNav/>
    <div>{component.map((item)=>item.element)}</div>
    </>
  )
}

export default AllComponent