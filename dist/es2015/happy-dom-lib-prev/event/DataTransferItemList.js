import DataTransferItem from './DataTransferItem';
/**
 *
 */
export default class DataTransferItemList {
    constructor() {
        this.DataTransferItem = [];
    }
    /**
     * Adds an item.
     *
     * @param item Item.
     */
    add(item) {
        this.DataTransferItem.push(new DataTransferItem(item));
    }
    /**
     * Removes an item.
     *
     * @param index Index.
     */
    remove(index) {
        this.DataTransferItem.splice(index, 1);
    }
    /**
     * Clears list.
     */
    clear() {
        this.DataTransferItem = [];
    }
}
//# sourceMappingURL=DataTransferItemList.js.map