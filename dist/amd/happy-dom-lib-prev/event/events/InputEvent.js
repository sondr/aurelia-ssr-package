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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "../UIEvent"], function (require, exports, UIEvent_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    UIEvent_1 = __importDefault(UIEvent_1);
    /**
     *
     */
    var InputEvent = /** @class */ (function (_super) {
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
    exports.default = InputEvent;
});
//# sourceMappingURL=InputEvent.js.map