import React, { useState } from "react";
import './style.css'
import {
  ChatContainer,
  ChatWrapper,
  Input,
  InputWrapper,
  Button,
  ChatQuestion,
  // ChatAnswer,
} from "./styled";

const ChatGpt = () => {
  const [chat, setChat] = useState([]);
  const [value, setValue] = useState("");
  const press = (e) => {
    if (e.key === "Enter") {
      setChat([...chat, { type: "user", message: e.target.value }]);
      setValue("");
      fetch("http://localhost:8080", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: value,
        }),
      })
        .then((res) => res.json())
        .then((res) => setChat((chat)=>[...chat, {type: 'ai', message: res}]));
    }
  };
  //https://www.youtube.com/watch?v=PNOgR-Ab_8k
  //https://chat.openai.com/chat
  //https://beta.openai.com/account/api-keys
  return (
    <ChatContainer>
      <ChatWrapper>
        {chat.map((value) => {
          return (
            <>
              <ChatQuestion className={value.type}>
                <span>{value.type === 'ai' ? 'Bot:' : 'Me:'}</span>
                {value.message}
              </ChatQuestion>
            </>
          );
        })}
        {/* <ChatAnswer>
          <span>Bot:</span> A chatbot is a computer program that simulates human
          conversation through voice commands or text chats or both. It can be
          integrated with various messaging platforms like Facebook Messenger,
          WhatsApp, WeChat, etc. and can be used for a variety of purposes, such
          as customer service, entertainment, and e-commerce.
        </ChatAnswer> */}
      </ChatWrapper>
      <InputWrapper>
        <Input
          type={"text"}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={press}
        ></Input>
        <Button>Send</Button>
      </InputWrapper>
    </ChatContainer>
  );
};

export default ChatGpt;

// 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
