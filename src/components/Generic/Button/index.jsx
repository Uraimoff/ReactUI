import React from "react";
import { Btn, Icon } from "./style";
// import loupe from "./../../assets/icons/svg/loupeWhite.svg"

function Buttons({
  txt,
  img,
  height,
  width,
  color,
  border,
  background,
  onClick,
  radius
}) {
  return (
    <>
      <Btn
        onClick={onClick}
        style={{
          gap: img ? `8px` : "0",
          height: height ? `${height}px` : `44px`,
          maxWidth: width ? `${width}px` : "128px",
          minWidth: "128px",
          width: `100%`,
          borderRadius: `${radius}`,
          color: color ? `${color}` : `inherit`,
          border: border ? `${border}` : `#E6E9EC 1px solid`,
          backgroundColor: background ? `${background}` : `transparent`,
        }}
      >
        
        <Icon src={img} />
        {txt}
      </Btn>
    </>
  );
}

export default Buttons;