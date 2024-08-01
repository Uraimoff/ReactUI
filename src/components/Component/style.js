import styled from "styled-components";

const LayoutWr = styled.div`
  display: flex;
  gap: 50px;
  width: 100%;
`;
const ContentWrapper=styled.div`
  width: 75%;
  position: relative;

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
  height: 100%;
  @media only screen and (max-width: 768px){
    display: none;
  }
    `;
const Adswrap = styled.div`
  position: fixed;
  right: 0;
  @media only screen and (max-width: 1385px){
    display: none;
  }
`
const ChildrenWr = styled.div`
  width: 100%;
  display: flex;
`;

export { LayoutWr, SideNavW,ContentWrapper,Adswrap, PlaceBar,ChildrenWr, };
