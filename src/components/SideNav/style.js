import styled from "styled-components";

const SideNavWr=styled.div`
 border-right: 1px solid grey;
 padding-right: 10px;
 width: 300px;
 z-index: 666;
 background: #000;
 height: 200%;
 overflow-y: auto;
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