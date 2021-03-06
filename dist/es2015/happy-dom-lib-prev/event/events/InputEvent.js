import UIEvent from '../UIEvent';
/**
 *
 */
export default class InputEvent extends UIEvent {
    /**
     * Constructor.
     *
     * @param type Event type.
     * @param [eventInit] Event init.
     */
    constructor(type, eventInit = null) {
        super(type, eventInit);
        this.data = '';
        this.dataTransfer = null;
        this.inputType = '';
        this.isComposing = false;
        if (eventInit) {
            this.data = eventInit.data || '';
            this.dataTransfer = eventInit.dataTransfer || null;
            this.inputType = eventInit.inputType || '';
            this.isComposing = eventInit.isComposing || false;
        }
    }
}
//# sourceMappingURL=InputEvent.js.map