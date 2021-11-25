System.register([], function (exports_1, context_1) {
    "use strict";
    var FileReaderReadyStateEnum;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            (function (FileReaderReadyStateEnum) {
                FileReaderReadyStateEnum[FileReaderReadyStateEnum["empty"] = 0] = "empty";
                FileReaderReadyStateEnum[FileReaderReadyStateEnum["loading"] = 1] = "loading";
                FileReaderReadyStateEnum[FileReaderReadyStateEnum["done"] = 2] = "done";
            })(FileReaderReadyStateEnum || (FileReaderReadyStateEnum = {}));
            exports_1("default", FileReaderReadyStateEnum);
        }
    };
});
