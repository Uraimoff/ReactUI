import React, { useContext } from "react";
import LanguageContext from "../../Component/contexts/LanguageContext";

const SecondaryTxt = ({ en, ru, uz }) => {
  const { language } = useContext(LanguageContext);
  return (
    <>
      <p>{language === "en" ? en : language === "ru" ? ru : uz}</p>
    </>
  );
};

export default SecondaryTxt;
