import UIEvent from '../UIEvent';
/**
 *
 */
export default class MouseEvent extends UIEvent {
    /**
     * Constructor.
     *
     * @param type Event type.
     * @param [eventInit] Event init.
     */
    constructor(type, eventInit = null) {
        super(type, eventInit);
        this.altKey = false;
        this.button = 0;
        this.buttons = 0;
        this.clientX = 0;
        this.clientY = 0;
        this.ctrlKey = false;
        this.metaKey = false;
        this.movementX = 0;
        this.movementY = 0;
        this.offsetX = 0;
        this.offsetY = 0;
        this.region = '';
        this.relatedTarget = null;
        this.screenX = 0;
        this.screenY = 0;
        this.shiftKey = false;
        if (eventInit) {
            this.altKey = eventInit.altKey || false;
            this.button = eventInit.button !== undefined ? eventInit.button : 0;
            this.buttons = eventInit.buttons !== undefined ? eventInit.buttons : 0;
            this.clientX = eventInit.clientX !== undefined ? eventInit.clientX : 0;
            this.clientY = eventInit.clientY !== undefined ? eventInit.clientY : 0;
            this.ctrlKey = eventInit.ctrlKey || false;
            this.metaKey = eventInit.metaKey || false;
            this.region = eventInit.region || '';
            this.relatedTarget = eventInit.relatedTarget || null;
            this.screenX = eventInit.screenX !== undefined ? eventInit.screenX : 0;
            this.screenY = eventInit.screenY !== undefined ? eventInit.screenY : 0;
            this.shiftKey = eventInit.shiftKey || false;
        }
    }
}
//# sourceMappingURL=MouseEvent.js.map