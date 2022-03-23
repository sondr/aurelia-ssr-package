System.register(["../node/Node", "../../mutation-observer/MutationRecord", "../../mutation-observer/MutationTypeEnum", "../character-data/CharacterDataUtility", "../child-node/NonDocumentChildNodeUtility", "../child-node/ChildNodeUtility"], function (exports_1, context_1) {
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
    var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
        }
        return to.concat(ar || Array.prototype.slice.call(from));
    };
    var Node_1, MutationRecord_1, MutationTypeEnum_1, CharacterDataUtility_1, NonDocumentChildNodeUtility_1, ChildNodeUtility_1, Comment;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Node_1_1) {
                Node_1 = Node_1_1;
            },
            function (MutationRecord_1_1) {
                MutationRecord_1 = MutationRecord_1_1;
            },
            function (MutationTypeEnum_1_1) {
                MutationTypeEnum_1 = MutationTypeEnum_1_1;
            },
            function (CharacterDataUtility_1_1) {
                CharacterDataUtility_1 = CharacterDataUtility_1_1;
            },
            function (NonDocumentChildNodeUtility_1_1) {
                NonDocumentChildNodeUtility_1 = NonDocumentChildNodeUtility_1_1;
            },
            function (ChildNodeUtility_1_1) {
                ChildNodeUtility_1 = ChildNodeUtility_1_1;
            }
        ],
        execute: function () {
            /**
             * Comment node.
             */
            Comment = /** @class */ (function (_super) {
                __extends(Comment, _super);
                /**
                 * Constructor.
                 *
                 * @param [comment] Comment.
                 */
                function Comment(comment) {
                    var _this = _super.call(this) || this;
                    _this.nodeType = Node_1.default.COMMENT_NODE;
                    _this._data = '';
                    if (comment) {
                        _this._data = comment;
                    }
                    return _this;
                }
                Object.defineProperty(Comment.prototype, "nodeName", {
                    /**
                     * Node name.
                     *
                     * @returns Node name.
                     */
                    get: function () {
                        return '#comment';
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Comment.prototype, "length", {
                    /**
                     * Returns text content.
                     *
                     * @returns Text content.
                     */
                    get: function () {
                        return this._data.length;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Comment.prototype, "data", {
                    /**
                     * Returns text content.
                     *
                     * @returns Text content.
                     */
                    get: function () {
                        return this._data;
                    },
                    /**
                     * Sets text content.
                     *
                     * @param textContent Text content.
                     */
                    set: function (data) {
                        var oldValue = this._data;
                        this._data = data;
                        // MutationObserver
                        if (this._observers.length > 0) {
                            for (var _i = 0, _a = this._observers; _i < _a.length; _i++) {
                                var observer = _a[_i];
                                if (observer.options.characterData) {
                                    var record = new MutationRecord_1.default();
                                    record.type = MutationTypeEnum_1.default.characterData;
                                    record.oldValue = observer.options.characterDataOldValue ? oldValue : null;
                                    observer.callback([record]);
                                }
                            }
                        }
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Comment.prototype, "textContent", {
                    /**
                     * Returns text content.
                     *
                     * @returns Text content.
                     */
                    get: function () {
                        return this._data;
                    },
                    /**
                     * Sets text content.
                     *
                     * @param textContent Text content.
                     */
                    set: function (textContent) {
                        this.data = textContent;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Comment.prototype, "nodeValue", {
                    /**
                     * Returns node value.
                     *
                     * @returns Node value.
                     */
                    get: function () {
                        return this._data;
                    },
                    /**
                     * Sets node value.
                     *
                     * @param nodeValue Node value.
                     */
                    set: function (nodeValue) {
                        this.textContent = nodeValue;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Comment.prototype, "previousElementSibling", {
                    /**
                     * Previous element sibling.
                     *
                     * @returns Element.
                     */
                    get: function () {
                        return NonDocumentChildNodeUtility_1.default.previousElementSibling(this);
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Comment.prototype, "nextElementSibling", {
                    /**
                     * Next element sibling.
                     *
                     * @returns Element.
                     */
                    get: function () {
                        return NonDocumentChildNodeUtility_1.default.nextElementSibling(this);
                    },
                    enumerable: false,
                    configurable: true
                });
                /**
                 * Converts to string.
                 *
                 * @returns String.
                 */
                Comment.prototype.toString = function () {
                    return '[object Comment]';
                };
                /**
                 * Appends the given DOMString to the CharacterData.data string; when this method returns, data contains the concatenated DOMString.
                 *
                 * @param data Data.
                 */
                Comment.prototype.appendData = function (data) {
                    CharacterDataUtility_1.default.appendData(this, data);
                };
                /**
                 * Removes the specified amount of characters, starting at the specified offset, from the CharacterData.data string; when this method returns, data contains the shortened DOMString.
                 *
                 * @param offset Offset.
                 * @param count Count.
                 */
                Comment.prototype.deleteData = function (offset, count) {
                    CharacterDataUtility_1.default.deleteData(this, offset, count);
                };
                /**
                 * Inserts the specified characters, at the specified offset, in the CharacterData.data string; when this method returns, data contains the modified DOMString.
                 *
                 * @param offset Offset.
                 * @param data Data.
                 */
                Comment.prototype.insertData = function (offset, data) {
                    CharacterDataUtility_1.default.insertData(this, offset, data);
                };
                /**
                 * Removes the object from its parent children list.
                 */
                Comment.prototype.remove = function () {
                    ChildNodeUtility_1.default.remove(this);
                };
                /**
                 * The Node.replaceWith() method replaces this Node in the children list of its parent with a set of Node or DOMString objects.
                 *
                 * @param nodes List of Node or DOMString.
                 */
                Comment.prototype.replaceWith = function () {
                    var nodes = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        nodes[_i] = arguments[_i];
                    }
                    ChildNodeUtility_1.default.replaceWith.apply(ChildNodeUtility_1.default, __spreadArray([this], nodes, false));
                };
                /**
                 * Inserts a set of Node or DOMString objects in the children list of this ChildNode's parent, just before this ChildNode. DOMString objects are inserted as equivalent Text nodes.
                 *
                 * @param nodes List of Node or DOMString.
                 */
                Comment.prototype.before = function () {
                    var nodes = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        nodes[_i] = arguments[_i];
                    }
                    ChildNodeUtility_1.default.before.apply(ChildNodeUtility_1.default, __spreadArray([this], nodes, false));
                };
                /**
                 * Inserts a set of Node or DOMString objects in the children list of this ChildNode's parent, just after this ChildNode. DOMString objects are inserted as equivalent Text nodes.
                 *
                 * @param nodes List of Node or DOMString.
                 */
                Comment.prototype.after = function () {
                    var nodes = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        nodes[_i] = arguments[_i];
                    }
                    ChildNodeUtility_1.default.after.apply(ChildNodeUtility_1.default, __spreadArray([this], nodes, false));
                };
                /**
                 * Replaces the specified amount of characters, starting at the specified offset, with the specified DOMString; when this method returns, data contains the modified DOMString.
                 *
                 * @param offset Offset.
                 * @param count Count.
                 * @param data Data.
                 */
                Comment.prototype.replaceData = function (offset, count, data) {
                    CharacterDataUtility_1.default.replaceData(this, offset, count, data);
                };
                /**
                 * Returns a DOMString containing the part of CharacterData.data of the specified length and starting at the specified offset.
                 *
                 * @param offset Offset.
                 * @param count Count.
                 */
                Comment.prototype.substringData = function (offset, count) {
                    return CharacterDataUtility_1.default.substringData(this, offset, count);
                };
                /**
                 * Clones a node.
                 *
                 * @override
                 * @param [deep=false] "true" to clone deep.
                 * @returns Cloned node.
                 */
                Comment.prototype.cloneNode = function (deep) {
                    if (deep === void 0) { deep = false; }
                    var clone = _super.prototype.cloneNode.call(this, deep);
                    clone._data = this._data;
                    return clone;
                };
                return Comment;
            }(Node_1.default));
            exports_1("default", Comment);
        }
    };
});
//# sourceMappingURL=Comment.js.map