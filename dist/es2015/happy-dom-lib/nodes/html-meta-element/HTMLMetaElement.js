import HTMLElement from '../html-element/HTMLElement';
/**
 * HTML Meta Element.
 *
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLMetaElement.
 */
export default class HTMLMetaElement extends HTMLElement {
    /**
     * Returns content.
     *
     * @returns Content.
     */
    get content() {
        return this.getAttributeNS(null, 'content') || '';
    }
    /**
     * Sets content.
     *
     * @param content Content.
     */
    set content(content) {
        this.setAttributeNS(null, 'content', content);
    }
    /**
     * Returns httpEquiv.
     *
     * @returns HttpEquiv.
     */
    get httpEquiv() {
        return this.getAttributeNS(null, 'http-equiv') || '';
    }
    /**
     * Sets httpEquiv.
     *
     * @param httpEquiv HttpEquiv.
     */
    set httpEquiv(httpEquiv) {
        this.setAttributeNS(null, 'http-equiv', httpEquiv);
    }
    /**
     * Returns name.
     *
     * @returns Name.
     */
    get name() {
        return this.getAttributeNS(null, 'name') || '';
    }
    /**
     * Sets name.
     *
     * @param name Name.
     */
    set name(name) {
        this.setAttributeNS(null, 'name', name);
    }
    /**
     * Returns scheme.
     *
     * @returns Name.
     */
    get scheme() {
        return this.getAttributeNS(null, 'scheme') || '';
    }
    /**
     * Sets scheme.
     *
     * @param scheme Scheme.
     */
    set scheme(scheme) {
        this.setAttributeNS(null, 'scheme', scheme);
    }
}
//# sourceMappingURL=HTMLMetaElement.js.map