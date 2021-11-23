import { RenderOptions, TransformerContext } from '../../../interface/ssr-engine/interfaces';
/**
 * Append Angular preboot to the rendered HTML
 * @see https://github.com/angular/preboot
 * @param {string} html
 * @param {TransformerContext} transformerCtx
 * @param {RenderOptions} options
 * @returns {string}
 */
export default function (html: string, transformerCtx: TransformerContext, options: RenderOptions): string;
