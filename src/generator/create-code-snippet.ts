import CodeSnippet from './code-snippet.js';
import { DomNode } from './create-dom-node.js';

function createCodeSnippet(
  { type, allAttributes, nodeText }: DomNode,
  varName: string,
  parent: string
) {
  const codeSnippet = new CodeSnippet(type, varName);

  codeSnippet
    .setAttributes(allAttributes)
    .setTextContent(nodeText)
    .appendTo(parent);

  return codeSnippet;
}

export default createCodeSnippet;
