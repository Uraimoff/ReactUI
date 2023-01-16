import styled from "styled-components";

const LayoutWr =styled.div`
display: flex;
gap: 50px;
`
const SideNavW=styled.div`
position: fixed;
top: 100px;
left: 0;
overflow-y: auto;
height: 100%;
&::-webkit-scrollbar-thumb{
    
}
&::-webkit-scrollbar-thumb:hover{

}
`
const ChildrenWr=styled.div`
position: fixed;
top: 100px;
left: 400px;
width: 100%;
height: 100%;
`
export {LayoutWr, SideNavW, ChildrenWr}