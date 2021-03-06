import UIEvent from '../UIEvent';
/**
 *
 */
export default class ErrorEvent extends UIEvent {
    /**
     * Constructor.
     *
     * @param type Event type.
     * @param [eventInit] Event init.
     */
    constructor(type, eventInit = null) {
        super(type, eventInit);
        this.message = '';
        this.filename = '';
        this.lineno = 0;
        this.colno = 0;
        this.error = null;
        if (eventInit) {
            this.message = eventInit.message || '';
            this.filename = eventInit.filename || '';
            this.lineno = eventInit.lineno !== undefined ? eventInit.lineno : 0;
            this.colno = eventInit.colno !== undefined ? eventInit.colno : 0;
            this.error = eventInit.error || null;
        }
    }
}
//# sourceMappingURL=ErrorEvent.js.map