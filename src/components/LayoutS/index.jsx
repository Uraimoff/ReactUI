import React from "react";
import ForSideAds from "../Generic/ForSideAds";
import SideNav from "../Component/SideNav";
import { ContentWrapper, PlaceBar } from "./style";
// import LanguageContext from "../Component/contexts/LanguageContext";
import MainTxt from "../Generic/Texts/MainTxt";
import SecondaryTxt from "../Generic/Texts/SecondaryTxt";

const LaoyoutS = ({ children }) => {
  // const { language } = useContext(LanguageContext);
  return (
    <div className="flex gap-12 w-full">
      <div className="fixed top-0 hidden lg:block left-0 h-full">
        <SideNav />
      </div>
      <PlaceBar></PlaceBar>
      <div className="w-full flex">
        <ContentWrapper>
          {children}
          <section className="md:w-[70%] justify-start w-full flex-col start gap-[30px] mt-[80px]">
            <MainTxt
              en={
                "Production-ready website templates, built the way you want them."
              }
              ru={
                "Готовые к использованию шаблоны веб-сайтов, созданные так, как вы этого хотите."
              }
              uz={
                "Siz xohlagan tarzda yaratilgan, ishlab chiqarishga tayyor veb-sayt shablonlari."
              }
            />

            <SecondaryTxt
              en={
                "Visually-stunning, easy to customize site templates built with React.js. The perfect starting point for your next project and the ultimate resource for learning how experts build real websites with DocUI."
              }
              ru={
                "Визуально впечатляющие, легко настраиваемые шаблоны сайтов, созданные на основе React.js. Идеальная отправная точка для вашего следующего проекта и отличный ресурс для изучения того, как эксперты создают реальные веб-сайты с помощью DocUI."
              }
              uz={
                "React.js yordamida yaratilgan, vizual jihatdan hayratlanarli va oson sozlanadigan sayt shablonlari. Bu sizning keyingi loyihangiz uchun mukammal boshlang'ich nuqta va DocUI yordamida haqiqiy veb-saytlarni qanday qurishni o'rganish uchun eng yaxshi resurs."
              }
            />
          </section>
        </ContentWrapper>
        <div className="xl:block hidden fixed right-0">
          <ForSideAds />
        </div>
      </div>
    </div>
  );
};

export default LaoyoutS;
