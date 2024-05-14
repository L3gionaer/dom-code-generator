import { getAllAttributes, getNodeText } from './helper/dom-helper.js';
export function createDomNode(node) {
    return Object.assign(Object.assign({}, node), { get nodeText() {
            return getNodeText(node);
        },
        get allAttributes() {
            return getAllAttributes(node);
        },
        get name() {
            return node.getAttribute('name');
        },
        get type() {
            return node.nodeName;
        },
        get domNodeChildren() {
            let childNodes = [];
            for (let child of node.children) {
                childNodes.push(createDomNode(child));
            }
            return childNodes;
        } });
}
// return Object.assign(node, {
//   get nodeText() {
//     return getNodeText(node);
//   },
//   get allAttributes() {
//     return getAllAttributes(node);
//   },
//   get name() {
//     return node.getAttribute('name');
//   },
//   get type() {
//     return node.nodeName;
//   },
//   get domNodeChildren() {
//     let childNodes: DomNode[] = [];
//     for (let child of node.children) {
//       childNodes.push(createDomNode(child as HTMLElement));
//     }
//     return childNodes;
//   },
// });
//# sourceMappingURL=create-dom-node.js.map