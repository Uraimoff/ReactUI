import styled from "styled-components";

const ChatContainer = styled.div`
  /* width: 100%; */
  /* border: 1px red solid; */
  height: 100%;
  width: 800px;
  max-width: 800px;
  /* background: red; */
  border-radius: 10px;
  padding: 16px;
  background-color: #343541;
  font-family: "Montserrat";
  padding-bottom: 150px;
  overflow-y: scroll;
  `;
const ChatWrapper = styled.div`
max-width: 800px;
width: 100%;
background: inherit;
display: flex;
flex-direction: column;
/* padding-bottom: 150px; */
/* overflow-y: scroll; */

`;
const ChatQuestion= styled.div`
background: inherit;
padding: 20px
`;
const ChatAnswer= styled.div`
background: #444654;
padding: 20px
`;
const InputWrapper = styled.div`
  /* border: 1px solid green; */
  position: fixed;
  bottom: 50px;
  width: 100%;
  left: 302px;
  max-width: 832px;
  display: flex;
  height: 47px;
  padding: 5px 5px;  
  background: #40414E;
  border-radius: 4px;
  box-sizing: border-box;
  /* overflow: hidden; */
`;
const Input = styled.input`
  border: none;
  /* height: px; */
  background-color: inherit;
  font-size: 15px;
  font-family: inherit;
  max-width: calc(calc(100% - 80px));
  outline: none;
  width: 100%;
`;
const Button = styled.button`
  border: none;
  position: absolute;
  top: 16px;
  /* height: 47px; */
  right: 20px;
  background: #40414E;
  
`;

export { ChatContainer, ChatWrapper, InputWrapper, Input, Button, ChatQuestion, ChatAnswer};
