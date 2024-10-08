import styled from "styled-components";

const Secret=styled.div`
border: 3px solid red;
border-radius: 5px;
text-align: center;
position: absolute;
font-size: 15px;
color: red;
width: 80px;
background-color: transparent;
transform: rotate(45deg);
left: 200px;
top: 10px;
@media only screen and (max-width: 580px){
    width: 70px;
    font-size: 12px;
    left: 100px;
    top: 0px;
}
`
const Container= styled.div`
    display: flex;
    justify-content: center;
    align-items: center !important;
    flex-direction: column;
    overflow: hidden;
    margin: 0 auto;
    height: 740px;
    text-align: center;
    @media only screen and(max-width: 900px) {
        height: 100%;
    }
`
export {Secret, Container}