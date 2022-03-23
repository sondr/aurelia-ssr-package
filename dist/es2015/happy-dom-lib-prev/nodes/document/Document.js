import HTMLElement from '../html-element/HTMLElement';
import Text from '../text/Text';
import Comment from '../comment/Comment';
import Node from '../node/Node';
import TreeWalker from '../../tree-walker/TreeWalker';
import DocumentFragment from '../document-fragment/DocumentFragment';
import XMLParser from '../../xml-parser/XMLParser';
import Event from '../../event/Event';
import DOMImplementation from '../../dom-implementation/DOMImplementation';
import ElementTag from '../../config/ElementTag';
import Attr from '../../attribute/Attr';
import NamespaceURI from '../../config/NamespaceURI';
import DocumentType from '../document-type/DocumentType';
import ParentNodeUtility from '../parent-node/ParentNodeUtility';
import QuerySelector from '../../query-selector/QuerySelector';
import DOMException from '../../exception/DOMException';
import CookieUtility from '../../cookie/CookieUtility';
import HTMLCollectionFactory from '../element/HTMLCollectionFactory';
import DocumentReadyStateEnum from './DocumentReadyStateEnum';
import DocumentReadyStateManager from './DocumentReadyStateManager';
/**
 * Document.
 */
export default class Document extends Node {
    /**
     * Creates an instance of Document.
     */
    constructor() {
        super();
        this.onreadystatechange = null;
        this.nodeType = Node.DOCUMENT_NODE;
        this.adoptedStyleSheets = [];
        this.children = HTMLCollectionFactory.create();
        this.readyState = DocumentReadyStateEnum.interactive;
        this._readyStateManager = null;
        this._isConnected = true;
        this._isFirstWrite = true;
        this._isFirstWriteAfterOpen = false;
        this._defaultView = null;
        this._cookie = '';
        this.implementation = new DOMImplementation();
        this.implementation._ownerDocument = this;
        const doctype = this.implementation.createDocumentType('html', '', '');
        const documentElement = this.createElement('html');
        const bodyElement = this.createElement('body');
        const headElement = this.createElement('head');
        this.appendChild(doctype);
        this.appendChild(documentElement);
        documentElement.appendChild(headElement);
        documentElement.appendChild(bodyElement);
    }
    /**
     * Returns default view.
     *
     * @returns Default view.
     */
    get defaultView() {
        return this._defaultView;
    }
    /**
     * Sets a default view.
     *
     * @param defaultView Default view.
     */
    set defaultView(defaultView) {
        this._defaultView = defaultView;
        this._readyStateManager = new DocumentReadyStateManager(defaultView);
        this._readyStateManager.whenComplete().then(() => {
            this.readyState = DocumentReadyStateEnum.complete;
            this.dispatchEvent(new Event('readystatechange'));
        });
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
     * Returns cookie string.
     *
     * @returns Cookie.
     */
    get cookie() {
        return this._cookie;
    }
    /**
     * Sets a cookie string.
     *
     * @param cookie Cookie string.
     */
    set cookie(cookie) {
        this._cookie = CookieUtility.getCookieString(this.defaultView.location, this._cookie, cookie);
    }
    /**
     * Node name.
     *
     * @returns Node name.
     */
    get nodeName() {
        return '#document';
    }
    /**
     * Returns <html> element.
     *
     * @returns Element.
     */
    get documentElement() {
        return ParentNodeUtility.getElementByTagName(this, 'html');
    }
    /**
     * Returns document type element.
     *
     * @returns Document type.
     */
    get doctype() {
        for (const node of this.childNodes) {
            if (node instanceof DocumentType) {
                return node;
            }
        }
        return null;
    }
    /**
     * Returns <body> element.
     *
     * @returns Element.
     */
    get body() {
        return ParentNodeUtility.getElementByTagName(this, 'body');
    }
    /**
     * Returns <head> element.
     *
     * @returns Element.
     */
    get head() {
        return ParentNodeUtility.getElementByTagName(this, 'head');
    }
    /**
     * Returns CSS style sheets.
     *
     * @returns CSS style sheets.
     */
    get styleSheets() {
        const styles = (this.querySelectorAll('link[rel="stylesheet"][href],style'));
        const styleSheets = [];
        for (const style of styles) {
            const sheet = style.sheet;
            if (sheet) {
                styleSheets.push(sheet);
            }
        }
        return styleSheets;
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
     * Query CSS selector to find matching elments.
     *
     * @param selector CSS selector.
     * @returns Matching elements.
     */
    querySelectorAll(selector) {
        return QuerySelector.querySelectorAll(this, selector);
    }
    /**
     * Query CSS Selector to find a matching element.
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
     * Returns an element by ID.
     *
     * @param id ID.
     * @returns Matching element.
     */
    getElementById(id) {
        return ParentNodeUtility.getElementById(this, id);
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
        if (deep) {
            for (const node of clone.childNodes) {
                if (node.nodeType === Node.ELEMENT_NODE) {
                    clone.children.push(node);
                }
            }
        }
        clone.defaultView = this.defaultView;
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
     * Replaces the document HTML with new HTML.
     *
     * @param html HTML.
     */
    write(html) {
        const root = XMLParser.parse(this, html, true);
        if (this._isFirstWrite || this._isFirstWriteAfterOpen) {
            if (this._isFirstWrite) {
                if (!this._isFirstWriteAfterOpen) {
                    this.open();
                }
                this._isFirstWrite = false;
            }
            this._isFirstWriteAfterOpen = false;
            let documentElement = null;
            let documentTypeNode = null;
            for (const node of root.childNodes) {
                if (node['tagName'] === 'HTML') {
                    documentElement = node;
                }
                else if (node.nodeType === Node.DOCUMENT_TYPE_NODE) {
                    documentTypeNode = node;
                }
                if (documentElement && documentTypeNode) {
                    break;
                }
            }
            if (documentElement) {
                if (!this.documentElement) {
                    if (documentTypeNode) {
                        this.appendChild(documentTypeNode);
                    }
                    this.appendChild(documentElement);
                }
                else {
                    const rootBody = root.querySelector('body');
                    const body = this.querySelector('body');
                    if (rootBody && body) {
                        for (const child of rootBody.childNodes.slice()) {
                            body.appendChild(child);
                        }
                    }
                }
                const body = this.querySelector('body');
                if (body) {
                    for (const child of root.childNodes.slice()) {
                        if (child['tagName'] !== 'HTML' && child.nodeType !== Node.DOCUMENT_TYPE_NODE) {
                            body.appendChild(child);
                        }
                    }
                }
            }
            else {
                const documentElement = this.createElement('html');
                const bodyElement = this.createElement('body');
                const headElement = this.createElement('head');
                for (const child of root.childNodes.slice()) {
                    bodyElement.appendChild(child);
                }
                documentElement.appendChild(headElement);
                documentElement.appendChild(bodyElement);
                this.appendChild(documentElement);
            }
        }
        else {
            const bodyNode = root.querySelector('body');
            for (const child of (bodyNode || root).childNodes.slice()) {
                this.body.appendChild(child);
            }
        }
    }
    /**
     * Opens the document.
     *
     * @returns Document.
     */
    open() {
        this._isFirstWriteAfterOpen = true;
        for (const eventType of Object.keys(this._listeners)) {
            const listeners = this._listeners[eventType];
            if (listeners) {
                for (const listener of listeners) {
                    this.removeEventListener(eventType, listener);
                }
            }
        }
        for (const child of this.childNodes.slice()) {
            this.removeChild(child);
        }
        return this;
    }
    /**
     * Closes the document.
     */
    close() { }
    /**
     * Creates an element.
     *
     * @param tagName Tag name.
     * @param [options] Options.
     * @param options.is
     * @returns Element.
     */
    createElement(tagName, options) {
        return this.createElementNS(NamespaceURI.html, tagName, options);
    }
    /**
     * Creates an element with the specified namespace URI and qualified name.
     *
     * @param tagName Tag name.
     * @param [options] Options.
     * @param namespaceURI
     * @param qualifiedName
     * @param options.is
     * @returns Element.
     */
    createElementNS(namespaceURI, qualifiedName, options) {
        let customElementClass;
        if (this.defaultView && options && options.is) {
            customElementClass = this.defaultView.customElements.get(options.is);
        }
        else if (this.defaultView) {
            customElementClass = this.defaultView.customElements.get(qualifiedName);
        }
        const elementClass = customElementClass
            ? customElementClass
            : ElementTag[qualifiedName] || HTMLElement;
        elementClass.ownerDocument = this;
        const element = new elementClass();
        element.tagName = qualifiedName.toUpperCase();
        element.ownerDocument = this;
        element.namespaceURI = namespaceURI;
        return element;
    }
    /**
     * Creates a text node.
     *
     * @param [data] Text data.
     * @returns Text node.
     */
    createTextNode(data) {
        Text.ownerDocument = this;
        return new Text(data);
    }
    /**
     * Creates a comment node.
     *
     * @param [data] Text data.
     * @returns Text node.
     */
    createComment(data) {
        Comment.ownerDocument = this;
        return new Comment(data);
    }
    /**
     * Creates a document fragment.
     *
     * @returns Document fragment.
     */
    createDocumentFragment() {
        DocumentFragment.ownerDocument = this;
        return new DocumentFragment();
    }
    /**
     * Creates a Tree Walker.
     *
     * @param root Root.
     * @param [whatToShow] What to show.
     * @param [filter] Filter.
     */
    createTreeWalker(root, whatToShow = -1, filter = null) {
        return new TreeWalker(root, whatToShow, filter);
    }
    /**
     * Creates an event.
     *
     * @deprecated
     * @param _type Type.
     * @returns Event.
     */
    createEvent(_type) {
        return new Event('init');
    }
    /**
     * Creates an Attr node.
     *
     * @param name Name.
     * @returns Attribute.
     */
    createAttribute(name) {
        const attribute = new Attr();
        attribute.name = name.toLowerCase();
        attribute.ownerDocument = this;
        return attribute;
    }
    /**
     * Creates a namespaced Attr node.
     *
     * @param namespaceURI Namespace URI.
     * @param qualifiedName Qualified name.
     * @returns Element.
     */
    createAttributeNS(namespaceURI, qualifiedName) {
        const attribute = new Attr();
        attribute.namespaceURI = namespaceURI;
        attribute.name = qualifiedName;
        attribute.ownerDocument = this;
        return attribute;
    }
    /**
     * Imports a node.
     *
     * @param node Node to import.
     * @param [deep=false] Set to "true" if the clone should be deep.
     * @param Imported Node.
     */
    importNode(node, deep = false) {
        if (!(node instanceof Node)) {
            throw new DOMException('Parameter 1 was not of type Node.');
        }
        const clone = node.cloneNode(deep);
        clone.ownerDocument = this;
        return clone;
    }
    /**
     * Adopts a node.
     *
     * @param node Node to adopt.
     * @returns Adopted node.
     */
    adoptNode(node) {
        if (!(node instanceof Node)) {
            throw new DOMException('Parameter 1 was not of type Node.');
        }
        const adopted = node.parentNode ? node.parentNode.removeChild(node) : node;
        adopted.ownerDocument = this;
        return adopted;
    }
}
//# sourceMappingURL=Document.js.map