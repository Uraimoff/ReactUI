import React, { useContext } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { irBlack, vs } from "react-syntax-highlighter/dist/esm/styles/hljs";
import HtmlStringRenderer from "./HtmlToString";
import { ThemeContext } from "./../../Component/contexts/ThemeContext";

const ComponentTable = ({ Content, Title, Descriptions, code }) => {
  const { theme } = useContext(ThemeContext);

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
    <div className={`w-full max-w-2xl p-4 mt-8 mb-8 border rounded-lg ${theme === 'light' ? 'bg-lightBg text-lightText border-gray-700' : 'bg-darkBg text-darkText border-gray-600'}`}>
      <HtmlStringRenderer htmlString={Content} />
      <div className={`relative border-t mt-5 pt-5 ${theme === 'light' ? 'border-gray-700 text-lightText' : 'border-gray-600 text-darkText'}`}>
        <div className={`absolute left-5 top-[-18px] px-2 py-1 text-lg font-medium ${theme === 'light' ? 'bg-lightBg text-lightText' : 'bg-darkBg text-darkText'}`}>
          {Title || "Title"}
        </div>
        {Descriptions || "Description"}
      </div>
      <SyntaxHighlighter language="javascript" style={theme ==="light" ? vs : irBlack}>
        {code || codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default ComponentTable;
