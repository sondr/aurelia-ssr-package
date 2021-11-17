System.register(["./utils"], function (exports_1, context_1) {
    "use strict";
    var utils_1;
    var __moduleName = context_1 && context_1.id;
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
            return utils_1.replaceString(html, /<title>((.|[\n\r])*)<\/title>/im, title.outerHTML);
        }
        return html;
    }
    exports_1("default", default_1);
    return {
        setters: [
            function (utils_1_1) {
                utils_1 = utils_1_1;
            }
        ],
        execute: function () {
            ;
        }
    };
});
