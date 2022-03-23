System.register(["../node/Node", "../character-data/CharacterData"], function (exports_1, context_1) {
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
    var Node_1, CharacterData_1, Text;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Node_1_1) {
                Node_1 = Node_1_1;
            },
            function (CharacterData_1_1) {
                CharacterData_1 = CharacterData_1_1;
            }
        ],
        execute: function () {
            /**
             * Text node.
             */
            Text = /** @class */ (function (_super) {
                __extends(Text, _super);
                function Text() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.nodeType = Node_1.default.TEXT_NODE;
                    return _this;
                }
                Object.defineProperty(Text.prototype, "nodeName", {
                    /**
                     * Node name.
                     *
                     * @returns Node name.
                     */
                    get: function () {
                        return '#text';
                    },
                    enumerable: false,
                    configurable: true
                });
                /**
                 * Converts to string.
                 *
                 * @returns String.
                 */
                Text.prototype.toString = function () {
                    return '[object Text]';
                };
                /**
                 * Clones a node.
                 *
                 * @override
                 * @param [deep=false] "true" to clone deep.
                 * @returns Cloned node.
                 */
                Text.prototype.cloneNode = function (deep) {
                    if (deep === void 0) { deep = false; }
                    return _super.prototype.cloneNode.call(this, deep);
                };
                return Text;
            }(CharacterData_1.default));
            exports_1("default", Text);
        }
    };
});
//# sourceMappingURL=Text.js.map