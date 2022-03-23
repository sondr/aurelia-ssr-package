System.register([], function (exports_1, context_1) {
    "use strict";
    var SVGPoint;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            /**
             * SVG point.
             *
             * @see https://developer.mozilla.org/en-US/docs/Web/API/SVGPoint
             */
            SVGPoint = /** @class */ (function () {
                function SVGPoint() {
                    this.x = 0;
                    this.y = 0;
                }
                return SVGPoint;
            }());
            exports_1("default", SVGPoint);
        }
    };
});
