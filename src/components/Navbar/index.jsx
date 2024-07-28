import React, { useEffect, useRef, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { navbar } from "../../utils/navbar";
import LaoyoutS from "../LayoutS";
import react from "./../../assets/svg/react.svg";
import logout from "./../../assets/svg/logout.svg";

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
import BurgerMenu from "../BurgerMenu";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const inputRef = useRef(null);
  const token = localStorage.getItem("token");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(navbar);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const containerRef = useRef(null);

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

    const filteredResults = navbar.filter((item) =>
      item.title.toLowerCase().includes(value)
    );

    setResults(filteredResults);
    setSelectedIndex(-1);
  };

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
    localStorage.removeItem("token");
    console.log("inside");
    Asd();
    console.log("navigating");
  };

  // console.log(()=>Logout(), "logout out");

  return (
    <>
      <Container>
        <Main>
          <Opacity></Opacity>
          <Wrapper>
            <Section onClick={() => navigate("./home")}>
              <Logo src={react} />
              <H3>React Component</H3>
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
                  key={index}
                  selected={index === selectedIndex}
                  onMouseDown={() => handleItemClick(item.path)}
                  >
                    {item.title}
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
                        key={index}
                        className={({ isActive }) => isActive && "active"}
                        to={value.path}
                      >
                        {value.title}
                      </Link>
                    )
                )}
              </Nav>
              <Link onClick={Logout}>
                <Outimg src={logout} alt="" />
                Logout
              </Link>
              <BurgerMenu></BurgerMenu>
              
            </Section>
          </Wrapper>
        </Main>
        <OutWr>
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
