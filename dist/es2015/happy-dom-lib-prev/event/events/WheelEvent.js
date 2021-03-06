import UIEvent from '../UIEvent';
/**
 *
 */
export default class WheelEvent extends UIEvent {
    /**
     * Constructor.
     *
     * @param type Event type.
     * @param [eventInit] Event init.
     */
    constructor(type, eventInit = null) {
        super(type, eventInit);
        this.deltaX = 0;
        this.deltaY = 0;
        this.deltaZ = 0;
        this.deltaMode = 0;
        if (eventInit) {
            this.deltaX = eventInit.deltaX !== undefined ? eventInit.deltaX : 0;
            this.deltaY = eventInit.deltaY !== undefined ? eventInit.deltaY : 0;
            this.deltaZ = eventInit.deltaZ !== undefined ? eventInit.deltaZ : 0;
            this.deltaMode = eventInit.deltaMode !== undefined ? eventInit.deltaMode : 0;
        }
    }
}
WheelEvent.DOM_DELTA_PIXEL = 0;
WheelEvent.DOM_DELTA_LINE = 1;
WheelEvent.DOM_DELTA_PAGE = 2;
//# sourceMappingURL=WheelEvent.js.map