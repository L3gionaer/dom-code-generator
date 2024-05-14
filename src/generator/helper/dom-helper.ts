import { DomNode } from '../create-dom-node.js';

export function getNodeText(node: HTMLElement) {
  if (node.childNodes[0]?.nodeValue) {
    const text = node.childNodes[0].nodeValue.trim();

    return text;
  } else {
    return '';
  }
}

export function getAllAttributes(node: HTMLElement) {
  let attributes: { [key: string]: string | null } = {};

  if (node.getAttributeNames().length > 0) {
    const attributeNames = node.getAttributeNames();

    attributeNames.forEach((attrName) => {
      attributes[attrName] = node.getAttribute(attrName);
    });
  }

  return attributes;
}

//TODO
export function generateUniqueNodeName(
  node: DomNode,
  nameList: string[]
): string {
  let { id, name, classList, type } = node;

  if (id) {
    if (!nameList.find((name) => node?.id == name)) return id;
  }

  if (name) {
    if (!nameList.find((name) => node?.name == name)) return name;
  }

  if (classList.length > 0) {
    let nameResult: string | null = null;

    classList.forEach((className) => {
      if (!nameResult) {
        if (!nameList.find((name) => className == name)) {
          nameResult = className;
        }
      }
    });

    if (nameResult) return nameResult;
  }

  let nameResult: string | null = null;
  let index = 1;
  while (!nameResult) {
    type = type.toLowerCase();
    if (type.includes('-')) {
      type = type
        .split('-')
        .map((t, index, typeAsArray) => {
          if (index == typeAsArray.length - 1)
            return t.charAt(0).toUpperCase() + t.slice(1);
          return t;
        })
        .join('');
    }

    const typeAndIndex = `${type}${index}`;
    const result = nameList.find((name) => name == typeAndIndex);

    if (!result) {
      nameResult = typeAndIndex;
      return nameResult;
    }

    index += 1;
  }
}
