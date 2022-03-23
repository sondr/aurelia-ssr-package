define(["require", "exports", "./SVGRect"], function (require, exports, SVGRect_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
});
