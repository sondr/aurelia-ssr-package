import EventTarget from '../../event/EventTarget';
import MutationRecord from '../../mutation-observer/MutationRecord';
import MutationTypeEnum from '../../mutation-observer/MutationTypeEnum';
import DOMException from '../../exception/DOMException';
import NodeListFactory from './NodeListFactory';
/**
 * Node.
 */
export default class Node extends EventTarget {
    /**
     * Constructor.
     */
    constructor() {
        super();
        this.ownerDocument = null;
        this.parentNode = null;
        this.childNodes = NodeListFactory.create();
        // Protected properties
        this._isConnected = false;
        // Custom Properties (not part of HTML standard)
        this._observers = [];
        this.ownerDocument = this.constructor.ownerDocument;
    }
    /**
     * Returns "true" if connected to DOM.
     *
     * @returns "true" if connected.
     */
    get isConnected() {
        return this._isConnected;
    }
    /**
     * Sets the connected state.
     *
     * @param isConnected "true" if connected.
     */
    set isConnected(isConnected) {
        if (this._isConnected !== isConnected) {
            this._isConnected = isConnected;
            if (isConnected && this.connectedCallback) {
                this.connectedCallback();
            }
            else if (!isConnected && this.disconnectedCallback) {
                this.disconnectedCallback();
            }
            for (const child of this.childNodes) {
                child.isConnected = isConnected;
            }
            // eslint-disable-next-line
            if (this.shadowRoot) {
                // eslint-disable-next-line
                this.shadowRoot.isConnected = isConnected;
            }
        }
    }
    /**
     * Get text value of children.
     *
     * @returns Text content.
     */
    get textContent() {
        return null;
    }
    /**
     * Sets text content.
     *
     * @param textContent Text content.
     */
    set textContent(_textContent) {
        // Do nothing.
    }
    /**
     * Node value.
     *
     * @returns Node value.
     */
    get nodeValue() {
        return null;
    }
    /**
     * Node name.
     *
     * @returns Node name.
     */
    get nodeName() {
        return '';
    }
    /**
     * Previous sibling.
     *
     * @returns Node.
     */
    get previousSibling() {
        if (this.parentNode) {
            const index = this.parentNode.childNodes.indexOf(this);
            if (index > 0) {
                return this.parentNode.childNodes[index - 1];
            }
        }
        return null;
    }
    /**
     * Next sibling.
     *
     * @returns Node.
     */
    get nextSibling() {
        if (this.parentNode) {
            const index = this.parentNode.childNodes.indexOf(this);
            if (index > -1 && index + 1 < this.parentNode.childNodes.length) {
                return this.parentNode.childNodes[index + 1];
            }
        }
        return null;
    }
    /**
     * First child.
     *
     * @returns Node.
     */
    get firstChild() {
        if (this.childNodes.length > 0) {
            return this.childNodes[0];
        }
        return null;
    }
    /**
     * Last child.
     *
     * @returns Node.
     */
    get lastChild() {
        if (this.childNodes.length > 0) {
            return this.childNodes[this.childNodes.length - 1];
        }
        return null;
    }
    /**
     * Returns parent element.
     *
     * @returns Element.
     */
    get parentElement() {
        let parent = this.parentNode;
        while (parent && parent.nodeType !== Node.ELEMENT_NODE) {
            parent = this.parentNode;
        }
        return parent;
    }
    /**
     * Returns "true" if the node has child nodes.
     *
     * @returns "true" if the node has child nodes.
     */
    hasChildNodes() {
        return this.childNodes.length > 0;
    }
    /**
     * Returns closest root node (Document or ShadowRoot).
     *
     * @param options Options.
     * @param options.composed A Boolean that indicates whether the shadow root should be returned (false, the default), or a root node beyond shadow root (true).
     * @returns Node.
     */
    getRootNode(options) {
        // eslint-disable-next-line
        let parent = this;
        while (!!parent) {
            if (!parent.parentNode) {
                if (!(options === null || options === void 0 ? void 0 : options.composed) || !parent.host) {
                    return parent;
                }
                parent = parent.host;
            }
            else {
                parent = parent.parentNode;
            }
        }
        return null;
    }
    /**
     * Clones a node.
     *
     * @param [deep=false] "true" to clone deep.
     * @returns Cloned node.
     */
    cloneNode(deep = false) {
        const clone = new this.constructor();
        for (const node of clone.childNodes.slice()) {
            node.parentNode.removeChild(node);
        }
        if (deep) {
            for (const childNode of this.childNodes) {
                const childClone = childNode.cloneNode(true);
                childClone.parentNode = clone;
                clone.childNodes.push(childClone);
            }
        }
        clone.ownerDocument = this.ownerDocument;
        return clone;
    }
    /**
     * Append a child node to childNodes.
     *
     * @param  node Node to append.
     * @returns Appended node.
     */
    appendChild(node) {
        if (node === this) {
            throw new DOMException('Not possible to append a node as a child of itself.');
        }
        // If the type is DocumentFragment, then the child nodes of if it should be moved instead of the actual node.
        // See: https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment
        if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
            for (const child of node.childNodes.slice()) {
                this.appendChild(child);
            }
            return node;
        }
        // Remove the node from its previous parent if it has any.
        if (node.parentNode) {
            const index = node.parentNode.childNodes.indexOf(node);
            if (index !== -1) {
                node.parentNode.childNodes.splice(index, 1);
            }
        }
        this.childNodes.push(node);
        node.parentNode = this;
        node.isConnected = this.isConnected;
        // MutationObserver
        if (this._observers.length > 0) {
            const record = new MutationRecord();
            record.type = MutationTypeEnum.childList;
            record.addedNodes = [node];
            for (const observer of this._observers) {
                if (observer.options.subtree) {
                    node._observe(observer);
                }
                if (observer.options.childList) {
                    observer.callback([record]);
                }
            }
        }
        return node;
    }
    /**
     * Remove Child element from childNodes array.
     *
     * @param node Node to remove.
     * @returns Removed node.
     */
    removeChild(node) {
        const index = this.childNodes.indexOf(node);
        if (index === -1) {
            throw new DOMException('Failed to remove node. Node is not child of parent.');
        }
        this.childNodes.splice(index, 1);
        node.parentNode = null;
        node.isConnected = false;
        // MutationObserver
        if (this._observers.length > 0) {
            const record = new MutationRecord();
            record.type = MutationTypeEnum.childList;
            record.removedNodes = [node];
            for (const observer of this._observers) {
                node._unobserve(observer);
                if (observer.options.childList) {
                    observer.callback([record]);
                }
            }
        }
        return node;
    }
    /**
     * Inserts a node before another.
     *
     * @param newNode Node to insert.
     * @param [referenceNode] Node to insert before.
     * @returns Inserted node.
     */
    insertBefore(newNode, referenceNode) {
        // If the type is DocumentFragment, then the child nodes of if it should be moved instead of the actual node.
        // See: https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment
        if (newNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
            for (const child of newNode.childNodes.slice()) {
                this.insertBefore(child, referenceNode);
            }
            return newNode;
        }
        if (referenceNode === null) {
            this.appendChild(newNode);
            return newNode;
        }
        if (referenceNode === undefined) {
            throw new DOMException("Failed to execute 'insertBefore' on 'Node': 2 arguments required, but only 1 present.", 'TypeError');
        }
        const index = referenceNode ? this.childNodes.indexOf(referenceNode) : 0;
        if (index === -1) {
            throw new DOMException("Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.");
        }
        if (newNode.parentNode) {
            const index = newNode.parentNode.childNodes.indexOf(newNode);
            if (index !== -1) {
                newNode.parentNode.childNodes.splice(index, 1);
            }
        }
        this.childNodes.splice(index, 0, newNode);
        newNode.parentNode = this;
        newNode.isConnected = this.isConnected;
        // MutationObserver
        if (this._observers.length > 0) {
            const record = new MutationRecord();
            record.type = MutationTypeEnum.childList;
            record.addedNodes = [newNode];
            for (const observer of this._observers) {
                if (observer.options.subtree) {
                    newNode._observe(observer);
                }
                if (observer.options.childList) {
                    observer.callback([record]);
                }
            }
        }
        return newNode;
    }
    /**
     * Replaces a node with another.
     *
     * @param newChild New child.
     * @param oldChild Old child.
     * @returns Replaced node.
     */
    replaceChild(newChild, oldChild) {
        this.insertBefore(newChild, oldChild);
        this.removeChild(oldChild);
        return oldChild;
    }
    /**
     * @override
     */
    dispatchEvent(event) {
        const onEventName = 'on' + event.type.toLowerCase();
        if (typeof this[onEventName] === 'function') {
            this[onEventName].call(this, event);
        }
        const returnValue = super.dispatchEvent(event);
        if (event.bubbles && this.parentNode !== null && !event._propagationStopped) {
            return this.parentNode.dispatchEvent(event);
        }
        return returnValue;
    }
    /**
     * Converts the node to a string.
     *
     * @param listener Listener.
     */
    toString() {
        return `[object ${this.constructor.name}]`;
    }
    /**
     * Observeres the node.
     * Used by MutationObserver, but it is not part of the HTML standard.
     *
     * @param listener Listener.
     */
    _observe(listener) {
        this._observers.push(listener);
        if (listener.options.subtree) {
            for (const node of this.childNodes) {
                node._observe(listener);
            }
        }
    }
    /**
     * Stops observing the node.
     * Used by MutationObserver, but it is not part of the HTML standard.
     *
     * @param listener Listener.
     */
    _unobserve(listener) {
        const index = this._observers.indexOf(listener);
        if (index !== -1) {
            this._observers.splice(index, 1);
        }
        if (listener.options.subtree) {
            for (const node of this.childNodes) {
                node._unobserve(listener);
            }
        }
    }
}
// Public properties
Node.ELEMENT_NODE = 1;
Node.TEXT_NODE = 3;
Node.COMMENT_NODE = 8;
Node.DOCUMENT_NODE = 9;
Node.DOCUMENT_TYPE_NODE = 10;
Node.DOCUMENT_FRAGMENT_NODE = 11;
Node.ownerDocument = null;
//# sourceMappingURL=Node.js.map