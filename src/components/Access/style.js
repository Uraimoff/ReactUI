import styled from "styled-components";

const Positioner = styled.div`
color: green; 
display: flex;
flex-direction: column;
background-color: ${({response})=>(response ? `green` : `#222222`)};
gap: 30px;
justify-content: center; 
align-items: center; 
box-sizing: border-box;
border: 1px solid green; 
border-radius: 3px;
max-width: 550px;
min-width: 350px;
padding: 30px;
width:100%; 
height: 250px;
margin: 50px auto;
font-size: 30px;
font-weight: 700;
z-index:888;
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
const AccessP = styled.p`
    background-color: transparent;
    font-size: 18px;
    color: white;
`

export { Positioner, Input, Button, AccessP };
