/**
 *
 */
export default class Event {
    /**
     * Constructor.
     *
     * @param type Event type.
     * @param [eventInit] Event init.
     */
    constructor(type, eventInit = null) {
        this.composed = false;
        this.currentTarget = null;
        this.target = null;
        this.bubbles = false;
        this.cancelable = false;
        this.defaultPrevented = false;
        this._immediatePropagationStopped = false;
        this._propagationStopped = false;
        this.type = null;
        this.type = type;
        if (eventInit) {
            this.bubbles = eventInit.bubbles || false;
            this.cancelable = eventInit.cancelable || false;
            this.composed = eventInit.composed || false;
        }
    }
    /**
     * Init event.
     *
     * @deprecated
     * @param type Type.
     * @param [bubbles=false] "true" if it bubbles.
     * @param [cancelable=false] "true" if it cancelable.
     */
    initEvent(type, bubbles = false, cancelable = false) {
        this.type = type;
        this.bubbles = bubbles;
        this.cancelable = cancelable;
    }
    /**
     * Prevents default.
     */
    preventDefault() {
        this.defaultPrevented = true;
    }
    /**
     * Stops immediate propagation.
     */
    stopImmediatePropagation() {
        this._immediatePropagationStopped = true;
    }
    /**
     * Stops propagation.
     */
    stopPropagation() {
        this._propagationStopped = true;
    }
}
