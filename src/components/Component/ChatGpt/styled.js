import styled from "styled-components";

const ChatContainer = styled.div`
  /* width: 100%; */
  /* border: 1px red solid; */
  height: 100%;
  width: 100%;
  max-width: 800px;
  /* background: red; */
  border-radius: 10px;
  padding: 16px;
  background-color: #343541;
  font-family: "Montserrat";
  `;
const ChatWrapper = styled.div`
width: 100%;
background: inherit;
display: flex;
flex-direction: column;
overflow-y: scroll;

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
  width: 832px;
  left: 302px;
  display: flex;
  height: 47px;
  padding: 5px 5px;  
  background: #40414E;
  border-radius: 4px;
  box-sizing: border-box;
  overflow: hidden;
`;
const Input = styled.input`
  border: none;
  height: 47px;
  background-color: inherit;
  outline: none;
  width: calc(100% - 80px);
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
