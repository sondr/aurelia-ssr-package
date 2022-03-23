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
define(["require", "exports", "../CSSRule"], function (require, exports, CSSRule_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    CSSRule_1 = __importDefault(CSSRule_1);
    /**
     * CSSRule interface.
     */
    var CSSFontFaceRule = /** @class */ (function (_super) {
        __extends(CSSFontFaceRule, _super);
        function CSSFontFaceRule() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.type = CSSRule_1.default.FONT_FACE_RULE;
            return _this;
        }
        return CSSFontFaceRule;
    }(CSSRule_1.default));
    exports.default = CSSFontFaceRule;
});
//# sourceMappingURL=CSSFontFaceRule.js.map