import styled from "styled-components";

const Wrapper = styled.div`
  background-color: white;
`;
const Menuline = styled.div`
  width: 30px;
  height: 4px;
  position: absolute;
  top: 50%;
  border-radius: 5px;
  background-color: white;
  transition: all 0.5s;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export { Wrapper, Menuline, Content };
