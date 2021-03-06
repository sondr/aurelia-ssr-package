/**
 * Input validity state.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/ValidityState
 */
export default class ValidityState {
    /**
     * Constructor.
     *
     * @param element Input element.
     */
    constructor(element) {
        this.badInput = false;
        this.customError = false;
        this.patternMismatch = false;
        this.rangeOverflow = false;
        this.rangeUnderflow = false;
        this.stepMismatch = false;
        this.element = null;
        this.element = element;
    }
    /**
     * Returns validity.
     *
     * @returns "true" if valid.
     */
    get tooLong() {
        return this.element.maxLength && this.element.value.length > this.element.maxLength;
    }
    /**
     * Returns validity.
     *
     * @returns "true" if valid.
     */
    get tooShort() {
        return this.element.minLength && this.element.value.length < this.element.minLength;
    }
    /**
     * Returns validity.
     *
     * @returns "true" if valid.
     */
    get typeMismatch() {
        return false;
    }
    /**
     * Returns validity.
     *
     * @returns "true" if valid.
     */
    get valueMissing() {
        return this.element.required && !this.element.value;
    }
    /**
     * Returns validity.
     *
     * @returns "true" if valid.
     */
    get valid() {
        for (const key of Object.keys(this)) {
            if (this[key]) {
                return false;
            }
        }
        return !this.tooLong && !this.tooShort && !this.typeMismatch && !this.valueMissing;
    }
}
//# sourceMappingURL=ValidityState.js.map