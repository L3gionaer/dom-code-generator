var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CodeSnippet_instances, _CodeSnippet_init, _CodeSnippet_createElement;
class CodeSnippet {
    constructor(type, name) {
        _CodeSnippet_instances.add(this);
        this.type = type;
        this.name = name;
        this.code = [];
        __classPrivateFieldGet(this, _CodeSnippet_instances, "m", _CodeSnippet_init).call(this);
    }
    toArray() {
        return this.code;
    }
    appendTo(parentName) {
        this.code.push(`${parentName}.appendChild(${this.name});`);
        return this;
    }
    setAttributes(attributes) {
        for (let attribute of Object.entries(attributes)) {
            const key = attribute[0];
            this.code.push(`${this.name}.setAttribute("${key}", "${attributes[key]}")`);
        }
        return this;
    }
    setTextContent(text) {
        if (text.length != 0)
            this.code.push(`${this.name}.textContent = \`${text}\`;`);
        return this;
    }
}
_CodeSnippet_instances = new WeakSet(), _CodeSnippet_init = function _CodeSnippet_init() {
    __classPrivateFieldGet(this, _CodeSnippet_instances, "m", _CodeSnippet_createElement).call(this);
}, _CodeSnippet_createElement = function _CodeSnippet_createElement() {
    this.code.push(`let ${this.name} = document.createElement("${this.type}");`);
    return this;
};
export default CodeSnippet;
//# sourceMappingURL=code-snippet.js.map