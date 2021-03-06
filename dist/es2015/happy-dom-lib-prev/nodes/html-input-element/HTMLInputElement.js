import HTMLElement from '../html-element/HTMLElement';
import ValidityState from './ValidityState';
import DOMException from '../../exception/DOMException';
import DOMExceptionNameEnum from '../../exception/DOMExceptionNameEnum';
import Event from '../../event/Event';
import HTMLInputElementValueSanitizer from './HTMLInputElementValueSanitizer';
import HTMLInputElementSelectionModeEnum from './HTMLInputElementSelectionModeEnum';
import HTMLInputElementSelectionDirectionEnum from './HTMLInputElementSelectionDirectionEnum';
/**
 * HTML Input Element.
 *
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement.
 *
 * Used as reference for some of the logic (like selection range):
 * https://github.com/jsdom/jsdom/blob/master/lib/jsdom/living/nodes/nodes/HTMLInputElement-impl.js (MIT licensed).
 */
export default class HTMLInputElement extends HTMLElement {
    constructor() {
        super(...arguments);
        // Related to parent form.
        this.formAction = '';
        this.formMethod = '';
        this.formNoValidate = false;
        // Any type of input
        this._value = null;
        this._height = 0;
        this._width = 0;
        // Type specific: checkbox/radio
        this.defaultChecked = false;
        // Type specific: file
        this.files = [];
        // Not categorized
        this.defaultValue = '';
        // Type specific: text/password/search/tel/url/week/month
        this._selectionStart = null;
        this._selectionEnd = null;
        this._selectionDirection = HTMLInputElementSelectionDirectionEnum.none;
    }
    /**
     * Returns height.
     *
     * @returns Height.
     */
    get height() {
        return this._height;
    }
    /**
     * Sets height.
     *
     * @param height Height.
     */
    set height(height) {
        this._height = height;
        this.setAttributeNS(null, 'height', String(height));
    }
    /**
     * Returns width.
     *
     * @returns Width.
     */
    get width() {
        return this._width;
    }
    /**
     * Sets width.
     *
     * @param width Width.
     */
    set width(width) {
        this._width = width;
        this.setAttributeNS(null, 'width', String(width));
    }
    /**
     * Returns size.
     *
     * @returns Size.
     */
    get size() {
        const size = this.getAttributeNS(null, 'size');
        if (size !== null) {
            return parseInt(size);
        }
        return 20;
    }
    /**
     * Sets size.
     *
     * @param size Size.
     */
    set size(size) {
        this.setAttributeNS(null, 'size', String(size));
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
     * Returns type.
     *
     * @returns Type. Defaults to "text".
     */
    get type() {
        return this.getAttributeNS(null, 'type') || 'text';
    }
    /**
     * Sets type.
     *
     * @param type Type.
     */
    set type(type) {
        this.setAttributeNS(null, 'type', type.toLowerCase());
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
     * Returns min.
     *
     * @returns Min.
     */
    get min() {
        return this.getAttributeNS(null, 'min') || '';
    }
    /**
     * Sets min.
     *
     * @param min Min.
     */
    set min(min) {
        this.setAttributeNS(null, 'min', min);
    }
    /**
     * Returns max.
     *
     * @returns Max.
     */
    get max() {
        return this.getAttributeNS(null, 'max') || '';
    }
    /**
     * Sets max.
     *
     * @param max Max.
     */
    set max(max) {
        this.setAttributeNS(null, 'max', max);
    }
    /**
     * Returns pattern.
     *
     * @returns Pattern.
     */
    get pattern() {
        return this.getAttributeNS(null, 'pattern') || '';
    }
    /**
     * Sets pattern.
     *
     * @param pattern Pattern.
     */
    set pattern(pattern) {
        this.setAttributeNS(null, 'pattern', pattern);
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
     * Returns step.
     *
     * @returns Step.
     */
    get step() {
        return this.getAttributeNS(null, 'step') || '';
    }
    /**
     * Sets step.
     *
     * @param step Step.
     */
    set step(step) {
        this.setAttributeNS(null, 'step', step);
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
     * Returns accept.
     *
     * @returns Accept.
     */
    get accept() {
        return this.getAttributeNS(null, 'accept') || '';
    }
    /**
     * Sets accept.
     *
     * @param accept Accept.
     */
    set accept(accept) {
        this.setAttributeNS(null, 'accept', accept);
    }
    /**
     * Returns allowdirs.
     *
     * @returns Allowdirs.
     */
    get allowdirs() {
        return this.getAttributeNS(null, 'allowdirs') || '';
    }
    /**
     * Sets allowdirs.
     *
     * @param allowdirs Allowdirs.
     */
    set allowdirs(allowdirs) {
        this.setAttributeNS(null, 'allowdirs', allowdirs);
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
     * Returns src.
     *
     * @returns Src.
     */
    get src() {
        return this.getAttributeNS(null, 'src') || '';
    }
    /**
     * Sets src.
     *
     * @param src Src.
     */
    set src(src) {
        this.setAttributeNS(null, 'src', src);
    }
    /**
     * Returns defaultvalue.
     *
     * @returns Defaultvalue.
     */
    get defaultvalue() {
        return this.getAttributeNS(null, 'defaultvalue') || '';
    }
    /**
     * Sets defaultvalue.
     *
     * @param defaultvalue Defaultvalue.
     */
    set defaultvalue(defaultvalue) {
        this.setAttributeNS(null, 'defaultvalue', defaultvalue);
    }
    /**
     * Returns read only.
     *
     * @returns Read only.
     */
    get readOnly() {
        return this.getAttributeNS(null, 'readonly') !== null;
    }
    /**
     * Sets read only.
     *
     * @param readOnly Read only.
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
     * Returns indeterminate.
     *
     * @returns Indeterminate.
     */
    get indeterminate() {
        return this.getAttributeNS(null, 'indeterminate') !== null;
    }
    /**
     * Sets indeterminate.
     *
     * @param indeterminate Indeterminate.
     */
    set indeterminate(indeterminate) {
        if (!indeterminate) {
            this.removeAttributeNS(null, 'indeterminate');
        }
        else {
            this.setAttributeNS(null, 'indeterminate', '');
        }
    }
    /**
     * Returns multiple.
     *
     * @returns Multiple.
     */
    get multiple() {
        return this.getAttributeNS(null, 'multiple') !== null;
    }
    /**
     * Sets multiple.
     *
     * @param multiple Multiple.
     */
    set multiple(multiple) {
        if (!multiple) {
            this.removeAttributeNS(null, 'multiple');
        }
        else {
            this.setAttributeNS(null, 'multiple', '');
        }
    }
    /**
     * Returns checked.
     *
     * @returns Checked.
     */
    get checked() {
        return this.getAttributeNS(null, 'checked') !== null;
    }
    /**
     * Sets checked.
     *
     * @param checked Checked.
     */
    set checked(checked) {
        if (!checked) {
            this.removeAttributeNS(null, 'checked');
        }
        else {
            this.setAttributeNS(null, 'checked', '');
        }
    }
    /**
     * Returns value.
     *
     * @returns Value.
     */
    get value() {
        switch (this.type) {
            case 'hidden':
            case 'submit':
            case 'image':
            case 'reset':
            case 'button':
                return this.getAttributeNS(null, 'value') || '';
            case 'checkbox':
            case 'radio':
                const attritube = this.getAttributeNS(null, 'value');
                return attritube !== null ? attritube : 'on';
            case 'file':
                return this.files.length > 0 ? '/fake/path/' + this.files[0].name : '';
        }
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
        switch (this.type) {
            case 'hidden':
            case 'submit':
            case 'image':
            case 'reset':
            case 'button':
            case 'checkbox':
            case 'radio':
                this.setAttributeNS(null, 'value', value);
                break;
            case 'file':
                if (value !== '') {
                    throw new DOMException('Input elements of type "file" may only programmatically set the value to empty string.', DOMExceptionNameEnum.invalidStateError);
                }
                break;
            default:
                const oldValue = this._value;
                this._value = HTMLInputElementValueSanitizer.sanitize(this, value);
                if (oldValue !== this._value) {
                    this._selectionStart = this._value.length;
                    this._selectionEnd = this._value.length;
                    this._selectionDirection = HTMLInputElementSelectionDirectionEnum.none;
                }
                break;
        }
    }
    /**
     * Returns selection start.
     *
     * @returns Selection start.
     */
    get selectionStart() {
        if (!this._isSelectionSupported()) {
            return null;
        }
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
        if (!this._isSelectionSupported()) {
            throw new DOMException(`The input element's type (${this.type}) does not support selection.`, DOMExceptionNameEnum.invalidStateError);
        }
        this.setSelectionRange(start, Math.max(start, this.selectionEnd), this._selectionDirection);
    }
    /**
     * Returns selection end.
     *
     * @returns Selection end.
     */
    get selectionEnd() {
        if (!this._isSelectionSupported()) {
            return null;
        }
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
        if (!this._isSelectionSupported()) {
            throw new DOMException(`The input element's type (${this.type}) does not support selection.`, DOMExceptionNameEnum.invalidStateError);
        }
        this.setSelectionRange(this.selectionStart, end, this._selectionDirection);
    }
    /**
     * Returns selection direction.
     *
     * @returns Selection direction.
     */
    get selectionDirection() {
        if (!this._isSelectionSupported()) {
            return null;
        }
        return this._selectionDirection;
    }
    /**
     * Sets selection direction.
     *
     * @param direction Direction.
     */
    set selectionDirection(direction) {
        if (!this._isSelectionSupported()) {
            throw new DOMException(`The input element's type (${this.type}) does not support selection.`, DOMExceptionNameEnum.invalidStateError);
        }
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
     * Returns validity state.
     *
     * @returns Validity state.
     */
    get validity() {
        return new ValidityState(this);
    }
    /**
     * Returns validity message.
     *
     * @returns Validation message.
     */
    get validationMessage() {
        return null;
    }
    /**
     * Returns "true" if it will validate.
     *
     * @returns "true" if it will validate.
     */
    get willValidate() {
        return (this.type !== 'hidden' &&
            this.type !== 'reset' &&
            this.type !== 'button' &&
            !this.disabled &&
            !this['readOnly']);
    }
    /**
     * Returns value as Date.
     *
     * @returns Date.
     */
    get valueAsDate() {
        return this.value ? new Date(this.value) : null;
    }
    /**
     * Returns value as number.
     *
     * @returns Number.
     */
    get valueAsNumber() {
        return this.value ? parseFloat(this.value) : NaN;
    }
    /**
     * Set selection range.
     *
     * @param start Start.
     * @param end End.
     * @param [direction="none"] Direction.
     */
    setSelectionRange(start, end, direction = 'none') {
        if (!this._isSelectionSupported()) {
            throw new DOMException(`The input element's type (${this.type}) does not support selection.`, DOMExceptionNameEnum.invalidStateError);
        }
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
        if (!this._isSelectionSupported()) {
            throw new DOMException(`The input element's type (${this.type}) does not support selection.`, DOMExceptionNameEnum.invalidStateError);
        }
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
     * @returns "true" if the field is valid.
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
        clone.formAction = this.formAction;
        clone.formMethod = this.formMethod;
        clone.formNoValidate = this.formNoValidate;
        clone._value = this._value;
        clone._height = this._height;
        clone._width = this._width;
        clone.defaultChecked = this.defaultChecked;
        clone.files = this.files.slice();
        clone._selectionStart = this._selectionStart;
        clone._selectionEnd = this._selectionEnd;
        clone._selectionDirection = this._selectionDirection;
        return clone;
    }
    /**
     * Checks if private value is supported.
     *
     * @returns "true" if private value is supported.
     */
    // Private _isPrivateValueSupported(): boolean {
    // 	Return (
    // 		This.type !== 'hidden' &&
    // 		This.type !== 'submit' &&
    // 		This.type !== 'image' &&
    // 		This.type !== 'reset' &&
    // 		This.type !== 'button' &&
    // 		This.type !== 'checkbox' &&
    // 		This.type !== 'radio' &&
    // 		This.type !== 'file'
    // 	);
    // }
    /**
     * Checks is selection is supported.
     *
     * @returns "true" if selection is supported.
     */
    _isSelectionSupported() {
        return (this.type === 'text' ||
            this.type === 'search' ||
            this.type === 'url' ||
            this.type === 'tel' ||
            this.type === 'password');
    }
}
//# sourceMappingURL=HTMLInputElement.js.map