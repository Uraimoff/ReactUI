import React, { useState, useEffect, useRef, useContext } from "react";
import { ChatContainer, ChatQuestion, ChatWrapper, InputWrapper, RelativeInput, StyledButton, StyledInput } from "./styled";
import { ThemeContext } from "../contexts/ThemeContext";

const ChatGpt = () => {
  const [chat, setChat] = useState([]);
  const [value, setValue] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);
  const inputRef = useRef(null);
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    console.log("API Key:", process.env.REACT_APP_OPENAI_API_KEY); // Debug log to check API key

    const handleCtrlM = (event) => {
      if (event.ctrlKey && event.key === "m") {
        event.preventDefault();
        inputRef.current.focus();
      }
    };

    window.addEventListener("keydown", handleCtrlM);

    return () => {
      window.removeEventListener("keydown", handleCtrlM);
    };
  }, []);

  const addUserMessage = (message) => {
    setChat([...chat, { type: "user", message }]);
    setValue("");
    fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",  // or gpt-4
        messages: [{ role: "user", content: message }],
        max_tokens: 150,
      }),
    })
    .then((res) => {
      if (!res.ok) {
        throw new Error('Network response was not ok ' + res.statusText);
      }
      return res.json();
    })
    .then((res) => {
      console.log("Response from API:", res);
      if (res.choices && res.choices.length > 0) {
        setChat((chat) => [...chat, { type: 'ai', message: res.choices[0].message.content }]);
      } else {
        throw new Error('Unexpected response structure');
      }
    })
    .catch((error) => {
      console.error('There was a problem with the fetch operation:', error);
      setChat((chat) => [...chat, { type: 'ai', message: `Error: Could not get response from AI (${error.message})` }]);
    });
  };

  const handlePress = (e) => {
    if (e.key === "Enter") {
      addUserMessage(e.target.value);
    }
  };

  const handleClick = () => {
    addUserMessage(value);
  };

  return (
    <ChatContainer>
      <ChatWrapper theme={theme}>
        {chat.map((value, index) => (
          <ChatQuestion theme={theme} key={index} className={value.type}>
            <span style={{paddingRight: '5px', backgroundColor: 'transparent'}}>{value.type === 'ai' ? 'Bot:' : 'Me:'}</span>
            {typeof value.message === 'object' ? JSON.stringify(value.message) : value.message}
          </ChatQuestion>
        ))}
      </ChatWrapper>
      <InputWrapper theme={theme}>
      <RelativeInput>
        <StyledInput
          ref={inputRef}
          placeholder="Ask whatever you want"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handlePress}
          onFocus={() => setIsInputFocused(true)}
          onBlur={() => setIsInputFocused(false)}
          />
        <StyledButton theme={theme} onClick={handleClick}>
          {value || isInputFocused ? "Send" : "CTRL+M"}
        </StyledButton>
          </RelativeInput>
      </InputWrapper>
    </ChatContainer>
  );
};

export default ChatGpt;

// Add styled-components below as previously defined...
