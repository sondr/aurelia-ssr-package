import Node from '../node/Node';
import ShadowRoot from '../shadow-root/ShadowRoot';
import Attr from '../../attribute/Attr';
import NamedNodeMap from './NamedNodeMap';
import DOMRect from './DOMRect';
import Range from './Range';
import ClassList from './ClassList';
import QuerySelector from '../../query-selector/QuerySelector';
import SelectorItem from '../../query-selector/SelectorItem';
import MutationRecord from '../../mutation-observer/MutationRecord';
import MutationTypeEnum from '../../mutation-observer/MutationTypeEnum';
import NamespaceURI from '../../config/NamespaceURI';
import XMLParser from '../../xml-parser/XMLParser';
import XMLSerializer from '../../xml-serializer/XMLSerializer';
import ChildNodeUtility from '../child-node/ChildNodeUtility';
import ParentNodeUtility from '../parent-node/ParentNodeUtility';
import NonDocumentChildNodeUtility from '../child-node/NonDocumentChildNodeUtility';
import DOMException from '../../exception/DOMException';
import HTMLCollectionFactory from './HTMLCollectionFactory';
/**
 * Element.
 */
export default class Element extends Node {
    constructor() {
        super(...arguments);
        this.tagName = null;
        this.nodeType = Node.ELEMENT_NODE;
        this.shadowRoot = null;
        this.classList = new ClassList(this);
        this.scrollTop = 0;
        this.scrollLeft = 0;
        this.children = HTMLCollectionFactory.create();
        this._attributes = {};
        this.namespaceURI = null;
    }
    /**
     * Returns ID.
     *
     * @returns ID.
     */
    get id() {
        return this.getAttribute('id') || '';
    }
    /**
     * Sets ID.
     *
     * @param id ID.
     */
    set id(id) {
        this.setAttribute('id', id);
    }
    /**
     * Returns class name.
     *
     * @returns Class name.
     */
    get className() {
        return this.getAttribute('class') || '';
    }
    /**
     * Sets class name.
     *
     * @param className Class name.
     */
    set className(className) {
        this.setAttribute('class', className);
    }
    /**
     * Node name.
     *
     * @returns Node name.
     */
    get nodeName() {
        return this.tagName;
    }
    /**
     * Local name.
     *
     * @returns Local name.
     */
    get localName() {
        return this.tagName.toLowerCase();
    }
    /**
     * Previous element sibling.
     *
     * @returns Element.
     */
    get previousElementSibling() {
        return NonDocumentChildNodeUtility.previousElementSibling(this);
    }
    /**
     * Next element sibling.
     *
     * @returns Element.
     */
    get nextElementSibling() {
        return NonDocumentChildNodeUtility.nextElementSibling(this);
    }
    /**
     * Get text value of children.
     *
     * @returns Text content.
     */
    get textContent() {
        let result = '';
        for (const childNode of this.childNodes) {
            if (childNode.nodeType === Node.ELEMENT_NODE || childNode.nodeType === Node.TEXT_NODE) {
                result += childNode.textContent;
            }
        }
        return result;
    }
    /**
     * Sets text content.
     *
     * @param textContent Text content.
     */
    set textContent(textContent) {
        for (const child of this.childNodes.slice()) {
            this.removeChild(child);
        }
        this.appendChild(this.ownerDocument.createTextNode(textContent));
    }
    /**
     * Returns inner HTML.
     *
     * @returns HTML.
     */
    get innerHTML() {
        const xmlSerializer = new XMLSerializer();
        let xml = '';
        for (const node of this.childNodes) {
            xml += xmlSerializer.serializeToString(node);
        }
        return xml;
    }
    /**
     * Sets inner HTML.
     *
     * @param html HTML.
     */
    set innerHTML(html) {
        for (const child of this.childNodes.slice()) {
            this.removeChild(child);
        }
        for (const node of XMLParser.parse(this.ownerDocument, html).childNodes.slice()) {
            this.appendChild(node);
        }
    }
    /**
     * Returns outer HTML.
     *
     * @returns HTML.
     */
    get outerHTML() {
        return new XMLSerializer().serializeToString(this);
    }
    /**
     * Returns outer HTML.
     *
     * @param html HTML.
     */
    set outerHTML(html) {
        this.replaceWith(html);
    }
    /**
     * Returns attributes.
     *
     * @returns Attributes.
     */
    get attributes() {
        const nodemap = new NamedNodeMap(this);
        // Object.assign(nodemap, this._attributes);
        // Array.prototype.push.apply(nodemap, Object.values(this._attributes));
        // Object.assign(nodemap, this._attributes);
        return nodemap;
    }
    /**
     * First element child.
     *
     * @returns Element.
     */
    get firstElementChild() {
        return this.children ? this.children[0] || null : null;
    }
    /**
     * Last element child.
     *
     * @returns Element.
     */
    get lastElementChild() {
        return this.children ? this.children[this.children.length - 1] || null : null;
    }
    /**
     * Last element child.
     *
     * @returns Element.
     */
    get childElementCount() {
        return this.children.length;
    }
    /**
     * Clones a node.
     *
     * @override
     * @param [deep=false] "true" to clone deep.
     * @returns Cloned node.
     */
    cloneNode(deep = false) {
        const clone = super.cloneNode(deep);
        for (const key of Object.keys(this._attributes)) {
            const attr = Object.assign(new Attr(), this._attributes[key]);
            attr.ownerElement = clone;
            clone._attributes[key] = attr;
        }
        if (deep) {
            for (const node of clone.childNodes) {
                if (node.nodeType === Node.ELEMENT_NODE) {
                    clone.children.push(node);
                }
            }
        }
        clone.tagName = this.tagName;
        clone.scrollLeft = this.scrollLeft;
        clone.scrollTop = this.scrollTop;
        clone.namespaceURI = this.namespaceURI;
        return clone;
    }
    /**
     * Append a child node to childNodes.
     *
     * @override
     * @param  node Node to append.
     * @returns Appended node.
     */
    appendChild(node) {
        // If the type is DocumentFragment, then the child nodes of if it should be moved instead of the actual node.
        // See: https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment
        if (node.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) {
            if (node.parentNode && node.parentNode['children']) {
                const index = node.parentNode['children'].indexOf(node);
                if (index !== -1) {
                    node.parentNode['children'].splice(index, 1);
                }
            }
            if (node !== this && node.nodeType === Node.ELEMENT_NODE) {
                this.children.push(node);
            }
        }
        return super.appendChild(node);
    }
    /**
     * Remove Child element from childNodes array.
     *
     * @override
     * @param node Node to remove.
     */
    removeChild(node) {
        if (node.nodeType === Node.ELEMENT_NODE) {
            const index = this.children.indexOf(node);
            if (index !== -1) {
                this.children.splice(index, 1);
            }
        }
        return super.removeChild(node);
    }
    /**
     * Removes the node from its parent.
     */
    remove() {
        ChildNodeUtility.remove(this);
    }
    /**
     * Inserts a node before another.
     *
     * @override
     * @param newNode Node to insert.
     * @param [referenceNode] Node to insert before.
     * @returns Inserted node.
     */
    insertBefore(newNode, referenceNode) {
        const returnValue = super.insertBefore(newNode, referenceNode);
        // If the type is DocumentFragment, then the child nodes of if it should be moved instead of the actual node.
        // See: https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment
        if (newNode.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) {
            if (newNode.parentNode && newNode.parentNode['children']) {
                const index = newNode.parentNode['children'].indexOf(newNode);
                if (index !== -1) {
                    newNode.parentNode['children'].splice(index, 1);
                }
            }
            this.children.length = 0;
            for (const node of this.childNodes) {
                if (node.nodeType === Node.ELEMENT_NODE) {
                    this.children.push(node);
                }
            }
        }
        return returnValue;
    }
    /**
     * The Node.replaceWith() method replaces this Node in the children list of its parent with a set of Node or DOMString objects.
     *
     * @param nodes List of Node or DOMString.
     */
    replaceWith(...nodes) {
        ChildNodeUtility.replaceWith(this, ...nodes);
    }
    /**
     * Inserts a set of Node or DOMString objects in the children list of this ChildNode's parent, just before this ChildNode. DOMString objects are inserted as equivalent Text nodes.
     *
     * @param nodes List of Node or DOMString.
     */
    before(...nodes) {
        ChildNodeUtility.before(this, ...nodes);
    }
    /**
     * Inserts a set of Node or DOMString objects in the children list of this ChildNode's parent, just after this ChildNode. DOMString objects are inserted as equivalent Text nodes.
     *
     * @param nodes List of Node or DOMString.
     */
    after(...nodes) {
        ChildNodeUtility.after(this, ...nodes);
    }
    /**
     * Inserts a set of Node objects or DOMString objects after the last child of the ParentNode. DOMString objects are inserted as equivalent Text nodes.
     *
     * @param nodes List of Node or DOMString.
     */
    append(...nodes) {
        ParentNodeUtility.append(this, ...nodes);
    }
    /**
     * Inserts a set of Node objects or DOMString objects before the first child of the ParentNode. DOMString objects are inserted as equivalent Text nodes.
     *
     * @param nodes List of Node or DOMString.
     */
    prepend(...nodes) {
        ParentNodeUtility.prepend(this, ...nodes);
    }
    /**
     * Replaces the existing children of a node with a specified new set of children.
     *
     * @param nodes List of Node or DOMString.
     */
    replaceChildren(...nodes) {
        ParentNodeUtility.replaceChildren(this, ...nodes);
    }
    /**
     * Inserts a node to the given position.
     *
     * @param position Position to insert element.
     * @param element Node to insert.
     * @returns Inserted node or null if couldn't insert.
     */
    insertAdjacentElement(position, element) {
        if (position === 'beforebegin') {
            if (!this.parentElement) {
                return null;
            }
            this.parentElement.insertBefore(element, this);
        }
        else if (position === 'afterbegin') {
            this.insertBefore(element, this.firstChild);
        }
        else if (position === 'beforeend') {
            this.appendChild(element);
        }
        else if (position === 'afterend') {
            if (!this.parentElement) {
                return null;
            }
            this.parentElement.insertBefore(element, this.nextSibling);
        }
        return element;
    }
    /**
     * Inserts an HTML string to the given position.
     *
     * @param position Position to insert text.
     * @param text HTML string to insert.
     */
    insertAdjacentHTML(position, text) {
        for (const node of XMLParser.parse(this.ownerDocument, text).childNodes.slice()) {
            this.insertAdjacentElement(position, node);
        }
    }
    /**
     * Inserts text to the given position.
     *
     * @param position Position to insert text.
     * @param text String to insert.
     */
    insertAdjacentText(position, text) {
        const textNode = this.ownerDocument.createTextNode(text);
        this.insertAdjacentElement(position, textNode);
    }
    /**
     * Sets an attribute.
     *
     * @param name Name.
     * @param value Value.
     */
    setAttribute(name, value) {
        const attribute = this.ownerDocument.createAttributeNS(null, name);
        attribute.value = String(value);
        this.setAttributeNode(attribute);
    }
    /**
     * Sets a namespace attribute.
     *
     * @param namespaceURI Namespace URI.
     * @param name Name.
     * @param value Value.
     */
    setAttributeNS(namespaceURI, name, value) {
        const attribute = this.ownerDocument.createAttributeNS(namespaceURI, name);
        attribute.value = String(value);
        this.setAttributeNode(attribute);
    }
    /**
     * Returns attribute names.
     *
     * @returns Attribute names.
     */
    getAttributeNames() {
        return Object.keys(this._attributes);
    }
    /**
     * Returns attribute value.
     *
     * @param name Name.
     */
    getAttribute(name) {
        const attribute = this.getAttributeNode(name);
        if (attribute) {
            return attribute.value;
        }
        return null;
    }
    /**
     * Returns namespace attribute value.
     *
     * @param namespace Namespace URI.
     * @param localName Local name.
     */
    getAttributeNS(namespace, localName) {
        const attribute = this.getAttributeNodeNS(namespace, localName);
        if (attribute) {
            return attribute.value;
        }
        return null;
    }
    /**
     * Returns a boolean value indicating whether the specified element has the attribute or not.
     *
     * @param name Attribute name.
     * @returns True if attribute exists, false otherwise.
     */
    hasAttribute(name) {
        return !!this.getAttributeNode(name);
    }
    /**
     * Returns a boolean value indicating whether the specified element has the namespace attribute or not.
     *
     * @param namespace Namespace URI.
     * @param localName Local name.
     * @returns True if attribute exists, false otherwise.
     */
    hasAttributeNS(namespace, localName) {
        for (const name of Object.keys(this._attributes)) {
            const attribute = this._attributes[name];
            if (attribute.namespaceURI === namespace && attribute.localName === localName) {
                return true;
            }
        }
        return false;
    }
    /**
     * Returns "true" if the element has attributes.
     *
     * @returns "true" if the element has attributes.
     */
    hasAttributes() {
        return Object.keys(this._attributes).length > 0;
    }
    /**
     * Removes an attribute.
     *
     * @param name Name.
     */
    removeAttribute(name) {
        const attribute = this._attributes[this._getAttributeName(name)];
        if (attribute) {
            this.removeAttributeNode(attribute);
        }
    }
    /**
     * Removes a namespace attribute.
     *
     * @param namespace Namespace URI.
     * @param localName Local name.
     */
    removeAttributeNS(namespace, localName) {
        for (const name of Object.keys(this._attributes)) {
            const attribute = this._attributes[name];
            if (attribute.namespaceURI === namespace && attribute.localName === localName) {
                this.removeAttribute(attribute.name);
            }
        }
    }
    /**
     * Attaches a shadow root.
     *
     * @param _shadowRootInit Shadow root init.
     * @param shadowRootInit
     * @param shadowRootInit.mode
     * @returns Shadow root.
     */
    attachShadow(shadowRootInit) {
        if (this.shadowRoot) {
            throw new DOMException('Shadow root has already been attached.');
        }
        this.shadowRoot = new ShadowRoot();
        this.shadowRoot.ownerDocument = this.ownerDocument;
        this.shadowRoot.host = this;
        this.shadowRoot.mode = shadowRootInit.mode;
        this.shadowRoot.isConnected = this.isConnected;
        return this.shadowRoot;
    }
    /**
     * Converts to string.
     *
     * @returns String.
     */
    toString() {
        return this.outerHTML;
    }
    /**
     * Returns the size of an element and its position relative to the viewport.
     *
     * @returns DOM rect.
     */
    getBoundingClientRect() {
        return new DOMRect();
    }
    /**
     * Returns a range.
     *
     * @returns Range.
     */
    createTextRange() {
        return new Range();
    }
    /**
     * The matches() method checks to see if the Element would be selected by the provided selectorString.
     *
     * @param selector Selector.
     * @returns "true" if matching.
     */
    matches(selector) {
        return new SelectorItem(selector).match(this);
    }
    /**
     * Query CSS selector to find matching nodes.
     *
     * @param selector CSS selector.
     * @returns Matching elements.
     */
    querySelectorAll(selector) {
        return QuerySelector.querySelectorAll(this, selector);
    }
    /**
     * Query CSS Selector to find matching node.
     *
     * @param selector CSS selector.
     * @returns Matching element.
     */
    querySelector(selector) {
        return QuerySelector.querySelector(this, selector);
    }
    /**
     * Returns an elements by class name.
     *
     * @param className Tag name.
     * @returns Matching element.
     */
    getElementsByClassName(className) {
        return ParentNodeUtility.getElementsByClassName(this, className);
    }
    /**
     * Returns an elements by tag name.
     *
     * @param tagName Tag name.
     * @returns Matching element.
     */
    getElementsByTagName(tagName) {
        return ParentNodeUtility.getElementsByTagName(this, tagName);
    }
    /**
     * Returns an elements by tag name and namespace.
     *
     * @param namespaceURI Namespace URI.
     * @param tagName Tag name.
     * @returns Matching element.
     */
    getElementsByTagNameNS(namespaceURI, tagName) {
        return ParentNodeUtility.getElementsByTagNameNS(this, namespaceURI, tagName);
    }
    /**
     * The setAttributeNode() method adds a new Attr node to the specified element.
     *
     * @param attribute Attribute.
     * @returns Replaced attribute.
     */
    setAttributeNode(attribute) {
        const name = this._getAttributeName(attribute.name);
        const replacedAttribute = this._attributes[name];
        const oldValue = replacedAttribute ? replacedAttribute.value : null;
        attribute.name = name;
        attribute.ownerElement = this;
        attribute.ownerDocument = this.ownerDocument;
        this._attributes[name] = attribute;
        if (this.attributeChangedCallback &&
            this.constructor._observedAttributes &&
            this.constructor._observedAttributes.includes(name)) {
            this.attributeChangedCallback(name, oldValue, attribute.value);
        }
        // MutationObserver
        if (this._observers.length > 0) {
            for (const observer of this._observers) {
                if (observer.options.attributes &&
                    (!observer.options.attributeFilter || observer.options.attributeFilter.includes(name))) {
                    const record = new MutationRecord();
                    record.type = MutationTypeEnum.attributes;
                    record.attributeName = name;
                    record.oldValue = observer.options.attributeOldValue ? oldValue : null;
                    observer.callback([record]);
                }
            }
        }
        return replacedAttribute || null;
    }
    /**
     * The setAttributeNodeNS() method adds a new Attr node to the specified element.
     *
     * @param attribute Attribute.
     * @returns Replaced attribute.
     */
    setAttributeNodeNS(attribute) {
        return this.setAttributeNode(attribute);
    }
    /**
     * Returns an Attr node.
     *
     * @param name Name.
     * @returns Replaced attribute.
     */
    getAttributeNode(name) {
        return this._attributes[this._getAttributeName(name)] || null;
    }
    /**
     * Returns a namespaced Attr node.
     *
     * @param namespace Namespace.
     * @param name Name.
     * @returns Replaced attribute.
     */
    getAttributeNodeNS(namespace, name) {
        const attributeName = this._getAttributeName(name);
        for (const name of Object.keys(this._attributes)) {
            const attribute = this._attributes[name];
            if (attribute.namespaceURI === namespace && attribute.localName === attributeName) {
                return attribute;
            }
        }
        return null;
    }
    /**
     * Removes an Attr node.
     *
     * @param attribute Attribute.
     */
    removeAttributeNode(attribute) {
        delete this._attributes[attribute.name];
        if (this.attributeChangedCallback &&
            this.constructor._observedAttributes &&
            this.constructor._observedAttributes.includes(attribute.name)) {
            this.attributeChangedCallback(attribute.name, attribute.value, null);
        }
        // MutationObserver
        if (this._observers.length > 0) {
            for (const observer of this._observers) {
                if (observer.options.attributes &&
                    (!observer.options.attributeFilter ||
                        observer.options.attributeFilter.includes(attribute.name))) {
                    const record = new MutationRecord();
                    record.type = MutationTypeEnum.attributes;
                    record.attributeName = attribute.name;
                    record.oldValue = observer.options.attributeOldValue ? attribute.value : null;
                    observer.callback([record]);
                }
            }
        }
    }
    /**
     * Removes an Attr node.
     *
     * @param attribute Attribute.
     */
    removeAttributeNodeNS(attribute) {
        this.removeAttributeNode(attribute);
    }
    /**
     * Scrolls to a particular set of coordinates.
     *
     * @param x X position or options object.
     * @param y Y position.
     */
    scroll(x, y) {
        if (typeof x === 'object') {
            if (x.behavior === 'smooth') {
                this.ownerDocument.defaultView.setTimeout(() => {
                    if (x.top !== undefined) {
                        this.scrollTop = x.top;
                    }
                    if (x.left !== undefined) {
                        this.scrollLeft = x.left;
                    }
                });
            }
            else {
                if (x.top !== undefined) {
                    this.scrollTop = x.top;
                }
                if (x.left !== undefined) {
                    this.scrollLeft = x.left;
                }
            }
        }
        else if (x !== undefined && y !== undefined) {
            this.scrollLeft = x;
            this.scrollTop = y;
        }
    }
    /**
     * Scrolls to a particular set of coordinates.
     *
     * @param x X position or options object.
     * @param y Y position.
     */
    scrollTo(x, y) {
        this.scroll(x, y);
    }
    /**
     * Returns attribute name.
     *
     * @param name Name.
     * @returns Attribute name based on namespace.
     */
    _getAttributeName(name) {
        if (this.namespaceURI === NamespaceURI.svg) {
            return name;
        }
        return name.toLowerCase();
    }
}
//# sourceMappingURL=Element.js.map