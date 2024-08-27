import React, { useContext } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { irBlack, vs } from "react-syntax-highlighter/dist/esm/styles/hljs";
// import HtmlStringRenderer from "./HtmlToString";
import { message } from "antd";
import { ThemeContext } from "./../../Component/contexts/ThemeContext";
import LanguageContext  from "./../../Component/contexts/LanguageContext";
import { useState } from "react";

const ComponentTable = ({ children,wholeCode, Title, Descriptions, code }) => {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const [copySuccess, setCopySuccess] = useState(false);
  const [show, SetShow] = useState(false);

  const info = () => {
    message.info(language==='en'?"Copied":language==='ru'?"Скопирован":"Nusxalandi");
  };
  const handleCopyClick = () => {
    navigator.clipboard.writeText(code || wholeCode).then(() => {
      setCopySuccess(true);
      info();
      setTimeout(() => setCopySuccess(false), 2000); // Reset after 2 seconds
    });
  };
  const Show = () => {
    SetShow(!show);
  };
  const codeString = `
    import React from 'react'
    import { ComponentTableWr, Description, Position } from './style'
    import SyntaxHighlighter from 'react-syntax-highlighter';
    import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
    const ComponentTable = () => {
        
      return (
        <ComponentTableWr>
            Content
            <Description>
            <Position>
                Title
            </Position>
            Description
            </Description>
            <SyntaxHighlighter language="javascript" style={a11yDark}>
          {codeString}
        </SyntaxHighlighter>
        </ComponentTableWr>
      )
    }
    
    export default ComponentTable
    `;

  return (
    <div
      className={`w-full max-w-2xl p-4 mb-[15px] align-top inline-block   transition-shadow   border  rounded-lg ${
        theme === "light"
          ? "bg-lightBg text-lightText hover:shadow-justShadow border-gray-700"
          : "bg-darkBg text-darkText hover:shadow-blackShadow border-gray-600"
      }`}
    >
      {/* <HtmlStringRenderer htmlString={Content} /> */}
      {children}
      <div
        className={`relative border-t mt-5 pt-5 ${
          theme === "light"
            ? "border-gray-700 text-lightText"
            : "border-gray-600 text-darkText"
        }`}
      >
        <div
          className={`absolute left-5 top-[-18px] px-2 py-1 text-lg font-medium ${
            theme === "light"
              ? "bg-lightBg text-lightText"
              : "bg-darkBg text-darkText"
          }`}
        >
          {Title || language==='en'?"Title":language==='ru'?"Заголовок":"Sarlavha"}
        </div>
        {Descriptions || language==='en'?"Description":language==='ru'?"Описание":"Tavsif"}
      </div>
      <button
        onClick={() => handleCopyClick()}
        className="  mt-2 mr-2 bg-blue-500 text-white text-sm py-1 px-2 rounded hover:bg-blue-600 focus:outline-none"
      >
        {copySuccess ? 
  (language === 'en' ? "Copied!" : 
   language === 'ru' ? "Скопировано!" : 
   language === 'uz' ? "Nusxa olindi!" : 
   "Copied!") 
  : 
  (language === 'en' ? "Copy" : 
   language === 'ru' ? "Копировать" : 
   language === 'uz' ? "Nusxa olish" : 
   "Copy")}
      </button>
      <button
        onClick={() => Show()}
        className="  mt-2 mr-2 border border-[white] bg-blue-500 text-white text-sm py-1 px-2 rounded hover:bg-blue-600 focus:outline-none"
      >
        {show ? 
  (language === 'en' ? "Hide!" : 
   language === 'ru' ? "Скрывать!" : 
   language === 'uz' ? "Yashirish!" : 
   "Hide!") 
  : 
  (language === 'en' ? "Show" : 
   language === 'ru' ? "Показывать" : 
   language === 'uz' ? "Ko'rsatish" : 
   "Show")}
      </button>
      {show && (
        <div className="w-full md:max-w-[350px] ">
          <SyntaxHighlighter
            language="javascript"
            className="text-[13px]"
            style={theme === "light" ? vs : irBlack}
          >

{wholeCode ||
            `import React from 'react'
            
const App: React.FC = () => (`+ code +
            `);

export default App;` || codeString}
          </SyntaxHighlighter>
        </div>
      )}
    </div>
  );
};

export default ComponentTable;
