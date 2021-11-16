define(["require", "exports"], function (require, exports) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(module_1);
    bootstrapper;
    from;
    './bootstrapper/ssr-bootstrapper-webpack';
    __export(module_2);
    ssrEngine;
    from;
    './ssr-engine/aurelia-ssr-engine';
    __export(module_3);
    palNodeJS;
    from;
    './pal-nodejs/index';
});
