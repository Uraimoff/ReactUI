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
  height: calc(100vh - 60px);
  overflow: hidden;
  position: sticky;
  top: 60px;
  transition: overflow-y 0.3s linear;
  background-color: #0f0f0f;
  :hover {
    overflow-y: scroll;
    transition: overflow-y 0.3s linear;
  }
`;
const ChildrenWr = styled.div`
  position: fixed;
  top: 100px;
  left: 400px;
  width: 100%;
  height: 100%;
`;

export { LayoutWr, SideNavW, ChildrenWr, };
