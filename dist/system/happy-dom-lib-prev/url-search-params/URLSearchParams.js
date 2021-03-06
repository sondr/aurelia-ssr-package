System.register([], function (exports_1, context_1) {
    "use strict";
    var URLSearchParams;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            /**
             * URLSearchParams.
             *
             * Reference:
             * https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams.
             */
            URLSearchParams = /** @class */ (function () {
                /**
                 * Constructor.
                 *
                 * @param [params] Params string.
                 */
                function URLSearchParams(params) {
                    this._params = [];
                    if (params) {
                        for (var _i = 0, _a = params.split('&'); _i < _a.length; _i++) {
                            var entry = _a[_i];
                            var _b = entry.split('='), name_1 = _b[0], value = _b[1];
                            if (name_1) {
                                this._params.push([name_1, value]);
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
                URLSearchParams.prototype.append = function (name, value) {
                    this._params.push([name, value]);
                };
                /**
                 * Deletes the given search parameter, and its associated value, from the list of all search parameters.
                 *
                 * @param name Name.
                 */
                URLSearchParams.prototype.delete = function (name) {
                    for (var i = 0, max = this._params.length; i < max; i++) {
                        if (this._params[i][0] === name) {
                            this._params.splice(i, 1);
                            i--;
                            max--;
                        }
                    }
                };
                /**
                 * Returns an iterator.
                 *
                 * @returns Entries.
                 */
                URLSearchParams.prototype.entries = function () {
                    var params = this._params;
                    var Iterator = function Iterator() {
                        var index = 0;
                        this.next = function () {
                            var value = params[index];
                            var done = index >= params.length;
                            index++;
                            return { value: value, done: done };
                        };
                        this[Symbol.iterator] = function () { return new Iterator(); };
                    };
                    return new Iterator();
                };
                /**
                 * For each.
                 *
                 * @param callback Callback.
                 */
                URLSearchParams.prototype.forEach = function (callback) {
                    for (var _i = 0, _a = this._params; _i < _a.length; _i++) {
                        var param = _a[_i];
                        callback(param[0], param[1]);
                    }
                };
                /**
                 * Returns value.
                 *
                 * @param name Name.
                 */
                URLSearchParams.prototype.get = function (name) {
                    for (var _i = 0, _a = this._params; _i < _a.length; _i++) {
                        var param = _a[_i];
                        if (param[0] === name) {
                            return param[1];
                        }
                    }
                    return undefined;
                };
                /**
                 * Returns all values associated with a name.
                 *
                 * @param name Name.
                 * @returns Values.
                 */
                URLSearchParams.prototype.getAll = function (name) {
                    var values = [];
                    for (var _i = 0, _a = this._params; _i < _a.length; _i++) {
                        var param = _a[_i];
                        if (param[0] === name) {
                            values.push(param[1]);
                        }
                    }
                    return values;
                };
                /**
                 * Returns "true" if param exists.
                 *
                 * @param name Name.
                 * @returns "true" if param exists.
                 */
                URLSearchParams.prototype.has = function (name) {
                    for (var _i = 0, _a = this._params; _i < _a.length; _i++) {
                        var param = _a[_i];
                        if (param[0] === name) {
                            return true;
                        }
                    }
                    return false;
                };
                /**
                 * Returns an iterator.
                 *
                 * @returns Keys iterator.
                 */
                URLSearchParams.prototype.keys = function () {
                    var params = this._params;
                    var Iterator = function Iterator() {
                        var index = 0;
                        this.next = function () {
                            var value = params[index] !== undefined ? params[index][0] : undefined;
                            var done = index >= params.length;
                            index++;
                            return { value: value, done: done };
                        };
                        this[Symbol.iterator] = function () { return new Iterator(); };
                    };
                    return new Iterator();
                };
                /**
                 * Sets the value associated with a given search parameter to the given value. If there are several values, the others are deleted.
                 *
                 * @param name Name.
                 * @param value Value.
                 */
                URLSearchParams.prototype.set = function (name, value) {
                    this.delete(name);
                    this.append(name, value);
                };
                /**
                 * Sorts all key/value pairs, if any, by their keys.
                 */
                URLSearchParams.prototype.sort = function () {
                    this._params.sort(function (a, b) {
                        if (a[0] < b[0]) {
                            return -1;
                        }
                        else if (a[0] > b[0]) {
                            return 1;
                        }
                        return 0;
                    });
                };
                /**
                 * Returns a string containing a query string suitable for use in a URL.
                 */
                URLSearchParams.prototype.toString = function () {
                    return this._params.map(function (param) { return param.join('='); }).join('&');
                };
                /**
                 * Returns an iterator.
                 *
                 * @returns Values iterator.
                 */
                URLSearchParams.prototype.values = function () {
                    var params = this._params;
                    var Iterator = function Iterator() {
                        var index = 0;
                        this.next = function () {
                            var value = params[index] !== undefined ? params[index][1] : undefined;
                            var done = index >= params.length;
                            index++;
                            return { value: value, done: done };
                        };
                        this[Symbol.iterator] = function () { return new Iterator(); };
                    };
                    return new Iterator();
                };
                return URLSearchParams;
            }());
            exports_1("default", URLSearchParams);
        }
    };
});
//# sourceMappingURL=URLSearchParams.js.map