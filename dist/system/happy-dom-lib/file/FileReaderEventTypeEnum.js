System.register([], function (exports_1, context_1) {
    "use strict";
    var FileReaderEventTypeEnum;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            (function (FileReaderEventTypeEnum) {
                FileReaderEventTypeEnum["abort"] = "abort";
                FileReaderEventTypeEnum["error"] = "error";
                FileReaderEventTypeEnum["load"] = "load";
                FileReaderEventTypeEnum["loadstart"] = "loadstart";
                FileReaderEventTypeEnum["loadend"] = "loadend";
                FileReaderEventTypeEnum["progress"] = "progress";
            })(FileReaderEventTypeEnum || (FileReaderEventTypeEnum = {}));
            exports_1("default", FileReaderEventTypeEnum);
        }
    };
});
//# sourceMappingURL=FileReaderEventTypeEnum.js.map