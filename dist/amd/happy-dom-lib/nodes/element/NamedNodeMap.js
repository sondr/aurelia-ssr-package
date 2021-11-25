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
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     *
     */
    var NamedNodeMap = /** @class */ (function (_super) {
        __extends(NamedNodeMap, _super);
        /**
         * Adds class names.
         *
         * @param ownerElement Owner element.
         */
        function NamedNodeMap(ownerElement) {
            var _this = _super.call(this) || this;
            _this._ownerElement = ownerElement;
            return _this;
        }
        NamedNodeMap.prototype.getNamedItem = function (name) {
            return this._ownerElement.getAttributeNode(name);
        };
        NamedNodeMap.prototype.getNamedItemNS = function (namespace, name) {
            return this._ownerElement.getAttributeNodeNS(namespace, name);
        };
        NamedNodeMap.prototype.setNamedItem = function (attr) {
            return this._ownerElement.setAttributeNode(attr);
        };
        NamedNodeMap.prototype.setNamedItemNS = function (attr) {
            return this._ownerElement.setAttributeNodeNS(attr);
        };
        NamedNodeMap.prototype.removeNamedItem = function (name) {
            var attr = this.getNamedItem(name);
            if (attr != null) {
                this._ownerElement.removeAttributeNode(attr);
            }
            return attr;
        };
        NamedNodeMap.prototype.removeNamedItemNS = function (namespace, name) {
            var attr = this.getNamedItemNS(namespace, name);
            if (attr != null) {
                this._ownerElement.removeAttributeNodeNS(attr);
            }
            return attr;
        };
        return NamedNodeMap;
    }(Array));
    exports.default = NamedNodeMap;
});
