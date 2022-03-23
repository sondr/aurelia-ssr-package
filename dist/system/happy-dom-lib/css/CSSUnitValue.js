System.register(["./CSSUnits"], function (exports_1, context_1) {
    "use strict";
    var CSSUnits_1, CSSUnitValue;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (CSSUnits_1_1) {
                CSSUnits_1 = CSSUnits_1_1;
            }
        ],
        execute: function () {
            /**
             * CSS unit value.
             */
            CSSUnitValue = /** @class */ (function () {
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
            exports_1("default", CSSUnitValue);
        }
    };
});
//# sourceMappingURL=CSSUnitValue.js.map