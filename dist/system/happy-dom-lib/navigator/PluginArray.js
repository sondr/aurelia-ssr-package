System.register([], function (exports_1, context_1) {
    "use strict";
    var PluginArray;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            /**
             * PluginArray.
             */
            PluginArray = /** @class */ (function () {
                /**
                 * Constructor.
                 *
                 * @param plugins Plugins.
                 */
                function PluginArray(plugins) {
                    for (var i = 0, max = plugins.length; i < max; i++) {
                        this[i] = plugins[i];
                        this[plugins[i].name] = plugins[i];
                    }
                    this.length = plugins.length;
                }
                /**
                 * Returns an item.
                 *
                 * @param index Index.
                 * @returns Plugin.
                 */
                PluginArray.prototype.item = function (index) {
                    return this[index] || null;
                };
                /**
                 * Returns an item.
                 *
                 * @param name Name.
                 * @returns Plugin.
                 */
                PluginArray.prototype.namedItem = function (name) {
                    return this[name] || null;
                };
                /**
                 * Refreshes the list.
                 */
                PluginArray.prototype.refresh = function () {
                    // Do nothing
                };
                /**
                 * Returns the object as a string.
                 *
                 * @returns String.
                 */
                PluginArray.prototype.toString = function () {
                    return '[object PluginArray]';
                };
                return PluginArray;
            }());
            exports_1("default", PluginArray);
        }
    };
});
//# sourceMappingURL=PluginArray.js.map