import React, { useContext, useState, useEffect } from "react";
import { Burger, BurgerWr, Dropdown, Items, Links, Outimg } from "./style";
import burgermenu from "./../../../assets/svg/burgermenu.svg";
import close from "./../../../assets/svg/close.svg";
import darkBurgermenu from "./../../../assets/svg/darkBurgermenu.svg";
import darkClose from "./../../../assets/svg/darkClose.svg";
import { Link, useLocation } from "react-router-dom";
import { navbar } from "../../../utils/navbar";
import logout from "./../../../assets/svg/logout.svg";
import darkLogout from "./../../../assets/svg/darkLogout.svg";
import { ThemeContext } from "../../Component/contexts/ThemeContext";
import LanguageContext from "../../Component/contexts/LanguageContext";
import { message } from "antd";
import ThemeToggle from "../ThemeToggle";
const BurgerMenu = ({ scroll, ishome }) => {
  const [active, setActive] = useState(false);
  const { theme } = useContext(ThemeContext);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const { language } = useContext(LanguageContext);
  const token = localStorage.getItem("token");
  const handleClick = () => {
    setActive((current) => !current);
  };
  const isHome = location.pathname === "/home";
  const info = () => {
    message.info("You logged out");
  };
  useEffect(() => {
    const handleScroll = () => {
      // Check if the scroll position is greater than 100vh
      if (window.scrollY > window.innerHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const Asd = useEffect(() => {
    if (token === null) {
      console.log("token checked");
    }
  }, [token]);
  const Logout = () => {
    info();
    localStorage.removeItem("token");
    console.log("inside");
    Asd();
    console.log("navigating");
  };
  // !scrolled && isHome ? logout : theme === 'light' ? darkLogout : logout
  return (
    <>
      <BurgerWr>
        <Burger onClick={handleClick}>
          {!active ? (
            <Outimg
              src={
                !scroll && ishome
                  ? burgermenu
                  : theme === "light"
                  ? darkBurgermenu
                  : burgermenu
              }
            />
          ) : (
            <Outimg
              src={
                !scroll && ishome
                  ? close
                  : theme === "light"
                  ? darkClose
                  : close
              }
            />
          )}
        </Burger>
        <Dropdown
          theme={theme}
          isHome={isHome}
          scrolled={scrolled}
          isActive={active}
        >
          <div className="flex mt-[50px] justify-between	max-w-[250px] mb-[20px] mx-[15px] ">
          <Links
            theme={theme}
            isHome={isHome}
            scrolled={scrolled}
            onClick={Logout}
          >
            <Outimg
              className="block h-8 w-8 ml-2 border border-gray-500 rounded-md p-1.5 bg-transparent"
              src={
                !scrolled && isHome
                  ? logout
                  : theme === "light"
                  ? darkLogout
                  : logout
              }
              alt=""
            />
          </Links>
          <ThemeToggle ishome={isHome} scroll={scrolled} />
          <Links
            theme={theme}
            isHome={isHome}
            scrolled={scrolled}
            onClick={Logout}
          >
            <Outimg
              className="block h-8 w-8 ml-2 border border-gray-500 rounded-md p-1.5 bg-transparent"
              src={
                !scrolled && isHome
                  ? logout
                  : theme === "light"
                  ? darkLogout
                  : logout
              }
              alt=""
            />
          </Links>
          </div>
          {navbar.map(
            (value, index) =>
              !value.component &&
              !value.hidden && (
                <Items
                  theme={theme}
                  isHome={isHome}
                  scrolled={scrolled}
                  key={index}
                >
                  <Link
                    style={{
                      background: "transparent",
                      textDecoration: "none",
                    }}
                    to={value.path}
                    onClick={() => setActive(false)}
                  >
                    {language === "en"
                      ? value.title
                      : language === "ru"
                      ? value.titleru
                      : value.titleuz}
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
