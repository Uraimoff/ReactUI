import React, { useContext } from "react";
import LanguageContext from "../../Component/contexts/LanguageContext";
import MainTxt from "../Texts/MainTxt";
import SecondaryTxt from "../Texts/SecondaryTxt";

const APIComponent = ({ data }) => {
  const { language } = useContext(LanguageContext);
  return (
    <div className="api-component">
      <div className="my-[5px] flex flex-col gap-[5px]">
        <MainTxt en={"API"} ru={"API"} uz={"API"} />
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
      </div>
      {/* Wrap the table in a responsive container */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-defaultLightBg dark:bg-defaultDarkBg">
          <thead>
            <tr className="text-left bg-secondaryLightBg dark:bg-secondaryDarkBg">
              <th className="border-b-2 p-2 md:p-4 text-sm md:text-base">
                {language === "en"
                  ? "Property"
                  : language === "ru"
                  ? "Свойство"
                  : "Xususiyat"}
              </th>
              <th className="border-b-2 p-2 md:p-4 text-sm md:text-base">
                {language === "en"
                  ? "Description"
                  : language === "ru"
                  ? "Описание"
                  : "Tavsif"}
              </th>
              <th className="border-b-2 p-2 md:p-4 text-sm md:text-base">
                {language === "en" ? "Type" : language === "ru" ? "Тип" : "Turi"}
              </th>
              <th className="border-b-2 p-2 md:p-4 text-sm md:text-base">
                {language === "en"
                  ? "Default"
                  : language === "ru"
                  ? "По умолчанию"
                  : "Standart"}
              </th>
              <th className="border-b-2 p-2 md:p-4 text-sm md:text-base">
                {language === "en"
                  ? "Version"
                  : language === "ru"
                  ? "Версия"
                  : "Versiya"}
              </th>
            </tr>
          </thead>
          <tbody>
            {data[language].map((item, index) => (
              <tr
                key={index}
                className="hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <td className="border-b p-2 md:p-4 font-mono text-sm md:text-base">
                  {item.property}
                </td>
                <td className="border-b p-2 md:p-4 text-sm md:text-base">
                  {item.description}
                </td>
                <td className="border-b p-2 md:p-4 font-mono text-pink-500 text-sm md:text-base">
                  {item.type}
                </td>
                <td className="border-b p-2 md:p-4 text-sm md:text-base">
                  {item.default}
                </td>
                <td className="border-b p-2 md:p-4 text-sm md:text-base">
                  {item.version || "-"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default APIComponent;
