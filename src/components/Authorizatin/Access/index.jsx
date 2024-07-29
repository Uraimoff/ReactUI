import React, {  useState } from "react";
import { AccessP, Button, Input, Positioner } from "./style";
import { obj } from "../../mock/data";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

const Access = () => {
    const [body, setBody] = useState([])
    const [val, setVal] = useState([])
    const [com, setCom] = useState([])
    const [colors, setColors] = useState([])
    const navigate = useNavigate()
    const [messageApi]= message.useMessage();
    const key='updateable'

    const openMassage=()=>{
      messageApi.open({
        key,
        type: 'loading',
        content: 'Loading...'
      })
    }
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
    // console.log(data, "bu data malumot");
    const jane = obj.find(obj => obj.name === body.name);
    // const took = jane.token
    // make tokens admin, superAdmin 
    let response = data.includes(body.name);
    const press=(e)=>{
      if (e.key === "Enter") {
      let value = response ? `Welcome ${body.name}` : `Access denied ${body.name}`
  let comparison = `Welcome ${body.name}`
  let colr =  body.name
  setVal(value)
  setCom(comparison)
  setColors(colr)
  if(response){
    openMassage()
    localStorage.setItem("token", jane.token)
    alert('You will be redirected')
    info()
    setTimeout(()=>{
      navigate('/home')
    },1000)
  }
}
    }
const Submit  =()=>{
  let value = response ? `Welcome ${body.name}` : `Access denied ${body.name}`
  let comparison = `Welcome ${body.name}`
  let colr =  body.name
  setVal(value)
  setCom(comparison)
  setColors(colr)
  if(response){
    openMassage()
    localStorage.setItem("token", jane.token)
    alert('You will be redirected')
    info()
    setTimeout(()=>{
      navigate('/home')
    },1000)
  }
}
// console.log(colors, "bu length error");
// console.log(com);
  return (
    <>
      <Positioner style={{backgroundColor: `${val===com ? `green` : colors.length <= 1 ? "#222222" : "red"}`, color: `${val===com ? `black` : `black`}`,}}>
        {val}
        <AccessP>
        Enter Authors name
        </AccessP>
        <Input onChange={onChange} onKeyDown={press} name='name' type='password' placeholder="****" />
        <Button onClick={Submit}>Authorize</Button>
      </Positioner>
    </>
  );
};

export default Access;
