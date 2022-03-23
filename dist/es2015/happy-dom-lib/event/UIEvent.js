import Event from './Event';
/**
 *
 */
export default class UIEvent extends Event {
    /**
     * Constructor.
     *
     * @param type Event type.
     * @param [eventInit] Event init.
     */
    constructor(type, eventInit = null) {
        super(type, eventInit);
        this.detail = 0;
        this.layerX = 0;
        this.layerY = 0;
        this.pageX = 0;
        this.pageY = 0;
        this.view = null;
        if (eventInit) {
            this.detail = eventInit.detail !== undefined ? eventInit.detail : 0;
            this.view = eventInit.view || null;
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
UIEvent.NONE = 0;
UIEvent.CAPTURING_PHASE = 1;
UIEvent.AT_TARGET = 2;
UIEvent.BUBBLING_PHASE = 3;
//# sourceMappingURL=UIEvent.js.map