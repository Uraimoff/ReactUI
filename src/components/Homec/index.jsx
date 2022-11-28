import React from "react";
import Access from "../Access";
import { Container, H1, Img, WrCont } from "./styled";
import whiteFbi from './../../assets/img/whiteFbi.png'
import './style.css'

const Homec = () => {
  return (
    <>
      <Container>
        <div className="imgWr">
          <div className="wr">
        <Img src={whiteFbi} alt='FBI'/>
        <H1>F.B.I</H1>
          </div>
        </div>
        <Access/>
      </Container>
    </>
  );
};

export default Homec;
