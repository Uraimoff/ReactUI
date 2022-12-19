import styled from "styled-components";
// import setting from "./../../../assets/icons/svg/Settings.svg"

const Inpt = styled.input`
border-radius: 2px;
background: url('src/assets/icons/svg/Settings.svg') no-repeat scroll 7px 7px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
z-index: 888;
border: ${({border})=>(border ? `none` : `1px solid #E6E9EC`)};
border-bottom: ${({border})=>(border && `2px solid #E6E9EC`)};
transition: all 0.5s;
:focus{
    border: ${({border})=>(border ? `${border}` : `1px solid #0061DF`)};
    border-bottom: ${({border})=>(border ? `2px solid #0061DF` : `1px solid #0061DF`)};
    outline: none;
}
::placeholder{
    transition: all 0.7s;
    position: absolute;
    top: 12px;
    left: 10px;
    padding-left: ${({icon})=>(icon ? `30px` : `15px`)};
    /* z-index: 999; */
    display:flex;
}
:focus::placeholder{
    color:red;
    transition: all 0.7s;
    position: absolute;
    top: 0px;
    left: ${({icon})=>(icon ? `-30px` : `0px`)};
    /* left: -30px; */
    transform: scale(0.7);
    display: none;
}
`
const Wrapper=styled.div`
display: flex;
position: relative;
`
const Icon=styled.img`
width: 20px;
position: absolute;
top: 14px;
left: 5px;
`
const Iconic=styled.img`
width: 20px;
position: absolute;
top: 14px;
right: 5px;
`

export {Inpt, Wrapper, Icon, Iconic}