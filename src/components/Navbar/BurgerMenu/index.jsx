import React, { useContext, useState } from "react";
import { Burger, BurgerWr, Dropdown, Items, Outimg } from "./style";
import burgermenu from "./../../../assets/svg/burgermenu.svg";
import close from "./../../../assets/svg/close.svg";
import darkBurgermenu from "./../../../assets/svg/darkBurgermenu.svg";
import darkClose from "./../../../assets/svg/darkClose.svg";
import { Link } from "react-router-dom";
import { navbar } from "../../../utils/navbar";
import { ThemeContext } from "../../Component/contexts/ThemeContext";

const BurgerMenu = () => {
  const [active, setActive] = useState(false);
  const { theme } = useContext(ThemeContext);
  const handleClick = () => {
    setActive((current) => !current);
  };

  return (
    <>
      <BurgerWr>
        <Burger onClick={handleClick}>
          {!active ? <Outimg src={theme==='light'? darkBurgermenu : burgermenu} /> : <Outimg src={theme==='light'? darkClose : close} />}
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
