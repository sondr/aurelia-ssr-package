System.register([], function (exports_1, context_1) {
    "use strict";
    var SVGAngle;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            SVGAngle = /** @class */ (function () {
                /**
                 * SVG angle.
                 *
                 * @see https://developer.mozilla.org/en-US/docs/Web/API/SVGAngle
                 */
                function SVGAngle() {
                    this.unitType = '';
                    this.value = 0;
                    this.valueInSpecifiedUnits = 0;
                    this.valueAsString = '';
                }
                /**
                 * New value specific units.
                 */
                SVGAngle.prototype.newValueSpecifiedUnits = function () { };
                /**
                 * Convert to specific units.
                 */
                SVGAngle.prototype.convertToSpecifiedUnits = function () { };
                SVGAngle.SVG_ANGLETYPE_UNKNOWN = 'unknown';
                SVGAngle.SVG_ANGLETYPE_UNSPECIFIED = 'unspecified';
                SVGAngle.SVG_ANGLETYPE_DEG = '0deg';
                SVGAngle.SVG_ANGLETYPE_RAD = '0rad';
                SVGAngle.SVG_ANGLETYPE_GRAD = '0grad';
                return SVGAngle;
            }());
            exports_1("default", SVGAngle);
        }
    };
});
