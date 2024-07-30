import styled from "styled-components";

const LayoutWr = styled.div`
  display: flex;
  gap: 50px;
  width: 100%;
`;
const ContentWrapper=styled.div`
/* background-color: red !important; */
  width: 75%;
  /* @media only screen and (max-width: 768px){

  } */
@media only screen and (max-width: 1024px) {
  width: 90%;
  margin-right: 60px;
  margin: 0 auto;
  margin-top: 60px;
  margin-bottom: 60px;
}
@media only screen and (max-width: 1385px){
  width: 90%;
}
`
const PlaceBar = styled.div`
width: 22%;
@media only screen and (max-width: 768px){
  display: none;
}
@media only screen and (max-width: 1385px){
  width: 30%;
}
`
const SideNavW = styled.div`
  position: fixed;
  top: 0px;
  left: 0;
  overflow-y: auto;
  height: 100%;
  @media only screen and (max-width: 768px){
    display: none;
  }
  
  /* overflow: hidden; */
  
  /* background-color: #0f0f0f; */
  /* height: calc(100vh - 60px);
  position: sticky;
  top: 100px;
  z-index: 777;
  transition: overflow-y 0.3s linear;
  width: calc(400px + 20px);
  :hover {
    width: 420px;
    overflow-y: scroll;
    transition: overflow-y 0.3s linear;
    } */
    `;
const Adswrap = styled.div`
  position: fixed;
  right: 0;
  @media only screen and (max-width: 1385px){
    display: none;
  }
`
const ChildrenWr = styled.div`
/* overflow-y: scroll;
transition: overflow-y 0.3s linear; */
  /* position: fixed;
  top: 100px;
  z-index: 666;
  left: 700px;
  width: 100%; */
  /* height: 100%; */
  width: 100%;
  display: flex;
  /* height: calc(100vh - 60px); */
  overflow-y: auto;
  /* background-color: green; */
`;

export { LayoutWr, SideNavW,ContentWrapper,Adswrap, PlaceBar,ChildrenWr, };
