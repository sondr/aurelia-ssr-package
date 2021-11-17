System.register(["./utils"], function (exports_1, context_1) {
    "use strict";
    var utils_1;
    var __moduleName = context_1 && context_1.id;
    /**
     * Inserts the rendered app immediately after the aurelia-app="main" if exists, or the opening body tag
     * @param {string} html
     * @param {TransformerContext} transformerCtx
     * @param {RenderOptions} options
     * @returns {string}
     */
    function default_1(html, transformerCtx, options) {
        if (/aurelia-app="main">/im.test(html)) {
            return utils_1.replaceString(html, /aurelia-app="main">/im, 'aurelia-app="main">' + transformerCtx.aurelia.host.innerHTML);
        }
        else {
            return utils_1.replaceString(html, /<body[^>]*>/im, utils_1.replaceString(transformerCtx.aurelia.host.outerHTML, '</body>', ''));
        }
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
