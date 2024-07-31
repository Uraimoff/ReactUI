import styled from "styled-components";

const ComponentTableWr = styled.div`
  width: 100%;
  max-width: 800px;
  /* background: red; */
  border-radius: 10px;
  padding: 16px;
  margin-top: 30px;
  margin-bottom: 30px;
  border: 1px solid #283543;
  background-color: transparent;
font-family: "Montserrat";
`;
const Description = styled.div`
  position: relative;
  border-top: 1px solid #283543;
  margin-top: 20px;
  padding-top: 20px;
  font-family: "Montserrat";
  color: #e3e3e3;
  font-size: 14px;
  `;
const Position = styled.div`
font-size: 17px;
font-weight: 500;
  left: 20px;
  position: absolute;
  top: -18px;
  background: #000;
  font-family: "Montserrat";
  color: #e3e3e3;
  padding: 5px;
`;

export { ComponentTableWr, Position, Description };
