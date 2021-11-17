import { replaceString } from './utils';
/**
 * Look up au-ssr-id attributes in the rendered DOM and copy them to the HTML
 * @param {string} html
 * @param {TransformerContext} transformerCtx
 * @param {RenderOptions} options
 * @returns {string}
 */
export default function (html, transformerCtx, options) {
    var ssrTags = Array.prototype.slice.call(transformerCtx.document.head.querySelectorAll('[au-ssr-id]'));
    for (var i = 0; i < ssrTags.length; i++) {
        html = replaceString(html, '</head>', ssrTags[i].outerHTML + '</head>');
    }
    return html;
}
;
