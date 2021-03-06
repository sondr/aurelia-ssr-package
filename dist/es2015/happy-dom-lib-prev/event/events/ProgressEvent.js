import Event from '../Event';
/**
 *
 */
export default class ProgressEvent extends Event {
    /**
     * Constructor.
     *
     * @param type Event type.
     * @param [eventInit] Event init.
     */
    constructor(type, eventInit = null) {
        super(type);
        this.lengthComputable = false;
        this.loaded = 0;
        this.total = 0;
        if (eventInit) {
            this.lengthComputable = eventInit.lengthComputable || false;
            this.loaded = eventInit.loaded !== undefined ? eventInit.loaded : 0;
            this.total = eventInit.total !== undefined ? eventInit.total : 0;
        }
    }
}
//# sourceMappingURL=ProgressEvent.js.map