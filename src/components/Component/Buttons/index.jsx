import React, { useEffect, useState } from 'react'
import ComponentTable from '../../Generic/ComponentTable'
import axios from 'axios'
import NoData from '../../Generic/NoData'
import { Nodat } from '../Inputs/style'

const Buttons = () => {
  const [button, setButton]= useState(null)

// https://647880a0362560649a2dea0d.mockapi.io/ui/component/buttons
// this is code and data from backend
useEffect(() => {
  axios.get('https://647880a0362560649a2dea0d.mockapi.io/ui/component/buttons')
    .then(response => {
      setButton(response.data);
    })
    .catch(error => {
      console.error(error);
    });
}, []);

console.log(button, 'user malumot');

  return (
    <>
    {button ?
    <div style={{color: "white"}}>
      {button.map(dat=>
    <ComponentTable key={dat.id} Content={dat.component} Title={dat.name} Descriptions={dat.code} code={dat.code}/>
        )}
    </div>
    :
    undefined
}
  </>
  )
}

export default Buttons