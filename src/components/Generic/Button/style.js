import styled from "styled-components";

const Btn = styled.button`
display: flex;
justify-content: center;
align-items: center;
border-radius:  ${({radius})=>(radius ? `${radius}` : `2px`)};
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
transition: all 0.2s;
opacity: 0.9;
:active{
    opacity: 0.3;
}
`
const Icon = styled.img``


export {Btn, Icon}