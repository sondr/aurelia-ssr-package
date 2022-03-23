define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * MutationObserverListener is a model for what to listen for on a Node.
     */
    var MutationListener = /** @class */ (function () {
        function MutationListener() {
            this.options = null;
            this.callback = null;
        }
        return MutationListener;
    }());
    exports.default = MutationListener;
});
