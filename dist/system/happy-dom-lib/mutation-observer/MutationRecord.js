System.register([], function (exports_1, context_1) {
    "use strict";
    var MutationRecord;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            /**
             * MutationRecord is a model for a mutation.
             *
             * @see https://developer.mozilla.org/en-US/docs/Web/API/MutationRecord
             */
            MutationRecord = /** @class */ (function () {
                function MutationRecord() {
                    this.type = null;
                    this.target = null;
                    this.addedNodes = [];
                    this.removedNodes = [];
                    this.previousSibling = null;
                    this.nextSibling = null;
                    this.attributeName = null;
                    this.attributeNamespace = null;
                    this.oldValue = null;
                }
                return MutationRecord;
            }());
            exports_1("default", MutationRecord);
        }
    };
});
//# sourceMappingURL=MutationRecord.js.map