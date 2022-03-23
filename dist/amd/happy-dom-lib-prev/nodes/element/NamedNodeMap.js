define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     *
     */
    var NamedNodeMap = /** @class */ (function () {
        /**
         * Adds class names.
         *
         * @param ownerElement Owner element.
         */
        function NamedNodeMap(ownerElement) {
            this.length = 0;
            this._ownerElement = ownerElement;
            var attributes = this._ownerElement._attributes;
            Object.assign(this, attributes);
            // sets this.length as well as attributes array
            Array.prototype.push.apply(this, Object.values(attributes));
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
    }());
    exports.default = NamedNodeMap;
});
//# sourceMappingURL=NamedNodeMap.js.map