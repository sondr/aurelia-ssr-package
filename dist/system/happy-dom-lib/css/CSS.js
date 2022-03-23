System.register(["./CSSUnitValue", "./CSSUnits", "css.escape"], function (exports_1, context_1) {
    "use strict";
    var CSSUnitValue_1, CSSUnits_1, css_escape_1, CSS;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (CSSUnitValue_1_1) {
                CSSUnitValue_1 = CSSUnitValue_1_1;
            },
            function (CSSUnits_1_1) {
                CSSUnits_1 = CSSUnits_1_1;
            },
            function (css_escape_1_1) {
                css_escape_1 = css_escape_1_1;
            }
        ],
        execute: function () {
            /**
             * The CSS interface holds useful CSS-related methods.
             *
             * Reference:
             * https://developer.mozilla.org/en-US/docs/Web/API/CSS.
             */
            CSS = /** @class */ (function () {
                /**
                 * Constructor.
                 */
                function CSS() {
                    var _loop_1 = function (unit) {
                        this_1[unit] = function (value) { return new CSSUnitValue_1.default(value, unit); };
                    };
                    var this_1 = this;
                    for (var _i = 0, CSSUnits_2 = CSSUnits_1.default; _i < CSSUnits_2.length; _i++) {
                        var unit = CSSUnits_2[_i];
                        _loop_1(unit);
                    }
                }
                /**
                 * Returns a Boolean indicating if the pair property-value, or the condition, given in parameter is supported.
                 *
                 * TODO: Always returns "true" for now, but it should probably be improved in the future.
                 *
                 * @param _condition Property name or condition.
                 * @param [_value] Value when using property name.
                 * @returns "true" if supported.
                 */
                CSS.prototype.supports = function (_condition, _value) {
                    return true;
                };
                /**
                 * Escapes a value.
                 *
                 * @param value Value to escape.
                 * @returns Escaped string.
                 */
                CSS.prototype.escape = function (value) {
                    return css_escape_1.default(value);
                };
                return CSS;
            }());
            exports_1("default", CSS);
        }
    };
});
