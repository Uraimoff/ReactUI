import React from "react";
import { ChatContainer, ChatWrapper, Input, InputWrapper,Button, ChatQuestion, ChatAnswer } from "./styled";

const ChatGpt = () => {
    //https://www.youtube.com/watch?v=PNOgR-Ab_8k
    //https://chat.openai.com/chat
    //https://beta.openai.com/account/api-keys
  return (
    <ChatContainer>
      <ChatWrapper>
        <ChatQuestion><span>Me:</span> What is a Chatbot?</ChatQuestion>
        <ChatAnswer><span>Bot:</span> A chatbot is a computer program that simulates human conversation through voice commands or text chats or both. It can be integrated with various messaging platforms like Facebook Messenger, WhatsApp, WeChat, etc. and can be used for a variety of purposes, such as customer service, entertainment, and e-commerce.
</ChatAnswer>
      </ChatWrapper>
      <InputWrapper><Input type={"text"}></Input><Button>Send</Button></InputWrapper>
    </ChatContainer>
  );
};

export default ChatGpt;
