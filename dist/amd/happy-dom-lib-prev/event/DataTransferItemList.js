var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "./DataTransferItem"], function (require, exports, DataTransferItem_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    DataTransferItem_1 = __importDefault(DataTransferItem_1);
    /**
     *
     */
    var DataTransferItemList = /** @class */ (function () {
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
    exports.default = DataTransferItemList;
});
//# sourceMappingURL=DataTransferItemList.js.map