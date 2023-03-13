import styled from "styled-components";

const MusicPlWr=styled.div`
`
const IMG = styled.img`
width: 830px;
`
const Battery = styled.div`
border: 1px white solid;
border-radius: 5px;
width: 30px;
height: 15px;
display: flex;
justify-content: start;
align-items: center;
padding: 0.2px 1px 0 1.5px;
`
const FlashWr = styled.div`
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
`
const Span = styled.span`
height: 3px;
width: 10px;
background-color: white;
`
const Img = styled.img`
transform: rotate(90deg);
background-color: inherit;
/* position: absolute; */
width: 14px;
height: 29px;

`
export {MusicPlWr, IMG, Battery, Span, Img, FlashWr}