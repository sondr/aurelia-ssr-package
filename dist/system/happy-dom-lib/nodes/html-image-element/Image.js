System.register(["./HTMLImageElement"], function (exports_1, context_1) {
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
    var HTMLImageElement_1, Image;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (HTMLImageElement_1_1) {
                HTMLImageElement_1 = HTMLImageElement_1_1;
            }
        ],
        execute: function () {
            /**
             * Image as constructor.
             *
             * Reference:
             * https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/Image.
             */
            Image = /** @class */ (function (_super) {
                __extends(Image, _super);
                /**
                 * Constructor.
                 *
                 * @param [width] Width.
                 * @param [height] Height.
                 */
                function Image(width, height) {
                    if (width === void 0) { width = null; }
                    if (height === void 0) { height = null; }
                    var _this = _super.call(this) || this;
                    if (width !== null) {
                        _this.width = width;
                    }
                    if (height !== null) {
                        _this.height = height;
                    }
                    return _this;
                }
                return Image;
            }(HTMLImageElement_1.default));
            exports_1("default", Image);
        }
    };
});
//# sourceMappingURL=Image.js.map