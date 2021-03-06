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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "../html-element/HTMLElement", "../text/Text", "../comment/Comment", "../node/Node", "../../tree-walker/TreeWalker", "../document-fragment/DocumentFragment", "../../xml-parser/XMLParser", "../../event/Event", "../../dom-implementation/DOMImplementation", "../../config/ElementTag", "../../attribute/Attr", "../../config/NamespaceURI", "../document-type/DocumentType", "../parent-node/ParentNodeUtility", "../../query-selector/QuerySelector", "../../exception/DOMException", "../../cookie/CookieUtility", "../element/HTMLCollectionFactory", "./DocumentReadyStateEnum", "./DocumentReadyStateManager"], function (require, exports, HTMLElement_1, Text_1, Comment_1, Node_1, TreeWalker_1, DocumentFragment_1, XMLParser_1, Event_1, DOMImplementation_1, ElementTag_1, Attr_1, NamespaceURI_1, DocumentType_1, ParentNodeUtility_1, QuerySelector_1, DOMException_1, CookieUtility_1, HTMLCollectionFactory_1, DocumentReadyStateEnum_1, DocumentReadyStateManager_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    HTMLElement_1 = __importDefault(HTMLElement_1);
    Text_1 = __importDefault(Text_1);
    Comment_1 = __importDefault(Comment_1);
    Node_1 = __importDefault(Node_1);
    TreeWalker_1 = __importDefault(TreeWalker_1);
    DocumentFragment_1 = __importDefault(DocumentFragment_1);
    XMLParser_1 = __importDefault(XMLParser_1);
    Event_1 = __importDefault(Event_1);
    DOMImplementation_1 = __importDefault(DOMImplementation_1);
    ElementTag_1 = __importDefault(ElementTag_1);
    Attr_1 = __importDefault(Attr_1);
    NamespaceURI_1 = __importDefault(NamespaceURI_1);
    DocumentType_1 = __importDefault(DocumentType_1);
    ParentNodeUtility_1 = __importDefault(ParentNodeUtility_1);
    QuerySelector_1 = __importDefault(QuerySelector_1);
    DOMException_1 = __importDefault(DOMException_1);
    CookieUtility_1 = __importDefault(CookieUtility_1);
    HTMLCollectionFactory_1 = __importDefault(HTMLCollectionFactory_1);
    DocumentReadyStateEnum_1 = __importDefault(DocumentReadyStateEnum_1);
    DocumentReadyStateManager_1 = __importDefault(DocumentReadyStateManager_1);
    /**
     * Document.
     */
    var Document = /** @class */ (function (_super) {
        __extends(Document, _super);
        /**
         * Creates an instance of Document.
         */
        function Document() {
            var _this = _super.call(this) || this;
            _this.onreadystatechange = null;
            _this.nodeType = Node_1.default.DOCUMENT_NODE;
            _this.adoptedStyleSheets = [];
            _this.children = HTMLCollectionFactory_1.default.create();
            _this.readyState = DocumentReadyStateEnum_1.default.interactive;
            _this._readyStateManager = null;
            _this._isConnected = true;
            _this._isFirstWrite = true;
            _this._isFirstWriteAfterOpen = false;
            _this._defaultView = null;
            _this._cookie = '';
            _this.implementation = new DOMImplementation_1.default();
            _this.implementation._ownerDocument = _this;
            var doctype = _this.implementation.createDocumentType('html', '', '');
            var documentElement = _this.createElement('html');
            var bodyElement = _this.createElement('body');
            var headElement = _this.createElement('head');
            _this.appendChild(doctype);
            _this.appendChild(documentElement);
            documentElement.appendChild(headElement);
            documentElement.appendChild(bodyElement);
            return _this;
        }
        Object.defineProperty(Document.prototype, "defaultView", {
            /**
             * Returns default view.
             *
             * @returns Default view.
             */
            get: function () {
                return this._defaultView;
            },
            /**
             * Sets a default view.
             *
             * @param defaultView Default view.
             */
            set: function (defaultView) {
                var _this = this;
                this._defaultView = defaultView;
                this._readyStateManager = new DocumentReadyStateManager_1.default(defaultView);
                this._readyStateManager.whenComplete().then(function () {
                    _this.readyState = DocumentReadyStateEnum_1.default.complete;
                    _this.dispatchEvent(new Event_1.default('readystatechange'));
                });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Document.prototype, "childElementCount", {
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
        Object.defineProperty(Document.prototype, "firstElementChild", {
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
        Object.defineProperty(Document.prototype, "lastElementChild", {
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
        Object.defineProperty(Document.prototype, "cookie", {
            /**
             * Returns cookie string.
             *
             * @returns Cookie.
             */
            get: function () {
                return this._cookie;
            },
            /**
             * Sets a cookie string.
             *
             * @param cookie Cookie string.
             */
            set: function (cookie) {
                this._cookie = CookieUtility_1.default.getCookieString(this.defaultView.location, this._cookie, cookie);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Document.prototype, "nodeName", {
            /**
             * Node name.
             *
             * @returns Node name.
             */
            get: function () {
                return '#document';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Document.prototype, "documentElement", {
            /**
             * Returns <html> element.
             *
             * @returns Element.
             */
            get: function () {
                return ParentNodeUtility_1.default.getElementByTagName(this, 'html');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Document.prototype, "doctype", {
            /**
             * Returns document type element.
             *
             * @returns Document type.
             */
            get: function () {
                for (var _i = 0, _a = this.childNodes; _i < _a.length; _i++) {
                    var node = _a[_i];
                    if (node instanceof DocumentType_1.default) {
                        return node;
                    }
                }
                return null;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Document.prototype, "body", {
            /**
             * Returns <body> element.
             *
             * @returns Element.
             */
            get: function () {
                return ParentNodeUtility_1.default.getElementByTagName(this, 'body');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Document.prototype, "head", {
            /**
             * Returns <head> element.
             *
             * @returns Element.
             */
            get: function () {
                return ParentNodeUtility_1.default.getElementByTagName(this, 'head');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Document.prototype, "styleSheets", {
            /**
             * Returns CSS style sheets.
             *
             * @returns CSS style sheets.
             */
            get: function () {
                var styles = (this.querySelectorAll('link[rel="stylesheet"][href],style'));
                var styleSheets = [];
                for (var _i = 0, styles_1 = styles; _i < styles_1.length; _i++) {
                    var style = styles_1[_i];
                    var sheet = style.sheet;
                    if (sheet) {
                        styleSheets.push(sheet);
                    }
                }
                return styleSheets;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Inserts a set of Node objects or DOMString objects after the last child of the ParentNode. DOMString objects are inserted as equivalent Text nodes.
         *
         * @param nodes List of Node or DOMString.
         */
        Document.prototype.append = function () {
            var nodes = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                nodes[_i] = arguments[_i];
            }
            ParentNodeUtility_1.default.append.apply(ParentNodeUtility_1.default, __spreadArray([this], nodes, false));
        };
        /**
         * Inserts a set of Node objects or DOMString objects before the first child of the ParentNode. DOMString objects are inserted as equivalent Text nodes.
         *
         * @param nodes List of Node or DOMString.
         */
        Document.prototype.prepend = function () {
            var nodes = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                nodes[_i] = arguments[_i];
            }
            ParentNodeUtility_1.default.prepend.apply(ParentNodeUtility_1.default, __spreadArray([this], nodes, false));
        };
        /**
         * Replaces the existing children of a node with a specified new set of children.
         *
         * @param nodes List of Node or DOMString.
         */
        Document.prototype.replaceChildren = function () {
            var nodes = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                nodes[_i] = arguments[_i];
            }
            ParentNodeUtility_1.default.replaceChildren.apply(ParentNodeUtility_1.default, __spreadArray([this], nodes, false));
        };
        /**
         * Query CSS selector to find matching elments.
         *
         * @param selector CSS selector.
         * @returns Matching elements.
         */
        Document.prototype.querySelectorAll = function (selector) {
            return QuerySelector_1.default.querySelectorAll(this, selector);
        };
        /**
         * Query CSS Selector to find a matching element.
         *
         * @param selector CSS selector.
         * @returns Matching element.
         */
        Document.prototype.querySelector = function (selector) {
            return QuerySelector_1.default.querySelector(this, selector);
        };
        /**
         * Returns an elements by class name.
         *
         * @param className Tag name.
         * @returns Matching element.
         */
        Document.prototype.getElementsByClassName = function (className) {
            return ParentNodeUtility_1.default.getElementsByClassName(this, className);
        };
        /**
         * Returns an elements by tag name.
         *
         * @param tagName Tag name.
         * @returns Matching element.
         */
        Document.prototype.getElementsByTagName = function (tagName) {
            return ParentNodeUtility_1.default.getElementsByTagName(this, tagName);
        };
        /**
         * Returns an elements by tag name and namespace.
         *
         * @param namespaceURI Namespace URI.
         * @param tagName Tag name.
         * @returns Matching element.
         */
        Document.prototype.getElementsByTagNameNS = function (namespaceURI, tagName) {
            return ParentNodeUtility_1.default.getElementsByTagNameNS(this, namespaceURI, tagName);
        };
        /**
         * Returns an element by ID.
         *
         * @param id ID.
         * @returns Matching element.
         */
        Document.prototype.getElementById = function (id) {
            return ParentNodeUtility_1.default.getElementById(this, id);
        };
        /**
         * Clones a node.
         *
         * @override
         * @param [deep=false] "true" to clone deep.
         * @returns Cloned node.
         */
        Document.prototype.cloneNode = function (deep) {
            if (deep === void 0) { deep = false; }
            var clone = _super.prototype.cloneNode.call(this, deep);
            if (deep) {
                for (var _i = 0, _a = clone.childNodes; _i < _a.length; _i++) {
                    var node = _a[_i];
                    if (node.nodeType === Node_1.default.ELEMENT_NODE) {
                        clone.children.push(node);
                    }
                }
            }
            clone.defaultView = this.defaultView;
            return clone;
        };
        /**
         * Append a child node to childNodes.
         *
         * @override
         * @param  node Node to append.
         * @returns Appended node.
         */
        Document.prototype.appendChild = function (node) {
            // If the type is DocumentFragment, then the child nodes of if it should be moved instead of the actual node.
            // See: https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment
            if (node.nodeType !== Node_1.default.DOCUMENT_FRAGMENT_NODE) {
                if (node.parentNode && node.parentNode['children']) {
                    var index = node.parentNode['children'].indexOf(node);
                    if (index !== -1) {
                        node.parentNode['children'].splice(index, 1);
                    }
                }
                if (node !== this && node.nodeType === Node_1.default.ELEMENT_NODE) {
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
        Document.prototype.removeChild = function (node) {
            if (node.nodeType === Node_1.default.ELEMENT_NODE) {
                var index = this.children.indexOf(node);
                if (index !== -1) {
                    this.children.splice(index, 1);
                }
            }
            return _super.prototype.removeChild.call(this, node);
        };
        /**
         * Inserts a node before another.
         *
         * @override
         * @param newNode Node to insert.
         * @param [referenceNode] Node to insert before.
         * @returns Inserted node.
         */
        Document.prototype.insertBefore = function (newNode, referenceNode) {
            var returnValue = _super.prototype.insertBefore.call(this, newNode, referenceNode);
            // If the type is DocumentFragment, then the child nodes of if it should be moved instead of the actual node.
            // See: https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment
            if (newNode.nodeType !== Node_1.default.DOCUMENT_FRAGMENT_NODE) {
                if (newNode.parentNode && newNode.parentNode['children']) {
                    var index = newNode.parentNode['children'].indexOf(newNode);
                    if (index !== -1) {
                        newNode.parentNode['children'].splice(index, 1);
                    }
                }
                this.children.length = 0;
                for (var _i = 0, _a = this.childNodes; _i < _a.length; _i++) {
                    var node = _a[_i];
                    if (node.nodeType === Node_1.default.ELEMENT_NODE) {
                        this.children.push(node);
                    }
                }
            }
            return returnValue;
        };
        /**
         * Replaces the document HTML with new HTML.
         *
         * @param html HTML.
         */
        Document.prototype.write = function (html) {
            var root = XMLParser_1.default.parse(this, html, true);
            if (this._isFirstWrite || this._isFirstWriteAfterOpen) {
                if (this._isFirstWrite) {
                    if (!this._isFirstWriteAfterOpen) {
                        this.open();
                    }
                    this._isFirstWrite = false;
                }
                this._isFirstWriteAfterOpen = false;
                var documentElement = null;
                var documentTypeNode = null;
                for (var _i = 0, _a = root.childNodes; _i < _a.length; _i++) {
                    var node = _a[_i];
                    if (node['tagName'] === 'HTML') {
                        documentElement = node;
                    }
                    else if (node.nodeType === Node_1.default.DOCUMENT_TYPE_NODE) {
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
                        var rootBody = root.querySelector('body');
                        var body_1 = this.querySelector('body');
                        if (rootBody && body_1) {
                            for (var _b = 0, _c = rootBody.childNodes.slice(); _b < _c.length; _b++) {
                                var child = _c[_b];
                                body_1.appendChild(child);
                            }
                        }
                    }
                    var body = this.querySelector('body');
                    if (body) {
                        for (var _d = 0, _e = root.childNodes.slice(); _d < _e.length; _d++) {
                            var child = _e[_d];
                            if (child['tagName'] !== 'HTML' && child.nodeType !== Node_1.default.DOCUMENT_TYPE_NODE) {
                                body.appendChild(child);
                            }
                        }
                    }
                }
                else {
                    var documentElement_1 = this.createElement('html');
                    var bodyElement = this.createElement('body');
                    var headElement = this.createElement('head');
                    for (var _f = 0, _g = root.childNodes.slice(); _f < _g.length; _f++) {
                        var child = _g[_f];
                        bodyElement.appendChild(child);
                    }
                    documentElement_1.appendChild(headElement);
                    documentElement_1.appendChild(bodyElement);
                    this.appendChild(documentElement_1);
                }
            }
            else {
                var bodyNode = root.querySelector('body');
                for (var _h = 0, _j = (bodyNode || root).childNodes.slice(); _h < _j.length; _h++) {
                    var child = _j[_h];
                    this.body.appendChild(child);
                }
            }
        };
        /**
         * Opens the document.
         *
         * @returns Document.
         */
        Document.prototype.open = function () {
            this._isFirstWriteAfterOpen = true;
            for (var _i = 0, _a = Object.keys(this._listeners); _i < _a.length; _i++) {
                var eventType = _a[_i];
                var listeners = this._listeners[eventType];
                if (listeners) {
                    for (var _b = 0, listeners_1 = listeners; _b < listeners_1.length; _b++) {
                        var listener = listeners_1[_b];
                        this.removeEventListener(eventType, listener);
                    }
                }
            }
            for (var _c = 0, _d = this.childNodes.slice(); _c < _d.length; _c++) {
                var child = _d[_c];
                this.removeChild(child);
            }
            return this;
        };
        /**
         * Closes the document.
         */
        Document.prototype.close = function () { };
        /**
         * Creates an element.
         *
         * @param tagName Tag name.
         * @param [options] Options.
         * @param options.is
         * @returns Element.
         */
        Document.prototype.createElement = function (tagName, options) {
            return this.createElementNS(NamespaceURI_1.default.html, tagName, options);
        };
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
        Document.prototype.createElementNS = function (namespaceURI, qualifiedName, options) {
            var customElementClass;
            if (this.defaultView && options && options.is) {
                customElementClass = this.defaultView.customElements.get(options.is);
            }
            else if (this.defaultView) {
                customElementClass = this.defaultView.customElements.get(qualifiedName);
            }
            var elementClass = customElementClass
                ? customElementClass
                : ElementTag_1.default[qualifiedName] || HTMLElement_1.default;
            elementClass.ownerDocument = this;
            var element = new elementClass();
            element.tagName = qualifiedName.toUpperCase();
            element.ownerDocument = this;
            element.namespaceURI = namespaceURI;
            return element;
        };
        /**
         * Creates a text node.
         *
         * @param [data] Text data.
         * @returns Text node.
         */
        Document.prototype.createTextNode = function (data) {
            Text_1.default.ownerDocument = this;
            return new Text_1.default(data);
        };
        /**
         * Creates a comment node.
         *
         * @param [data] Text data.
         * @returns Text node.
         */
        Document.prototype.createComment = function (data) {
            Comment_1.default.ownerDocument = this;
            return new Comment_1.default(data);
        };
        /**
         * Creates a document fragment.
         *
         * @returns Document fragment.
         */
        Document.prototype.createDocumentFragment = function () {
            DocumentFragment_1.default.ownerDocument = this;
            return new DocumentFragment_1.default();
        };
        /**
         * Creates a Tree Walker.
         *
         * @param root Root.
         * @param [whatToShow] What to show.
         * @param [filter] Filter.
         */
        Document.prototype.createTreeWalker = function (root, whatToShow, filter) {
            if (whatToShow === void 0) { whatToShow = -1; }
            if (filter === void 0) { filter = null; }
            return new TreeWalker_1.default(root, whatToShow, filter);
        };
        /**
         * Creates an event.
         *
         * @deprecated
         * @param _type Type.
         * @returns Event.
         */
        Document.prototype.createEvent = function (_type) {
            return new Event_1.default('init');
        };
        /**
         * Creates an Attr node.
         *
         * @param name Name.
         * @returns Attribute.
         */
        Document.prototype.createAttribute = function (name) {
            var attribute = new Attr_1.default();
            attribute.name = name.toLowerCase();
            attribute.ownerDocument = this;
            return attribute;
        };
        /**
         * Creates a namespaced Attr node.
         *
         * @param namespaceURI Namespace URI.
         * @param qualifiedName Qualified name.
         * @returns Element.
         */
        Document.prototype.createAttributeNS = function (namespaceURI, qualifiedName) {
            var attribute = new Attr_1.default();
            attribute.namespaceURI = namespaceURI;
            attribute.name = qualifiedName;
            attribute.ownerDocument = this;
            return attribute;
        };
        /**
         * Imports a node.
         *
         * @param node Node to import.
         * @param [deep=false] Set to "true" if the clone should be deep.
         * @param Imported Node.
         */
        Document.prototype.importNode = function (node, deep) {
            if (deep === void 0) { deep = false; }
            if (!(node instanceof Node_1.default)) {
                throw new DOMException_1.default('Parameter 1 was not of type Node.');
            }
            var clone = node.cloneNode(deep);
            clone.ownerDocument = this;
            return clone;
        };
        /**
         * Adopts a node.
         *
         * @param node Node to adopt.
         * @returns Adopted node.
         */
        Document.prototype.adoptNode = function (node) {
            if (!(node instanceof Node_1.default)) {
                throw new DOMException_1.default('Parameter 1 was not of type Node.');
            }
            var adopted = node.parentNode ? node.parentNode.removeChild(node) : node;
            adopted.ownerDocument = this;
            return adopted;
        };
        return Document;
    }(Node_1.default));
    exports.default = Document;
});
//# sourceMappingURL=Document.js.map