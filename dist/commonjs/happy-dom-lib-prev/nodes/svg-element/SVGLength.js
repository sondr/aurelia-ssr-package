"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * SVG length.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/SVGLength
 */
var SVGLength = /** @class */ (function () {
    function SVGLength() {
        this.unitType = '';
        this.value = 0;
        this.valueInSpecifiedUnits = 0;
        this.valueAsString = '';
    }
    /**
     * New value specific units.
     */
    SVGLength.prototype.newValueSpecifiedUnits = function () { };
    /**
     * Convert to specific units.
     */
    SVGLength.prototype.convertToSpecifiedUnits = function () { };
    SVGLength.SVG_LENGTHTYPE_UNKNOWN = 0;
    SVGLength.SVG_LENGTHTYPE_NUMBER = 1;
    SVGLength.SVG_LENGTHTYPE_PERCENTAGE = 2;
    SVGLength.SVG_LENGTHTYPE_EMS = 3;
    SVGLength.SVG_LENGTHTYPE_EXS = 4;
    SVGLength.SVG_LENGTHTYPE_PX = 5;
    SVGLength.SVG_LENGTHTYPE_CM = 6;
    SVGLength.SVG_LENGTHTYPE_MM = 7;
    SVGLength.SVG_LENGTHTYPE_IN = 8;
    SVGLength.SVG_LENGTHTYPE_PT = 9;
    SVGLength.SVG_LENGTHTYPE_PC = 10;
    return SVGLength;
}());
exports.default = SVGLength;
//# sourceMappingURL=SVGLength.js.map