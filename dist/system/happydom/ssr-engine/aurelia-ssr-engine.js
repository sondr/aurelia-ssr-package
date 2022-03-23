System.register(["./reflect", "./property-descriptor", "./transformers", "./cleanup"], function (exports_1, context_1) {
    "use strict";
    var transformers_1, cleanup_1;
    var __moduleName = context_1 && context_1.id;
    function render(options, initOptions) {
        if (!options.url) {
            throw new Error('url is required when calling render()');
        }
        if (!options.template) {
            throw new Error('template is required when calling render()');
        }
        if (!initOptions.main) {
            throw new Error('main property is required');
        }
        // this allows you to see aurelia logging in cmd/terminal
        // logging a lot of messages isn't good for performance though
        // so we need to set the loglevel in the app to something other than debug
        console.debug = console.log;
        // we'll want new instances of aurelia-pal and aurelia-pal-nodejs
        // because aurelia-pal holds the reference to the DOM
        delete require.cache[require.resolve('aurelia-pal')];
        delete require.cache[require.resolve('../pal-nodejs/index')];
        //delete require.cache[require.resolve('aurelia-pal-nodejs')];
        return start(initOptions, options.url.toString(), options.headers)
            .then(function (ctx) {
            var document = ctx.pal.DOM.global.document;
            setInputDefaultValues(document.body);
            var html = transformers_1.transform({ aurelia: ctx.aurelia, document: document }, options);
            ctx.stop();
            cleanup_1.cleanup(options);
            return html;
        });
    }
    exports_1("render", render);
    // <input> .value property does not map to @value attribute, .defaultValue does.
    // so we need to copy that value over if we want it to serialize into HTML <input value="">
    // without this there isn't a value attribute on any of the input tags
    function setInputDefaultValues(body) {
        var inputTags = Array.prototype.slice.call(body.querySelectorAll('input'));
        for (var i = 0; i < inputTags.length; i++) {
            var input = inputTags[i];
            if (input.value != null) {
                input.defaultValue = input.value;
            }
        }
    }
    function start(options, requestUrl, headers) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        console.log("engine start");
        var _j = options.main(), initialize = _j.initialize, start = _j.start;
        console.log("engine opts got");
        var PLATFORM = initialize().PLATFORM;
        console.log("engine opts initialized");
        // url of jsdom should be equal to the request url
        // this dictates what page aurelia loads on startup
        if ((_c = (_b = (_a = PLATFORM === null || PLATFORM === void 0 ? void 0 : PLATFORM.jsdom) === null || _a === void 0 ? void 0 : _a.window) === null || _b === void 0 ? void 0 : _b.location) === null || _c === void 0 ? void 0 : _c.replace) {
            (_e = (_d = PLATFORM === null || PLATFORM === void 0 ? void 0 : PLATFORM.jsdom) === null || _d === void 0 ? void 0 : _d.window) === null || _e === void 0 ? void 0 : _e.location.replace(requestUrl);
        }
        else if ((_g = (_f = PLATFORM === null || PLATFORM === void 0 ? void 0 : PLATFORM.jsdom) === null || _f === void 0 ? void 0 : _f.location) === null || _g === void 0 ? void 0 : _g.replace) {
            (_h = PLATFORM === null || PLATFORM === void 0 ? void 0 : PLATFORM.jsdom) === null || _h === void 0 ? void 0 : _h.location.replace(requestUrl);
        }
        return typeof headers !== 'undefined' ? start(headers) : start();
    }
    return {
        setters: [
            function (_1) {
            },
            function (_2) {
            },
            function (transformers_1_1) {
                transformers_1 = transformers_1_1;
            },
            function (cleanup_1_1) {
                cleanup_1 = cleanup_1_1;
            }
        ],
        execute: function () {
        }
    };
});
//# sourceMappingURL=aurelia-ssr-engine.js.map