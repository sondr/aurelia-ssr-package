import HTMLElement from '../html-element/HTMLElement';
/**
 * HTML Template Element.
 *
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLTemplateElement.
 */
export default class HTMLTemplateElement extends HTMLElement {
    constructor() {
        super(...arguments);
        this._contentElement = null;
    }
    /**
     * Returns the content.
     *
     * @returns Content.
     */
    get content() {
        if (!this._contentElement) {
            this._contentElement = this.ownerDocument.createDocumentFragment();
        }
        return this._contentElement;
    }
    /**
     * Previous sibling.
     *
     * @returns Node.
     */
    get previousSibling() {
        return this.content.previousSibling;
    }
    /**
     * Next sibling.
     *
     * @returns Node.
     */
    get nextSibling() {
        return this.content.nextSibling;
    }
    /**
     * First child.
     *
     * @returns Node.
     */
    get firstChild() {
        return this.content.firstChild;
    }
    /**
     * Last child.
     *
     * @returns Node.
     */
    get lastChild() {
        return this.content.lastChild;
    }
    /**
     * Append a child node to childNodes.
     *
     * @param  node Node to append.
     * @returns Appended node.
     */
    appendChild(node) {
        return this.content.appendChild(node);
    }
    /**
     * Remove Child element from childNodes array.
     *
     * @param node Node to remove.
     */
    removeChild(node) {
        return this.content.removeChild(node);
    }
    /**
     * Inserts a node before another.
     *
     * @param newNode Node to insert.
     * @param referenceNode Node to insert before.
     * @returns Inserted node.
     */
    insertBefore(newNode, referenceNode) {
        return this.content.insertBefore(newNode, referenceNode);
    }
    /**
     * Replaces a node with another.
     *
     * @param newChild New child.
     * @param oldChild Old child.
     * @returns Replaced node.
     */
    replaceChild(newChild, oldChild) {
        return this.content.replaceChild(newChild, oldChild);
    }
    /**
     * Clones a node.
     *
     * @override
     * @param [deep=false] "true" to clone deep.
     * @returns Cloned node.
     */
    cloneNode(deep = false) {
        return super.cloneNode(deep);
    }
}
//# sourceMappingURL=HTMLTemplateElement.js.map