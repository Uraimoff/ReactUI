import React, { useState } from "react";
import { Icon, Iconic, Inpt, Wrapper } from "./style";
import show from "./../../../assets/svg/show.svg";
import "./style.css";

function Inputs({
  width,
  height,
  border,
  placeholder,
  onChange,
  password,
  name,
  icon,
  defaultValue,
}) {
  const [view, setView] = useState(false);

  // const handleClick = () => {
  //   setView((current) => !current);
  // };
  return (
    <>
      <Wrapper
        style={{
          width: width ? `${width}px` : `100%`,
        }}
      >
        <Icon src={icon} />
        <div className="input">
          <div className="placemove">{placeholder}</div>
          <Inpt
            type={view ? "text" : password}
            icon={icon}
            border={border}
            placeholder={placeholder}
            onChange={onChange}
            defaultValue={defaultValue}
            name={name}
            style={{
              width: width ? `${width}px` : `100%`,
              height: height ? `${height}px` : `44px`,
              paddingLeft: icon ? `30px` : "15px",
            }}
          />
        </div>
        <Iconic
          onClick={() => setView(!view)}
          style={{
            display: password ? "" : "none",
          }}
          src={show}
        />
      </Wrapper>
    </>
  );
}

export default Inputs;
