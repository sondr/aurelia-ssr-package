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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Node_1 = __importDefault(require("../node/Node"));
var MutationRecord_1 = __importDefault(require("../../mutation-observer/MutationRecord"));
var MutationTypeEnum_1 = __importDefault(require("../../mutation-observer/MutationTypeEnum"));
var CharacterDataUtility_1 = __importDefault(require("../character-data/CharacterDataUtility"));
var NonDocumentChildNodeUtility_1 = __importDefault(require("../child-node/NonDocumentChildNodeUtility"));
var ChildNodeUtility_1 = __importDefault(require("../child-node/ChildNodeUtility"));
/**
 * Text node.
 */
var Text = /** @class */ (function (_super) {
    __extends(Text, _super);
    /**
     * Constructor.
     *
     * @param [text] Text.
     */
    function Text(text) {
        var _this = _super.call(this) || this;
        _this.nodeType = Node_1.default.TEXT_NODE;
        _this._data = '';
        if (text) {
            _this._data = text;
        }
        return _this;
    }
    Object.defineProperty(Text.prototype, "nodeName", {
        /**
         * Node name.
         *
         * @returns Node name.
         */
        get: function () {
            return '#text';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Text.prototype, "length", {
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
    Object.defineProperty(Text.prototype, "data", {
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
    Object.defineProperty(Text.prototype, "textContent", {
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
    Object.defineProperty(Text.prototype, "nodeValue", {
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
    /**
     * Converts to string.
     *
     * @returns String.
     */
    Text.prototype.toString = function () {
        return '[object Text]';
    };
    Object.defineProperty(Text.prototype, "previousElementSibling", {
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
    Object.defineProperty(Text.prototype, "nextElementSibling", {
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
     * Appends the given DOMString to the CharacterData.data string; when this method returns, data contains the concatenated DOMString.
     *
     * @param data Data.
     */
    Text.prototype.appendData = function (data) {
        CharacterDataUtility_1.default.appendData(this, data);
    };
    /**
     * Removes the specified amount of characters, starting at the specified offset, from the CharacterData.data string; when this method returns, data contains the shortened DOMString.
     *
     * @param offset Offset.
     * @param count Count.
     */
    Text.prototype.deleteData = function (offset, count) {
        CharacterDataUtility_1.default.deleteData(this, offset, count);
    };
    /**
     * Inserts the specified characters, at the specified offset, in the CharacterData.data string; when this method returns, data contains the modified DOMString.
     *
     * @param offset Offset.
     * @param data Data.
     */
    Text.prototype.insertData = function (offset, data) {
        CharacterDataUtility_1.default.insertData(this, offset, data);
    };
    /**
     * Removes the object from its parent children list.
     */
    Text.prototype.remove = function () {
        ChildNodeUtility_1.default.remove(this);
    };
    /**
     * The Node.replaceWith() method replaces this Node in the children list of its parent with a set of Node or DOMString objects.
     *
     * @param nodes List of Node or DOMString.
     */
    Text.prototype.replaceWith = function () {
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
    Text.prototype.before = function () {
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
    Text.prototype.after = function () {
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
    Text.prototype.replaceData = function (offset, count, data) {
        CharacterDataUtility_1.default.replaceData(this, offset, count, data);
    };
    /**
     * Returns a DOMString containing the part of CharacterData.data of the specified length and starting at the specified offset.
     *
     * @param offset Offset.
     * @param count Count.
     */
    Text.prototype.substringData = function (offset, count) {
        return CharacterDataUtility_1.default.substringData(this, offset, count);
    };
    /**
     * Clones a node.
     *
     * @override
     * @param [deep=false] "true" to clone deep.
     * @returns Cloned node.
     */
    Text.prototype.cloneNode = function (deep) {
        if (deep === void 0) { deep = false; }
        var clone = _super.prototype.cloneNode.call(this, deep);
        clone._data = this._data;
        return clone;
    };
    Object.defineProperty(Text.prototype, "wholeText", {
        get: function () {
            var text = [this.textContent];
            var _a = this, previousSibling = _a.previousSibling, nextSibling = _a.nextSibling;
            // iterating previous text nodes
            while (previousSibling) {
                if (previousSibling.nodeType === Node_1.default.TEXT_NODE) {
                    text.unshift(previousSibling.textContent);
                }
                else {
                    break;
                }
                previousSibling = previousSibling.previousSibling;
            }
            // iterating next text nodes
            while (nextSibling) {
                if (nextSibling.nodeType === Node_1.default.TEXT_NODE) {
                    text.push(nextSibling.textContent);
                }
                else {
                    break;
                }
                nextSibling = nextSibling.nextSibling;
            }
            return text.join('');
        },
        enumerable: false,
        configurable: true
    });
    return Text;
}(Node_1.default));
exports.default = Text;
//# sourceMappingURL=Text.js.map