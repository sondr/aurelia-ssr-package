import Element from '../element/Element';
import CSSStyleDeclaration from '../../css/CSSStyleDeclaration';
import FocusEvent from '../../event/events/FocusEvent';
import PointerEvent from '../../event/events/PointerEvent';
import Node from '../node/Node';
/**
 * HTML Element.
 *
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement.
 */
export default class HTMLElement extends Element {
    constructor() {
        super(...arguments);
        this.accessKey = '';
        this.accessKeyLabel = '';
        this.contentEditable = 'inherit';
        this.isContentEditable = false;
        this.offsetHeight = 0;
        this.offsetWidth = 0;
        this.offsetLeft = 0;
        this.offsetTop = 0;
        this.clientHeight = 0;
        this.clientWidth = 0;
        this._style = null;
    }
    /**
     * Returns tab index.
     *
     * @returns Tab index.
     */
    get tabIndex() {
        const tabIndex = this.getAttributeNS(null, 'tabindex');
        return tabIndex !== null ? Number(tabIndex) : -1;
    }
    /**
     * Returns tab index.
     *
     * @param tabIndex Tab index.
     */
    set tabIndex(tabIndex) {
        if (tabIndex === -1) {
            this.removeAttributeNS(null, 'tabindex');
        }
        else {
            this.setAttributeNS(null, 'tabindex', String(tabIndex));
        }
    }
    /**
     * Returns inner text, which is the rendered appearance of text.
     *
     * @returns Inner text.
     */
    get innerText() {
        let result = '';
        for (const childNode of this.childNodes) {
            if (childNode instanceof HTMLElement) {
                if (childNode.tagName !== 'SCRIPT' && childNode.tagName !== 'STYLE') {
                    result += childNode.innerText;
                }
            }
            else if (childNode.nodeType === Node.ELEMENT_NODE ||
                childNode.nodeType === Node.TEXT_NODE) {
                result += childNode.textContent;
            }
        }
        return result;
    }
    /**
     * Sets the inner text, which is the rendered appearance of text.
     *
     * @param innerText Inner text.
     */
    set innerText(innerText) {
        this.textContent = innerText;
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
     * Returns direction.
     *
     * @returns Direction.
     */
    get dir() {
        return this.getAttributeNS(null, 'dir') || '';
    }
    /**
     * Returns direction.
     *
     * @param direction Direction.
     */
    set dir(direction) {
        this.setAttributeNS(null, 'dir', direction);
    }
    /**
     * Returns hidden.
     *
     * @returns Hidden.
     */
    get hidden() {
        return this.getAttributeNS(null, 'hidden') !== null;
    }
    /**
     * Returns hidden.
     *
     * @param hidden Hidden.
     */
    set hidden(hidden) {
        if (!hidden) {
            this.removeAttributeNS(null, 'hidden');
        }
        else {
            this.setAttributeNS(null, 'hidden', '');
        }
    }
    /**
     * Returns language.
     *
     * @returns Language.
     */
    get lang() {
        return this.getAttributeNS(null, 'lang') || '';
    }
    /**
     * Returns language.
     *
     * @param language Language.
     */
    set lang(lang) {
        this.setAttributeNS(null, 'lang', lang);
    }
    /**
     * Returns title.
     *
     * @returns Title.
     */
    get title() {
        return this.getAttributeNS(null, 'title') || '';
    }
    /**
     * Returns title.
     *
     * @param title Title.
     */
    set title(title) {
        this.setAttributeNS(null, 'title', title);
    }
    /**
     * Triggers a click event.
     */
    click() {
        const event = new PointerEvent('click', {
            bubbles: true,
            composed: true
        });
        event.target = this;
        event.currentTarget = this;
        this.dispatchEvent(event);
    }
    /**
     * Triggers a blur event.
     */
    blur() {
        if (this.ownerDocument['_activeElement'] !== this || !this.isConnected) {
            return;
        }
        this.ownerDocument['_activeElement'] = null;
        for (const eventType of ['blur', 'focusout']) {
            const event = new FocusEvent(eventType, {
                bubbles: true,
                composed: true
            });
            event.target = this;
            event.currentTarget = this;
            this.dispatchEvent(event);
        }
    }
    /**
     * Triggers a focus event.
     */
    focus() {
        if (this.ownerDocument['_activeElement'] === this || !this.isConnected) {
            return;
        }
        if (this.ownerDocument['_activeElement'] !== null) {
            this.ownerDocument['_activeElement'].blur();
        }
        this.ownerDocument['_activeElement'] = this;
        for (const eventType of ['focus', 'focusin']) {
            const event = new FocusEvent(eventType, {
                bubbles: true,
                composed: true
            });
            event.target = this;
            event.currentTarget = this;
            this.dispatchEvent(event);
        }
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
    /**
     * Clones a node.
     *
     * @override
     * @param [deep=false] "true" to clone deep.
     * @returns Cloned node.
     */
    cloneNode(deep = false) {
        const clone = super.cloneNode(deep);
        clone.accessKey = this.accessKey;
        clone.accessKeyLabel = this.accessKeyLabel;
        clone.contentEditable = this.contentEditable;
        clone.isContentEditable = this.isContentEditable;
        if (this._style) {
            clone.style.cssText = this._style.cssText;
        }
        return clone;
    }
}
//# sourceMappingURL=HTMLElement.js.map