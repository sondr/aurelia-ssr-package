"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
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
exports.default = default_1;
;
