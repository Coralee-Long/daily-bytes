import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeSnippetProps {
  code: string;
  language: string;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ code, language }) => {
  return (
    <div className="rounded-md overflow-hidden bg-gray-800 p-4">
      <SyntaxHighlighter language={language} style={oneDark} wrapLines>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeSnippet;
