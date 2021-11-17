define(["require", "exports", "./utils"], function (require, exports, utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
    exports.default = default_1;
    ;
});
