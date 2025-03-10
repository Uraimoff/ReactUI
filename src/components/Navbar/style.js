import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  transition: all 0.3s ease;
  min-width: 0;
  z-index: 999;
  background-color: ${(props) => (props.theme === "light" ? "white" : "black")};
  color: ${(props) => (props.theme === "light" ? "black" : "white")};
`;
const Opacity = styled.div`
  background: #808080;
  width: 100%;
  height: 65px;
  position: absolute;
  z-index: 999;
  opacity: 0.3;
`;
const Main = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  min-width: 0;
  z-index: 999;
  justify-content: center;
  background-color: transparent;
  backdrop-filter: blur(8px);
`;
const Main2 = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 999;
  position: relative;
`;
const Wrapper = styled.div`
  color: ${(props) => {
    if (!props.scrolled && props.isHome) {
      return "#fff"; // White text for home page before 100vh
    } else {
      return props.theme === "light" ? "#000" : "#fff"; // Theme-dependent text color after 100vh or on other pages
    }
  }};
  background-color: transparent;
  transition: background-color 0.3s, color 0.3s;
  max-width: 1240px;
  min-width: 0;
  height: 64px;
  z-index: 999;
  display: flex;
  align-items: center;
  width: 100%;
  /* padding: 0 60px; */
  margin: 0 auto;
  justify-content: space-between;
  @media only screen and (max-width: 1024px) {
    max-width: 964px;
  }
  @media only screen and (max-width: 768px) {
    max-width: 700px;
    margin: 0 !important;
    display: flex;
    justify-content: space-between;
    padding: 0 60px;
  }
  @media only screen and (max-width: 576px) {
    /* padding: 0 !important; */
    margin: 0 !important;
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
  }

  font-size: 16px;
`;
const Section = styled.div`
  display: flex;
  align-items: center;
  font-weight: 400;
  background-color: transparent;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
  position: relative;
`;
const H3 = styled.h3`
  color: ${(props) => {
    if (!props.scrolled && props.isHome) {
      return "#fff"; // White text for home page before 100vh
    } else {
      return props.theme === "light" ? "#000" : "#fff"; // Theme-dependent text color after 100vh or on other pages
    }
  }};
  background-color: transparent;
  margin-bottom: 0;
  font-size: 20px;
  @media only screen and (max-width: 580px) {
    display: none;
  }
`;
const Logo = styled.img`
  background-color: transparent;
  margin-right: 12px;
  width: 50px;
`;

const Link = styled(NavLink)`
  color: ${(props) => {
    if (!props.scrolled && props.isHome) {
      return "#fff"; // White text for home page before 100vh
    } else {
      return props.theme === "light" ? "#000" : "#fff"; // Theme-dependent text color after 100vh or on other pages
    }
  }};
  text-decoration: none;
  background-color: transparent;
  height: 30px;
  gap: 5px;
  align-items: center;
  display: flex;
  transition: all 0.4s;

  :hover {
    background-color: transparent;
    height: 30px;
    opacity: 0.4;
  }
  :active {
    height: 30px;
    border-radius: 5px;
    color: #f5f7da;
  }
  @media only screen and (max-width: 1200px) {
    display: none;
  }
`;
const Outimg = styled.img`
  background: transparent;
  path {
    fill: ${(props) => (props.theme === "light" ? "#000" : "#fff")};
  }
`;
const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-width: 400px;
  background-color: transparent;
  max-width: 420px;
  z-index: 999;
  @media only screen and (max-width: 1200px) {
    display: none;
  }
`;
const PhoneNavbar = styled.div`
  display: none;
  @media only screen and (max-width: 1200px) {
    display: block;
  }
`;
const LoginButton = styled.div`
  display: block;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const LoginIcon = styled.div`
  display: none;
  @media only screen and (max-width: 768px) {
    display: block;
  }
`;
const DropdownWr = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: white;
  /* border-radius: 2px; */
  box-shadow: 0px 20px 38px rgba(0, 0, 0, 0.06),
    0px 7px 46px rgba(0, 0, 0, 0.06), 0px 8px 15px rgba(0, 0, 0, 0.06);
`;
const DropdownMenu = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  :hover {
    background-color: #fff;
    color: #0061df;
    cursor: pointer;
  }
`;
const OutWr = styled.div`
  padding-top: ${(props) => (props.noPadding ? "0" : "100px")};
`;

const Input = styled.input`
  background-color: transparent;
  outline: none;
  border: none;
  border-left: 1px solid gray;
  border-right: 1px solid gray;
  padding: 5px 20px;
  width: 100%;
  max-width: 200px;
  @media only screen and (max-width: 860px) {
    max-width: 400px;
  }
`;
const Span = styled.span`
  background-color: transparent;
  font-size: 13px;
  padding: 5px;
  border: 1px solid gray;
  border-radius: 5px;
  cursor: default;
  color: gray;
  position: absolute;
  right: 20px;
  opacity: ${(props) => (props.isActive ? 0 : 1)};
  transition: opacity 0.3s ease-in-out;
`;

const Results = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 40px;
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
  background: #808080;
  display: ${(props) => (props.show ? "block" : "none")};
  -webkit-box-shadow: -2px 1px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: -2px 1px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: -2px 1px 8px 0px rgba(34, 60, 80, 0.2);
`;
const ResultItem = styled.li`
  padding: 10px;
  color: ${(props) => {
    if (!props.scrolled && props.isHome) {
      return "#fff"; // White text for home page before 100vh
    } else {
      return props.theme === "light" ? "#000" : "#fff"; // Theme-dependent text color after 100vh or on other pages
    }
  }};
  background: ${(props) => {
    if (props.selected) {
      return props.theme === "light" ? "#E5E7EB" : "#1A1A1A";
    } else {
      return props.theme === "light" ? "#F9FAFB" : "#2C2C2E";
    }
  }};
  &:hover {
    background: ${(props) => (props.theme === "light" ? "#E5E7EB" : "#1A1A1A")};
  }
`;
const Burger = styled.div`
  height: 20px;
  display: none;
  @media only screen and (max-width: 860px) {
    /* margin-left: 10px; */
    display: block;
    height: 20px;
    border: gray 1px solid;
    border-radius: 5px;
    padding: 5px;
    background: transparent;
  }
`;

export {
  Container,
  Wrapper,
  Burger,
  Input,
  Span,
  ResultItem,
  Results,
  DropdownWr,
  Opacity,
  OutWr,
  Outimg,
  DropdownMenu,
  Section,
  Logo,
  Link,
  H3,
  Main,
  Main2,
  Nav,
  PhoneNavbar,
  LoginButton,
  LoginIcon,
};
