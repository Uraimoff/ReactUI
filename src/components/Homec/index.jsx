import React, { useContext } from "react";
import {
  BackgroundVideoWr,
  BlackWrapper,
  Container,
  H1,
  HomeWrapper,
  Img,
  UniversTxt,
} from "./styled";
import "./style.css";
import videoBg from "./../../assets/video/videoBg.mp4";
import react from "./../../assets/svg/react.svg";
import { Buttons } from "../Generic";
import { useLocation, useNavigate } from "react-router-dom";
import { ThemeContext } from "../Component/contexts/ThemeContext";

const Homec = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { theme } = useContext(ThemeContext);

    // checks if current location is home 
  const isHome = location.pathname === '/home'
  return (
    <>
      <BackgroundVideoWr>
        <video id="myVideo" autoPlay loop muted src={videoBg} />
      </BackgroundVideoWr>
      <HomeWrapper theme={theme} isHome={isHome}>
        
        <Container >
          <div className="imgWr ">
            <div className="wr">
              <H1>DocUI</H1>
              <UniversTxt>
              We're thrilled to have you here! Our mission is to empower developers by providing a comprehensive library of React components designed to make your development process smoother, faster, and more enjoyable. Whether you're building a simple website or a complex application, our components are crafted to help you create beautiful, responsive, and accessible user interfaces with ease.
              </UniversTxt>
              <div className="butt">
                <Buttons
                  onClick={() => navigate("/component")}
                  radius={"20px"}
                  txt={"Get started"}
                  color={"white"}
                  border={"none"}
                  background={"#007FFF"}
                />
                <a
                  className="buttonA"
                  href="https://github.com/Uraimoff/ReactUI"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Buttons
                    radius={"20px"}
                    txt={`${"View on Github"}`}
                    color={"white"}
                    border={"none"}
                    background={"#3A3A3A"}
                  />
                </a>
              </div>
            </div>
            <Img className="App-logo logo" src={react} alt="React" />
          </div>
        </Container>

        <BlackWrapper theme={theme}>
          <Container>React ❤'s you</Container>
        </BlackWrapper>
      </HomeWrapper>
    </>
  );
};

export default Homec;
