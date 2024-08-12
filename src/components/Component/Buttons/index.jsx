import React from 'react'
import ComponentTable from '../../Generic/ComponentTable'
import { button } from '../../mock/data'
import { ThemeContext } from '../contexts/ThemeContext';
import { useContext } from 'react';
// import axios from 'axios'

const Buttons = () => {
  // const [button, setButton]= useState(null)
  const { theme } = useContext(ThemeContext);
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
    <div className='  md:columns-2 w-full md:h-fit md:box-border' style={{color: "white"}}>
      {button.map(dat=>
    <ComponentTable theme={theme} key={dat.id} Content={dat.content} Title={dat.title} Descriptions={dat.description} code={dat.component}/>
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