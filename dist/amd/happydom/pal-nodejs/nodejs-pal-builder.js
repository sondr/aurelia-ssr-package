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
define(["require", "exports", "./nodejs-platform", "./nodejs-feature", "./nodejs-dom", "../../happy-dom-lib/index"], function (require, exports, nodejs_platform_1, nodejs_feature_1, nodejs_dom_1, hd) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ensurePerformance = exports.buildPal = void 0;
    hd = __importStar(hd);
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
    exports.buildPal = buildPal;
    var intersectSetter = function (proto, propertyName, intersect) {
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
    var intersectMethod = function (proto, methodName, intersect) {
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
    exports.ensurePerformance = ensurePerformance;
});
//# sourceMappingURL=nodejs-pal-builder.js.map