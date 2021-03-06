import Window from '../window/Window';
import Event from './Event';
import IUIEventInit from './IUIEventInit';
/**
 *
 */
export default class UIEvent extends Event {
    static NONE: number;
    static CAPTURING_PHASE: number;
    static AT_TARGET: number;
    static BUBBLING_PHASE: number;
    readonly detail: number;
    readonly layerX: number;
    readonly layerY: number;
    readonly pageX: number;
    readonly pageY: number;
    readonly view: Window;
    /**
     * Constructor.
     *
     * @param type Event type.
     * @param [eventInit] Event init.
     */
    constructor(type: string, eventInit?: IUIEventInit);
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
