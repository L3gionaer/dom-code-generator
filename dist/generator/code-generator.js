import createCodeSnippet from './create-code-snippet.js';
import { createDomNode } from './create-dom-node.js';
import { generateUniqueNodeName } from './helper/dom-helper.js';
export function generateCode(html, rootId) {
    const dom = document.createElement('div');
    dom.innerHTML = html;
    const code = [];
    const firstDomNode = createDomNode(dom);
    code.push(`const component = document.querySelector("#${rootId}");`);
    for (let snippet of codeGenerator(firstDomNode, 'component')) {
        code.push(snippet);
    }
    return {
        toString: () => getStringFromCodeSnippets(code),
        toArray: () => code,
    };
}
function* codeGenerator(domNode, parentName, names = []) {
    const name = generateUniqueNodeName(domNode, this.names);
    names.push(name);
    const codeSnippet = createCodeSnippet(domNode, name, parentName);
    const code = [...this.code, ...codeSnippet.toArray()];
    code.push('-');
    yield code;
    if (domNode.hasChildNodes()) {
        for (const childNode of domNode.domNodeChildren) {
            this.generateCode.call(this, childNode, codeSnippet.name);
            yield* codeGenerator(childNode, codeSnippet.name, names);
        }
    }
}
function getStringFromCodeSnippets(codeSnippets) {
    let codeAsString = '';
    for (let codeLine of codeSnippets) {
        codeAsString += '\t';
        if (codeLine != '-') {
            codeAsString += codeLine + '\n';
        }
        else {
            codeAsString += '\n';
        }
    }
    return codeAsString;
}
// class CodeGenerator {
//   private code: string[] = [];
//   private names: string[] = [];
//   constructor(private html: string, private rootId: string) {
//     this.init();
//   }
//   public toArray() {
//     return this.code;
//   }
//   public toString() {
//     let codeAsString = '';
//     for (let codeLine of this.code) {
//       codeAsString += '\t';
//       if (codeLine != '-') {
//         codeAsString += codeLine + '\n';
//       } else {
//         codeAsString += '\n';
//       }
//     }
//     return codeAsString;
//   }
//   private init() {
//     const dom: HTMLElement = document.createElement('div');
//     dom.innerHTML = this.html;
//     const firstDomNode = createDomNode(dom);
//     this.code.push(
//       `const component = document.querySelector("#${this.rootId}");`
//     );
//     this.generateCode(firstDomNode, 'component');
//   }
//   private generateCode(domNode: DomNode, parentName: string) {
//     const name = generateUniqueNodeName(domNode, this.names);
//     this.names.push(name);
//     const codeSnippet = createCodeSnippet(domNode, name, parentName);
//     this.code = [...this.code, ...codeSnippet.toArray()];
//     this.code.push('-');
//     if (domNode.hasChildNodes()) {
//       for (const childNode of domNode.domNodeChildren) {
//         this.generateCode.call(this, childNode, codeSnippet.name);
//       }
//     }
//   }
// }
// export default CodeGenerator;
//# sourceMappingURL=code-generator.js.map