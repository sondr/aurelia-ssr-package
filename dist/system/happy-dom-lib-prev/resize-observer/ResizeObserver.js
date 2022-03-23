System.register([], function (exports_1, context_1) {
    "use strict";
    var ResizeObserver;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            /**
             * The ResizeObserver interface reports changes to the dimensions of an Element's content or border box, or the bounding box of an SVGElement.
             *
             * @see https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver
             */
            ResizeObserver = /** @class */ (function () {
                function ResizeObserver() {
                }
                /**
                 * Starts observing.
                 *
                 * Not implemented.
                 */
                ResizeObserver.prototype.observe = function () {
                    // TODO: Not implemented
                };
                /**
                 * Stops observing.
                 *
                 * Not implemented.
                 */
                ResizeObserver.prototype.unobserve = function () {
                    // TODO: Not implemented
                };
                /**
                 * Disconnects.
                 *
                 * Not implemented.
                 */
                ResizeObserver.prototype.disconnect = function () {
                    // TODO: Not implemented
                };
                return ResizeObserver;
            }());
            exports_1("default", ResizeObserver);
        }
    };
});
//# sourceMappingURL=ResizeObserver.js.map