System.register([], function (exports_1, context_1) {
    "use strict";
    var DOMMatrix;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            /**
             * DOM Matrix.
             *
             * TODO: Not fully implemented.
             *
             * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMMatrix
             */
            DOMMatrix = /** @class */ (function () {
                function DOMMatrix() {
                    this.is2D = false;
                    this.isIdentity = false;
                }
                return DOMMatrix;
            }());
            exports_1("default", DOMMatrix);
        }
    };
});
//# sourceMappingURL=DOMMatrix.js.map