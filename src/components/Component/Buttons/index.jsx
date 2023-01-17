import React from 'react'
import ComponentTable from '../../ComponentTable'
// import NoData from '../../NoData'
// import { Nodat } from '../Inputs/style'

const Buttons = () => {
  const ButtonPrimary=(
    <div>Hello</div>
  )
  return (
    <div style={{color: "white"}}>
    <ComponentTable Content={ButtonPrimary} Title={'Title de Button'} Descriptions={'Description de Button'}/>
    {/* <Nodat>
    <NoData/>
    </Nodat> */}
    </div>
  )
}

export default Buttons