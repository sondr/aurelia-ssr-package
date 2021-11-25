define(["require", "exports", "../ssr-engine/aurelia-ssr-engine"], function (require, exports, aurelia_ssr_engine_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.aureliaKoaMiddleware = void 0;
    var aureliaKoaMiddleware = function (renderOptions, initializationOptions) {
        return function (ctx, next) {
            var url = ctx.request.URL;
            var pathname = url.pathname;
            // skip requests where urls have an extension
            var extensionMatcher = /^.*\.[^\\]+$/;
            if (pathname.match(extensionMatcher)) {
                return next();
            }
            // set client request headers
            renderOptions.headers = Object.assign({}, ctx.req.headers);
            return (0, aurelia_ssr_engine_1.render)(Object.assign({ url: url }, renderOptions), initializationOptions)
                .then(function (html) {
                ctx.body = html;
            })
                .catch(function (e) {
                ctx.body = "<html><body>Failed to render ".concat(pathname, "</body></html>");
                console.log("Failed to render ".concat(pathname));
                console.log(e);
            });
        };
    };
    exports.aureliaKoaMiddleware = aureliaKoaMiddleware;
});
