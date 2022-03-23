var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
define(["require", "exports", "./jsdom/bootstrapper/ssr-bootstrapper-webpack", "./jsdom/ssr-engine/aurelia-ssr-engine", "./jsdom/pal-nodejs/index", "./jsdom/middleware-koa/aurelia-middleware-koa", "./happydom/bootstrapper/ssr-bootstrapper-webpack", "./happydom/ssr-engine/aurelia-ssr-engine", "./happydom/pal-nodejs/index", "./happydom/middleware-koa/aurelia-middleware-koa"], function (require, exports, bootstrapper, ssrEngine, palNodeJS, aureliaKoaMiddleware, happydomBootstrapper, happydomSsrEngine, happydomPalNodeJS, happydomAureliaKoaMiddleware) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.happydomAureliaKoaMiddleware = exports.happydomPalNodeJS = exports.happydomSsrEngine = exports.happydomBootstrapper = exports.aureliaKoaMiddleware = exports.palNodeJS = exports.ssrEngine = exports.bootstrapper = void 0;
    exports.bootstrapper = __importStar(bootstrapper);
    exports.ssrEngine = __importStar(ssrEngine);
    exports.palNodeJS = __importStar(palNodeJS);
    exports.aureliaKoaMiddleware = __importStar(aureliaKoaMiddleware);
    exports.happydomBootstrapper = __importStar(happydomBootstrapper);
    exports.happydomSsrEngine = __importStar(happydomSsrEngine);
    exports.happydomPalNodeJS = __importStar(happydomPalNodeJS);
    exports.happydomAureliaKoaMiddleware = __importStar(happydomAureliaKoaMiddleware);
});
//# sourceMappingURL=index.js.map