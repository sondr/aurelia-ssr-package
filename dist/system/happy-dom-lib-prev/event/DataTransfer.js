System.register(["./DataTransferItemList"], function (exports_1, context_1) {
    "use strict";
    var DataTransferItemList_1, DataTransfer;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (DataTransferItemList_1_1) {
                DataTransferItemList_1 = DataTransferItemList_1_1;
            }
        ],
        execute: function () {
            /**
             *
             */
            DataTransfer = /** @class */ (function () {
                function DataTransfer() {
                    this.dropEffect = 'none';
                    this.effectAllowed = 'none';
                    this.files = [];
                    this.items = new DataTransferItemList_1.default();
                    this.types = [];
                }
                return DataTransfer;
            }());
            exports_1("default", DataTransfer);
        }
    };
});
//# sourceMappingURL=DataTransfer.js.map