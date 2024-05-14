import { getAllAttributes, getNodeText } from './helper/dom-helper.js';

export interface DomNode extends HTMLElement {
  nodeText: string;
  allAttributes: Attribute;
  name: string | null;
  type: string;
  domNodeChildren: DomNode[];
}

export interface Attribute {
  [key: string]: string | null;
}

export function createDomNode(node: HTMLElement): DomNode {
  return {
    ...node,
    get nodeText() {
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
      let childNodes: DomNode[] = [];

      for (let child of node.children) {
        childNodes.push(createDomNode(child as HTMLElement));
      }

      return childNodes;
    },
  };
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
