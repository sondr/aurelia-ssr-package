/**
 * DOM Exception.
 *
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/DOMException/DOMException.
 */
export default class DOMException extends Error {
    /**
     * Constructor.
     *
     * @param message Message.
     * @param name Name.
     */
    constructor(message, name = null) {
        super(message);
        if (name) {
            this.name = name;
        }
    }
}
//# sourceMappingURL=DOMException.js.map