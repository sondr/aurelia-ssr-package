System.register(["../Event"], function (exports_1, context_1) {
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
    var Event_1, CustomEvent;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Event_1_1) {
                Event_1 = Event_1_1;
            }
        ],
        execute: function () {
            /**
             *
             */
            CustomEvent = /** @class */ (function (_super) {
                __extends(CustomEvent, _super);
                /**
                 * Constructor.
                 *
                 * @param type Event type.
                 * @param [eventInit] Event init.
                 */
                function CustomEvent(type, eventInit) {
                    if (eventInit === void 0) { eventInit = null; }
                    var _this = _super.call(this, type, eventInit) || this;
                    _this.detail = null;
                    if (eventInit) {
                        _this.detail = eventInit.detail || null;
                    }
                    return _this;
                }
                return CustomEvent;
            }(Event_1.default));
            exports_1("default", CustomEvent);
        }
    };
});
//# sourceMappingURL=CustomEvent.js.map