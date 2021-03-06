System.register([], function (exports_1, context_1) {
    "use strict";
    var DocumentReadyStateManager;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            /**
             * Document ready state manager.
             */
            DocumentReadyStateManager = /** @class */ (function () {
                /**
                 * Constructor.
                 *
                 * @param window
                 */
                function DocumentReadyStateManager(window) {
                    this.totalTasks = 0;
                    this.readyStateCallbacks = [];
                    this.window = null;
                    this.timer = null;
                    this.isComplete = false;
                    this.window = window;
                }
                /**
                 * Returns a promise that is fulfilled when ready state is complete.
                 *
                 * @returns Promise.
                 */
                DocumentReadyStateManager.prototype.whenComplete = function () {
                    var _this = this;
                    return new Promise(function (resolve) {
                        if (_this.isComplete) {
                            resolve();
                        }
                        else {
                            _this.readyStateCallbacks.push(resolve);
                            if (_this.totalTasks === 0 && !_this.timer) {
                                _this.timer = _this.window.setTimeout(_this.endTask.bind(_this));
                            }
                        }
                    });
                };
                /**
                 * Starts a task.
                 */
                DocumentReadyStateManager.prototype.startTask = function () {
                    if (this.isComplete) {
                        return;
                    }
                    if (this.timer) {
                        this.window.clearTimeout(this.timer);
                        this.timer = null;
                    }
                    this.totalTasks++;
                };
                /**
                 * Ends a task.
                 */
                DocumentReadyStateManager.prototype.endTask = function () {
                    if (this.isComplete) {
                        return;
                    }
                    if (this.timer) {
                        this.window.clearTimeout(this.timer);
                        this.timer = null;
                    }
                    this.totalTasks--;
                    if (this.totalTasks <= 0) {
                        var callbacks = this.readyStateCallbacks;
                        this.readyStateCallbacks = [];
                        this.isComplete = true;
                        for (var _i = 0, callbacks_1 = callbacks; _i < callbacks_1.length; _i++) {
                            var callback = callbacks_1[_i];
                            callback();
                        }
                    }
                };
                return DocumentReadyStateManager;
            }());
            exports_1("default", DocumentReadyStateManager);
        }
    };
});
//# sourceMappingURL=DocumentReadyStateManager.js.map