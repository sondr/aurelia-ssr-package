System.register([], function (exports_1, context_1) {
    "use strict";
    var MediaList;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            /**
             * MediaList interface.
             */
            MediaList = /** @class */ (function () {
                function MediaList() {
                    this.length = 0;
                }
                Object.defineProperty(MediaList.prototype, "mediaText", {
                    /**
                     * Media text.
                     *
                     * @returns Media text.
                     */
                    get: function () {
                        var mediaText = [];
                        for (var i = 0; i < this.length; i++) {
                            mediaText.push(this[i]);
                        }
                        return mediaText.join(', ');
                    },
                    enumerable: false,
                    configurable: true
                });
                /**
                 * Returns item.
                 *
                 * @param index Index.
                 * @returns Item.
                 */
                MediaList.prototype.item = function (index) {
                    return this[index] || '';
                };
                /**
                 * Appends a medium.
                 *
                 * @param medium Medium.
                 */
                MediaList.prototype.appendMedium = function (medium) {
                    this[this.length] = medium;
                    this.length++;
                };
                /**
                 * Deletes a medium.
                 *
                 * @param medium Medium.
                 */
                MediaList.prototype.deleteMedium = function (medium) {
                    var isDeleted = false;
                    for (var i = 0; i < this.length; i++) {
                        if (isDeleted) {
                            this[i - 1] = this[i];
                        }
                        if (this[i] === medium) {
                            isDeleted = true;
                        }
                    }
                    if (isDeleted) {
                        this.length--;
                    }
                };
                return MediaList;
            }());
            exports_1("default", MediaList);
        }
    };
});
//# sourceMappingURL=MediaList.js.map