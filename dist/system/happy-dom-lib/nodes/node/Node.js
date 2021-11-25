System.register(["../../event/EventTarget", "../../mutation-observer/MutationRecord", "../../mutation-observer/MutationTypeEnum", "../../exception/DOMException", "./NodeListFactory"], function (exports_1, context_1) {
    "use strict";
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
    var EventTarget_1, MutationRecord_1, MutationTypeEnum_1, DOMException_1, NodeListFactory_1, Node;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (EventTarget_1_1) {
                EventTarget_1 = EventTarget_1_1;
            },
            function (MutationRecord_1_1) {
                MutationRecord_1 = MutationRecord_1_1;
            },
            function (MutationTypeEnum_1_1) {
                MutationTypeEnum_1 = MutationTypeEnum_1_1;
            },
            function (DOMException_1_1) {
                DOMException_1 = DOMException_1_1;
            },
            function (NodeListFactory_1_1) {
                NodeListFactory_1 = NodeListFactory_1_1;
            }
        ],
        execute: function () {
            Node = /** @class */ (function (_super) {
                __extends(Node, _super);
                /**
                 * Constructor.
                 */
                function Node() {
                    var _this = _super.call(this) || this;
                    _this.ownerDocument = null;
                    _this.parentNode = null;
                    _this.childNodes = NodeListFactory_1.default.create();
                    // Protected properties
                    _this._isConnected = false;
                    // Custom Properties (not part of HTML standard)
                    _this._observers = [];
                    _this.ownerDocument = _this.constructor.ownerDocument;
                    return _this;
                }
                Object.defineProperty(Node.prototype, "isConnected", {
                    /**
                     * Returns "true" if connected to DOM.
                     *
                     * @returns "true" if connected.
                     */
                    get: function () {
                        return this._isConnected;
                    },
                    /**
                     * Sets the connected state.
                     *
                     * @param isConnected "true" if connected.
                     */
                    set: function (isConnected) {
                        if (this._isConnected !== isConnected) {
                            this._isConnected = isConnected;
                            if (isConnected && this.connectedCallback) {
                                this.connectedCallback();
                            }
                            else if (!isConnected && this.disconnectedCallback) {
                                this.disconnectedCallback();
                            }
                            for (var _i = 0, _a = this.childNodes; _i < _a.length; _i++) {
                                var child = _a[_i];
                                child.isConnected = isConnected;
                            }
                            // eslint-disable-next-line
                            if (this.shadowRoot) {
                                // eslint-disable-next-line
                                this.shadowRoot.isConnected = isConnected;
                            }
                        }
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Node.prototype, "textContent", {
                    /**
                     * Get text value of children.
                     *
                     * @returns Text content.
                     */
                    get: function () {
                        return null;
                    },
                    /**
                     * Sets text content.
                     *
                     * @param textContent Text content.
                     */
                    set: function (_textContent) {
                        // Do nothing.
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Node.prototype, "nodeValue", {
                    /**
                     * Node value.
                     *
                     * @returns Node value.
                     */
                    get: function () {
                        return null;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Node.prototype, "nodeName", {
                    /**
                     * Node name.
                     *
                     * @returns Node name.
                     */
                    get: function () {
                        return '';
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Node.prototype, "previousSibling", {
                    /**
                     * Previous sibling.
                     *
                     * @returns Node.
                     */
                    get: function () {
                        if (this.parentNode) {
                            var index = this.parentNode.childNodes.indexOf(this);
                            if (index > 0) {
                                return this.parentNode.childNodes[index - 1];
                            }
                        }
                        return null;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Node.prototype, "nextSibling", {
                    /**
                     * Next sibling.
                     *
                     * @returns Node.
                     */
                    get: function () {
                        if (this.parentNode) {
                            var index = this.parentNode.childNodes.indexOf(this);
                            if (index > -1 && index + 1 < this.parentNode.childNodes.length) {
                                return this.parentNode.childNodes[index + 1];
                            }
                        }
                        return null;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Node.prototype, "firstChild", {
                    /**
                     * First child.
                     *
                     * @returns Node.
                     */
                    get: function () {
                        if (this.childNodes.length > 0) {
                            return this.childNodes[0];
                        }
                        return null;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Node.prototype, "lastChild", {
                    /**
                     * Last child.
                     *
                     * @returns Node.
                     */
                    get: function () {
                        if (this.childNodes.length > 0) {
                            return this.childNodes[this.childNodes.length - 1];
                        }
                        return null;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Node.prototype, "parentElement", {
                    /**
                     * Returns parent element.
                     *
                     * @returns Element.
                     */
                    get: function () {
                        var parent = this.parentNode;
                        while (parent && parent.nodeType !== Node.ELEMENT_NODE) {
                            parent = this.parentNode;
                        }
                        return parent;
                    },
                    enumerable: false,
                    configurable: true
                });
                /**
                 * Returns "true" if the node has child nodes.
                 *
                 * @returns "true" if the node has child nodes.
                 */
                Node.prototype.hasChildNodes = function () {
                    return this.childNodes.length > 0;
                };
                /**
                 * Returns closest root node (Document or ShadowRoot).
                 *
                 * @param options Options.
                 * @param options.composed A Boolean that indicates whether the shadow root should be returned (false, the default), or a root node beyond shadow root (true).
                 * @returns Node.
                 */
                Node.prototype.getRootNode = function (options) {
                    // eslint-disable-next-line
                    var parent = this;
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
                };
                /**
                 * Clones a node.
                 *
                 * @param [deep=false] "true" to clone deep.
                 * @returns Cloned node.
                 */
                Node.prototype.cloneNode = function (deep) {
                    if (deep === void 0) { deep = false; }
                    var clone = new this.constructor();
                    for (var _i = 0, _a = clone.childNodes.slice(); _i < _a.length; _i++) {
                        var node = _a[_i];
                        node.parentNode.removeChild(node);
                    }
                    if (deep) {
                        for (var _b = 0, _c = this.childNodes; _b < _c.length; _b++) {
                            var childNode = _c[_b];
                            var childClone = childNode.cloneNode(true);
                            childClone.parentNode = clone;
                            clone.childNodes.push(childClone);
                        }
                    }
                    clone.ownerDocument = this.ownerDocument;
                    return clone;
                };
                /**
                 * Append a child node to childNodes.
                 *
                 * @param  node Node to append.
                 * @returns Appended node.
                 */
                Node.prototype.appendChild = function (node) {
                    if (node === this) {
                        throw new DOMException_1.default('Not possible to append a node as a child of itself.');
                    }
                    // If the type is DocumentFragment, then the child nodes of if it should be moved instead of the actual node.
                    // See: https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment
                    if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                        for (var _i = 0, _a = node.childNodes.slice(); _i < _a.length; _i++) {
                            var child = _a[_i];
                            this.appendChild(child);
                        }
                        return node;
                    }
                    // Remove the node from its previous parent if it has any.
                    if (node.parentNode) {
                        var index = node.parentNode.childNodes.indexOf(node);
                        if (index !== -1) {
                            node.parentNode.childNodes.splice(index, 1);
                        }
                    }
                    this.childNodes.push(node);
                    node.parentNode = this;
                    node.isConnected = this.isConnected;
                    // MutationObserver
                    if (this._observers.length > 0) {
                        var record = new MutationRecord_1.default();
                        record.type = MutationTypeEnum_1.default.childList;
                        record.addedNodes = [node];
                        for (var _b = 0, _c = this._observers; _b < _c.length; _b++) {
                            var observer = _c[_b];
                            if (observer.options.subtree) {
                                node._observe(observer);
                            }
                            if (observer.options.childList) {
                                observer.callback([record]);
                            }
                        }
                    }
                    return node;
                };
                /**
                 * Remove Child element from childNodes array.
                 *
                 * @param node Node to remove.
                 * @returns Removed node.
                 */
                Node.prototype.removeChild = function (node) {
                    var index = this.childNodes.indexOf(node);
                    if (index === -1) {
                        throw new DOMException_1.default('Failed to remove node. Node is not child of parent.');
                    }
                    this.childNodes.splice(index, 1);
                    node.parentNode = null;
                    node.isConnected = false;
                    // MutationObserver
                    if (this._observers.length > 0) {
                        var record = new MutationRecord_1.default();
                        record.type = MutationTypeEnum_1.default.childList;
                        record.removedNodes = [node];
                        for (var _i = 0, _a = this._observers; _i < _a.length; _i++) {
                            var observer = _a[_i];
                            node._unobserve(observer);
                            if (observer.options.childList) {
                                observer.callback([record]);
                            }
                        }
                    }
                    return node;
                };
                /**
                 * Inserts a node before another.
                 *
                 * @param newNode Node to insert.
                 * @param [referenceNode] Node to insert before.
                 * @returns Inserted node.
                 */
                Node.prototype.insertBefore = function (newNode, referenceNode) {
                    // If the type is DocumentFragment, then the child nodes of if it should be moved instead of the actual node.
                    // See: https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment
                    if (newNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                        for (var _i = 0, _a = newNode.childNodes.slice(); _i < _a.length; _i++) {
                            var child = _a[_i];
                            this.insertBefore(child, referenceNode);
                        }
                        return newNode;
                    }
                    if (referenceNode === null) {
                        this.appendChild(newNode);
                        return newNode;
                    }
                    if (referenceNode === undefined) {
                        throw new DOMException_1.default("Failed to execute 'insertBefore' on 'Node': 2 arguments required, but only 1 present.", 'TypeError');
                    }
                    var index = referenceNode ? this.childNodes.indexOf(referenceNode) : 0;
                    if (index === -1) {
                        throw new DOMException_1.default("Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.");
                    }
                    if (newNode.parentNode) {
                        var index_1 = newNode.parentNode.childNodes.indexOf(newNode);
                        if (index_1 !== -1) {
                            newNode.parentNode.childNodes.splice(index_1, 1);
                        }
                    }
                    this.childNodes.splice(index, 0, newNode);
                    newNode.parentNode = this;
                    newNode.isConnected = this.isConnected;
                    // MutationObserver
                    if (this._observers.length > 0) {
                        var record = new MutationRecord_1.default();
                        record.type = MutationTypeEnum_1.default.childList;
                        record.addedNodes = [newNode];
                        for (var _b = 0, _c = this._observers; _b < _c.length; _b++) {
                            var observer = _c[_b];
                            if (observer.options.subtree) {
                                newNode._observe(observer);
                            }
                            if (observer.options.childList) {
                                observer.callback([record]);
                            }
                        }
                    }
                    return newNode;
                };
                /**
                 * Replaces a node with another.
                 *
                 * @param newChild New child.
                 * @param oldChild Old child.
                 * @returns Replaced node.
                 */
                Node.prototype.replaceChild = function (newChild, oldChild) {
                    this.insertBefore(newChild, oldChild);
                    this.removeChild(oldChild);
                    return oldChild;
                };
                /**
                 * @override
                 */
                Node.prototype.dispatchEvent = function (event) {
                    var onEventName = 'on' + event.type.toLowerCase();
                    if (typeof this[onEventName] === 'function') {
                        this[onEventName].call(this, event);
                    }
                    var returnValue = _super.prototype.dispatchEvent.call(this, event);
                    if (event.bubbles && this.parentNode !== null && !event._propagationStopped) {
                        return this.parentNode.dispatchEvent(event);
                    }
                    return returnValue;
                };
                /**
                 * Converts the node to a string.
                 *
                 * @param listener Listener.
                 */
                Node.prototype.toString = function () {
                    return "[object ".concat(this.constructor.name, "]");
                };
                /**
                 * Observeres the node.
                 * Used by MutationObserver, but it is not part of the HTML standard.
                 *
                 * @param listener Listener.
                 */
                Node.prototype._observe = function (listener) {
                    this._observers.push(listener);
                    if (listener.options.subtree) {
                        for (var _i = 0, _a = this.childNodes; _i < _a.length; _i++) {
                            var node = _a[_i];
                            node._observe(listener);
                        }
                    }
                };
                /**
                 * Stops observing the node.
                 * Used by MutationObserver, but it is not part of the HTML standard.
                 *
                 * @param listener Listener.
                 */
                Node.prototype._unobserve = function (listener) {
                    var index = this._observers.indexOf(listener);
                    if (index !== -1) {
                        this._observers.splice(index, 1);
                    }
                    if (listener.options.subtree) {
                        for (var _i = 0, _a = this.childNodes; _i < _a.length; _i++) {
                            var node = _a[_i];
                            node._unobserve(listener);
                        }
                    }
                };
                // Public properties
                Node.ELEMENT_NODE = 1;
                Node.TEXT_NODE = 3;
                Node.COMMENT_NODE = 8;
                Node.DOCUMENT_NODE = 9;
                Node.DOCUMENT_TYPE_NODE = 10;
                Node.DOCUMENT_FRAGMENT_NODE = 11;
                Node.ownerDocument = null;
                return Node;
            }(EventTarget_1.default));
            exports_1("default", Node);
        }
    };
});
