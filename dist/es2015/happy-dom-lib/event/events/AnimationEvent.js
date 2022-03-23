import Event from '../Event';
/**
 *
 */
export default class AnimationEvent extends Event {
    /**
     * Constructor.
     *
     * @param type Event type.
     * @param [eventInit] Event init.
     */
    constructor(type, eventInit) {
        super(type, eventInit);
        this.animationName = '';
        this.elapsedTime = 0;
        this.pseudoElement = '';
        this.animationName = (eventInit === null || eventInit === void 0 ? void 0 : eventInit.animationName) || '';
        this.elapsedTime = (eventInit === null || eventInit === void 0 ? void 0 : eventInit.elapsedTime) || 0;
        this.pseudoElement = (eventInit === null || eventInit === void 0 ? void 0 : eventInit.pseudoElement) || '';
    }
}
//# sourceMappingURL=AnimationEvent.js.map