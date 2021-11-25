System.register([], function (exports_1, context_1) {
    "use strict";
    var NamedNodeMap;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            /**
             *
             */
            NamedNodeMap = /** @class */ (function () {
                /**
                 * Adds class names.
                 *
                 * @param ownerElement Owner element.
                 */
                function NamedNodeMap(ownerElement) {
                    this._ownerElement = ownerElement;
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
                Object.defineProperty(NamedNodeMap.prototype, "length", {
                    get: function () {
                        return Object.keys(this._ownerElement._attributes).length;
                    },
                    enumerable: false,
                    configurable: true
                });
                return NamedNodeMap;
            }());
            exports_1("default", NamedNodeMap);
        }
    };
});
