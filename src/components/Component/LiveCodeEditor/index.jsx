import { useState, useEffect, useRef, useCallback } from "react";
import MainTxt from "../../Generic/Texts/MainTxt";

export default function LiveCodeEditor() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const iframeRef = useRef(null);

  // Memoized function to update the preview
  const updatePreview = useCallback(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

    iframeDoc.open();
    iframeDoc.write(`
      <html>
      <head>
        <style>${css}</style>
      </head>
      <body>
        ${html}
        <script>${js}</script>
      </body>
      </html>
    `);
    iframeDoc.close();
  }, [html, css, js]); // Dependencies

  // Update preview when HTML, CSS, or JS changes
  useEffect(() => {
    updatePreview();
  }, [updatePreview]);

  return (
    <>
      <MainTxt en={"Live code preview"} ru={"API"} uz={"API"} />
    <div className="container">
      
      <div className="editor">
        <h3>HTML</h3>
        <textarea value={html} onChange={(e) => setHtml(e.target.value)} />
      </div>

      <div className="editor">
        <h3>CSS</h3>
        <textarea value={css} onChange={(e) => setCss(e.target.value)} />
      </div>

      <div className="editor">
        <h3>JavaScript</h3>
        <textarea value={js} onChange={(e) => setJs(e.target.value)} />
      </div>
      </div>

      <h3>Live Preview</h3>
      <iframe ref={iframeRef} title="Preview" className="preview"></iframe>

      <style>{`
        .container {
          display: flex;
          align-items: center;
          font-family: Arial, sans-serif;
          }
          .editor {
            width: 100%;
            max-width: 800px;
            margin-bottom: 10px;
            }
            textarea {
              width: 100%;
              height: 150px;
              font-family: monospace;
              padding: 10px;
              border: 1px solid #ccc;
              }
              .preview {
                width: 100%;
                height: 300px;
          border: 1px solid #ccc;
          background: white;
          }
          `}</style>
          </>
  );
}
