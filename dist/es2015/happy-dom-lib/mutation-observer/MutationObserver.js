import DOMException from '../exception/DOMException';
import MutationObserverListener from './MutationListener';
/**
 * The MutationObserver interface provides the ability to watch for changes being made to the DOM tree.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
 */
export default class MutationObserver {
    /**
     * Constructor.
     *
     * @param callback Callback.
     */
    constructor(callback) {
        this.target = null;
        this.listener = null;
        this.callback = callback;
    }
    /**
     * Starts observing.
     *
     * @param target Target.
     * @param options Options.
     */
    observe(target, options) {
        if (!target) {
            throw new DOMException('Failed to observer. The first parameter "target" should be of type "Node".');
        }
        options = Object.assign({}, options, {
            attributeFilter: options.attributeFilter
                ? options.attributeFilter.map((name) => name.toLowerCase())
                : null
        });
        this.target = target;
        this.listener = new MutationObserverListener();
        this.listener.options = options;
        this.listener.callback = this.callback.bind(this);
        target._observe(this.listener);
    }
    /**
     * Disconnects.
     */
    disconnect() {
        this.target._unobserve(this.listener);
    }
    /**
     * Takes records.
     */
    takeRecords() {
        return [];
    }
}
