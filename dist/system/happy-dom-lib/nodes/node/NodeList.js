System.register([], function (exports_1, context_1) {
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
    var NodeList;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            /**
             * Class list.
             */
            NodeList = /** @class */ (function (_super) {
                __extends(NodeList, _super);
                function NodeList() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                /**
                 * Returns item by index.
                 *
                 * @param index Index.
                 */
                NodeList.prototype.item = function (index) {
                    return index >= 0 && this[index] ? this[index] : null;
                };
                return NodeList;
            }(Array));
            exports_1("default", NodeList);
        }
    };
});
//# sourceMappingURL=NodeList.js.map