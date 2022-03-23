System.register(["../CSSRule", "../CSSStyleDeclaration", "./CSSKeyframeRule"], function (exports_1, context_1) {
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
    var CSSRule_1, CSSStyleDeclaration_1, CSSKeyframeRule_1, CSS_RULE_REGEXP, CSSKeyframesRule;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (CSSRule_1_1) {
                CSSRule_1 = CSSRule_1_1;
            },
            function (CSSStyleDeclaration_1_1) {
                CSSStyleDeclaration_1 = CSSStyleDeclaration_1_1;
            },
            function (CSSKeyframeRule_1_1) {
                CSSKeyframeRule_1 = CSSKeyframeRule_1_1;
            }
        ],
        execute: function () {
            CSS_RULE_REGEXP = /([^{]+){([^}]+)}/;
            /**
             * CSSRule interface.
             */
            CSSKeyframesRule = /** @class */ (function (_super) {
                __extends(CSSKeyframesRule, _super);
                function CSSKeyframesRule() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.type = CSSRule_1.default.KEYFRAMES_RULE;
                    _this.cssRules = [];
                    _this.name = null;
                    return _this;
                }
                Object.defineProperty(CSSKeyframesRule.prototype, "cssText", {
                    /**
                     * Returns css text.
                     *
                     * @returns CSS text.
                     */
                    get: function () {
                        var cssText = '';
                        for (var _i = 0, _a = this.cssRules; _i < _a.length; _i++) {
                            var cssRule = _a[_i];
                            cssText += cssRule.cssText + ' ';
                        }
                        return "@keyframes ".concat(this.name, " { ").concat(cssText, "}");
                    },
                    enumerable: false,
                    configurable: true
                });
                /**
                 * Appends a rule.
                 *
                 * @param rule Rule. E.g. "0% { transform: rotate(360deg); }".
                 */
                CSSKeyframesRule.prototype.appendRule = function (rule) {
                    var match = rule.match(CSS_RULE_REGEXP);
                    if (match) {
                        var cssRule = new CSSKeyframeRule_1.default();
                        var style = new CSSStyleDeclaration_1.default();
                        cssRule.parentRule = this;
                        cssRule.keyText = match[1].trim();
                        style.cssText = match[2].trim();
                        style.parentRule = this;
                        cssRule.style = style;
                    }
                };
                /**
                 * Removes a rule.
                 *
                 * @param rule Rule. E.g. "0%".
                 */
                CSSKeyframesRule.prototype.deleteRule = function (rule) {
                    for (var i = 0, max = this.cssRules.length; i < max; i++) {
                        if (this.cssRules[i].keyText === rule) {
                            this.cssRules.splice(i, 1);
                            break;
                        }
                    }
                };
                return CSSKeyframesRule;
            }(CSSRule_1.default));
            exports_1("default", CSSKeyframesRule);
        }
    };
});
