import CodeSnippet from './code-snippet.js';
function createCodeSnippet({ type, allAttributes, nodeText }, varName, parent) {
    const codeSnippet = new CodeSnippet(type, varName);
    codeSnippet
        .setAttributes(allAttributes)
        .setTextContent(nodeText)
        .appendTo(parent);
    return codeSnippet;
}
export default createCodeSnippet;
//# sourceMappingURL=create-code-snippet.js.map