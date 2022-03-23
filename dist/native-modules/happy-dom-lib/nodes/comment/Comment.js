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
import Node from '../node/Node';
import CharacterData from '../character-data/CharacterData';
/**
 * Comment node.
 */
var Comment = /** @class */ (function (_super) {
    __extends(Comment, _super);
    function Comment() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nodeType = Node.COMMENT_NODE;
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
    /**
     * Converts to string.
     *
     * @returns String.
     */
    Comment.prototype.toString = function () {
        return '[object Comment]';
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
        return _super.prototype.cloneNode.call(this, deep);
    };
    return Comment;
}(CharacterData));
export default Comment;
