/**
 * Handles events.
 */
export default class EventTarget {
    constructor() {
        this._listeners = {};
    }
    /**
     * Adds an event listener.
     *
     * @param type Event type.
     * @param listener Listener.
     */
    addEventListener(type, listener) {
        this._listeners[type] = this._listeners[type] || [];
        this._listeners[type].push(listener);
    }
    /**
     * Adds an event listener.
     *
     * @param type Event type.
     * @param listener Listener.
     */
    removeEventListener(type, listener) {
        if (this._listeners[type]) {
            const index = this._listeners[type].indexOf(listener);
            if (index !== -1) {
                this._listeners[type].splice(index, 1);
            }
        }
    }
    /**
     * Dispatches an event.
     *
     * @param event Event.
     * @returns The return value is false if event is cancelable and at least one of the event handlers which handled this event called Event.preventDefault().
     */
    dispatchEvent(event) {
        if (!event.target) {
            event.target = this;
        }
        event.currentTarget = this;
        const onEventName = 'on' + event.type.toLowerCase();
        if (typeof this[onEventName] === 'function') {
            this[onEventName].call(this, event);
        }
        if (this._listeners[event.type]) {
            for (const listener of this._listeners[event.type]) {
                if (listener.handleEvent) {
                    listener.handleEvent(event);
                }
                else {
                    listener.call(this, event);
                }
                if (event._immediatePropagationStopped) {
                    return !(event.cancelable && event.defaultPrevented);
                }
            }
        }
        return !(event.cancelable && event.defaultPrevented);
    }
    /**
     * Adds an event listener.
     *
     * This is only supported by IE8- and Opera, but for some reason React uses it and calls it, so therefore we will keep support for it until they stop using it.
     *
     * @param type Event type.
     * @param listener Listener.
     */
    attachEvent(type, listener) {
        this.addEventListener(type.replace('on', ''), listener);
    }
}
//# sourceMappingURL=EventTarget.js.map