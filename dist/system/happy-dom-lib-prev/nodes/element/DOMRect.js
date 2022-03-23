System.register([], function (exports_1, context_1) {
    "use strict";
    var DOMRect;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            /**
             * Bounding rect object.
             *
             * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMRect
             */
            DOMRect = /** @class */ (function () {
                function DOMRect() {
                    this.x = 0;
                    this.y = 0;
                    this.width = 0;
                    this.height = 0;
                    this.top = 0;
                    this.right = 0;
                    this.bottom = 0;
                    this.left = 0;
                }
                return DOMRect;
            }());
            exports_1("default", DOMRect);
        }
    };
});
//# sourceMappingURL=DOMRect.js.map