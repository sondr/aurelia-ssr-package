import DataTransferItem from './DataTransferItem';
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
        this.DataTransferItem.push(new DataTransferItem(item));
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
export default DataTransferItemList;
