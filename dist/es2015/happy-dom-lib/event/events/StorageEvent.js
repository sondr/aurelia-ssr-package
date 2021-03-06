import Event from '../Event';
/**
 *
 */
export default class StorageEvent extends Event {
    /**
     * Constructor.
     *
     * @param type Event type.
     * @param [eventInit] Event init.
     */
    constructor(type, eventInit = null) {
        super(type);
        this.key = null;
        this.newValue = null;
        this.oldValue = null;
        this.storageArea = null;
        if (eventInit) {
            this.key = eventInit.key !== undefined ? eventInit.key : null;
            this.newValue = eventInit.newValue !== undefined ? eventInit.newValue : null;
            this.oldValue = eventInit.oldValue !== undefined ? eventInit.oldValue : null;
            this.storageArea = eventInit.storageArea !== undefined ? eventInit.storageArea : null;
        }
    }
}
//# sourceMappingURL=StorageEvent.js.map