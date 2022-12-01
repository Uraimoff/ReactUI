import React from "react";
import Access from "../Access";
import { Container, H1, Img } from "../Homec/styled";
import whiteFbi from './../../assets/img/whiteFbi.png'


const Authorizatin = () => {
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

export default Authorizatin;
