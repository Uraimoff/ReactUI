import styled from "styled-components";

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
max-width: 1240px;
width: 100%;
height: 100vh;
margin: 0 auto;
background-color: transparent;
z-index: 1;
@media only screen and (max-width: 1024px) {
    padding: 0;
}
@media only screen and (max-width: 578px) {
    /* max-width: 300px; */
    width: 100%;
    display: flex;
    justify-content: center;
}
`
const BlackWrapper=styled.div`
background: ${(props)=>(props.theme==='light'?'white':'black')};
color: ${(props)=>(props.theme==='light'?'black':'white')};
z-index: 2;
position: relative;
`
const WrCont = styled.img`
 width: 100px;
`
const HomeWrapper = styled.div`
z-index: 5 !important;
position: relative;
width: 100%;
background-color: rgb(0,0,0, 0.3);
`
const Img = styled.img`
padding: 10px;
box-sizing: border-box;
z-index: 888;
 width: 30%;
 height: 200px;
 /* margin: auto; */
 background-color: transparent;
 /* border: 10px solid white; */
 border-radius: 50%;
 @media only screen and (max-width: 578px) {
 display: none;
 
 }
`
const H1 = styled.h1`
color: #E3E3E3;
font-size: 60px;
width: 100%;
text-align: start;
background-color: transparent;
z-index: 6;
position: relative;
@media only screen and (max-width: 578px) {
    font-size: 30px;
}
`
const UniversTxt = styled.div`
color: white;
/* max-width: 700px; */
background-color: transparent;
width: 100%;
padding:  50px 0;
`
const BackgroundVideoWr = styled.div`
z-index: -1;
`
export {Container, Img,UniversTxt, WrCont, H1,HomeWrapper, BlackWrapper, BackgroundVideoWr}