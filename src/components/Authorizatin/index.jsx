import React from "react";
import Access from "../Access";
import { Container, H1, Img } from "../Homec/styled";
// import whiteFbi from './../../assets/img/whiteFbi.png'
import react from './../../assets/img/logo.png'
import { Secret } from "./style";


const Authorizatin = () => {
  return (
    <>
      <Container>
        <div className="imgWr">
          <div className="  wr">
        <Img className='App-logo logo' src={react} alt='FBI'/>
        
        <H1>React JS<Secret>Top secret</Secret></H1>
          </div>
        </div>
        <Access/>
      </Container>
    </>
  );
};

export default Authorizatin;
