import styled from "styled-components";

const LayoutWr = styled.div`
  display: flex;
  gap: 50px;
`;
const SideNavW = styled.div`
  /* position: fixed;
top: 100px;
left: 0;
overflow-y: auto;
height: 100%;*/
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
const ChildrenWr = styled.div`
/* overflow-y: scroll;
transition: overflow-y 0.3s linear; */
  /* position: sticky;
  top: 100px;
  z-index: 666;
  left: 700px;
  width: 100%; */
  /* height: 100%; */

  height: calc(100vh - 60px);
  overflow-y: auto;
  background-color: #000;
`;

export { LayoutWr, SideNavW, ChildrenWr, };
