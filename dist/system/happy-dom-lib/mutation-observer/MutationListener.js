System.register([], function (exports_1, context_1) {
    "use strict";
    var MutationListener;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            /**
             * MutationObserverListener is a model for what to listen for on a Node.
             */
            MutationListener = /** @class */ (function () {
                function MutationListener() {
                    this.options = null;
                    this.callback = null;
                }
                return MutationListener;
            }());
            exports_1("default", MutationListener);
        }
    };
});
//# sourceMappingURL=MutationListener.js.map