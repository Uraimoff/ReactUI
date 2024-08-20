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
background: #fffff1a;
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
`
export {Burger,Dropdown,Items,BurgerWr, Outimg}