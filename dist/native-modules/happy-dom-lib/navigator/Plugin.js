/**
 * Plugin.
 */
var Plugin = /** @class */ (function () {
    /**
     * Constructor.
     *
     * @param mimeTypes Mime types.
     * @param description Description.
     * @param filename Filename.
     * @param name Name.
     */
    function Plugin(mimeTypes, description, filename, name) {
        this.length = 0;
        this.description = description;
        this.filename = filename;
        this.name = name;
        for (var i = 0, max = mimeTypes.length; i < max; i++) {
            this[i] = mimeTypes[i];
            this[mimeTypes[i].type] = mimeTypes[i];
        }
        this.length = mimeTypes.length;
    }
    /**
     * Item.
     *
     * @param index Number.
     * @returns IMimeType.
     */
    Plugin.prototype.item = function (index) {
        return this[index] || null;
    };
    /**
     * NamedItem.
     *
     * @param name String.
     * @returns IMimeType.
     */
    Plugin.prototype.namedItem = function (name) {
        return this[name] || null;
    };
    /**
     * Returns the object as a string.
     *
     * @returns String.
     */
    Plugin.prototype.toString = function () {
        return '[object Plugin]';
    };
    return Plugin;
}());
export default Plugin;
//# sourceMappingURL=Plugin.js.map