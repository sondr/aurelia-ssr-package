System.register([], function (exports_1, context_1) {
    "use strict";
    var SVGRect;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            /**
             * Rect object.
             *
             * @see https://developer.mozilla.org/en-US/docs/Web/API/SVGRect
             */
            SVGRect = /** @class */ (function () {
                function SVGRect() {
                    this.x = 0;
                    this.y = 0;
                    this.width = 0;
                    this.height = 0;
                }
                return SVGRect;
            }());
            exports_1("default", SVGRect);
        }
    };
});
