import CSSStyleDeclaration from '../../css/CSSStyleDeclaration';
import Element from '../element/Element';
/**
 * SVG Element.
 *
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/SVGElement.
 */
export default class SVGElement extends Element {
    constructor() {
        super(...arguments);
        this._style = null;
    }
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
    /**
     * Returns style.
     *
     * @returns Style.
     */
    get style() {
        if (!this._style) {
            this._style = new CSSStyleDeclaration(this._attributes);
        }
        return this._style;
    }
    /**
     * The setAttributeNode() method adds a new Attr node to the specified element.
     *
     * @override
     * @param attribute Attribute.
     * @returns Replaced attribute.
     */
    setAttributeNode(attribute) {
        const replacedAttribute = super.setAttributeNode(attribute);
        if (attribute.name === 'style' && this._style) {
            this._style.cssText = attribute.value;
        }
        return replacedAttribute;
    }
    /**
     * Removes an Attr node.
     *
     * @override
     * @param attribute Attribute.
     */
    removeAttributeNode(attribute) {
        super.removeAttributeNode(attribute);
        if (attribute.name === 'style' && this._style) {
            this._style.cssText = '';
        }
    }
}
//# sourceMappingURL=SVGElement.js.map