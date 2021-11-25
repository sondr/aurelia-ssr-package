define(["require", "exports", "./DataTransferItemList"], function (require, exports, DataTransferItemList_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     *
     */
    var DataTransfer = /** @class */ (function () {
        function DataTransfer() {
            this.dropEffect = 'none';
            this.effectAllowed = 'none';
            this.files = [];
            this.items = new DataTransferItemList_1.default();
            this.types = [];
        }
        return DataTransfer;
    }());
    exports.default = DataTransfer;
});
