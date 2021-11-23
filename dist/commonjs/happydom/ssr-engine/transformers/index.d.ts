import { RenderOptions, TransformerContext } from '../../../interface/ssr-engine/interfaces';
/**
 * Render HTML by passing transformer context and rendering options to registered transformers
 * @param {TransformerContext} transformerCtx
 * @param {RenderOptions} options
 * @returns {string}
 */
export declare function transform(transformerCtx: TransformerContext, options: RenderOptions): string;
