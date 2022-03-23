System.register([], function (exports_1, context_1) {
    "use strict";
    var Attr;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            /**
             * Attribute node interface.
             *
             * Reference: https://developer.mozilla.org/en-US/docs/Web/API/Attr.
             */
            Attr = /** @class */ (function () {
                function Attr() {
                    this.value = null;
                    this.name = null;
                    this.namespaceURI = null;
                    /**
                     * @deprecated
                     */
                    this.ownerElement = null;
                    /**
                     * @deprecated
                     */
                    this.ownerDocument = null;
                    /**
                     * @deprecated
                     */
                    this.specified = true;
                }
                Object.defineProperty(Attr.prototype, "localName", {
                    /**
                     * Returns local name.
                     *
                     * @returns Local name.
                     */
                    get: function () {
                        return this.name ? this.name.split(':').reverse()[0] : null;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Attr.prototype, "prefix", {
                    /**
                     * Returns prefix.
                     *
                     * @returns Prefix.
                     */
                    get: function () {
                        return this.name ? this.name.split(':')[0] : null;
                    },
                    enumerable: false,
                    configurable: true
                });
                return Attr;
            }());
            exports_1("default", Attr);
        }
    };
});
