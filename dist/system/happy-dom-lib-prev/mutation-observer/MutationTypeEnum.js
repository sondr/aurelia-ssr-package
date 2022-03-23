System.register([], function (exports_1, context_1) {
    "use strict";
    var MutationTypeEnum;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            (function (MutationTypeEnum) {
                MutationTypeEnum["attributes"] = "attributes";
                MutationTypeEnum["characterData"] = "characterData";
                MutationTypeEnum["childList"] = "childList";
            })(MutationTypeEnum || (MutationTypeEnum = {}));
            exports_1("default", MutationTypeEnum);
        }
    };
});
