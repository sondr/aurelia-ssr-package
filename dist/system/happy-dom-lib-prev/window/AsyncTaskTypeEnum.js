System.register([], function (exports_1, context_1) {
    "use strict";
    var AsyncTaskTypeEnum;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            (function (AsyncTaskTypeEnum) {
                AsyncTaskTypeEnum["timer"] = "timer";
                AsyncTaskTypeEnum["fetch"] = "fetch";
            })(AsyncTaskTypeEnum || (AsyncTaskTypeEnum = {}));
            exports_1("default", AsyncTaskTypeEnum);
        }
    };
});
//# sourceMappingURL=AsyncTaskTypeEnum.js.map