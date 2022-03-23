/**
 *
 */
var DataTransferItem = /** @class */ (function () {
    /**
     * Constructor.
     *
     * @param item Item.
     */
    function DataTransferItem(item) {
        this.kind = '';
        this.type = '';
        this._item = null;
        this.kind = typeof item === 'string' ? 'string' : 'file';
        this._item = item;
    }
    /**
     * Returns file.
     */
    DataTransferItem.prototype.getAsFile = function () {
        if (this.kind === 'string') {
            return null;
        }
        return this._item;
    };
    /**
     * Returns string.
     */
    DataTransferItem.prototype.getAsString = function () {
        if (this.kind === 'file') {
            return null;
        }
        return this._item;
    };
    return DataTransferItem;
}());
export default DataTransferItem;
//# sourceMappingURL=DataTransferItem.js.map