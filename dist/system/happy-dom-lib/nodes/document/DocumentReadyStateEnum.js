System.register([], function (exports_1, context_1) {
    "use strict";
    var DocumentReadyStateEnum;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            (function (DocumentReadyStateEnum) {
                DocumentReadyStateEnum["loading"] = "loading";
                DocumentReadyStateEnum["interactive"] = "interactive";
                DocumentReadyStateEnum["complete"] = "complete";
            })(DocumentReadyStateEnum || (DocumentReadyStateEnum = {}));
            exports_1("default", DocumentReadyStateEnum);
        }
    };
});
//# sourceMappingURL=DocumentReadyStateEnum.js.map