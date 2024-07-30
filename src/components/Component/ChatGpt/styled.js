import styled from "styled-components";

const ChatQuestion = styled.div`
  background-color: ${(props) => (props.className === 'ai' ? '#444654' : 'inherit')};
  color: white;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: black;
  width: 100%;
  height: 100vh;
  padding: 20px;
  position: relative;
  align-items: center; /* Ensures all children are centered */
`;

const ChatWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  background-color: #1a1a1a;
  border-radius: 10px;
  margin-bottom: 20px; /* Provide some space between chat and input */
  width: 100%; /* Full width */
  max-width: 600px; /* Adjust based on your design */
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #2c2c2e;
  border-radius: 10px;
  padding: 10px;
  position: fixed;
  bottom: 20px;
  width: calc(100% - 40px); /* Full width minus padding */
  max-width: 600px; /* Same as ChatWrapper */
  box-sizing: border-box; /* Include padding in width calculation */
`;

const StyledInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: none;
  color: white;
  padding: 10px;
  outline: none;
  font-size: 16px;
`;

const StyledButton = styled.button`
  background-color: #3d3d3d;
  border: none;
  color: white;
  padding: 10px 20px;
  margin-left: 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #575757;
  }
`;

export {StyledButton,StyledInput,InputWrapper, ChatWrapper, ChatContainer, ChatQuestion}