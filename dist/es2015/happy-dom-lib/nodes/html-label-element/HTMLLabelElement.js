import HTMLElement from '../html-element/HTMLElement';
/**
 * HTML Label Element.
 *
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLLabelElement.
 */
export default class HTMLLabelElement extends HTMLElement {
    /**
     * Returns a string containing the ID of the labeled control. This reflects the "for" attribute.
     *
     * @returns ID of the labeled control.
     */
    get htmlFor() {
        const htmlFor = this.getAttributeNS(null, 'for');
        if (htmlFor !== null) {
            return htmlFor;
        }
        return htmlFor !== null ? htmlFor : '';
    }
    /**
     * Sets a string containing the ID of the labeled control. This reflects the "for" attribute.
     *
     * @param htmlFor ID of the labeled control.
     */
    set htmlFor(htmlFor) {
        this.setAttributeNS(null, 'for', htmlFor);
    }
    /**
     * Returns an HTML element representing the control with which the label is associated.
     *
     * @returns Control element.
     */
    get control() {
        const htmlFor = this.htmlFor;
        if (htmlFor) {
            return this.ownerDocument.getElementById(htmlFor);
        }
        for (const child of this.children) {
            if (child.tagName === 'INPUT') {
                return child;
            }
        }
        return null;
    }
    /**
     * Returns the parent form element.
     *
     * @returns Form.
     */
    get form() {
        let parent = this.parentNode;
        while (parent && parent.tagName !== 'FORM') {
            parent = parent.parentNode;
        }
        return parent;
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
//# sourceMappingURL=HTMLLabelElement.js.map