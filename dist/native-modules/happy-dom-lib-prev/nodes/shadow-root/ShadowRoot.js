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
import DocumentFragment from '../document-fragment/DocumentFragment';
import XMLParser from '../../xml-parser/XMLParser';
import XMLSerializer from '../../xml-serializer/XMLSerializer';
/**
 * ShadowRoot.
 */
var ShadowRoot = /** @class */ (function (_super) {
    __extends(ShadowRoot, _super);
    function ShadowRoot() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mode = 'open';
        _this.host = null;
        _this.adoptedStyleSheets = [];
        return _this;
    }
    Object.defineProperty(ShadowRoot.prototype, "innerHTML", {
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
    /**
     * Converts to string.
     *
     * @returns String.
     */
    ShadowRoot.prototype.toString = function () {
        return this.innerHTML;
    };
    /**
     * Clones a node.
     *
     * @override
     * @param [deep=false] "true" to clone deep.
     * @returns Cloned node.
     */
    ShadowRoot.prototype.cloneNode = function (deep) {
        if (deep === void 0) { deep = false; }
        var clone = _super.prototype.cloneNode.call(this, deep);
        clone.mode = this.mode;
        return clone;
    };
    return ShadowRoot;
}(DocumentFragment));
export default ShadowRoot;
//# sourceMappingURL=ShadowRoot.js.map