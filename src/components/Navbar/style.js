import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container=styled.div`
display: flex;
width: 100%;
flex-direction: column;
justify-content: center;
/* background: red; */
background-color:  black;
min-width: 0;
z-index: 999;
`
const Opacity = styled.div`
background: #808080;
width: 100%;
height: 65px;
position: absolute;
z-index: 999;
opacity: 0.3;
`
const Main=styled.div`
position: fixed;
top: 0;
width: 100%;
display: flex;
min-width: 0;
z-index: 999;
justify-content: center;
background-color: transparent;
/* opacity: 0.5; */
backdrop-filter: blur(8px);
/* z-index: 999; */
`
const Main2=styled.div`
width: 100%;
display: flex;
justify-content: center;
z-index: 999;
position: relative;
`
const Wrapper=styled.div`
background-color: transparent;
color: white;
padding: 0 130px;
max-width: 1440px;
min-width: 0;
height: 64px;
z-index: 999;
display: flex;
align-items: center;
width: 100%;
justify-content: space-between;
@media only screen and(max-width: 768px) {
    padding: 0 !important;
    margin: 0 !important;
    display: flex;
    justify-content: space-between;
}


font-size:16px;
`
const Section =styled.div`
display: flex;
align-items: center;
font-weight: 400;
background-color: transparent;
font-size: 16px;
line-height: 24px;
cursor: pointer;
`
const H3 = styled.h3`
color: white;
background-color: transparent;
margin-bottom: 0;
`
const Logo =styled.img`
background-color: transparent;
margin-right: 12px;
width: 50px
`

const Link = styled(NavLink)`
/* padding: 32px; */
color: white;
text-decoration:none;
background-color:  transparent;
height: 30px;
padding: 0px 10px;
transition: all 0.4s;
font-family: 'Montserrat';
:hover{
    background-color:  transparent;
    padding: 0px 10px;
    height: 30px;
    /* margin: 12px; */
    border-radius: 5px;
    color: grey;
}
:active{
    padding: 0px 10px;
    height: 30px;
    background-color:#253C6a;
    /* padding: 5px 20px; */
    /* margin: 12px; */
    border-radius: 5px;
    color: #f5f7da;
}
`
const Nav = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
min-width: 400px;
background-color: transparent;
max-width: 420px;
z-index: 999;
@media only screen and (max-width: 768px) {
    display: none;
}
`
const PhoneNavbar = styled.div`
display: none;
@media only screen and (max-width: 768px) {
    display: block;
}
`
const LoginButton = styled.div`
display: block;
@media only screen and (max-width: 768px) {
    display: none;
}
`
const LoginIcon = styled.div`
display: none;
@media only screen and (max-width: 768px) {
    display: block;
    margin-left: 100px;
}
`
const DropdownWr= styled.div`
padding: 16px;
display: flex;
flex-direction: column;
gap: 16px;
background-color: white;
/* border-radius: 2px; */
box-shadow: 0px 20px 38px rgba(0, 0, 0, 0.06), 0px 7px 46px rgba(0, 0, 0, 0.06), 0px 8px 15px rgba(0, 0, 0, 0.06);
`
const DropdownMenu =styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
:hover{
    background-color: #fff;
    color: #0061DF;
    cursor: pointer;
}
`
const OutWr= styled.div`
padding-top: 100px;
`
export {Container,Wrapper,DropdownWr,Opacity,OutWr, DropdownMenu, Section, Logo, Link, H3, Main, Main2, Nav, PhoneNavbar, LoginButton, LoginIcon}