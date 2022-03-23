define(["require", "exports", "./utils"], function (require, exports, utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Copy style content of the title from the aurelia instance DOM to the rendered HTML
     * @param {string} html
     * @param {TransformerContext} transformerCtx
     * @param {RenderOptions} options
     * @returns {string}
     */
    function default_1(html, transformerCtx, options) {
        var title = transformerCtx.document.head.querySelector('title');
        if (title) {
            return (0, utils_1.replaceString)(html, /<title>((.|[\n\r])*)<\/title>/im, title.outerHTML);
        }
        return html;
    }
    exports.default = default_1;
    ;
});
//# sourceMappingURL=title.js.map