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
import LanguageContext from "../Component/contexts/LanguageContext";

const Homec = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  // checks if current location is home
  const isHome = location.pathname === "/home";
  return (
    <>
      <BackgroundVideoWr>
        <video id="myVideo" autoPlay loop muted src={videoBg} />
      </BackgroundVideoWr>
      <HomeWrapper theme={theme} isHome={isHome}>
        <Container>
          <div className="imgWr ">
            <div className="wr">
              <H1>DocUI</H1>
              <UniversTxt>
                {language === "en"
                  ? "We're thrilled to have you here! Our mission is to empower developers by providing a comprehensive library of React components designed to make your development process smoother, faster, and more enjoyable. Whether you're building a simple website or a complex application, our components are crafted to help you create beautiful, responsive, and accessible user interfaces with ease."
                  : language==='ru' ? "Мы рады приветствовать вас здесь! Наша миссия — предоставить разработчикам комплексную библиотеку компонентов React, которая сделает ваш процесс разработки более плавным, быстрым и приятным. Независимо от того, создаете ли вы простой веб-сайт или сложное приложение, наши компоненты помогут вам легко создавать красивые, адаптивные и доступные пользовательские интерфейсы." 
                  : "Sizni bu yerda ko'rganimizdan juda mamnunmiz! Bizning maqsadimiz – dasturchilarga React komponentlari kutubxonasi orqali yordam berishdir. Bu kutubxona sizning rivojlantirish jarayonlaringizni yanada silliq, tezroq va yoqimli qilish uchun mo'ljallangan. Siz oddiy veb-sayt yoki murakkab ilova yaratmoqchimisiz, farqi yo'q, bizning komponentlarimiz sizga chiroyli, responsiv va foydalanishga qulay foydalanuvchi interfeyslarini osonlik bilan yaratishga yordam beradi."}
              </UniversTxt>
              <div className="butt">
                <Buttons
                  onClick={() => navigate("/component")}
                  radius={"20px"}
                  txt={language === "en"?"Get started":language==='ru' ? 'Начать':'Boshlash'}
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
                    txt={language === "en"?"View on Github":language==='ru' ? 'Посмотреть на Github':"Github-da ko'rish"}
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
