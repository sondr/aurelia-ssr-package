import UIEvent from '../UIEvent';
/**
 *
 */
export default class FocusEvent extends UIEvent {
    /**
     * Constructor.
     *
     * @param type Event type.
     * @param [eventInit] Event init.
     */
    constructor(type, eventInit = null) {
        super(type, eventInit);
        this.relatedTarget = null;
        if (eventInit) {
            this.relatedTarget = eventInit.relatedTarget || null;
        }
    }
}
