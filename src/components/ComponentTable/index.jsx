import React from "react";
import { ComponentTableWr, Description, Position } from "./style";
import SyntaxHighlighter from "react-syntax-highlighter";
import { irBlack } from "react-syntax-highlighter/dist/esm/styles/hljs";
// import {ButtonComponent} from './../mock/data'
// import { Button } from '../Access/style';
const ComponentTable = ({ Content, Title, Descriptions, code }) => {
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

  // const ButtonComponent = `
  //   <button>Hello</button>
  //   `;
  //   const y = trim(ButtonComponent)
  // console.log(typeof ButtonComponent, y,  "stringdan ochish");



  return (
    <ComponentTableWr>
      {Content}
      <Description>
        <Position>{Title}</Position>
        {Descriptions}
      </Description>
      <SyntaxHighlighter language="javascript" style={irBlack}>
       { code.length <= 10 ?  codeString : code}
      </SyntaxHighlighter>
    </ComponentTableWr>
  );
};

export default ComponentTable;
