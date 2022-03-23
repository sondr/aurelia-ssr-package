import CSSUnits from './CSSUnits';
/**
 * CSS unit value.
 */
var CSSUnitValue = /** @class */ (function () {
    /**
     * Constructor.
     *
     * @param value Value.
     * @param unit Unit.
     */
    function CSSUnitValue(value, unit) {
        this.unit = null;
        this.value = null;
        if (typeof value !== 'number') {
            throw new TypeError('The provided double value is non-finite');
        }
        if (!CSSUnits.includes(unit)) {
            throw new TypeError('Invalid unit: ' + unit);
        }
        this.value = value;
        this.unit = unit;
    }
    return CSSUnitValue;
}());
export default CSSUnitValue;
//# sourceMappingURL=CSSUnitValue.js.map