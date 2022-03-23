System.register([], function (exports_1, context_1) {
    "use strict";
    var MimeType;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            /**
             * MimeType.
             */
            MimeType = /** @class */ (function () {
                /**
                 * Constructor.
                 *
                 * @param description
                 * @param enabledPlugin
                 * @param suffixes
                 * @param type
                 */
                function MimeType(description, enabledPlugin, suffixes, type) {
                    this.description = description;
                    this.enabledPlugin = enabledPlugin;
                    this.suffixes = suffixes;
                    this.type = type;
                }
                /**
                 * Returns the object as a string.
                 *
                 * @returns String.
                 */
                MimeType.prototype.toString = function () {
                    return '[object MimeType]';
                };
                return MimeType;
            }());
            exports_1("default", MimeType);
        }
    };
});
