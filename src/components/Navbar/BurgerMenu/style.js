import { NavLink } from "react-router-dom";
import styled from "styled-components";

const BurgerWr=styled.div`
position: relative;
background: transparent;
`
const Burger=styled.div`
height: 30px;
display: none;
@media only screen and (max-width: 1200px) {
    display: block;
    height: 30px;
    width: 30px;
    margin-left: 10px;
    border: gray 1px solid;
    border-radius: 5px;
    padding: 5px;
    background: transparent;
}
`
const Outimg = styled.img`
background: transparent;
height: 100%;
`
const Dropdown=styled.ul`

overflow: hidden;
position: absolute;
right: -130px;
height: 100vh;
top: 33px;
display: none;
background-color: ${(props) => {
    if (!props.scrolled && props.isHome) {
      return '#2C2C2E'; // White text for home page before 100vh
    } else {
      return props.theme === 'light' ? '#D8D8D8' : '#2C2C2E'; // Theme-dependent text color after 100vh or on other pages
    }
  }};
  color: ${(props) => {
    if (!props.scrolled && props.isHome) {
      return '#000'; // White text for home page before 100vh
    } else {
      return props.theme === 'light' ? '#fff' : '#000'; // Theme-dependent text color after 100vh or on other pages
    }
  }};
backdrop-filter: blur(16px) saturate(120%);
/* opacity: 0.5; */
/* background: #808080; */
opacity: ${(props) => (props.isActive ? 1 : 0)};
transition: all 0.5s ease;
width: ${(props) => (props.isActive ? "400px" : "0")};
@media only screen and (max-width: 1024px) {
    display: block;
    top: 47.8px;

}
@media only screen and (max-width: 578px) {
    width: ${(props) => (props.isActive ? "280px" : "0")};
    right: -30px!important;
    
}
@media only screen and (max-width: 768px) {
    right: -60px;
}    
`
const Items= styled.li`
    padding: 10px 30px;
    font-size: 18px;
    background: transparent;
    color: ${(props) => {
    if (!props.scrolled && props.isHome) {
      return '#fff'; // White text for home page before 100vh
    } else {
      return props.theme === 'light' ? '#000' : '#fff'; // Theme-dependent text color after 100vh or on other pages
    }
  }};
`
const Links = styled(NavLink)`
color: ${(props) => {
    if (!props.scrolled && props.isHome) {
      return '#fff'; // White text for home page before 100vh
    } else {
      return props.theme === 'light' ? '#000' : '#fff'; // Theme-dependent text color after 100vh or on other pages
    }
  }};
text-decoration:none;
background-color:  transparent;
height: 30px;
gap: 5px;
align-items: center;
display: flex;
transition: all 0.4s;
font-family: 'Montserrat';
:hover{
    background-color:  transparent;
    padding: 0px 10px;
    height: 30px;
    /* margin: 12px; */
    /* border-radius: 5px; */
    opacity: 0.4;
}
:active{
    padding: 0px 10px;
    height: 30px;
    /* padding: 5px 20px; */
    /* margin: 12px; */
    border-radius: 5px;
    color: #f5f7da;
}
`
export {Burger,Dropdown,Items,BurgerWr, Links, Outimg}