import DataTransferItemList from './DataTransferItemList';
/**
 *
 */
var DataTransfer = /** @class */ (function () {
    function DataTransfer() {
        this.dropEffect = 'none';
        this.effectAllowed = 'none';
        this.files = [];
        this.items = new DataTransferItemList();
        this.types = [];
    }
    return DataTransfer;
}());
export default DataTransfer;
