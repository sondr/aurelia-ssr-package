System.register(["./jsdom/bootstrapper/ssr-bootstrapper-webpack", "./jsdom/ssr-engine/aurelia-ssr-engine", "./jsdom/pal-nodejs/index", "./jsdom/middleware-koa/aurelia-middleware-koa", "./happydom/bootstrapper/ssr-bootstrapper-webpack", "./happydom/ssr-engine/aurelia-ssr-engine", "./happydom/pal-nodejs/index", "./happydom/middleware-koa/aurelia-middleware-koa"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (bootstrapper_1) {
                exports_1("bootstrapper", bootstrapper_1);
            },
            function (ssrEngine_1) {
                exports_1("ssrEngine", ssrEngine_1);
            },
            function (palNodeJS_1) {
                exports_1("palNodeJS", palNodeJS_1);
            },
            function (aureliaKoaMiddleware_1) {
                exports_1("aureliaKoaMiddleware", aureliaKoaMiddleware_1);
            },
            function (happydomBootstrapper_1) {
                exports_1("happydomBootstrapper", happydomBootstrapper_1);
            },
            function (happydomSsrEngine_1) {
                exports_1("happydomSsrEngine", happydomSsrEngine_1);
            },
            function (happydomPalNodeJS_1) {
                exports_1("happydomPalNodeJS", happydomPalNodeJS_1);
            },
            function (happydomAureliaKoaMiddleware_1) {
                exports_1("happydomAureliaKoaMiddleware", happydomAureliaKoaMiddleware_1);
            }
        ],
        execute: function () {
        }
    };
});
