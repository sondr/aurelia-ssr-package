System.register([], function (exports_1, context_1) {
    "use strict";
    var MimeTypeArray;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            /**
             * MimeTypeArray.
             *
             * Reference:
             * https://developer.mozilla.org/en-US/docs/Web/API/MimeTypeArray.
             */
            MimeTypeArray = /** @class */ (function () {
                /**
                 * Constructor.
                 *
                 * @param mimeTypes
                 */
                function MimeTypeArray(mimeTypes) {
                    for (var i = 0, max = mimeTypes.length; i < max; i++) {
                        this[i] = mimeTypes[i];
                        this[mimeTypes[i].type] = mimeTypes[i];
                    }
                    this.length = mimeTypes.length;
                }
                /**
                 * @param index
                 */
                MimeTypeArray.prototype.item = function (index) {
                    return this[index] || null;
                };
                /**
                 * @param name
                 */
                MimeTypeArray.prototype.namedItem = function (name) {
                    return this[name] || null;
                };
                /**
                 * Returns the object as a string.
                 *
                 * @returns String.
                 */
                MimeTypeArray.prototype.toString = function () {
                    return '[object MimeTypeArray]';
                };
                return MimeTypeArray;
            }());
            exports_1("default", MimeTypeArray);
        }
    };
});
