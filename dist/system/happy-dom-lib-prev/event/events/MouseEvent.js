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
    var UIEvent_1, MouseEvent;
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
            MouseEvent = /** @class */ (function (_super) {
                __extends(MouseEvent, _super);
                /**
                 * Constructor.
                 *
                 * @param type Event type.
                 * @param [eventInit] Event init.
                 */
                function MouseEvent(type, eventInit) {
                    if (eventInit === void 0) { eventInit = null; }
                    var _this = _super.call(this, type, eventInit) || this;
                    _this.altKey = false;
                    _this.button = 0;
                    _this.buttons = 0;
                    _this.clientX = 0;
                    _this.clientY = 0;
                    _this.ctrlKey = false;
                    _this.metaKey = false;
                    _this.movementX = 0;
                    _this.movementY = 0;
                    _this.offsetX = 0;
                    _this.offsetY = 0;
                    _this.region = '';
                    _this.relatedTarget = null;
                    _this.screenX = 0;
                    _this.screenY = 0;
                    _this.shiftKey = false;
                    if (eventInit) {
                        _this.altKey = eventInit.altKey || false;
                        _this.button = eventInit.button !== undefined ? eventInit.button : 0;
                        _this.buttons = eventInit.buttons !== undefined ? eventInit.buttons : 0;
                        _this.clientX = eventInit.clientX !== undefined ? eventInit.clientX : 0;
                        _this.clientY = eventInit.clientY !== undefined ? eventInit.clientY : 0;
                        _this.ctrlKey = eventInit.ctrlKey || false;
                        _this.metaKey = eventInit.metaKey || false;
                        _this.region = eventInit.region || '';
                        _this.relatedTarget = eventInit.relatedTarget || null;
                        _this.screenX = eventInit.screenX !== undefined ? eventInit.screenX : 0;
                        _this.screenY = eventInit.screenY !== undefined ? eventInit.screenY : 0;
                        _this.shiftKey = eventInit.shiftKey || false;
                    }
                    return _this;
                }
                return MouseEvent;
            }(UIEvent_1.default));
            exports_1("default", MouseEvent);
        }
    };
});
