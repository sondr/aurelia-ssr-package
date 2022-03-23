import CSSUnitValue from './CSSUnitValue';
import CSSUnits from './CSSUnits';
import CSSEscape from 'css.escape';
/**
 * The CSS interface holds useful CSS-related methods.
 *
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/CSS.
 */
var CSS = /** @class */ (function () {
    /**
     * Constructor.
     */
    function CSS() {
        var _loop_1 = function (unit) {
            this_1[unit] = function (value) { return new CSSUnitValue(value, unit); };
        };
        var this_1 = this;
        for (var _i = 0, CSSUnits_1 = CSSUnits; _i < CSSUnits_1.length; _i++) {
            var unit = CSSUnits_1[_i];
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
        return CSSEscape(value);
    };
    return CSS;
}());
export default CSS;
//# sourceMappingURL=CSS.js.map