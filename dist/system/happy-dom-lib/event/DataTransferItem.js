System.register([], function (exports_1, context_1) {
    "use strict";
    var DataTransferItem;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            /**
             *
             */
            DataTransferItem = /** @class */ (function () {
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
            exports_1("default", DataTransferItem);
        }
    };
});
//# sourceMappingURL=DataTransferItem.js.map