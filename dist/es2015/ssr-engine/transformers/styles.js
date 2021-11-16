import { replaceString } from './utils';
/**
 * Copy style tags created by the aurelia instance from the DOM to the rendered HTML
 * @param {string} html
 * @param {TransformerContext} transformerCtx
 * @param {RenderOptions} options
 * @returns {string}
 */
export default function (html, transformerCtx, options) {
    const headStyleTags = Array.prototype.slice.call(transformerCtx.document.head.querySelectorAll('style'));
    for (let i = 0; i < headStyleTags.length; i++) {
        html = replaceString(html, '</head>', headStyleTags[i].outerHTML + '</head>');
    }
    return html;
}
;
