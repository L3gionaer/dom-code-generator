import { Attribute } from './create-dom-node.js';

class CodeSnippet {
  code: string[];

  constructor(private type: string, public name: string) {
    this.code = [];

    this.#init();
  }

  #init() {
    this.#createElement();
  }

  toArray() {
    return this.code;
  }

  #createElement() {
    this.code.push(
      `let ${this.name} = document.createElement("${this.type}");`
    );

    return this;
  }

  appendTo(parentName: string) {
    this.code.push(`${parentName}.appendChild(${this.name});`);

    return this;
  }

  setAttributes(attributes: Attribute) {
    for (let attribute of Object.entries(attributes)) {
      const key = attribute[0];

      this.code.push(
        `${this.name}.setAttribute("${key}", "${attributes[key]}")`
      );
    }

    return this;
  }

  setTextContent(text: string) {
    if (text.length != 0)
      this.code.push(`${this.name}.textContent = \`${text}\`;`);

    return this;
  }
}

export default CodeSnippet;
