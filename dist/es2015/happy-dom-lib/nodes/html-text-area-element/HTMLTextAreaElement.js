import Event from '../../event/Event';
import DOMException from '../../exception/DOMException';
import DOMExceptionNameEnum from '../../exception/DOMExceptionNameEnum';
import HTMLElement from '../html-element/HTMLElement';
import HTMLInputElementSelectionDirectionEnum from '../html-input-element/HTMLInputElementSelectionDirectionEnum';
import HTMLInputElementSelectionModeEnum from '../html-input-element/HTMLInputElementSelectionModeEnum';
/**
 * HTML Text Area Element.
 *
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLTextAreaElement.
 */
export default class HTMLTextAreaElement extends HTMLElement {
    constructor() {
        super(...arguments);
        this.type = 'textarea';
        this._value = null;
        this._selectionStart = null;
        this._selectionEnd = null;
        this._selectionDirection = HTMLInputElementSelectionDirectionEnum.none;
        this.defaultValue = '';
    }
    /**
     * Returns minlength.
     *
     * @returns Min length.
     */
    get minLength() {
        const minLength = this.getAttributeNS(null, 'minlength');
        if (minLength !== null) {
            return parseInt(minLength);
        }
        return -1;
    }
    /**
     * Sets minlength.
     *
     * @param minLength Min length.
     */
    set minLength(minlength) {
        this.setAttributeNS(null, 'minlength', String(minlength));
    }
    /**
     * Returns maxlength.
     *
     * @returns Max length.
     */
    get maxLength() {
        const maxLength = this.getAttributeNS(null, 'maxlength');
        if (maxLength !== null) {
            return parseInt(maxLength);
        }
        return -1;
    }
    /**
     * Sets maxlength.
     *
     * @param maxlength Max length.
     */
    set maxLength(maxLength) {
        this.setAttributeNS(null, 'maxlength', String(maxLength));
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
     * Returns placeholder.
     *
     * @returns Placeholder.
     */
    get placeholder() {
        return this.getAttributeNS(null, 'placeholder') || '';
    }
    /**
     * Sets placeholder.
     *
     * @param placeholder Placeholder.
     */
    set placeholder(placeholder) {
        this.setAttributeNS(null, 'placeholder', placeholder);
    }
    /**
     * Returns inputmode.
     *
     * @returns Inputmode.
     */
    get inputmode() {
        return this.getAttributeNS(null, 'inputmode') || '';
    }
    /**
     * Sets inputmode.
     *
     * @param inputmode Inputmode.
     */
    set inputmode(inputmode) {
        this.setAttributeNS(null, 'inputmode', inputmode);
    }
    /**
     * Returns cols.
     *
     * @returns Cols.
     */
    get cols() {
        return this.getAttributeNS(null, 'cols') || '';
    }
    /**
     * Sets cols.
     *
     * @param cols Cols.
     */
    set cols(cols) {
        this.setAttributeNS(null, 'cols', cols);
    }
    /**
     * Returns rows.
     *
     * @returns Rows.
     */
    get rows() {
        return this.getAttributeNS(null, 'rows') || '';
    }
    /**
     * Sets rows.
     *
     * @param rows Rows.
     */
    set rows(rows) {
        this.setAttributeNS(null, 'rows', rows);
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
     * Returns readOnly.
     *
     * @returns ReadOnly.
     */
    get readOnly() {
        return this.getAttributeNS(null, 'readonly') !== null;
    }
    /**
     * Sets readOnly.
     *
     * @param readOnly ReadOnly.
     */
    set readOnly(readOnly) {
        if (!readOnly) {
            this.removeAttributeNS(null, 'readonly');
        }
        else {
            this.setAttributeNS(null, 'readonly', '');
        }
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
    /**
     * Returns autofocus.
     *
     * @returns Autofocus.
     */
    get autofocus() {
        return this.getAttributeNS(null, 'autofocus') !== null;
    }
    /**
     * Sets autofocus.
     *
     * @param autofocus Autofocus.
     */
    set autofocus(autofocus) {
        if (!autofocus) {
            this.removeAttributeNS(null, 'autofocus');
        }
        else {
            this.setAttributeNS(null, 'autofocus', '');
        }
    }
    /**
     * Returns required.
     *
     * @returns Required.
     */
    get required() {
        return this.getAttributeNS(null, 'required') !== null;
    }
    /**
     * Sets required.
     *
     * @param required Required.
     */
    set required(required) {
        if (!required) {
            this.removeAttributeNS(null, 'required');
        }
        else {
            this.setAttributeNS(null, 'required', '');
        }
    }
    /**
     * Returns value.
     *
     * @returns Value.
     */
    get value() {
        if (this._value === null) {
            return this.getAttributeNS(null, 'value') || '';
        }
        return this._value;
    }
    /**
     * Sets value.
     *
     * @param value Value.
     */
    set value(value) {
        const oldValue = this._value;
        this._value = value;
        if (oldValue !== this._value) {
            this._selectionStart = this._value.length;
            this._selectionEnd = this._value.length;
            this._selectionDirection = HTMLInputElementSelectionDirectionEnum.none;
        }
    }
    /**
     * Returns selection start.
     *
     * @returns Selection start.
     */
    get selectionStart() {
        if (this._selectionStart === null) {
            return this.value.length;
        }
        return this._selectionStart;
    }
    /**
     * Sets selection start.
     *
     * @param start Start.
     */
    set selectionStart(start) {
        this.setSelectionRange(start, Math.max(start, this.selectionEnd), this._selectionDirection);
    }
    /**
     * Returns selection end.
     *
     * @returns Selection end.
     */
    get selectionEnd() {
        if (this._selectionEnd === null) {
            return this.value.length;
        }
        return this._selectionEnd;
    }
    /**
     * Sets selection end.
     *
     * @param end End.
     */
    set selectionEnd(end) {
        this.setSelectionRange(this.selectionStart, end, this._selectionDirection);
    }
    /**
     * Returns selection direction.
     *
     * @returns Selection direction.
     */
    get selectionDirection() {
        return this._selectionDirection;
    }
    /**
     * Sets selection direction.
     *
     * @param direction Direction.
     */
    set selectionDirection(direction) {
        this.setSelectionRange(this._selectionStart, this._selectionEnd, direction);
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
     * Returns text length.
     *
     * @param Text Length.
     */
    get textLength() {
        return this.value.length;
    }
    /**
     * Set selection range.
     *
     * @param start Start.
     * @param end End.
     * @param [direction="none"] Direction.
     */
    setSelectionRange(start, end, direction = 'none') {
        this._selectionEnd = Math.min(end, this.value.length);
        this._selectionStart = Math.min(start, this._selectionEnd);
        this._selectionDirection =
            direction === HTMLInputElementSelectionDirectionEnum.forward ||
                direction === HTMLInputElementSelectionDirectionEnum.backward
                ? direction
                : HTMLInputElementSelectionDirectionEnum.none;
        this.dispatchEvent(new Event('select', { bubbles: true, cancelable: true }));
    }
    /**
     * Set range text.
     *
     * @param replacement Replacement.
     * @param [start] Start.
     * @param [end] End.
     * @param [direction] Direction.
     * @param selectionMode
     */
    setRangeText(replacement, start = null, end = null, selectionMode = HTMLInputElementSelectionModeEnum.preserve) {
        if (start === null) {
            start = this._selectionStart;
        }
        if (end === null) {
            end = this._selectionEnd;
        }
        if (start > end) {
            throw new DOMException('The index is not in the allowed range.', DOMExceptionNameEnum.invalidStateError);
        }
        start = Math.min(start, this.value.length);
        end = Math.min(end, this.value.length);
        const val = this.value;
        let selectionStart = this._selectionStart;
        let selectionEnd = this._selectionEnd;
        this.value = val.slice(0, start) + replacement + val.slice(end);
        const newEnd = start + this.value.length;
        switch (selectionMode) {
            case HTMLInputElementSelectionModeEnum.select:
                this.setSelectionRange(start, newEnd);
                break;
            case HTMLInputElementSelectionModeEnum.start:
                this.setSelectionRange(start, start);
                break;
            case HTMLInputElementSelectionModeEnum.end:
                this.setSelectionRange(newEnd, newEnd);
                break;
            default:
                const delta = replacement.length - (end - start);
                if (selectionStart > end) {
                    selectionStart += delta;
                }
                else if (selectionStart > start) {
                    selectionStart = start;
                }
                if (selectionEnd > end) {
                    selectionEnd += delta;
                }
                else if (selectionEnd > start) {
                    selectionEnd = newEnd;
                }
                this.setSelectionRange(selectionStart, selectionEnd);
                break;
        }
    }
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
        const clone = super.cloneNode(deep);
        clone._value = this._value;
        clone._selectionStart = this._selectionStart;
        clone._selectionEnd = this._selectionEnd;
        clone._selectionDirection = this._selectionDirection;
        clone.defaultValue = this.defaultValue;
        return clone;
    }
}
//# sourceMappingURL=HTMLTextAreaElement.js.map