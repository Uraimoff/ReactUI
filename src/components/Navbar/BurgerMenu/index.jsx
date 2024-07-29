import React, { useState } from "react";
import { Burger, BurgerWr, Dropdown, Items, Outimg } from "./style";
import burgermenu from "./../../../assets/svg/burgermenu.svg";
import close from "./../../../assets/svg/close.svg";
import { Link } from "react-router-dom";
import { navbar } from "../../../utils/navbar";

const BurgerMenu = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive((current) => !current);
  };

  return (
    <>
      <BurgerWr>
        <Burger onClick={handleClick}>
          {!active ? <Outimg src={burgermenu} /> : <Outimg src={close} />}
        </Burger>
        <Dropdown isActive={active}>
          {navbar.map(
            (value, index) =>
              !value.component &&
            !value.hidden && (
              <Items key={index}>
                  <Link style={{background: 'transparent', color: 'white', textDecoration: 'none'}} to={value.path} onClick={() => setActive(false)}>
                    {value.title}
                  </Link>
                </Items>
              )
            )}
        </Dropdown>
      </BurgerWr>
    </>
  );
};

export default BurgerMenu;
