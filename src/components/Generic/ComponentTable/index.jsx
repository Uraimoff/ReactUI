import React, { useContext } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { irBlack, vs } from "react-syntax-highlighter/dist/esm/styles/hljs";
// import HtmlStringRenderer from "./HtmlToString";
import { message, } from "antd";
import { ThemeContext } from "./../../Component/contexts/ThemeContext";
import { useState } from "react";

const ComponentTable = ({ Content, Title, Descriptions, code }) => {
  const { theme } = useContext(ThemeContext);
  const [copySuccess, setCopySuccess] = useState(false);
  const [show, SetShow] = useState(false);

  const info = () => {
    message.info("Copied");
  };
  const handleCopyClick = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopySuccess(true);
      info();
      setTimeout(() => setCopySuccess(false), 2000); // Reset after 2 seconds
    });
  };
  const Show =()=>{
    SetShow(!show)
  }
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
    <div className={`w-full max-w-2xl p-4 mt-8 mb-8 border shadow-[1px 1px 15px 0px rgba(34, 60, 80, 0.2)] hover: rounded-lg ${theme === 'light' ? 'bg-lightBg text-lightText border-gray-700' : 'bg-darkBg text-darkText border-gray-600'}`}>
      {/* <HtmlStringRenderer htmlString={Content} /> */}
      {Content}
      <div className={`relative border-t mt-5 pt-5 ${theme === 'light' ? 'border-gray-700 text-lightText' : 'border-gray-600 text-darkText'}`}>
        <div className={`absolute left-5 top-[-18px] px-2 py-1 text-lg font-medium ${theme === 'light' ? 'bg-lightBg text-lightText' : 'bg-darkBg text-darkText'}`}>
          {Title || "Title"}
        </div>
        {Descriptions || "Description"}
      </div>
      <button
          onClick={()=>handleCopyClick()}
          className="  mt-2 mr-2 bg-blue-500 text-white text-sm py-1 px-2 rounded hover:bg-blue-600 focus:outline-none"
        >
          {copySuccess ? "Copied!" : "Copy"}
        </button>
      <button
          onClick={()=>Show()}
          className="  mt-2 mr-2 border border-[white] bg-blue-500 text-white text-sm py-1 px-2 rounded hover:bg-blue-600 focus:outline-none"
        >
          {show ? "Hide" : "Show"}
        </button>
        {show&&
      <SyntaxHighlighter language="javascript" className='text-[15px]' style={theme ==="light" ? vs : irBlack}>
        {code || codeString}
      </SyntaxHighlighter>}
    </div>
  );
};

export default ComponentTable;
