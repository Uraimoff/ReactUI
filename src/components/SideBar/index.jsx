import React, { useState } from "react";
import { Content, Menuline, Wrapper } from "./style";

const SideBar = () => {
  const [active, setActive] = useState(false);
  return (
    <>
      <Wrapper onClick={() => setActive(!active)} className="iconWr">
        <Menuline
          style={{
            transform: active ? "rotate(45deg)" : "",
            top: active ? "50%" : "calc(50% - 8px)",
          }}
        ></Menuline>
        <Menuline
          style={{
            transform: active ? "rotate(-45deg)" : "",
            top: active ? "50%" : "calc(50% + 8px)",
          }}
        ></Menuline>
        <Menuline
          style={{
            transform: active ? "translate(-100%)" : "",
            top: active ? "" : "",
          }}
        ></Menuline>
      </Wrapper>
      <Content
        style={{
          background: active ? "white" : "white",
          display: active ? "" : "none",
          width: active ? "100%" : "0",
          minWidth: active ? "0px" : "0",
        }}
      >
        Hello
      </Content>
    </>
  );
};

export default SideBar;
