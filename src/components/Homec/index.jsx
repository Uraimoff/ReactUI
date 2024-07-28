import React from "react";
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
import { useNavigate } from "react-router-dom";

const Homec = () => {
  const navigate = useNavigate();
  return (
    <>
      <BackgroundVideoWr>
        <video id="myVideo" autoPlay loop muted src={videoBg} />
      </BackgroundVideoWr>
      <HomeWrapper>
        
        <Container>
          <div className="imgWr">
            <div className="wr">
              <H1>React Component</H1>
              <UniversTxt>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
                libero officiis hic sequi magni explicabo velit magnam inventore
                pariatur ex! Enim tempora nisi a nihil facilis inventore
                similique dolores odit.
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

        <BlackWrapper>
          <Container>React ❤'s you</Container>
        </BlackWrapper>
      </HomeWrapper>
    </>
  );
};

export default Homec;
