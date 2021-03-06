System.register(["../CSSRule", "../MediaList"], function (exports_1, context_1) {
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
    var CSSRule_1, MediaList_1, CSSMediaRule;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (CSSRule_1_1) {
                CSSRule_1 = CSSRule_1_1;
            },
            function (MediaList_1_1) {
                MediaList_1 = MediaList_1_1;
            }
        ],
        execute: function () {
            /**
             * CSSRule interface.
             */
            CSSMediaRule = /** @class */ (function (_super) {
                __extends(CSSMediaRule, _super);
                function CSSMediaRule() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.type = CSSRule_1.default.MEDIA_RULE;
                    _this.cssRules = [];
                    _this.media = new MediaList_1.default();
                    return _this;
                }
                Object.defineProperty(CSSMediaRule.prototype, "cssText", {
                    /**
                     * Returns css text.
                     *
                     * @returns CSS text.
                     */
                    get: function () {
                        var cssText = '';
                        for (var _i = 0, _a = this.cssRules; _i < _a.length; _i++) {
                            var cssRule = _a[_i];
                            cssText += cssRule.cssText;
                        }
                        return "@media ".concat(this.conditionalText, " { ").concat(cssText, " }");
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(CSSMediaRule.prototype, "conditionalText", {
                    /**
                     * Returns conditional text.
                     *
                     * @returns Conditional text.
                     */
                    get: function () {
                        return this.media.mediaText;
                    },
                    enumerable: false,
                    configurable: true
                });
                return CSSMediaRule;
            }(CSSRule_1.default));
            exports_1("default", CSSMediaRule);
        }
    };
});
//# sourceMappingURL=CSSMediaRule.js.map