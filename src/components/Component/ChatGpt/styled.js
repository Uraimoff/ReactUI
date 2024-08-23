import styled from "styled-components";

const ChatQuestion = styled.div`
  background-color: ${(props) => {
    if(props.theme==='light'){
      return props.className === 'ai' ? '#E5E7EB' : 'inherit'
    } else{
    return props.className === 'ai' ? '#444654' : 'inherit';
  }}};
  /* color: ${(props)=>(props.theme==='light'?'black':'white' )} ; */
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: transparent;
  width: 100%;
  height: 100vh;
  /* padding: 20px; */
  position: relative;
  align-items: center; /* Ensures all children are centered */
`;

const ChatWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  background-color:${(props)=>(props.theme==='light'?'#F9FAFB':'#1a1a1a' )} ;
  border-radius: 10px;
  margin-bottom: 20px; /* Provide some space between chat and input */
  width: 100%; /* Full width */
  max-width: 900px; /* Adjust based on your design */
`;

const RelativeInput = styled.div`
  position: relative;
  width: 100%;
`
const InputWrapper = styled.div`
z-index: 2;
  display: flex;
  align-items: center;
  background-color: ${(props)=>(props.theme==='light'?'#E5E7EB':'#2c2c2e' )} ;
  border-radius: 10px;
  padding: 10px;
  position: fixed;
  bottom: 20px;
  width: calc(100% - 40px); /* Full width minus padding */
  max-width: 900px; /* Same as ChatWrapper */
  box-sizing: border-box; /* Include padding in width calculation */
  @media only screen and (max-width: 1024px){
    max-width: 60%;
  }
  @media only screen and (max-width: 768px){
    max-width: 85%;
  }
  @media only screen and (max-width: 383px){

  }
`;

const StyledInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: none;
  width: 100%;
  padding: 10px;
  outline: none;
  font-size: 16px;
`;

const StyledButton = styled.button`
  background-color: ${(props)=>(props.theme==='light'?'#4B5563':'#3d3d3d' )}  ;
  border: none;
  color: white;
  position: absolute;
  right:0px;
  padding: 10px 20px;
  margin-left: 10px;
  border-radius: 5px;
  cursor: pointer;
  @media only screen and (max-width: 383px){
    margin-left: -60px;
  }
    
  
  &:hover {
    background-color: #374151;
  }
`;

export {StyledButton,StyledInput,InputWrapper,RelativeInput, ChatWrapper, ChatContainer, ChatQuestion}