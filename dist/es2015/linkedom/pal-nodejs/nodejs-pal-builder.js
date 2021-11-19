import { NodeJsPlatform } from './nodejs-platform';
import { NodeJsFeature } from './nodejs-feature';
import { NodeJsDom } from './nodejs-dom';
import { parseHTML } from 'linkedom';
//import { JSDOM } from 'jsdom';
export function buildPal() {
    // https://github.com/jsdom/jsdom/issues/2304
    // set url to enable global var localStorage and sessionStorage
    // var jsdom = new JSDOM(undefined, { url: "http://localhost/" });
    // var global: IGlobal = <IGlobal>jsdom.window;
    // have to use a base for linkeddom to find body later
    var emtpyHtmlString = "<html><head></head><body></body></html>";
    var linkedom = parseHTML(emtpyHtmlString);
    linkedom.location = new URL('http://localhost/');
    linkedom.history = {
        go: (delta) => { },
        back: () => { },
        forward: () => { },
        replaceState: (data, title, url) => { },
        pushState: (data, title, url) => { }
    };
    var global = linkedom.window;
    ensurePerformance(global.window);
    var platform = new NodeJsPlatform(global, linkedom);
    var dom = new NodeJsDom(global);
    var feature = new NodeJsFeature(global);
    return {
        global: global,
        platform: platform,
        dom: dom,
        feature: feature
    };
}
let intersectSetter = function (proto, propertyName, intersect) {
    let old = Object.getOwnPropertyDescriptor(proto, propertyName);
    let oldSet = old.set;
    let newSet = function set(V) {
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
let intersectMethod = function (proto, methodName, intersect) {
    let orig = proto[methodName];
    proto[methodName] = function (...args) {
        var ret = orig.apply(this, args);
        intersect(this);
        return ret;
    };
};
export function ensurePerformance(window) {
    const _entries = [];
    const _marksIndex = {};
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
        let nowOffset = Date.now();
        window.performance.now = function now() {
            return Date.now() - nowOffset;
        };
    }
    if (!window.performance.mark) {
        window.performance.mark = window.performance.webkitMark || function (name) {
            const mark = {
                name,
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
                name,
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
