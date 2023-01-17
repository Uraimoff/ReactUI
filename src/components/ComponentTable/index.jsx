import React from "react";
import { ComponentTableWr, Description, Position } from "./style";
import SyntaxHighlighter from "react-syntax-highlighter";
import { irBlack } from "react-syntax-highlighter/dist/esm/styles/hljs";
// import { Button } from '../Access/style';
const ComponentTable = ({ Content, Title, Descriptions }) => {
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
    <ComponentTableWr>
      {Content} Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Perspiciatis alias, accusamus corrupti hic quibusdam numquam, eligendi
      labore neque culpa enim dolor quo repellat cum reiciendis molestiae, non
      distinctio! Temporibus, deserunt. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Adipisci, sunt nobis cum dignissimos doloribus dolore
      corporis iste inventore ullam porro, nisi fugit magni deleniti enim
      voluptates quod nemo blanditiis numquam!
      <Description>
        <Position>{Title}</Position>
        {Descriptions}
      </Description>
      <SyntaxHighlighter language="javascript" style={irBlack}>
        {codeString}
      </SyntaxHighlighter>
    </ComponentTableWr>
  );
};

export default ComponentTable;
