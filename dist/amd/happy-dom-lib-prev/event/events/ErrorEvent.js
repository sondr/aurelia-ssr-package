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
    var ErrorEvent = /** @class */ (function (_super) {
        __extends(ErrorEvent, _super);
        /**
         * Constructor.
         *
         * @param type Event type.
         * @param [eventInit] Event init.
         */
        function ErrorEvent(type, eventInit) {
            if (eventInit === void 0) { eventInit = null; }
            var _this = _super.call(this, type, eventInit) || this;
            _this.message = '';
            _this.filename = '';
            _this.lineno = 0;
            _this.colno = 0;
            _this.error = null;
            if (eventInit) {
                _this.message = eventInit.message || '';
                _this.filename = eventInit.filename || '';
                _this.lineno = eventInit.lineno !== undefined ? eventInit.lineno : 0;
                _this.colno = eventInit.colno !== undefined ? eventInit.colno : 0;
                _this.error = eventInit.error || null;
            }
            return _this;
        }
        return ErrorEvent;
    }(UIEvent_1.default));
    exports.default = ErrorEvent;
});
//# sourceMappingURL=ErrorEvent.js.map