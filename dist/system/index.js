System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters: [],
        execute: function () {
            bootstrapper;
            from;
            './bootstrapper/ssr-bootstrapper-webpack';
            ssrEngine;
            from;
            './ssr-engine/aurelia-ssr-engine';
            palNodeJS;
            from;
            './pal-nodejs/index';
        }
    };
});
