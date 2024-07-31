import React from 'react';

const HtmlStringRenderer = ({ htmlString }) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: htmlString }}
    />
  );
};

export default HtmlStringRenderer;
