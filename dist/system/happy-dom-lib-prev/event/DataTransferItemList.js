System.register(["./DataTransferItem"], function (exports_1, context_1) {
    "use strict";
    var DataTransferItem_1, DataTransferItemList;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (DataTransferItem_1_1) {
                DataTransferItem_1 = DataTransferItem_1_1;
            }
        ],
        execute: function () {
            /**
             *
             */
            DataTransferItemList = /** @class */ (function () {
                function DataTransferItemList() {
                    this.DataTransferItem = [];
                }
                /**
                 * Adds an item.
                 *
                 * @param item Item.
                 */
                DataTransferItemList.prototype.add = function (item) {
                    this.DataTransferItem.push(new DataTransferItem_1.default(item));
                };
                /**
                 * Removes an item.
                 *
                 * @param index Index.
                 */
                DataTransferItemList.prototype.remove = function (index) {
                    this.DataTransferItem.splice(index, 1);
                };
                /**
                 * Clears list.
                 */
                DataTransferItemList.prototype.clear = function () {
                    this.DataTransferItem = [];
                };
                return DataTransferItemList;
            }());
            exports_1("default", DataTransferItemList);
        }
    };
});
//# sourceMappingURL=DataTransferItemList.js.map