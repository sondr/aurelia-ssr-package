System.register(["../UIEvent"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            if (typeof b !== "function" && b !== null)
                throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var UIEvent_1, WheelEvent;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (UIEvent_1_1) {
                UIEvent_1 = UIEvent_1_1;
            }
        ],
        execute: function () {
            WheelEvent = /** @class */ (function (_super) {
                __extends(WheelEvent, _super);
                /**
                 * Constructor.
                 *
                 * @param type Event type.
                 * @param [eventInit] Event init.
                 */
                function WheelEvent(type, eventInit) {
                    if (eventInit === void 0) { eventInit = null; }
                    var _this = _super.call(this, type, eventInit) || this;
                    _this.deltaX = 0;
                    _this.deltaY = 0;
                    _this.deltaZ = 0;
                    _this.deltaMode = 0;
                    if (eventInit) {
                        _this.deltaX = eventInit.deltaX !== undefined ? eventInit.deltaX : 0;
                        _this.deltaY = eventInit.deltaY !== undefined ? eventInit.deltaY : 0;
                        _this.deltaZ = eventInit.deltaZ !== undefined ? eventInit.deltaZ : 0;
                        _this.deltaMode = eventInit.deltaMode !== undefined ? eventInit.deltaMode : 0;
                    }
                    return _this;
                }
                WheelEvent.DOM_DELTA_PIXEL = 0;
                WheelEvent.DOM_DELTA_LINE = 1;
                WheelEvent.DOM_DELTA_PAGE = 2;
                return WheelEvent;
            }(UIEvent_1.default));
            exports_1("default", WheelEvent);
        }
    };
});
//# sourceMappingURL=WheelEvent.js.map