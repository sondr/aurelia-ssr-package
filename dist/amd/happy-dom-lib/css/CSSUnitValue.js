define(["require", "exports", "./CSSUnits"], function (require, exports, CSSUnits_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
            if (!CSSUnits_1.default.includes(unit)) {
                throw new TypeError('Invalid unit: ' + unit);
            }
            this.value = value;
            this.unit = unit;
        }
        return CSSUnitValue;
    }());
    exports.default = CSSUnitValue;
});
