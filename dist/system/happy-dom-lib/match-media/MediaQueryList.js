System.register(["../event/EventTarget"], function (exports_1, context_1) {
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
    var EventTarget_1, MediaQueryList;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (EventTarget_1_1) {
                EventTarget_1 = EventTarget_1_1;
            }
        ],
        execute: function () {
            /**
             * Media Query List.
             *
             * Reference:
             * https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList.
             */
            MediaQueryList = /** @class */ (function (_super) {
                __extends(MediaQueryList, _super);
                function MediaQueryList() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this._matches = false;
                    _this._media = '';
                    _this.onchange = null;
                    return _this;
                }
                Object.defineProperty(MediaQueryList.prototype, "matches", {
                    /**
                     * Returns "true" if the document matches.
                     *
                     * @returns Matches.
                     */
                    get: function () {
                        return this._matches;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(MediaQueryList.prototype, "media", {
                    /**
                     * Returns the serialized media query.
                     *
                     * @returns Serialized media query.
                     */
                    get: function () {
                        return this._media;
                    },
                    enumerable: false,
                    configurable: true
                });
                /**
                 * Adds a listener.
                 *
                 * @deprecated
                 * @param callback Callback.
                 */
                MediaQueryList.prototype.addListener = function (callback) {
                    this.addEventListener('change', callback);
                };
                /**
                 * Removes listener.
                 *
                 * @deprecated
                 * @param callback Callback.
                 */
                MediaQueryList.prototype.removeListener = function (callback) {
                    this.removeEventListener('change', callback);
                };
                return MediaQueryList;
            }(EventTarget_1.default));
            exports_1("default", MediaQueryList);
        }
    };
});
