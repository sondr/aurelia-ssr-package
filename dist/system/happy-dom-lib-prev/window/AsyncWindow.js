System.register(["./Window"], function (exports_1, context_1) {
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
    var Window_1, AsyncWindow;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Window_1_1) {
                Window_1 = Window_1_1;
            }
        ],
        execute: function () {
            /**
             * The async Window makes it possible to wait for asyncrounous tasks to complete by calling the method whenAsyncComplete(). It also adds support for the method fetch().
             */
            AsyncWindow = /** @class */ (function (_super) {
                __extends(AsyncWindow, _super);
                /**
                 * Constructor.
                 */
                function AsyncWindow() {
                    var _this = _super.call(this) || this;
                    _this.console.warn('⚠ AsyncWindow has been deprecated in Happy DOM. All the functionality of AsyncWindow has been added to Window, so there is no need to use AsyncWindow. AsyncWindow will be removed in the future.');
                    return _this;
                }
                return AsyncWindow;
            }(Window_1.default));
            exports_1("default", AsyncWindow);
        }
    };
});
