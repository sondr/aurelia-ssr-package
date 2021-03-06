import DOMException from '../exception/DOMException';
import MutationObserverListener from './MutationListener';
/**
 * The MutationObserver interface provides the ability to watch for changes being made to the DOM tree.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
 */
var MutationObserver = /** @class */ (function () {
    /**
     * Constructor.
     *
     * @param callback Callback.
     */
    function MutationObserver(callback) {
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
    MutationObserver.prototype.observe = function (target, options) {
        if (!target) {
            throw new DOMException('Failed to observer. The first parameter "target" should be of type "Node".');
        }
        options = Object.assign({}, options, {
            attributeFilter: options.attributeFilter
                ? options.attributeFilter.map(function (name) { return name.toLowerCase(); })
                : null
        });
        this.target = target;
        this.listener = new MutationObserverListener();
        this.listener.options = options;
        this.listener.callback = this.callback.bind(this);
        target._observe(this.listener);
    };
    /**
     * Disconnects.
     */
    MutationObserver.prototype.disconnect = function () {
        this.target._unobserve(this.listener);
    };
    /**
     * Takes records.
     */
    MutationObserver.prototype.takeRecords = function () {
        return [];
    };
    return MutationObserver;
}());
export default MutationObserver;
//# sourceMappingURL=MutationObserver.js.map