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
    var UIEvent_1, InputEvent;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (UIEvent_1_1) {
                UIEvent_1 = UIEvent_1_1;
            }
        ],
        execute: function () {
            /**
             *
             */
            InputEvent = /** @class */ (function (_super) {
                __extends(InputEvent, _super);
                /**
                 * Constructor.
                 *
                 * @param type Event type.
                 * @param [eventInit] Event init.
                 */
                function InputEvent(type, eventInit) {
                    if (eventInit === void 0) { eventInit = null; }
                    var _this = _super.call(this, type, eventInit) || this;
                    _this.data = '';
                    _this.dataTransfer = null;
                    _this.inputType = '';
                    _this.isComposing = false;
                    if (eventInit) {
                        _this.data = eventInit.data || '';
                        _this.dataTransfer = eventInit.dataTransfer || null;
                        _this.inputType = eventInit.inputType || '';
                        _this.isComposing = eventInit.isComposing || false;
                    }
                    return _this;
                }
                return InputEvent;
            }(UIEvent_1.default));
            exports_1("default", InputEvent);
        }
    };
});
//# sourceMappingURL=InputEvent.js.map