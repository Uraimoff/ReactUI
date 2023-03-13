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
      console.log(e.target.value, 'bu press value');
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
  const Press = (e) => {
      setChat([...chat, { type: "user", message: e.target.value }]);
      console.log(e.target.value, 'bu press value');
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
      </ChatWrapper>
      <InputWrapper>
        <Input
          placeholder="Ask whatever you want"
          type={"text"}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={press}
        ></Input>
        <Button onClick={Press}>Send</Button>
      </InputWrapper>
    </ChatContainer>
  );
};

export default ChatGpt;

