import styled from "styled-components";

const Positioner = styled.div`
color: green; 
display: flex;
flex-direction: column;
background-color: ${({response})=>(response ? `green` : `black`)};
gap: 30px;
justify-content: center; 
align-items: center; 
border: 1px solid green; 
border-radius: 3px;
width: 550px; 
height: 300px;
margin: 200px auto;
font-size: 30px;
font-weight: 700;
`;
const Input=styled.input`
color: green;
border: 1px solid green;
padding:  10px 20px;
width: 300px;
box-sizing: border-box;
:focus{
    outline: none;
}
::placeholder{
    color: green;
    font-size: 20px;

}
`
const Button = styled.button`
    color: green;
    border: 2px solid green;
    padding: 10px 30px;
    width: 300px;
    :active{
        opacity: 0.6;
    }
`

export { Positioner, Input, Button };
