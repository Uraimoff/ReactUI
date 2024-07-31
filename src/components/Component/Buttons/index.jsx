import React from 'react'
import ComponentTable from '../../Generic/ComponentTable'
import { button } from '../../mock/data'
// import axios from 'axios'

const Buttons = () => {
  // const [button, setButton]= useState(null)

// https://647880a0362560649a2dea0d.mockapi.io/ui/component/buttons
// this is code and data from backend
// useEffect(() => {
//   axios.get('https://647880a0362560649a2dea0d.mockapi.io/ui/component/buttons')
//     .then(response => {
//       setButton(response.data);
//     })
//     .catch(error => {
//       console.error(error);
//     });
// }, []);
// console.log(button, 'user malumot');


  return (
    <>
    {button ?
    <div style={{color: "white"}}>
      {button.map(dat=>
    <ComponentTable key={dat.id} Content={dat.component} Title={dat.title} Descriptions={dat.description} code={dat.component}/>
        )}
    </div>
    :
    undefined
}
<div>
  <div className='underline'>why isn't working</div>
  <button className='bg-[green]'>Hello</button>
</div>
  </>
  )
}

export default Buttons