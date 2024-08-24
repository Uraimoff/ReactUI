import React, { useContext, useEffect, useRef, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { navbar } from "../../utils/navbar";
import LaoyoutS from "../LayoutS";
import react from "./../../assets/svg/react.svg";
import darkReact from "./../../assets/svg/darkReact.svg";
import { message } from "antd";
import logout from "./../../assets/svg/logout.svg";
import darkLogout from "./../../assets/svg/darkLogout.svg";
import { ThemeContext } from "./../Component/contexts/ThemeContext"; // Adjust the path as needed

import {
  Container,
  H3,
  Link,
  Logo,
  Main,
  Span,
  Results,
  Nav,
  Opacity,
  OutWr,
  Input,
  Outimg,
  Section,
  Wrapper,
  ResultItem,
} from "./style";
import BurgerMenu from "./BurgerMenu";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import LanguageContext from "../Component/contexts/LanguageContext";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const inputRef = useRef(null);
  // const [messageApi] = message.useMessage();
  const [scrolled, setScrolled] = useState(false);
  const token = localStorage.getItem("token");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(navbar);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const containerRef = useRef(null);
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  const info = () => {
    message.info("You logged out");
  };
  // this fuction created for only homepage if you scroll after 100vh it will change its theme to theme mode
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

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowDown") {
        setSelectedIndex((prevIndex) =>
          prevIndex < results.length - 1 ? prevIndex + 1 : prevIndex
        );
      } else if (event.key === "ArrowUp") {
        setSelectedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
      } else if (event.key === "Enter" && selectedIndex >= 0) {
        navigate(results[selectedIndex].path);
        setQuery("");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex, results, navigate]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setQuery("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setQuery(value);

    // Determine which title to use based on the selected language
    const titleKey =
      language === "en" ? "title" : language === "ru" ? "titleru" : "titleuz";

    const filteredResults = navbar.filter((item) =>
      item[titleKey].toLowerCase().includes(value)
    );

    setResults(filteredResults);
    setSelectedIndex(-1);
  };

  // checks if current location is home
  const isHome = location.pathname === "/home";

  const handleItemClick = (path) => {
    navigate(path);
    setQuery("");
  };

  useEffect(() => {
    const handleCtrlK = (event) => {
      if (event.ctrlKey && event.key === "k") {
        event.preventDefault();
        inputRef.current.focus();
      }
    };

    window.addEventListener("keydown", handleCtrlK);

    return () => {
      window.removeEventListener("keydown", handleCtrlK);
    };
  }, []);

  const handleFocus = () => {
    setIsActive(true);
  };

  const handleBlur = () => {
    setIsActive(false);
  };
  // console.log( typeof location.pathname, " bu page location");
  const component = navbar
    .map((value) => {
      return value.component && value.path;
    })
    .filter((value) => {
      return value[0];
    });
  const dato = component.filter((value) => {
    return value === location.pathname;
  });
  const asdas = dato[0];
  // console.log(dato, "filtr");

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

  // console.log(()=>Logout(), "logout out");

  return (
    <>
      <Container theme={theme}>
        <Main>
          <Opacity></Opacity>
          <Wrapper
            isHome={isHome}
            scrolled={scrolled}
            className="md:!px-[30px] lg:!px-0"
            theme={theme}
          >
            <Section onClick={() => navigate("./home")}>
              <Logo
                src={
                  !scrolled && isHome
                    ? react
                    : theme === "light"
                    ? darkReact
                    : react
                }
              />
              <H3 isHome={isHome} scrolled={scrolled} theme={theme}>
                DocUI
              </H3>
            </Section>
            <Section ref={containerRef}>
              <Input
                onFocus={handleFocus}
                onBlur={handleBlur}
                ref={inputRef}
                value={query}
                onChange={handleSearch}
                placeholder="Search"
              />
              <Span isActive={isActive}>CTRL+K</Span>

              <Results show={query !== ""}>
                {results.map((item, index) => (
                  <ResultItem
                    theme={theme}
                    key={index}
                    selected={index === selectedIndex}
                    onMouseDown={() => handleItemClick(item.path)}
                  >
                    {language === "en"
                      ? item.title
                      : language === "ru"
                      ? item.titleru
                      : item.titleuz}
                  </ResultItem>
                ))}
              </Results>
            </Section>
            <Section>
              <Nav>
                {navbar.map(
                  (value, index) =>
                    !value.component &&
                    !value.hidden && (
                      <Link
                        isHome={isHome}
                        scrolled={scrolled}
                        theme={theme}
                        key={index}
                        className={({ isActive }) => isActive && "active"}
                        to={value.path}
                      >
                        {language === "en"
                          ? value.title
                          : language === "ru"
                          ? value.titleru
                          : value.titleuz}
                      </Link>
                    )
                )}
              </Nav>
              <div className="w-full flex items-center ml-[5px] gap-[5px] ">
                <Link
                  theme={theme}
                  isHome={isHome}
                  scrolled={scrolled}
                  onClick={Logout}
                >
                  <Outimg
                    className="block h-8 w-8  border border-gray-500 rounded-md p-1.5 bg-transparent"
                    src={
                      !scrolled && isHome
                        ? logout
                        : theme === "light"
                        ? darkLogout
                        : logout
                    }
                    alt=""
                  />
                </Link>
                <div className="hidden xl:block">
                  <ThemeToggle ishome={isHome} scroll={scrolled} />
                </div>
                <LanguageSwitcher ishome={isHome} scroll={scrolled} />
                <BurgerMenu ishome={isHome} scroll={scrolled} />
              </div>
            </Section>
          </Wrapper>
        </Main>
        <OutWr noPadding={location.pathname === "/home"}>
          {location.pathname === asdas ? (
            <LaoyoutS>
              <Outlet />
            </LaoyoutS>
          ) : (
            <Outlet />
          )}
        </OutWr>
      </Container>
    </>
  );
};

export default Navbar;
