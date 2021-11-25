import HTMLElement from '../html-element/HTMLElement';
import ScriptUtility from './ScriptUtility';
/**
 * HTML Script Element.
 *
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLScriptElement.
 */
export default class HTMLScriptElement extends HTMLElement {
    constructor() {
        super(...arguments);
        this.onerror = null;
        this.onload = null;
        this._evaluateScript = true;
    }
    /**
     * Returns "true" if connected to DOM.
     *
     * @returns "true" if connected.
     */
    get isConnected() {
        return this._isConnected;
    }
    /**
     * Sets the connected state.
     *
     * @param isConnected "true" if connected.
     */
    set isConnected(isConnected) {
        if (this._isConnected !== isConnected) {
            this._isConnected = isConnected;
            for (const child of this.childNodes) {
                child.isConnected = isConnected;
            }
            // eslint-disable-next-line
            if (this.shadowRoot) {
                // eslint-disable-next-line
                this.shadowRoot.isConnected = isConnected;
            }
            if (isConnected && this._evaluateScript) {
                const src = this.getAttributeNS(null, 'src');
                if (src !== null) {
                    ScriptUtility.loadExternalScript(this);
                }
                else {
                    const textContent = this.textContent;
                    if (textContent) {
                        this.ownerDocument.defaultView.eval(textContent);
                    }
                }
            }
            if (isConnected && this.connectedCallback) {
                this.connectedCallback();
            }
            else if (!isConnected && this.disconnectedCallback) {
                this.disconnectedCallback();
            }
        }
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
     * Returns charset.
     *
     * @returns Charset.
     */
    get charset() {
        return this.getAttributeNS(null, 'charset') || '';
    }
    /**
     * Sets charset.
     *
     * @param charset Charset.
     */
    set charset(charset) {
        this.setAttributeNS(null, 'charset', charset);
    }
    /**
     * Returns lang.
     *
     * @returns Lang.
     */
    get lang() {
        return this.getAttributeNS(null, 'lang') || '';
    }
    /**
     * Sets lang.
     *
     * @param lang Lang.
     */
    set lang(lang) {
        this.setAttributeNS(null, 'lang', lang);
    }
    /**
     * Returns async.
     *
     * @returns Async.
     */
    get async() {
        return this.getAttributeNS(null, 'async') !== null;
    }
    /**
     * Sets async.
     *
     * @param async Async.
     */
    set async(async) {
        if (!async) {
            this.removeAttributeNS(null, 'async');
        }
        else {
            this.setAttributeNS(null, 'async', '');
        }
    }
    /**
     * Returns defer.
     *
     * @returns Defer.
     */
    get defer() {
        return this.getAttributeNS(null, 'defer') !== null;
    }
    /**
     * Sets defer.
     *
     * @param defer Defer.
     */
    set defer(defer) {
        if (!defer) {
            this.removeAttributeNS(null, 'defer');
        }
        else {
            this.setAttributeNS(null, 'defer', '');
        }
    }
    /**
     * Returns text.
     *
     * @returns Text.
     */
    get text() {
        return this.textContent;
    }
    /**
     * Sets text.
     *
     * @param text Text.
     */
    set text(text) {
        this.textContent = text;
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
        if (attribute.name === 'src' && attribute.value !== null && this.isConnected) {
            ScriptUtility.loadExternalScript(this);
        }
        return replacedAttribute;
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
