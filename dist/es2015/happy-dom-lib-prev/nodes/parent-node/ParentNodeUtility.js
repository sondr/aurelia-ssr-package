import QuerySelector from '../../query-selector/QuerySelector';
import XMLParser from '../../xml-parser/XMLParser';
import HTMLCollectionFactory from '../element/HTMLCollectionFactory';
/**
 * Parent node utility.
 */
export default class ParentNodeUtility {
    /**
     * Inserts a set of Node objects or DOMString objects after the last child of the ParentNode. DOMString objects are inserted as equivalent Text nodes.
     *
     * @param parentNode Parent node.
     * @param nodes List of Node or DOMString.
     */
    static append(parentNode, ...nodes) {
        for (const node of nodes) {
            if (typeof node === 'string') {
                const newChildNodes = XMLParser.parse(parentNode.ownerDocument, node).childNodes.slice();
                for (const newChildNode of newChildNodes) {
                    parentNode.appendChild(newChildNode);
                }
            }
            else {
                parentNode.appendChild(node);
            }
        }
    }
    /**
     * Inserts a set of Node objects or DOMString objects before the first child of the ParentNode. DOMString objects are inserted as equivalent Text nodes.
     *
     * @param parentNode Parent node.
     * @param nodes List of Node or DOMString.
     */
    static prepend(parentNode, ...nodes) {
        const firstChild = parentNode.firstChild;
        for (const node of nodes) {
            if (typeof node === 'string') {
                const newChildNodes = XMLParser.parse(parentNode.ownerDocument, node).childNodes.slice();
                for (const newChildNode of newChildNodes) {
                    parentNode.insertBefore(newChildNode, firstChild);
                }
            }
            else {
                parentNode.insertBefore(node, firstChild);
            }
        }
    }
    /**
     * Replaces the existing children of a ParentNode with a specified new set of children.
     *
     * @param parentNode Parent node.
     * @param nodes List of Node or DOMString.
     */
    static replaceChildren(parentNode, ...nodes) {
        for (const node of parentNode.childNodes.slice()) {
            parentNode.removeChild(node);
        }
        this.append(parentNode, ...nodes);
    }
    /**
     * Returns an elements by class name.
     *
     * @param parentNode Parent node.
     * @param className Tag name.
     * @returns Matching element.
     */
    static getElementsByClassName(parentNode, className) {
        return QuerySelector.querySelectorAll(parentNode, '.' + className.split(' ').join('.'));
    }
    /**
     * Returns an elements by tag name.
     *
     * @param parentNode Parent node.
     * @param tagName Tag name.
     * @returns Matching element.
     */
    static getElementsByTagName(parentNode, tagName) {
        const upperTagName = tagName.toUpperCase();
        const matches = HTMLCollectionFactory.create();
        for (const child of parentNode.children) {
            if (child.tagName === upperTagName) {
                matches.push(child);
            }
            for (const match of this.getElementsByTagName(child, tagName)) {
                matches.push(match);
            }
        }
        return matches;
    }
    /**
     * Returns an elements by tag name and namespace.
     *
     * @param parentNode Parent node.
     * @param namespaceURI Namespace URI.
     * @param tagName Tag name.
     * @returns Matching element.
     */
    static getElementsByTagNameNS(parentNode, namespaceURI, tagName) {
        const upperTagName = tagName.toUpperCase();
        const matches = HTMLCollectionFactory.create();
        for (const child of parentNode.children) {
            if (child.tagName === upperTagName && child.namespaceURI === namespaceURI) {
                matches.push(child);
            }
            for (const match of this.getElementsByTagNameNS(child, namespaceURI, tagName)) {
                matches.push(match);
            }
        }
        return matches;
    }
    /**
     * Returns the first element matching a tag name.
     * This is not part of the browser standard and is only used internally in the document.
     *
     * @param parentNode Parent node.
     * @param tagName Tag name.
     * @returns Matching element.
     */
    static getElementByTagName(parentNode, tagName) {
        const upperTagName = tagName.toUpperCase();
        for (const child of parentNode.children) {
            if (child.tagName === upperTagName) {
                return child;
            }
            const match = this.getElementByTagName(child, tagName);
            if (match) {
                return match;
            }
        }
        return null;
    }
    /**
     * Returns an element by ID.
     *
     * @param parentNode Parent node.
     * @param id ID.
     * @returns Matching element.
     */
    static getElementById(parentNode, id) {
        for (const child of parentNode.children) {
            if (child.id === id) {
                return child;
            }
            const match = this.getElementById(child, id);
            if (match) {
                return match;
            }
        }
        return null;
    }
}
//# sourceMappingURL=ParentNodeUtility.js.map