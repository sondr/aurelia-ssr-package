System.register(["../element/Element"], function (exports_1, context_1) {
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
    var Element_1, SVGElement;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Element_1_1) {
                Element_1 = Element_1_1;
            }
        ],
        execute: function () {
            /**
             * SVG Element.
             *
             * Reference:
             * https://developer.mozilla.org/en-US/docs/Web/API/SVGElement.
             */
            SVGElement = /** @class */ (function (_super) {
                __extends(SVGElement, _super);
                function SVGElement() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                Object.defineProperty(SVGElement.prototype, "viewportElement", {
                    /**
                     * Returns viewport.
                     *
                     * @returns SVG rect.
                     */
                    get: function () {
                        return null;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(SVGElement.prototype, "ownerSVGElement", {
                    /**
                     * Returns current translate.
                     *
                     * @returns Element.
                     */
                    get: function () {
                        var parent = this.parentNode;
                        while (parent) {
                            if (parent['tagName'] === 'SVG') {
                                return parent;
                            }
                        }
                        return null;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(SVGElement.prototype, "dataset", {
                    /**
                     * Returns data set.
                     *
                     * @returns Data set.
                     */
                    get: function () {
                        var dataset = {};
                        for (var _i = 0, _a = Object.keys(this._attributes); _i < _a.length; _i++) {
                            var name_1 = _a[_i];
                            if (name_1.startsWith('data-')) {
                                dataset[name_1.replace('data-', '')] = this._attributes[name_1].value;
                            }
                        }
                        return dataset;
                    },
                    enumerable: false,
                    configurable: true
                });
                return SVGElement;
            }(Element_1.default));
            exports_1("default", SVGElement);
        }
    };
});
