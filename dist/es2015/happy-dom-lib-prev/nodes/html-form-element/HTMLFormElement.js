import HTMLElement from '../html-element/HTMLElement';
/**
 * HTML Form Element.
 *
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement.
 */
export default class HTMLFormElement extends HTMLElement {
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
     * Returns method.
     *
     * @returns Method.
     */
    get method() {
        return this.getAttributeNS(null, 'method') || 'get';
    }
    /**
     * Sets method.
     *
     * @param method Method.
     */
    set method(method) {
        this.setAttributeNS(null, 'method', method);
    }
    /**
     * Returns target.
     *
     * @returns Target.
     */
    get target() {
        return this.getAttributeNS(null, 'target') || '';
    }
    /**
     * Sets target.
     *
     * @param target Target.
     */
    set target(target) {
        this.setAttributeNS(null, 'target', target);
    }
    /**
     * Returns action.
     *
     * @returns Action.
     */
    get action() {
        return this.getAttributeNS(null, 'action') || '';
    }
    /**
     * Sets action.
     *
     * @param action Action.
     */
    set action(action) {
        this.setAttributeNS(null, 'action', action);
    }
    /**
     * Returns encoding.
     *
     * @returns Encoding.
     */
    get encoding() {
        return this.getAttributeNS(null, 'encoding') || '';
    }
    /**
     * Sets encoding.
     *
     * @param encoding Encoding.
     */
    set encoding(encoding) {
        this.setAttributeNS(null, 'encoding', encoding);
    }
    /**
     * Returns enctype.
     *
     * @returns Enctype.
     */
    get enctype() {
        return this.getAttributeNS(null, 'enctype') || '';
    }
    /**
     * Sets enctype.
     *
     * @param enctype Enctype.
     */
    set enctype(enctype) {
        this.setAttributeNS(null, 'enctype', enctype);
    }
    /**
     * Returns autocomplete.
     *
     * @returns Autocomplete.
     */
    get autocomplete() {
        return this.getAttributeNS(null, 'autocomplete') || '';
    }
    /**
     * Sets autocomplete.
     *
     * @param autocomplete Autocomplete.
     */
    set autocomplete(autocomplete) {
        this.setAttributeNS(null, 'autocomplete', autocomplete);
    }
    /**
     * Returns accept charset.
     *
     * @returns Accept charset.
     */
    get acceptCharset() {
        return this.getAttributeNS(null, 'acceptcharset') || '';
    }
    /**
     * Sets accept charset.
     *
     * @param acceptCharset Accept charset.
     */
    set acceptCharset(acceptCharset) {
        this.setAttributeNS(null, 'acceptcharset', acceptCharset);
    }
    /**
     * Returns no validate.
     *
     * @returns No validate.
     */
    get noValidate() {
        return this.getAttributeNS(null, 'novalidate') || '';
    }
    /**
     * Sets no validate.
     *
     * @param noValidate No validate.
     */
    set noValidate(noValidate) {
        this.setAttributeNS(null, 'novalidate', noValidate);
    }
    /**
     * Returns input elements.
     *
     * @returns Elements.
     */
    get elements() {
        return this.querySelectorAll('input,textarea');
    }
    /**
     * Returns number of input elements.
     *
     * @returns Length.
     */
    get length() {
        return this.elements.length;
    }
    /**
     * Submits form.
     */
    submit() { }
    /**
     * Resets form.
     */
    reset() { }
    /**
     * Reports validity.
     */
    reportValidity() { }
    /**
     * Checks validity.
     *
     * @returns "true" if validation does'nt fail.
     */
    checkValidity() {
        return true;
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
//# sourceMappingURL=HTMLFormElement.js.map