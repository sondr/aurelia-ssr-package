System.register(["./nodejs-platform", "./nodejs-feature", "./nodejs-dom", "../../happy-dom-lib/index"], function (exports_1, context_1) {
    "use strict";
    var nodejs_platform_1, nodejs_feature_1, nodejs_dom_1, hd, intersectSetter, intersectMethod;
    var __moduleName = context_1 && context_1.id;
    function buildPal() {
        // https://github.com/jsdom/jsdom/issues/2304
        // set url to enable global var localStorage and sessionStorage
        // var jsdom = new JSDOM(undefined, { url: "http://localhost/" });
        // var global: IGlobal = <IGlobal>jsdom.window;
        var happyDom = new hd.Window();
        happyDom.window.location.replace('http://localhost/');
        var global = happyDom.window;
        ensurePerformance(global.window);
        var platform = new nodejs_platform_1.NodeJsPlatform(global, happyDom);
        var dom = new nodejs_dom_1.NodeJsDom(global);
        var feature = new nodejs_feature_1.NodeJsFeature(global);
        return {
            global: global,
            platform: platform,
            dom: dom,
            feature: feature
        };
    }
    exports_1("buildPal", buildPal);
    function ensurePerformance(window) {
        var _entries = [];
        var _marksIndex = {};
        function _filterEntries(key, value) {
            var i = 0, n = _entries.length, result = [];
            for (; i < n; i++) {
                if (_entries[i][key] == value) {
                    result.push(_entries[i]);
                }
            }
            return result;
        }
        function _clearEntries(type, name) {
            var i = _entries.length, entry;
            while (i--) {
                entry = _entries[i];
                if (entry.entryType == type && (name === void 0 || entry.name == name)) {
                    _entries.splice(i, 1);
                }
            }
        }
        ;
        if (window.performance === undefined) {
            window.performance = {};
        }
        if (window.performance.now === undefined) {
            var nowOffset_1 = Date.now();
            window.performance.now = function now() {
                return Date.now() - nowOffset_1;
            };
        }
        if (!window.performance.mark) {
            window.performance.mark = window.performance.webkitMark || function (name) {
                var mark = {
                    name: name,
                    entryType: "mark",
                    startTime: window.performance.now(),
                    duration: 0
                };
                _entries.push(mark);
                _marksIndex[name] = mark;
            };
        }
        if (!window.performance.measure) {
            window.performance.measure = window.performance.webkitMeasure || function (name, startMark, endMark) {
                startMark = _marksIndex[startMark].startTime;
                endMark = _marksIndex[endMark].startTime;
                _entries.push({
                    name: name,
                    entryType: "measure",
                    startTime: startMark,
                    duration: endMark - startMark
                });
            };
        }
        if (!window.performance.getEntriesByType) {
            window.performance.getEntriesByType = window.performance.webkitGetEntriesByType || function (type) {
                return _filterEntries("entryType", type);
            };
        }
        if (!window.performance.getEntriesByName) {
            window.performance.getEntriesByName = window.performance.webkitGetEntriesByName || function (name) {
                return _filterEntries("name", name);
            };
        }
        if (!window.performance.clearMarks) {
            window.performance.clearMarks = window.performance.webkitClearMarks || function (name) {
                _clearEntries("mark", name);
            };
        }
        if (!window.performance.clearMeasures) {
            window.performance.clearMeasures = window.performance.webkitClearMeasures || function (name) {
                _clearEntries("measure", name);
            };
        }
    }
    exports_1("ensurePerformance", ensurePerformance);
    return {
        setters: [
            function (nodejs_platform_1_1) {
                nodejs_platform_1 = nodejs_platform_1_1;
            },
            function (nodejs_feature_1_1) {
                nodejs_feature_1 = nodejs_feature_1_1;
            },
            function (nodejs_dom_1_1) {
                nodejs_dom_1 = nodejs_dom_1_1;
            },
            function (hd_1) {
                hd = hd_1;
            }
        ],
        execute: function () {
            intersectSetter = function (proto, propertyName, intersect) {
                var old = Object.getOwnPropertyDescriptor(proto, propertyName);
                var oldSet = old.set;
                var newSet = function set(V) {
                    oldSet.call(this, V);
                    intersect(this);
                };
                Object.defineProperty(proto, propertyName, {
                    set: newSet,
                    get: old.get,
                    configurable: old.configurable,
                    enumerable: old.enumerable
                });
            };
            intersectMethod = function (proto, methodName, intersect) {
                var orig = proto[methodName];
                proto[methodName] = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    var ret = orig.apply(this, args);
                    intersect(this);
                    return ret;
                };
            };
        }
    };
});
