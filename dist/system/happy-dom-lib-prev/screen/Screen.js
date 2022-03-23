System.register([], function (exports_1, context_1) {
    "use strict";
    var Screen;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            /**
             *
             */
            Screen = /** @class */ (function () {
                function Screen() {
                    this.width = 1024;
                    this.height = 768;
                    this.availWidth = 1024;
                    this.availHeight = 768;
                    this.colorDepth = 24;
                    this.pixelDepth = 24;
                }
                return Screen;
            }());
            exports_1("default", Screen);
        }
    };
});
//# sourceMappingURL=Screen.js.map