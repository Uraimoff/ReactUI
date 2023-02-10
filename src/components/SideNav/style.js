import styled from "styled-components";

const SideNavWr=styled.div`
 /* border-right: 1px solid grey;
 padding-right: 10px;
 width: 300px;
 z-index: 888;
 position: relative;
 background: #000;
 overflow-y: auto;
 height: 200%; */
 display: flex;
  width: 240px;
  flex-direction: column;
  padding-right: 12px;
  height: calc(100vh - 60px);
  overflow: hidden;
  position: sticky;
  top: 60px;
  transition: overflow-y 0.3s linear;
  background-color: #000;
  :hover {
    overflow-y: scroll;
    transition: overflow-y 0.3s linear;
  }
`
const SideNavItem = styled.div`
    padding: 10px 20px 10px 30px;
    text-decoration: none;
    transition: all 0.2s ease;
    &:hover{
        color: white;
        background: #262626;
        border-radius: 5px;
    }
`
export {SideNavWr, SideNavItem, }