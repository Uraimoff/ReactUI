import React, { useContext } from "react";
import LanguageContext from "../../Component/contexts/LanguageContext";

const MainTxt = ({ en, ru, uz }) => {
  const { language } = useContext(LanguageContext);
  return (
    <>
      <h2 className="text-[30px] leading-[30px] font-[700]">
        {language === "en" ? en : language === "ru" ? ru : uz}
      </h2>
    </>
  );
};

export default MainTxt;
