import styled from "styled-components";

const AdsContainer=styled.div`
width: 230px;
box-sizing: border-box;
right: 40px;
position: absolute;
display: flex;
flex-direction: column;
gap: 20px;
@media only screen and (max-width: 1024px) {
  display: none;
}
`
const AdsWrapper = styled.div`
  border-radius: 10px;
  border: 1px solid #e3e3e3;
  box-sizing: border-box;
  padding: 5px;
`;
const Supportment = styled.div`
  font-weight: 800;
  font-size: 30px;
  overflow: hidden;
  position: relative;
`;
const Div=styled.div`
`
const Span=styled.div`
height: 10px;
background-color: #009AB6;
`
const SpaN=styled.div`
height: 10px;
background-color: white;
`
const SpAN=styled.div`
height: 10px;
background-color: green;
`
const P=styled.div`
  padding: 10px;
  color: #e3e3e3;
  font-size: 13px;
`
export {AdsWrapper, Supportment, Div, Span, SpaN,P, SpAN, AdsContainer }