System.register(["../CSSRule"], function (exports_1, context_1) {
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
    var CSSRule_1, CSSKeyframeRule;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (CSSRule_1_1) {
                CSSRule_1 = CSSRule_1_1;
            }
        ],
        execute: function () {
            /**
             * CSSRule interface.
             */
            CSSKeyframeRule = /** @class */ (function (_super) {
                __extends(CSSKeyframeRule, _super);
                function CSSKeyframeRule() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.type = CSSRule_1.default.KEYFRAME_RULE;
                    return _this;
                }
                Object.defineProperty(CSSKeyframeRule.prototype, "cssText", {
                    /**
                     * Returns css text.
                     *
                     * @returns CSS text.
                     */
                    get: function () {
                        return this.keyText + " { " + this.style.cssText + " }";
                    },
                    enumerable: false,
                    configurable: true
                });
                return CSSKeyframeRule;
            }(CSSRule_1.default));
            exports_1("default", CSSKeyframeRule);
        }
    };
});
