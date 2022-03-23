import EventTarget from '../event/EventTarget';
/**
 * Media Query List.
 *
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList.
 */
export default class MediaQueryList extends EventTarget {
    constructor() {
        super(...arguments);
        this._matches = false;
        this._media = '';
        this.onchange = null;
    }
    /**
     * Returns "true" if the document matches.
     *
     * @returns Matches.
     */
    get matches() {
        return this._matches;
    }
    /**
     * Returns the serialized media query.
     *
     * @returns Serialized media query.
     */
    get media() {
        return this._media;
    }
    /**
     * Adds a listener.
     *
     * @deprecated
     * @param callback Callback.
     */
    addListener(callback) {
        this.addEventListener('change', callback);
    }
    /**
     * Removes listener.
     *
     * @deprecated
     * @param callback Callback.
     */
    removeListener(callback) {
        this.removeEventListener('change', callback);
    }
}
//# sourceMappingURL=MediaQueryList.js.map