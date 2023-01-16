import React from 'react'
import SideNav from '../SideNav'
import { ChildrenWr, LayoutWr, SideNavW } from './style'

const LaoyoutS = ({children}) => {
  return (
    <LayoutWr>
      <SideNavW>
        <SideNav/>
      </SideNavW>
    <ChildrenWr>
        {children}
    </ChildrenWr>
    </LayoutWr>
  )
}

export default LaoyoutS