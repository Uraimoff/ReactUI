import React, {  useState } from "react";
import { Button, Input, Positioner } from "./style";
import { obj } from "../mock/data";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

const Access = () => {
    const [body, setBody] = useState([])
    const [val, setVal] = useState([])
    const [com, setCom] = useState([])
    const [colors, setColors] = useState([])
    const navigate = useNavigate()

    const info =()=>{
      message.info('You will be redirected')
    }

    const onChange = ({ target: { value, name } }) => {
        setBody({
            ...body,
            [name]: value,
        });
    };
    let data = obj.map((item) => item.name);
    let tokn = obj.map((item) => item.token);
    let response = data.includes(body.name);
    // console.log(tokn)
    // console.log(response);
const Submit=()=>{
  let value = response ? `Welcome ${body.name}` : `Access denied ${body.name}`
  let comparison = `Welcome ${body.name}` 
  let colr =  body.name
  setVal(value)
  setCom(comparison)
  setColors(colr)
  if(response){
    localStorage.setItem("token", tokn[0])
    alert('You will be redirected')
    info()
    setTimeout(()=>{
      navigate('/home')
    },1000)
  }
}
console.log(colors, "bu length error");
// console.log(com);
  return (
    <>
      <Positioner style={{backgroundColor: `${val===com ? `green` : colors.length <= 1 ? "black" : "red"}`, color: `${val===com ? `black` : `black`}`,}}>
        {val}
        <Input onChange={onChange} name='name' type='password' placeholder="****" />
        <Button onClick={Submit}>Authorize</Button>
      </Positioner>
    </>
  );
};

export default Access;
