define(["require", "exports"], function (require, exports) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(module_1);
    bootstrapper;
    from;
    './jsdom/bootstrapper/ssr-bootstrapper-webpack';
    __export(module_2);
    ssrEngine;
    from;
    './jsdom/ssr-engine/aurelia-ssr-engine';
    __export(module_3);
    palNodeJS;
    from;
    './jsdom/pal-nodejs/index';
    __export(module_4);
    aureliaKoaMiddleware;
    from;
    './jsdom/middleware-koa/aurelia-middleware-koa';
    __export(module_5);
    linkedomBootstrapper;
    from;
    './linkedom/bootstrapper/ssr-bootstrapper-webpack';
    __export(module_6);
    linkedomSsrEngine;
    from;
    './linkedom/ssr-engine/aurelia-ssr-engine';
    __export(module_7);
    linkedomPalNodeJS;
    from;
    './linkedom/pal-nodejs/index';
    __export(module_8);
    linkedomAureliaKoaMiddleware;
    from;
    './linkedom/middleware-koa/aurelia-middleware-koa';
});
