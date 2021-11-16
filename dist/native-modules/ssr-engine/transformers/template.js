import { replaceString } from './utils';
/**
 * Inserts the rendered app immediately after the aurelia-app="main" if exists, or the opening body tag
 * @param {string} html
 * @param {TransformerContext} transformerCtx
 * @param {RenderOptions} options
 * @returns {string}
 */
export default function (html, transformerCtx, options) {
    if (/aurelia-app="main">/im.test(html)) {
        return replaceString(html, /aurelia-app="main">/im, 'aurelia-app="main">' + transformerCtx.aurelia.host.innerHTML);
    }
    else {
        return replaceString(html, /<body[^>]*>/im, replaceString(transformerCtx.aurelia.host.outerHTML, '</body>', ''));
    }
}
;
