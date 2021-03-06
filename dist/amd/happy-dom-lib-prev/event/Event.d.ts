import IEventInit from './IEventInit';
import EventTarget from './EventTarget';
/**
 *
 */
export default class Event {
    composed: boolean;
    currentTarget: EventTarget;
    target: EventTarget;
    bubbles: boolean;
    cancelable: boolean;
    defaultPrevented: boolean;
    _immediatePropagationStopped: boolean;
    _propagationStopped: boolean;
    type: string;
    /**
     * Constructor.
     *
     * @param type Event type.
     * @param [eventInit] Event init.
     */
    constructor(type: string, eventInit?: IEventInit);
    /**
     * Init event.
     *
     * @deprecated
     * @param type Type.
     * @param [bubbles=false] "true" if it bubbles.
     * @param [cancelable=false] "true" if it cancelable.
     */
    initEvent(type: string, bubbles?: boolean, cancelable?: boolean): void;
    /**
     * Prevents default.
     */
    preventDefault(): void;
    /**
     * Stops immediate propagation.
     */
    stopImmediatePropagation(): void;
    /**
     * Stops propagation.
     */
    stopPropagation(): void;
}
