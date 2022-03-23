System.register(["../html-element/HTMLElement"], function (exports_1, context_1) {
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
    var HTMLElement_1, HTMLMetaElement;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (HTMLElement_1_1) {
                HTMLElement_1 = HTMLElement_1_1;
            }
        ],
        execute: function () {
            /**
             * HTML Meta Element.
             *
             * Reference:
             * https://developer.mozilla.org/en-US/docs/Web/API/HTMLMetaElement.
             */
            HTMLMetaElement = /** @class */ (function (_super) {
                __extends(HTMLMetaElement, _super);
                function HTMLMetaElement() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                Object.defineProperty(HTMLMetaElement.prototype, "content", {
                    /**
                     * Returns content.
                     *
                     * @returns Content.
                     */
                    get: function () {
                        return this.getAttributeNS(null, 'content') || '';
                    },
                    /**
                     * Sets content.
                     *
                     * @param content Content.
                     */
                    set: function (content) {
                        this.setAttributeNS(null, 'content', content);
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(HTMLMetaElement.prototype, "httpEquiv", {
                    /**
                     * Returns httpEquiv.
                     *
                     * @returns HttpEquiv.
                     */
                    get: function () {
                        return this.getAttributeNS(null, 'http-equiv') || '';
                    },
                    /**
                     * Sets httpEquiv.
                     *
                     * @param httpEquiv HttpEquiv.
                     */
                    set: function (httpEquiv) {
                        this.setAttributeNS(null, 'http-equiv', httpEquiv);
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(HTMLMetaElement.prototype, "name", {
                    /**
                     * Returns name.
                     *
                     * @returns Name.
                     */
                    get: function () {
                        return this.getAttributeNS(null, 'name') || '';
                    },
                    /**
                     * Sets name.
                     *
                     * @param name Name.
                     */
                    set: function (name) {
                        this.setAttributeNS(null, 'name', name);
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(HTMLMetaElement.prototype, "scheme", {
                    /**
                     * Returns scheme.
                     *
                     * @returns Name.
                     */
                    get: function () {
                        return this.getAttributeNS(null, 'scheme') || '';
                    },
                    /**
                     * Sets scheme.
                     *
                     * @param scheme Scheme.
                     */
                    set: function (scheme) {
                        this.setAttributeNS(null, 'scheme', scheme);
                    },
                    enumerable: false,
                    configurable: true
                });
                return HTMLMetaElement;
            }(HTMLElement_1.default));
            exports_1("default", HTMLMetaElement);
        }
    };
});
