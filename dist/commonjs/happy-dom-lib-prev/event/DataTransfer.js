"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DataTransferItemList_1 = require("./DataTransferItemList");
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
