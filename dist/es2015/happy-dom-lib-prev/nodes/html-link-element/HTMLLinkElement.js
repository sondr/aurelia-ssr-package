import CSSStyleSheet from '../../css/CSSStyleSheet';
import ResourceFetcher from '../../fetch/ResourceFetcher';
import HTMLElement from '../html-element/HTMLElement';
import Event from '../../event/Event';
import ErrorEvent from '../../event/events/ErrorEvent';
/**
 * HTML Link Element.
 *
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLLinkElement.
 */
export default class HTMLLinkElement extends HTMLElement {
    constructor() {
        super(...arguments);
        this.onerror = null;
        this.onload = null;
        this.sheet = null;
        this._evaluateCSS = true;
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
            if (isConnected && this._evaluateCSS) {
                const href = this.getAttributeNS(null, 'href');
                const rel = this.getAttributeNS(null, 'rel');
                if (href !== null && rel && rel.toLowerCase() === 'stylesheet') {
                    this.ownerDocument._readyStateManager.startTask();
                    ResourceFetcher.fetch({ window: this.ownerDocument.defaultView, url: href })
                        .then(code => {
                        const styleSheet = new CSSStyleSheet();
                        styleSheet.replaceSync(code);
                        this.sheet = styleSheet;
                        this.dispatchEvent(new Event('load'));
                        this.ownerDocument._readyStateManager.endTask();
                    })
                        .catch(error => {
                        this.dispatchEvent(new ErrorEvent('error', {
                            message: error.message,
                            error
                        }));
                        this.ownerDocument.defaultView.dispatchEvent(new ErrorEvent('error', {
                            message: error.message,
                            error
                        }));
                        this.ownerDocument._readyStateManager.endTask();
                        if (!this._listeners['error'] &&
                            !this.ownerDocument.defaultView._listeners['error']) {
                            this.ownerDocument.defaultView.console.error(error);
                        }
                    });
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
     * Returns as.
     *
     * @returns As.
     */
    get as() {
        return this.getAttributeNS(null, 'as') || '';
    }
    /**
     * Sets crossOrigin.
     *
     * @param crossOrigin CrossOrigin.
     */
    set as(as) {
        this.setAttributeNS(null, 'as', as);
    }
    /**
     * Returns crossOrigin.
     *
     * @returns CrossOrigin.
     */
    get crossOrigin() {
        return this.getAttribute('crossorigin') || '';
    }
    /**
     * Sets crossOrigin.
     *
     * @param crossOrigin CrossOrigin.
     */
    set crossOrigin(crossOrigin) {
        this.setAttributeNS(null, 'crossorigin', crossOrigin);
    }
    /**
     * Returns href.
     *
     * @returns Href.
     */
    get href() {
        return this.getAttributeNS(null, 'href') || '';
    }
    /**
     * Sets href.
     *
     * @param href Href.
     */
    set href(href) {
        this.setAttributeNS(null, 'href', href);
    }
    /**
     * Returns hreflang.
     *
     * @returns Hreflang.
     */
    get hreflang() {
        return this.getAttributeNS(null, 'hreflang') || '';
    }
    /**
     * Sets hreflang.
     *
     * @param hreflang Hreflang.
     */
    set hreflang(hreflang) {
        this.setAttributeNS(null, 'hreflang', hreflang);
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
     * Returns referrerPolicy.
     *
     * @returns ReferrerPolicy.
     */
    get referrerPolicy() {
        return this.getAttribute('referrerPolicy') || '';
    }
    /**
     * Sets referrerPolicy.
     *
     * @param referrerPolicy ReferrerPolicy.
     */
    set referrerPolicy(referrerPolicy) {
        this.setAttributeNS(null, 'referrerPolicy', referrerPolicy);
    }
    /**
     * Returns rel.
     *
     * @returns Rel.
     */
    get rel() {
        return this.getAttributeNS(null, 'rel') || '';
    }
    /**
     * Sets rel.
     *
     * @param rel Rel.
     */
    set rel(rel) {
        this.setAttributeNS(null, 'rel', rel);
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
     * The setAttributeNode() method adds a new Attr node to the specified element.
     *
     * @override
     * @param attribute Attribute.
     * @returns Replaced attribute.
     */
    setAttributeNode(attribute) {
        const replacedAttribute = super.setAttributeNode(attribute);
        const rel = this.getAttributeNS(null, 'rel');
        const href = this.getAttributeNS(null, 'href');
        if ((attribute.name === 'rel' || attribute.name === 'href') &&
            href !== null &&
            rel &&
            rel.toLowerCase() === 'stylesheet' &&
            this.isConnected) {
            this.ownerDocument._readyStateManager.startTask();
            ResourceFetcher.fetch({ window: this.ownerDocument.defaultView, url: href })
                .then(code => {
                const styleSheet = new CSSStyleSheet();
                styleSheet.replaceSync(code);
                this.sheet = styleSheet;
                this.dispatchEvent(new Event('load'));
                this.ownerDocument._readyStateManager.endTask();
            })
                .catch(error => {
                this.dispatchEvent(new ErrorEvent('error', {
                    message: error.message,
                    error
                }));
                this.ownerDocument.defaultView.dispatchEvent(new ErrorEvent('error', {
                    message: error.message,
                    error
                }));
                this.ownerDocument._readyStateManager.endTask();
                if (!this._listeners['error'] && !this.ownerDocument.defaultView._listeners['error']) {
                    this.ownerDocument.defaultView.console.error(error);
                }
            });
        }
        return replacedAttribute;
    }
}
//# sourceMappingURL=HTMLLinkElement.js.map