"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SVGRect_1 = require("./SVGRect");
/**
 * Rect object.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/SVGAnimatedRect
 */
var SVGAnimatedRect = /** @class */ (function () {
    function SVGAnimatedRect() {
        this.baseVal = new SVGRect_1.default();
        this.animVal = new SVGRect_1.default();
    }
    return SVGAnimatedRect;
}());
exports.default = SVGAnimatedRect;
