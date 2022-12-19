import styled from "styled-components";

const Container = styled.div`
margin-top: 20px;
display: flex;
flex-direction: column;
justify-content: center;
max-width: 1240px;
padding: 0 130px;
width: 100%;
margin: auto;
background-color: transparent;
height: 649px;
z-index: 1;
`
const BlackWrapper=styled.div`
color: white;
background: #000;
z-index: 2;
position: relative;
`
const WrCont = styled.img`
 width: 100px;
`
const HomeWrapper = styled.div`
z-index: 5 !important;
position: relative;
background-color: transparent;
`
const Img = styled.img`
padding: 10px;
box-sizing: border-box;
z-index: 888;
 width: 200px;
 height: 200px;
 /* margin: auto; */
 background-color: transparent;
 /* border: 10px solid white; */
 border-radius: 50%;
`
const H1 = styled.h1`
color: #E3E3E3;
font-size: 60px;
width: 100%;
text-align: start;
background-color: transparent;
z-index: 6;
position: relative;
`
const UniversTxt = styled.div`
color: white;
width: 700px;
background-color: transparent;
padding:  50px 0;
`
const BackgroundVideoWr = styled.div`
z-index: -1;
`
export {Container, Img,UniversTxt, WrCont, H1,HomeWrapper, BlackWrapper, BackgroundVideoWr}