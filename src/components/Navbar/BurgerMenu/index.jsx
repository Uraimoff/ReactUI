import React, { useContext, useState } from "react";
import { Burger, BurgerWr, Dropdown, Items, Outimg } from "./style";
import burgermenu from "./../../../assets/svg/burgermenu.svg";
import close from "./../../../assets/svg/close.svg";
import darkBurgermenu from "./../../../assets/svg/darkBurgermenu.svg";
import darkClose from "./../../../assets/svg/darkClose.svg";
import { Link } from "react-router-dom";
import { navbar } from "../../../utils/navbar";
import { ThemeContext } from "../../Component/contexts/ThemeContext";
import LanguageContext from "../../Component/contexts/LanguageContext";

const BurgerMenu = ({scroll, ishome}) => {
  const [active, setActive] = useState(false);
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const handleClick = () => {
    setActive((current) => !current);
  };
// !scrolled && isHome ? logout : theme === 'light' ? darkLogout : logout
  return (
    <>
      <BurgerWr>
        <Burger onClick={handleClick}>
          {!active ? <Outimg src={!scroll&&ishome?burgermenu:theme==='light'? darkBurgermenu : burgermenu} /> : <Outimg src={!scroll&&ishome?close:theme==='light'? darkClose : close} />}
        </Burger>
        <Dropdown isActive={active}>
          {navbar.map(
            (value, index) =>
              !value.component &&
            !value.hidden && (
              <Items key={index}>
                  <Link style={{background: 'transparent', color: 'white', textDecoration: 'none'}} to={value.path} onClick={() => setActive(false)}>
                  { language === 'en' ? value.title :language==='ru' ? value.titleru :  value.titleuz}
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
