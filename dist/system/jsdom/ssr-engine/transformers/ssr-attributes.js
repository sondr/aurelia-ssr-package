System.register(["./utils"], function (exports_1, context_1) {
    "use strict";
    var utils_1;
    var __moduleName = context_1 && context_1.id;
    /**
     * Look up au-ssr-id attributes in the rendered DOM and copy them to the HTML
     * @param {string} html
     * @param {TransformerContext} transformerCtx
     * @param {RenderOptions} options
     * @returns {string}
     */
    function default_1(html, transformerCtx, options) {
        var ssrTags = Array.prototype.slice.call(transformerCtx.document.head.querySelectorAll('[au-ssr-id]'));
        for (var i = 0; i < ssrTags.length; i++) {
            html = utils_1.replaceString(html, '</head>', ssrTags[i].outerHTML + '</head>');
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
