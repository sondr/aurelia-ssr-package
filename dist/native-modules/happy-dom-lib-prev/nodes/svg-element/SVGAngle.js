/**
 * SVG angle.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/SVGAngle
 */
var SVGAngle = /** @class */ (function () {
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
export default SVGAngle;
//# sourceMappingURL=SVGAngle.js.map