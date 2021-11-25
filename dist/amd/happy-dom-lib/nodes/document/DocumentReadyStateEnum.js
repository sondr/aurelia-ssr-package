define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DocumentReadyStateEnum;
    (function (DocumentReadyStateEnum) {
        DocumentReadyStateEnum["loading"] = "loading";
        DocumentReadyStateEnum["interactive"] = "interactive";
        DocumentReadyStateEnum["complete"] = "complete";
    })(DocumentReadyStateEnum || (DocumentReadyStateEnum = {}));
    exports.default = DocumentReadyStateEnum;
});