import React from 'react'
import { Cont, IMG, P } from './style'
import nodata from './../../assets/svg/noData.svg'

const NoData = () => {
  return (
    <Cont>
        <IMG src={nodata}/>
        <P>No Data</P>
    </Cont>
  )
}

export default NoData