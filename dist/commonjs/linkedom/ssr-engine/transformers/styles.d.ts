import { RenderOptions, TransformerContext } from '../../../interface/ssr-engine/interfaces';
/**
 * Copy style tags created by the aurelia instance from the DOM to the rendered HTML
 * @param {string} html
 * @param {TransformerContext} transformerCtx
 * @param {RenderOptions} options
 * @returns {string}
 */
export default function (html: string, transformerCtx: TransformerContext, options?: RenderOptions): string;
