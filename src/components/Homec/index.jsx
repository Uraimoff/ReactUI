import React from "react";
// import Access from "../Access";
import { Container, H1, Img } from "./styled";
import whiteFbi from './../../assets/img/whiteFbi.png'
import './style.css'

const Homec = () => {
  return (
    <>
      <Container>
        <div className="imgWr">
          <div className="wr">
        <Img src={whiteFbi} alt='FBI'/>
        <H1>React JS</H1>
        <h1 style={{color: "white"}}>You're in Home page <br/> Home page Coming soon...</h1>
        <h2 style={{color: "red"}}>DISCLAIMER!</h2>
        <div style={{color: "white"}}>This site is not intended to ridicule, harass, or disrespect any government agency</div>
          </div>
        </div>
        {/* <Access/> */}
      </Container>
    </>
  );
};

export default Homec;
