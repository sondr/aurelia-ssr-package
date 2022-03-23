/**
 * URLSearchParams.
 *
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams.
 */
export default class URLSearchParams {
    /**
     * Constructor.
     *
     * @param [params] Params string.
     */
    constructor(params) {
        this._params = [];
        if (params) {
            for (const entry of params.split('&')) {
                const [name, value] = entry.split('=');
                if (name) {
                    this._params.push([name, value]);
                }
            }
        }
    }
    /**
     * Appends a specified key/value pair as a new search parameter.
     *
     * @param name Name.
     * @param value Value.
     */
    append(name, value) {
        this._params.push([name, value]);
    }
    /**
     * Deletes the given search parameter, and its associated value, from the list of all search parameters.
     *
     * @param name Name.
     */
    delete(name) {
        for (let i = 0, max = this._params.length; i < max; i++) {
            if (this._params[i][0] === name) {
                this._params.splice(i, 1);
                i--;
                max--;
            }
        }
    }
    /**
     * Returns an iterator.
     *
     * @returns Entries.
     */
    entries() {
        const params = this._params;
        const Iterator = function Iterator() {
            let index = 0;
            this.next = () => {
                const value = params[index];
                const done = index >= params.length;
                index++;
                return { value, done: done };
            };
            this[Symbol.iterator] = () => new Iterator();
        };
        return new Iterator();
    }
    /**
     * For each.
     *
     * @param callback Callback.
     */
    forEach(callback) {
        for (const param of this._params) {
            callback(param[0], param[1]);
        }
    }
    /**
     * Returns value.
     *
     * @param name Name.
     */
    get(name) {
        for (const param of this._params) {
            if (param[0] === name) {
                return param[1];
            }
        }
        return undefined;
    }
    /**
     * Returns all values associated with a name.
     *
     * @param name Name.
     * @returns Values.
     */
    getAll(name) {
        const values = [];
        for (const param of this._params) {
            if (param[0] === name) {
                values.push(param[1]);
            }
        }
        return values;
    }
    /**
     * Returns "true" if param exists.
     *
     * @param name Name.
     * @returns "true" if param exists.
     */
    has(name) {
        for (const param of this._params) {
            if (param[0] === name) {
                return true;
            }
        }
        return false;
    }
    /**
     * Returns an iterator.
     *
     * @returns Keys iterator.
     */
    keys() {
        const params = this._params;
        const Iterator = function Iterator() {
            let index = 0;
            this.next = () => {
                const value = params[index] !== undefined ? params[index][0] : undefined;
                const done = index >= params.length;
                index++;
                return { value, done: done };
            };
            this[Symbol.iterator] = () => new Iterator();
        };
        return new Iterator();
    }
    /**
     * Sets the value associated with a given search parameter to the given value. If there are several values, the others are deleted.
     *
     * @param name Name.
     * @param value Value.
     */
    set(name, value) {
        this.delete(name);
        this.append(name, value);
    }
    /**
     * Sorts all key/value pairs, if any, by their keys.
     */
    sort() {
        this._params.sort((a, b) => {
            if (a[0] < b[0]) {
                return -1;
            }
            else if (a[0] > b[0]) {
                return 1;
            }
            return 0;
        });
    }
    /**
     * Returns a string containing a query string suitable for use in a URL.
     */
    toString() {
        return this._params.map(param => param.join('=')).join('&');
    }
    /**
     * Returns an iterator.
     *
     * @returns Values iterator.
     */
    values() {
        const params = this._params;
        const Iterator = function Iterator() {
            let index = 0;
            this.next = () => {
                const value = params[index] !== undefined ? params[index][1] : undefined;
                const done = index >= params.length;
                index++;
                return { value, done: done };
            };
            this[Symbol.iterator] = () => new Iterator();
        };
        return new Iterator();
    }
}
//# sourceMappingURL=URLSearchParams.js.map