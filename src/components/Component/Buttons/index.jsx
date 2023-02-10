import React from 'react'
import ComponentTable from '../../ComponentTable'
// import NoData from '../../NoData'
// import { Nodat } from '../Inputs/style'

const Buttons = () => {
  const ButtonPrimary=
   
     <div>Hello muchachos</div>
    
  
  const Stringed= ('"', ButtonPrimary, '"')
  console.log(typeof '`',ButtonPrimary,'`', "stringed");

  var myHTML= "<div><h1>Jimbo.</h1><p>That's what she said</p></div>";

var strippedHtml = myHTML.replace(/<[^>]+>/g, '');

// Jimbo.
// That's what she said
console.log(strippedHtml, "from string");
  return (
    <div style={{color: "white"}}>
    <ComponentTable Content={ButtonPrimary.string} Title={Stringed} Descriptions={'Description de Button'}/>
    Hello
    <ComponentTable Content={ButtonPrimary.string} Title={'Title de Button'} Descriptions={'Description de Button'}/>
    
    <ComponentTable Content={ButtonPrimary.string} Title={'Title de Button'} Descriptions={'Description de Button'}/>
    {/* <Nodat>
    <NoData/>
    </Nodat> */}
    </div>
  )
}

export default Buttons