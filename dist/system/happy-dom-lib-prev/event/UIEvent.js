System.register(["./Event"], function (exports_1, context_1) {
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
    var Event_1, UIEvent;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Event_1_1) {
                Event_1 = Event_1_1;
            }
        ],
        execute: function () {
            UIEvent = /** @class */ (function (_super) {
                __extends(UIEvent, _super);
                /**
                 * Constructor.
                 *
                 * @param type Event type.
                 * @param [eventInit] Event init.
                 */
                function UIEvent(type, eventInit) {
                    if (eventInit === void 0) { eventInit = null; }
                    var _this = _super.call(this, type, eventInit) || this;
                    _this.detail = 0;
                    _this.layerX = 0;
                    _this.layerY = 0;
                    _this.pageX = 0;
                    _this.pageY = 0;
                    _this.view = null;
                    if (eventInit) {
                        _this.detail = eventInit.detail !== undefined ? eventInit.detail : 0;
                        _this.view = eventInit.view || null;
                    }
                    return _this;
                }
                /**
                 * Init event.
                 *
                 * @deprecated
                 * @param type Type.
                 * @param [bubbles=false] "true" if it bubbles.
                 * @param [cancelable=false] "true" if it cancelable.
                 */
                UIEvent.prototype.initEvent = function (type, bubbles, cancelable) {
                    if (bubbles === void 0) { bubbles = false; }
                    if (cancelable === void 0) { cancelable = false; }
                    this.type = type;
                    this.bubbles = bubbles;
                    this.cancelable = cancelable;
                };
                /**
                 * Prevents default.
                 */
                UIEvent.prototype.preventDefault = function () {
                    this.defaultPrevented = true;
                };
                /**
                 * Stops immediate propagation.
                 */
                UIEvent.prototype.stopImmediatePropagation = function () {
                    this._immediatePropagationStopped = true;
                };
                /**
                 * Stops propagation.
                 */
                UIEvent.prototype.stopPropagation = function () {
                    this._propagationStopped = true;
                };
                UIEvent.NONE = 0;
                UIEvent.CAPTURING_PHASE = 1;
                UIEvent.AT_TARGET = 2;
                UIEvent.BUBBLING_PHASE = 3;
                return UIEvent;
            }(Event_1.default));
            exports_1("default", UIEvent);
        }
    };
});
