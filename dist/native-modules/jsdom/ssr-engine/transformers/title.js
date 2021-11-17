import { replaceString } from './utils';
/**
 * Copy style content of the title from the aurelia instance DOM to the rendered HTML
 * @param {string} html
 * @param {TransformerContext} transformerCtx
 * @param {RenderOptions} options
 * @returns {string}
 */
export default function (html, transformerCtx, options) {
    var title = transformerCtx.document.head.querySelector('title');
    if (title) {
        return replaceString(html, /<title>((.|[\n\r])*)<\/title>/im, title.outerHTML);
    }
    return html;
}
;
