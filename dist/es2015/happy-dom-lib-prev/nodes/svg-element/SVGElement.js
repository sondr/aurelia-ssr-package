import Element from '../element/Element';
/**
 * SVG Element.
 *
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/SVGElement.
 */
export default class SVGElement extends Element {
    /**
     * Returns viewport.
     *
     * @returns SVG rect.
     */
    get viewportElement() {
        return null;
    }
    /**
     * Returns current translate.
     *
     * @returns Element.
     */
    get ownerSVGElement() {
        const parent = this.parentNode;
        while (parent) {
            if (parent['tagName'] === 'SVG') {
                return parent;
            }
        }
        return null;
    }
    /**
     * Returns data set.
     *
     * @returns Data set.
     */
    get dataset() {
        const dataset = {};
        for (const name of Object.keys(this._attributes)) {
            if (name.startsWith('data-')) {
                dataset[name.replace('data-', '')] = this._attributes[name].value;
            }
        }
        return dataset;
    }
}
//# sourceMappingURL=SVGElement.js.map