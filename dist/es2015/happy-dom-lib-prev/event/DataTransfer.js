import DataTransferItemList from './DataTransferItemList';
/**
 *
 */
export default class DataTransfer {
    constructor() {
        this.dropEffect = 'none';
        this.effectAllowed = 'none';
        this.files = [];
        this.items = new DataTransferItemList();
        this.types = [];
    }
}
//# sourceMappingURL=DataTransfer.js.map