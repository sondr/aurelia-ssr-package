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
    var Event_1, StorageEvent;
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
            StorageEvent = /** @class */ (function (_super) {
                __extends(StorageEvent, _super);
                /**
                 * Constructor.
                 *
                 * @param type Event type.
                 * @param [eventInit] Event init.
                 */
                function StorageEvent(type, eventInit) {
                    if (eventInit === void 0) { eventInit = null; }
                    var _this = _super.call(this, type) || this;
                    _this.key = null;
                    _this.newValue = null;
                    _this.oldValue = null;
                    _this.storageArea = null;
                    if (eventInit) {
                        _this.key = eventInit.key !== undefined ? eventInit.key : null;
                        _this.newValue = eventInit.newValue !== undefined ? eventInit.newValue : null;
                        _this.oldValue = eventInit.oldValue !== undefined ? eventInit.oldValue : null;
                        _this.storageArea = eventInit.storageArea !== undefined ? eventInit.storageArea : null;
                    }
                    return _this;
                }
                return StorageEvent;
            }(Event_1.default));
            exports_1("default", StorageEvent);
        }
    };
});
