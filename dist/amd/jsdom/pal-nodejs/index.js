/// <reference path="../../interface/pal-nodejs/nodejs-global.ts" />
define(["require", "exports", "aurelia-pal", "./nodejs-pal-builder", "./nodejs-pal-builder"], function (require, exports, aurelia_pal_1, nodejs_pal_builder_1, nodejs_pal_builder_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.reset = exports.globalize = exports.initialize = exports.ensurePerformance = void 0;
    Object.defineProperty(exports, "ensurePerformance", { enumerable: true, get: function () { return nodejs_pal_builder_2.ensurePerformance; } });
    /**
    * Initializes the PAL with the NodeJS-targeted implementation.
    */
    function initialize() {
        var _this = this;
        if (aurelia_pal_1.isInitialized) {
            return;
        }
        var pal = (0, nodejs_pal_builder_1.buildPal)();
        (0, aurelia_pal_1.initializePAL)(function (platform, feature, dom) {
            Object.assign(platform, pal.platform);
            Object.setPrototypeOf(platform, pal.platform.constructor.prototype);
            Object.assign(dom, pal.dom);
            Object.setPrototypeOf(dom, pal.dom.constructor.prototype);
            Object.assign(feature, pal.feature);
            Object.setPrototypeOf(feature, pal.feature.constructor.prototype);
            (function (global) {
                global.console = global.console || {};
                var con = global.console;
                var prop;
                var method;
                var empty = {};
                var dummy = function () { };
                var properties = 'memory'.split(',');
                var methods = ('assert,clear,count,debug,dir,dirxml,error,exception,group,' +
                    'groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,' +
                    'show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn').split(',');
                while (prop = properties.pop())
                    if (!con[prop])
                        con[prop] = empty;
                while (method = methods.pop())
                    if (!con[method])
                        con[method] = dummy;
            })(platform.global);
            if (platform.global.console && typeof console.log === 'object') {
                if (typeof console['debug'] === 'undefined') {
                    console['debug'] = _this.bind(console['log'], console);
                }
                ['log', 'info', 'warn', 'error', 'assert', 'dir', 'clear', 'profile', 'profileEnd'].forEach(function (method) {
                    console[method] = this.bind(console[method], console);
                }, Function.prototype.call);
            }
            Object.defineProperty(dom, 'title', {
                get: function () {
                    return pal.global.document.title;
                },
                set: function (value) {
                    pal.global.document.title = value;
                }
            });
            Object.defineProperty(dom, 'activeElement', {
                get: function () {
                    return pal.global.document.activeElement;
                }
            });
            Object.defineProperty(platform, 'XMLHttpRequest', {
                get: function () {
                    return pal.global.XMLHttpRequest;
                }
            });
        });
    }
    exports.initialize = initialize;
    // snippet copied from https://github.com/lukechilds/browser-env
    function createBrowserGlobals() {
        Object.getOwnPropertyNames(aurelia_pal_1.PLATFORM.global)
            // avoid conflict with nodejs globals
            .filter(function (prop) { return typeof global[prop] === 'undefined'; })
            .forEach(function (prop) { return global[prop] = aurelia_pal_1.PLATFORM.global[prop]; });
    }
    /**
     * @description initializes and makes variables like 'window' into NodeJS globals
     */
    function globalize() {
        initialize();
        createBrowserGlobals();
        global.System = {
            import: function (moduleId) {
                try {
                    return Promise.resolve(require(moduleId));
                }
                catch (e) {
                    return Promise.reject(e);
                }
            }
        };
        global.PAL = {
            DOM: aurelia_pal_1.DOM,
            PLATFORM: aurelia_pal_1.PLATFORM,
            FEATURE: aurelia_pal_1.FEATURE
        };
        return global;
    }
    exports.globalize = globalize;
    function reset(window) {
        if (window) {
            window.close();
        }
    }
    exports.reset = reset;
});
//# sourceMappingURL=index.js.map