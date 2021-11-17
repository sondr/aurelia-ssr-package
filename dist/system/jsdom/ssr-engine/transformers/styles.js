System.register(["./utils"], function (exports_1, context_1) {
    "use strict";
    var utils_1;
    var __moduleName = context_1 && context_1.id;
    /**
     * Copy style tags created by the aurelia instance from the DOM to the rendered HTML
     * @param {string} html
     * @param {TransformerContext} transformerCtx
     * @param {RenderOptions} options
     * @returns {string}
     */
    function default_1(html, transformerCtx, options) {
        var headStyleTags = Array.prototype.slice.call(transformerCtx.document.head.querySelectorAll('style'));
        for (var i = 0; i < headStyleTags.length; i++) {
            html = utils_1.replaceString(html, '</head>', headStyleTags[i].outerHTML + '</head>');
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
