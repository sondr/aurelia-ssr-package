System.register(["./SVGRect"], function (exports_1, context_1) {
    "use strict";
    var SVGRect_1, SVGAnimatedRect;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (SVGRect_1_1) {
                SVGRect_1 = SVGRect_1_1;
            }
        ],
        execute: function () {
            /**
             * Rect object.
             *
             * @see https://developer.mozilla.org/en-US/docs/Web/API/SVGAnimatedRect
             */
            SVGAnimatedRect = /** @class */ (function () {
                function SVGAnimatedRect() {
                    this.baseVal = new SVGRect_1.default();
                    this.animVal = new SVGRect_1.default();
                }
                return SVGAnimatedRect;
            }());
            exports_1("default", SVGAnimatedRect);
        }
    };
});
