var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
var Element = /** @class */ (function (_super) {
    __extends(Element, _super);
    function Element() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tagName = null;
        _this.nodeType = Node.ELEMENT_NODE;
        _this.shadowRoot = null;
        _this.classList = new ClassList(_this);
        _this.scrollTop = 0;
        _this.scrollLeft = 0;
        _this.children = HTMLCollectionFactory.create();
        _this._attributes = {};
        _this.namespaceURI = null;
        return _this;
    }
    Object.defineProperty(Element.prototype, "id", {
        /**
         * Returns ID.
         *
         * @returns ID.
         */
        get: function () {
            return this.getAttribute('id') || '';
        },
        /**
         * Sets ID.
         *
         * @param id ID.
         */
        set: function (id) {
            this.setAttribute('id', id);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "className", {
        /**
         * Returns class name.
         *
         * @returns Class name.
         */
        get: function () {
            return this.getAttribute('class') || '';
        },
        /**
         * Sets class name.
         *
         * @param className Class name.
         */
        set: function (className) {
            this.setAttribute('class', className);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "nodeName", {
        /**
         * Node name.
         *
         * @returns Node name.
         */
        get: function () {
            return this.tagName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "localName", {
        /**
         * Local name.
         *
         * @returns Local name.
         */
        get: function () {
            return this.tagName.toLowerCase();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "previousElementSibling", {
        /**
         * Previous element sibling.
         *
         * @returns Element.
         */
        get: function () {
            return NonDocumentChildNodeUtility.previousElementSibling(this);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "nextElementSibling", {
        /**
         * Next element sibling.
         *
         * @returns Element.
         */
        get: function () {
            return NonDocumentChildNodeUtility.nextElementSibling(this);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "textContent", {
        /**
         * Get text value of children.
         *
         * @returns Text content.
         */
        get: function () {
            var result = '';
            for (var _i = 0, _a = this.childNodes; _i < _a.length; _i++) {
                var childNode = _a[_i];
                if (childNode.nodeType === Node.ELEMENT_NODE || childNode.nodeType === Node.TEXT_NODE) {
                    result += childNode.textContent;
                }
            }
            return result;
        },
        /**
         * Sets text content.
         *
         * @param textContent Text content.
         */
        set: function (textContent) {
            for (var _i = 0, _a = this.childNodes.slice(); _i < _a.length; _i++) {
                var child = _a[_i];
                this.removeChild(child);
            }
            this.appendChild(this.ownerDocument.createTextNode(textContent));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "innerHTML", {
        /**
         * Returns inner HTML.
         *
         * @returns HTML.
         */
        get: function () {
            var xmlSerializer = new XMLSerializer();
            var xml = '';
            for (var _i = 0, _a = this.childNodes; _i < _a.length; _i++) {
                var node = _a[_i];
                xml += xmlSerializer.serializeToString(node);
            }
            return xml;
        },
        /**
         * Sets inner HTML.
         *
         * @param html HTML.
         */
        set: function (html) {
            for (var _i = 0, _a = this.childNodes.slice(); _i < _a.length; _i++) {
                var child = _a[_i];
                this.removeChild(child);
            }
            for (var _b = 0, _c = XMLParser.parse(this.ownerDocument, html).childNodes.slice(); _b < _c.length; _b++) {
                var node = _c[_b];
                this.appendChild(node);
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "outerHTML", {
        /**
         * Returns outer HTML.
         *
         * @returns HTML.
         */
        get: function () {
            return new XMLSerializer().serializeToString(this);
        },
        /**
         * Returns outer HTML.
         *
         * @param html HTML.
         */
        set: function (html) {
            this.replaceWith(html);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "attributes", {
        /**
         * Returns attributes.
         *
         * @returns Attributes.
         */
        get: function () {
            var nodemap = new NamedNodeMap(this);
            // Object.assign(nodemap, this._attributes);
            // Array.prototype.push.apply(nodemap, Object.values(this._attributes));
            // Object.assign(nodemap, this._attributes);
            return nodemap;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "firstElementChild", {
        /**
         * First element child.
         *
         * @returns Element.
         */
        get: function () {
            return this.children ? this.children[0] || null : null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "lastElementChild", {
        /**
         * Last element child.
         *
         * @returns Element.
         */
        get: function () {
            return this.children ? this.children[this.children.length - 1] || null : null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "childElementCount", {
        /**
         * Last element child.
         *
         * @returns Element.
         */
        get: function () {
            return this.children.length;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Clones a node.
     *
     * @override
     * @param [deep=false] "true" to clone deep.
     * @returns Cloned node.
     */
    Element.prototype.cloneNode = function (deep) {
        if (deep === void 0) { deep = false; }
        var clone = _super.prototype.cloneNode.call(this, deep);
        for (var _i = 0, _a = Object.keys(this._attributes); _i < _a.length; _i++) {
            var key = _a[_i];
            var attr = Object.assign(new Attr(), this._attributes[key]);
            attr.ownerElement = clone;
            clone._attributes[key] = attr;
        }
        if (deep) {
            for (var _b = 0, _c = clone.childNodes; _b < _c.length; _b++) {
                var node = _c[_b];
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
    };
    /**
     * Append a child node to childNodes.
     *
     * @override
     * @param  node Node to append.
     * @returns Appended node.
     */
    Element.prototype.appendChild = function (node) {
        // If the type is DocumentFragment, then the child nodes of if it should be moved instead of the actual node.
        // See: https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment
        if (node.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) {
            if (node.parentNode && node.parentNode['children']) {
                var index = node.parentNode['children'].indexOf(node);
                if (index !== -1) {
                    node.parentNode['children'].splice(index, 1);
                }
            }
            if (node !== this && node.nodeType === Node.ELEMENT_NODE) {
                this.children.push(node);
            }
        }
        return _super.prototype.appendChild.call(this, node);
    };
    /**
     * Remove Child element from childNodes array.
     *
     * @override
     * @param node Node to remove.
     */
    Element.prototype.removeChild = function (node) {
        if (node.nodeType === Node.ELEMENT_NODE) {
            var index = this.children.indexOf(node);
            if (index !== -1) {
                this.children.splice(index, 1);
            }
        }
        return _super.prototype.removeChild.call(this, node);
    };
    /**
     * Removes the node from its parent.
     */
    Element.prototype.remove = function () {
        ChildNodeUtility.remove(this);
    };
    /**
     * Inserts a node before another.
     *
     * @override
     * @param newNode Node to insert.
     * @param [referenceNode] Node to insert before.
     * @returns Inserted node.
     */
    Element.prototype.insertBefore = function (newNode, referenceNode) {
        var returnValue = _super.prototype.insertBefore.call(this, newNode, referenceNode);
        // If the type is DocumentFragment, then the child nodes of if it should be moved instead of the actual node.
        // See: https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment
        if (newNode.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) {
            if (newNode.parentNode && newNode.parentNode['children']) {
                var index = newNode.parentNode['children'].indexOf(newNode);
                if (index !== -1) {
                    newNode.parentNode['children'].splice(index, 1);
                }
            }
            this.children.length = 0;
            for (var _i = 0, _a = this.childNodes; _i < _a.length; _i++) {
                var node = _a[_i];
                if (node.nodeType === Node.ELEMENT_NODE) {
                    this.children.push(node);
                }
            }
        }
        return returnValue;
    };
    /**
     * The Node.replaceWith() method replaces this Node in the children list of its parent with a set of Node or DOMString objects.
     *
     * @param nodes List of Node or DOMString.
     */
    Element.prototype.replaceWith = function () {
        var nodes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            nodes[_i] = arguments[_i];
        }
        ChildNodeUtility.replaceWith.apply(ChildNodeUtility, __spreadArray([this], nodes, false));
    };
    /**
     * Inserts a set of Node or DOMString objects in the children list of this ChildNode's parent, just before this ChildNode. DOMString objects are inserted as equivalent Text nodes.
     *
     * @param nodes List of Node or DOMString.
     */
    Element.prototype.before = function () {
        var nodes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            nodes[_i] = arguments[_i];
        }
        ChildNodeUtility.before.apply(ChildNodeUtility, __spreadArray([this], nodes, false));
    };
    /**
     * Inserts a set of Node or DOMString objects in the children list of this ChildNode's parent, just after this ChildNode. DOMString objects are inserted as equivalent Text nodes.
     *
     * @param nodes List of Node or DOMString.
     */
    Element.prototype.after = function () {
        var nodes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            nodes[_i] = arguments[_i];
        }
        ChildNodeUtility.after.apply(ChildNodeUtility, __spreadArray([this], nodes, false));
    };
    /**
     * Inserts a set of Node objects or DOMString objects after the last child of the ParentNode. DOMString objects are inserted as equivalent Text nodes.
     *
     * @param nodes List of Node or DOMString.
     */
    Element.prototype.append = function () {
        var nodes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            nodes[_i] = arguments[_i];
        }
        ParentNodeUtility.append.apply(ParentNodeUtility, __spreadArray([this], nodes, false));
    };
    /**
     * Inserts a set of Node objects or DOMString objects before the first child of the ParentNode. DOMString objects are inserted as equivalent Text nodes.
     *
     * @param nodes List of Node or DOMString.
     */
    Element.prototype.prepend = function () {
        var nodes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            nodes[_i] = arguments[_i];
        }
        ParentNodeUtility.prepend.apply(ParentNodeUtility, __spreadArray([this], nodes, false));
    };
    /**
     * Replaces the existing children of a node with a specified new set of children.
     *
     * @param nodes List of Node or DOMString.
     */
    Element.prototype.replaceChildren = function () {
        var nodes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            nodes[_i] = arguments[_i];
        }
        ParentNodeUtility.replaceChildren.apply(ParentNodeUtility, __spreadArray([this], nodes, false));
    };
    /**
     * Inserts a node to the given position.
     *
     * @param position Position to insert element.
     * @param element Node to insert.
     * @returns Inserted node or null if couldn't insert.
     */
    Element.prototype.insertAdjacentElement = function (position, element) {
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
    };
    /**
     * Inserts an HTML string to the given position.
     *
     * @param position Position to insert text.
     * @param text HTML string to insert.
     */
    Element.prototype.insertAdjacentHTML = function (position, text) {
        for (var _i = 0, _a = XMLParser.parse(this.ownerDocument, text).childNodes.slice(); _i < _a.length; _i++) {
            var node = _a[_i];
            this.insertAdjacentElement(position, node);
        }
    };
    /**
     * Inserts text to the given position.
     *
     * @param position Position to insert text.
     * @param text String to insert.
     */
    Element.prototype.insertAdjacentText = function (position, text) {
        var textNode = this.ownerDocument.createTextNode(text);
        this.insertAdjacentElement(position, textNode);
    };
    /**
     * Sets an attribute.
     *
     * @param name Name.
     * @param value Value.
     */
    Element.prototype.setAttribute = function (name, value) {
        var attribute = this.ownerDocument.createAttributeNS(null, name);
        attribute.value = String(value);
        this.setAttributeNode(attribute);
    };
    /**
     * Sets a namespace attribute.
     *
     * @param namespaceURI Namespace URI.
     * @param name Name.
     * @param value Value.
     */
    Element.prototype.setAttributeNS = function (namespaceURI, name, value) {
        var attribute = this.ownerDocument.createAttributeNS(namespaceURI, name);
        attribute.value = String(value);
        this.setAttributeNode(attribute);
    };
    /**
     * Returns attribute names.
     *
     * @returns Attribute names.
     */
    Element.prototype.getAttributeNames = function () {
        return Object.keys(this._attributes);
    };
    /**
     * Returns attribute value.
     *
     * @param name Name.
     */
    Element.prototype.getAttribute = function (name) {
        var attribute = this.getAttributeNode(name);
        if (attribute) {
            return attribute.value;
        }
        return null;
    };
    /**
     * Returns namespace attribute value.
     *
     * @param namespace Namespace URI.
     * @param localName Local name.
     */
    Element.prototype.getAttributeNS = function (namespace, localName) {
        var attribute = this.getAttributeNodeNS(namespace, localName);
        if (attribute) {
            return attribute.value;
        }
        return null;
    };
    /**
     * Returns a boolean value indicating whether the specified element has the attribute or not.
     *
     * @param name Attribute name.
     * @returns True if attribute exists, false otherwise.
     */
    Element.prototype.hasAttribute = function (name) {
        return !!this.getAttributeNode(name);
    };
    /**
     * Returns a boolean value indicating whether the specified element has the namespace attribute or not.
     *
     * @param namespace Namespace URI.
     * @param localName Local name.
     * @returns True if attribute exists, false otherwise.
     */
    Element.prototype.hasAttributeNS = function (namespace, localName) {
        for (var _i = 0, _a = Object.keys(this._attributes); _i < _a.length; _i++) {
            var name_1 = _a[_i];
            var attribute = this._attributes[name_1];
            if (attribute.namespaceURI === namespace && attribute.localName === localName) {
                return true;
            }
        }
        return false;
    };
    /**
     * Returns "true" if the element has attributes.
     *
     * @returns "true" if the element has attributes.
     */
    Element.prototype.hasAttributes = function () {
        return Object.keys(this._attributes).length > 0;
    };
    /**
     * Removes an attribute.
     *
     * @param name Name.
     */
    Element.prototype.removeAttribute = function (name) {
        var attribute = this._attributes[this._getAttributeName(name)];
        if (attribute) {
            this.removeAttributeNode(attribute);
        }
    };
    /**
     * Removes a namespace attribute.
     *
     * @param namespace Namespace URI.
     * @param localName Local name.
     */
    Element.prototype.removeAttributeNS = function (namespace, localName) {
        for (var _i = 0, _a = Object.keys(this._attributes); _i < _a.length; _i++) {
            var name_2 = _a[_i];
            var attribute = this._attributes[name_2];
            if (attribute.namespaceURI === namespace && attribute.localName === localName) {
                this.removeAttribute(attribute.name);
            }
        }
    };
    /**
     * Attaches a shadow root.
     *
     * @param _shadowRootInit Shadow root init.
     * @param shadowRootInit
     * @param shadowRootInit.mode
     * @returns Shadow root.
     */
    Element.prototype.attachShadow = function (shadowRootInit) {
        if (this.shadowRoot) {
            throw new DOMException('Shadow root has already been attached.');
        }
        this.shadowRoot = new ShadowRoot();
        this.shadowRoot.ownerDocument = this.ownerDocument;
        this.shadowRoot.host = this;
        this.shadowRoot.mode = shadowRootInit.mode;
        this.shadowRoot.isConnected = this.isConnected;
        return this.shadowRoot;
    };
    /**
     * Converts to string.
     *
     * @returns String.
     */
    Element.prototype.toString = function () {
        return this.outerHTML;
    };
    /**
     * Returns the size of an element and its position relative to the viewport.
     *
     * @returns DOM rect.
     */
    Element.prototype.getBoundingClientRect = function () {
        return new DOMRect();
    };
    /**
     * Returns a range.
     *
     * @returns Range.
     */
    Element.prototype.createTextRange = function () {
        return new Range();
    };
    /**
     * The matches() method checks to see if the Element would be selected by the provided selectorString.
     *
     * @param selector Selector.
     * @returns "true" if matching.
     */
    Element.prototype.matches = function (selector) {
        return new SelectorItem(selector).match(this);
    };
    /**
     * Query CSS selector to find matching nodes.
     *
     * @param selector CSS selector.
     * @returns Matching elements.
     */
    Element.prototype.querySelectorAll = function (selector) {
        return QuerySelector.querySelectorAll(this, selector);
    };
    /**
     * Query CSS Selector to find matching node.
     *
     * @param selector CSS selector.
     * @returns Matching element.
     */
    Element.prototype.querySelector = function (selector) {
        return QuerySelector.querySelector(this, selector);
    };
    /**
     * Returns an elements by class name.
     *
     * @param className Tag name.
     * @returns Matching element.
     */
    Element.prototype.getElementsByClassName = function (className) {
        return ParentNodeUtility.getElementsByClassName(this, className);
    };
    /**
     * Returns an elements by tag name.
     *
     * @param tagName Tag name.
     * @returns Matching element.
     */
    Element.prototype.getElementsByTagName = function (tagName) {
        return ParentNodeUtility.getElementsByTagName(this, tagName);
    };
    /**
     * Returns an elements by tag name and namespace.
     *
     * @param namespaceURI Namespace URI.
     * @param tagName Tag name.
     * @returns Matching element.
     */
    Element.prototype.getElementsByTagNameNS = function (namespaceURI, tagName) {
        return ParentNodeUtility.getElementsByTagNameNS(this, namespaceURI, tagName);
    };
    /**
     * The setAttributeNode() method adds a new Attr node to the specified element.
     *
     * @param attribute Attribute.
     * @returns Replaced attribute.
     */
    Element.prototype.setAttributeNode = function (attribute) {
        var name = this._getAttributeName(attribute.name);
        var replacedAttribute = this._attributes[name];
        var oldValue = replacedAttribute ? replacedAttribute.value : null;
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
            for (var _i = 0, _a = this._observers; _i < _a.length; _i++) {
                var observer = _a[_i];
                if (observer.options.attributes &&
                    (!observer.options.attributeFilter || observer.options.attributeFilter.includes(name))) {
                    var record = new MutationRecord();
                    record.type = MutationTypeEnum.attributes;
                    record.attributeName = name;
                    record.oldValue = observer.options.attributeOldValue ? oldValue : null;
                    observer.callback([record]);
                }
            }
        }
        return replacedAttribute || null;
    };
    /**
     * The setAttributeNodeNS() method adds a new Attr node to the specified element.
     *
     * @param attribute Attribute.
     * @returns Replaced attribute.
     */
    Element.prototype.setAttributeNodeNS = function (attribute) {
        return this.setAttributeNode(attribute);
    };
    /**
     * Returns an Attr node.
     *
     * @param name Name.
     * @returns Replaced attribute.
     */
    Element.prototype.getAttributeNode = function (name) {
        return this._attributes[this._getAttributeName(name)] || null;
    };
    /**
     * Returns a namespaced Attr node.
     *
     * @param namespace Namespace.
     * @param name Name.
     * @returns Replaced attribute.
     */
    Element.prototype.getAttributeNodeNS = function (namespace, name) {
        var attributeName = this._getAttributeName(name);
        for (var _i = 0, _a = Object.keys(this._attributes); _i < _a.length; _i++) {
            var name_3 = _a[_i];
            var attribute = this._attributes[name_3];
            if (attribute.namespaceURI === namespace && attribute.localName === attributeName) {
                return attribute;
            }
        }
        return null;
    };
    /**
     * Removes an Attr node.
     *
     * @param attribute Attribute.
     */
    Element.prototype.removeAttributeNode = function (attribute) {
        delete this._attributes[attribute.name];
        if (this.attributeChangedCallback &&
            this.constructor._observedAttributes &&
            this.constructor._observedAttributes.includes(attribute.name)) {
            this.attributeChangedCallback(attribute.name, attribute.value, null);
        }
        // MutationObserver
        if (this._observers.length > 0) {
            for (var _i = 0, _a = this._observers; _i < _a.length; _i++) {
                var observer = _a[_i];
                if (observer.options.attributes &&
                    (!observer.options.attributeFilter ||
                        observer.options.attributeFilter.includes(attribute.name))) {
                    var record = new MutationRecord();
                    record.type = MutationTypeEnum.attributes;
                    record.attributeName = attribute.name;
                    record.oldValue = observer.options.attributeOldValue ? attribute.value : null;
                    observer.callback([record]);
                }
            }
        }
    };
    /**
     * Removes an Attr node.
     *
     * @param attribute Attribute.
     */
    Element.prototype.removeAttributeNodeNS = function (attribute) {
        this.removeAttributeNode(attribute);
    };
    /**
     * Scrolls to a particular set of coordinates.
     *
     * @param x X position or options object.
     * @param y Y position.
     */
    Element.prototype.scroll = function (x, y) {
        var _this = this;
        if (typeof x === 'object') {
            if (x.behavior === 'smooth') {
                this.ownerDocument.defaultView.setTimeout(function () {
                    if (x.top !== undefined) {
                        _this.scrollTop = x.top;
                    }
                    if (x.left !== undefined) {
                        _this.scrollLeft = x.left;
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
    };
    /**
     * Scrolls to a particular set of coordinates.
     *
     * @param x X position or options object.
     * @param y Y position.
     */
    Element.prototype.scrollTo = function (x, y) {
        this.scroll(x, y);
    };
    /**
     * Returns attribute name.
     *
     * @param name Name.
     * @returns Attribute name based on namespace.
     */
    Element.prototype._getAttributeName = function (name) {
        if (this.namespaceURI === NamespaceURI.svg) {
            return name;
        }
        return name.toLowerCase();
    };
    return Element;
}(Node));
export default Element;
//# sourceMappingURL=Element.js.map