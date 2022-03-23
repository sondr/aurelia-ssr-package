import CSSStyleSheet from '../../css/CSSStyleSheet';
import HTMLElement from '../html-element/HTMLElement';
/**
 * HTML Style Element.
 *
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLStyleElement.
 */
export default class HTMLStyleElement extends HTMLElement {
    constructor() {
        super(...arguments);
        this._styleSheet = null;
    }
    /**
     * Returns CSS style sheet.
     *
     * @returns CSS style sheet.
     */
    get sheet() {
        if (!this.isConnected) {
            return null;
        }
        if (!this._styleSheet) {
            this._styleSheet = new CSSStyleSheet();
            this._styleSheet.replaceSync(this.innerText);
        }
        return this._styleSheet;
    }
    /**
     * Returns media.
     *
     * @returns Media.
     */
    get media() {
        return this.getAttributeNS(null, 'media') || '';
    }
    /**
     * Sets media.
     *
     * @param media Media.
     */
    set media(media) {
        this.setAttributeNS(null, 'media', media);
    }
    /**
     * Returns type.
     *
     * @returns Type.
     */
    get type() {
        return this.getAttributeNS(null, 'type') || '';
    }
    /**
     * Sets type.
     *
     * @param type Type.
     */
    set type(type) {
        this.setAttributeNS(null, 'type', type);
    }
    /**
     * Returns disabled.
     *
     * @returns Disabled.
     */
    get disabled() {
        return this.getAttributeNS(null, 'disabled') !== null;
    }
    /**
     * Sets disabled.
     *
     * @param disabled Disabled.
     */
    set disabled(disabled) {
        if (!disabled) {
            this.removeAttributeNS(null, 'disabled');
        }
        else {
            this.setAttributeNS(null, 'disabled', '');
        }
    }
}
