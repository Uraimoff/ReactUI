import React, { useState } from "react";
import { Button, Input, Positioner } from "./style";
import { obj } from "../mock/data";

const Access = () => {
    const [body, setBody] = useState([])
    const [val, setVal] = useState([])
    const [com, setCom] = useState([])
    const [colors, setColors] = useState([])

    const onChange = ({ target: { value, name } }) => {
        setBody({
            ...body,
            [name]: value,
        });
    };
    let data = obj.map((item) => item.name);
    let response = data.includes(body.name);
    // console.log(response);
const Submit=()=>{
    let value = response ? `Welcome ${body.name}` : `Access denied ${body.name}`
    let comparison = `Welcome ${body.name}`
    let colr =  body.name
    setVal(value)
    setCom(comparison)
    setColors(colr)
}
// console.log(val);
// console.log(com);
  return (
    <>
      <Positioner style={{backgroundColor: `${val===com ? `green` : colors.length < 1 ? "black" : "red"}`, color: `${val===com ? `black` : `black`}`,}}>
        {val}
        <Input onChange={onChange} name='name' type='password' placeholder="****" />
        <Button onClick={Submit}>Authorize</Button>
      </Positioner>
    </>
  );
};

export default Access;
