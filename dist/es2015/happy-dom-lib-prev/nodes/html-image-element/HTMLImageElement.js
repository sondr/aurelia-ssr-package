import HTMLElement from '../html-element/HTMLElement';
/**
 * HTML Image Element.
 *
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement.
 */
export default class HTMLImageElement extends HTMLElement {
    constructor() {
        super(...arguments);
        this.complete = false;
        this.naturalHeight = 0;
        this.naturalWidth = 0;
        this.crossOrigin = null;
        this.decoding = 'auto';
        this.loading = 'auto';
        this.x = 0;
        this.y = 0;
    }
    /**
     * Returns alt.
     *
     * @returns Alt.
     */
    get alt() {
        return this.getAttributeNS(null, 'alt') || '';
    }
    /**
     * Sets alt.
     *
     * @param alt Alt.
     */
    set alt(alt) {
        this.setAttributeNS(null, 'alt', alt);
    }
    /**
     * Returns current src.
     *
     * @returns Current src.
     */
    get currentSrc() {
        return this.src;
    }
    /**
     * Returns height.
     *
     * @returns Height.
     */
    get height() {
        return this.getAttributeNS(null, 'height') || '';
    }
    /**
     * Sets height.
     *
     * @param height Height.
     */
    set height(height) {
        this.setAttributeNS(null, 'height', height);
    }
    /**
     * Returns is map.
     *
     * @returns Is map.
     */
    get isMap() {
        return this.getAttributeNS(null, 'ismap') !== null;
    }
    /**
     * Sets is map.
     *
     * @param ismap Is map.
     */
    set isMap(isMap) {
        if (!isMap) {
            this.removeAttributeNS(null, 'ismap');
        }
        else {
            this.setAttributeNS(null, 'ismap', '');
        }
    }
    /**
     * Returns referrer policy.
     *
     * @returns Referrer policy.
     */
    get referrerPolicy() {
        return this.getAttributeNS(null, 'referrerpolicy') || '';
    }
    /**
     * Sets referrer policy.
     *
     * @param referrerPolicy Referrer policy.
     */
    set referrerPolicy(referrerPolicy) {
        this.setAttributeNS(null, 'referrerpolicy', referrerPolicy);
    }
    /**
     * Returns sizes.
     *
     * @returns Sizes.
     */
    get sizes() {
        return this.getAttributeNS(null, 'sizes') || '';
    }
    /**
     * Sets sizes.
     *
     * @param sizes Sizes.
     */
    set sizes(sizes) {
        this.setAttributeNS(null, 'sizes', sizes);
    }
    /**
     * Returns source.
     *
     * @returns Source.
     */
    get src() {
        return this.getAttributeNS(null, 'src') || '';
    }
    /**
     * Sets source.
     *
     * @param source Source.
     */
    set src(src) {
        this.setAttributeNS(null, 'src', src);
    }
    /**
     * Returns srcset.
     *
     * @returns Source.
     */
    get srcset() {
        return this.getAttributeNS(null, 'srcset') || '';
    }
    /**
     * Sets src set.
     *
     * @param srcset Src set.
     */
    set srcset(srcset) {
        this.setAttributeNS(null, 'srcset', srcset);
    }
    /**
     * Returns use map.
     *
     * @returns Use map.
     */
    get useMap() {
        return this.getAttributeNS(null, 'usemap') || '';
    }
    /**
     * Sets is map.
     *
     * @param useMap Is map.
     */
    set useMap(useMap) {
        this.setAttributeNS(null, 'usemap', useMap);
    }
    /**
     * Returns width.
     *
     * @returns Width.
     */
    get width() {
        return this.getAttributeNS(null, 'width') || '';
    }
    /**
     * Sets width.
     *
     * @param width Width.
     */
    set width(width) {
        this.setAttributeNS(null, 'width', width);
    }
    /**
     * The decode() method of the HTMLImageElement interface returns a Promise that resolves when the image is decoded and it is safe to append the image to the DOM.
     *
     * @returns Promise.
     */
    decode() {
        return Promise.resolve();
    }
    /**
     * Clones a node.
     *
     * @override
     * @param [deep=false] "true" to clone deep.
     * @returns Cloned node.
     */
    cloneNode(deep = false) {
        return super.cloneNode(deep);
    }
}
//# sourceMappingURL=HTMLImageElement.js.map