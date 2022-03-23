// tslint:disable:no-var-requires
var transformers = [
    require('./template').default,
    require('./title').default,
    require('./styles').default,
    require('./ssr-attributes').default,
    require('./preboot').default
];
// tslint:enable:no-var-requires
/**
 * Render HTML by passing transformer context and rendering options to registered transformers
 * @param {TransformerContext} transformerCtx
 * @param {RenderOptions} options
 * @returns {string}
 */
export function transform(transformerCtx, options) {
    var html = options.template;
    for (var i = 0; i < transformers.length; i++) {
        html = transformers[i](html, transformerCtx, options);
    }
    return html;
}
//# sourceMappingURL=index.js.map