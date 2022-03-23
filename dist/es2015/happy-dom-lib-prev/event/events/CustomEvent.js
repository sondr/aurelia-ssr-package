import Event from '../Event';
/**
 *
 */
export default class CustomEvent extends Event {
    /**
     * Constructor.
     *
     * @param type Event type.
     * @param [eventInit] Event init.
     */
    constructor(type, eventInit = null) {
        super(type, eventInit);
        this.detail = null;
        if (eventInit) {
            this.detail = eventInit.detail || null;
        }
    }
}
