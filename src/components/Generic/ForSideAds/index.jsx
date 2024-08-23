import React, { useContext } from "react";
import { ThemeContext } from "./../../Component/contexts/ThemeContext"; // Adjust the path as needed
import LanguageContext from "../../Component/contexts/LanguageContext";

const ForSideAds = () => {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  return (
    <>
      <div className="w-60 box-border absolute right-10  flex-col gap-5 hidden xl:flex">
        <div
          className={`rounded-lg  box-border p-1.5 ${
            theme === "light" ? " bg-secondaryLightBg" : " bg-defaultDarkBg"
          }`}
        >
          <div
            className={`font-extrabold text-2xl overflow-hidden relative ${
              theme === "light" ? "text-black" : "text-white"
            }`}
          >
            𝕊𝕦𝕡𝕡𝕠𝕣𝕥 𝕌𝕫𝕓𝕖𝕜 𝔻𝕖𝕧𝕖𝕝𝕠𝕡𝕖𝕣𝕤
            <div>
              <div className="h-2.5 bg-[#009AB6]"></div>
              <div className="h-2.5 bg-white"></div>
              <div className="h-2.5 bg-green-500"></div>
            </div>
          </div>
        </div>
        <div
          className={`rounded-lg  box-border p-1.5 ${
            theme === "light" ? " bg-secondaryLightBg  " : " bg-defaultDarkBg"
          }`}
        >
          {language==='en'? 
          "🚀 Join the DocUI team!" : language==='ru'? "🚀 Присоединяйтесь к команде DocUI!" : "🚀 DocUI jamoasiga qo'shiling!"
          }
          <div
            className={`p-2.5 text-sm ${
              theme === "light" ? "text-gray-700" : "text-gray-300"
            }`}
          >
            {language==='en'?
           "We are actively seeking talented React Engineers and other exceptional professionals for various roles! Come and explore exciting opportunities with us."
          : language==='ru'? "Мы ищем талантливых React-инженеров и других замечательных специалистов! Присоединяйтесь к нам и откройте для себя увлекательные возможности." : "Biz React muhandislarini va boshqa ajoyib mutaxassislarni izlayapmiz! Biz bilan birga ajoyib imkoniyatlarni kashf eting."}
            out more!
          </div>
        </div>
      </div>
    </>
  );
};

export default ForSideAds;
