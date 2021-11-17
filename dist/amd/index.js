define(["require", "exports", "./jsdom/bootstrapper/ssr-bootstrapper-webpack", "./jsdom/ssr-engine/aurelia-ssr-engine", "./jsdom/pal-nodejs/index", "./jsdom/middleware-koa/aurelia-middleware-koa", "./linkedom/bootstrapper/ssr-bootstrapper-webpack", "./linkedom/ssr-engine/aurelia-ssr-engine", "./linkedom/pal-nodejs/index", "./linkedom/middleware-koa/aurelia-middleware-koa"], function (require, exports, bootstrapper, ssrEngine, palNodeJS, aureliaKoaMiddleware, linkedomBootstrapper, linkedomSsrEngine, linkedomPalNodeJS, linkedomAureliaKoaMiddleware) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.linkedomAureliaKoaMiddleware = exports.linkedomPalNodeJS = exports.linkedomSsrEngine = exports.linkedomBootstrapper = exports.aureliaKoaMiddleware = exports.palNodeJS = exports.ssrEngine = exports.bootstrapper = void 0;
    exports.bootstrapper = bootstrapper;
    exports.ssrEngine = ssrEngine;
    exports.palNodeJS = palNodeJS;
    exports.aureliaKoaMiddleware = aureliaKoaMiddleware;
    exports.linkedomBootstrapper = linkedomBootstrapper;
    exports.linkedomSsrEngine = linkedomSsrEngine;
    exports.linkedomPalNodeJS = linkedomPalNodeJS;
    exports.linkedomAureliaKoaMiddleware = linkedomAureliaKoaMiddleware;
});
