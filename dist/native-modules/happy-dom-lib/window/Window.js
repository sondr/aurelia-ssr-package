var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import CustomElementRegistry from '../custom-element/CustomElementRegistry';
import Document from '../nodes/document/Document';
import HTMLDocument from '../nodes/html-document/HTMLDocument';
import XMLDocument from '../nodes/xml-document/XMLDocument';
import SVGDocument from '../nodes/svg-document/SVGDocument';
import Node from '../nodes/node/Node';
import NodeFilter from '../tree-walker/NodeFilter';
import Text from '../nodes/text/Text';
import Comment from '../nodes/comment/Comment';
import ShadowRoot from '../nodes/shadow-root/ShadowRoot';
import Element from '../nodes/element/Element';
import HTMLTemplateElement from '../nodes/html-template-element/HTMLTemplateElement';
import HTMLFormElement from '../nodes/html-form-element/HTMLFormElement';
import HTMLElement from '../nodes/html-element/HTMLElement';
import HTMLUnknownElement from '../nodes/html-unknown-element/HTMLUnknownElement';
import HTMLInputElement from '../nodes/html-input-element/HTMLInputElement';
import HTMLTextAreaElement from '../nodes/html-text-area-element/HTMLTextAreaElement';
import HTMLLinkElement from '../nodes/html-link-element/HTMLLinkElement';
import HTMLStyleElement from '../nodes/html-style-element/HTMLStyleElement';
import HTMLSlotElement from '../nodes/html-slot-element/HTMLSlotElement';
import HTMLLabelElement from '../nodes/html-label-element/HTMLLabelElement';
import HTMLMetaElement from '../nodes/html-meta-element/HTMLMetaElement';
import SVGSVGElement from '../nodes/svg-element/SVGSVGElement';
import SVGElement from '../nodes/svg-element/SVGElement';
import HTMLScriptElement from '../nodes/html-script-element/HTMLScriptElement';
import HTMLImageElement from '../nodes/html-image-element/HTMLImageElement';
import Image from '../nodes/html-image-element/Image';
import DocumentFragment from '../nodes/document-fragment/DocumentFragment';
import CharacterData from '../nodes/character-data/CharacterData';
import TreeWalker from '../tree-walker/TreeWalker';
import Event from '../event/Event';
import CustomEvent from '../event/events/CustomEvent';
import AnimationEvent from '../event/events/AnimationEvent';
import KeyboardEvent from '../event/events/KeyboardEvent';
import ProgressEvent from '../event/events/ProgressEvent';
import EventTarget from '../event/EventTarget';
import URL from '../location/URL';
import Location from '../location/Location';
import NonImplementedEventTypes from '../event/NonImplementedEventTypes';
import MutationObserver from '../mutation-observer/MutationObserver';
import NonImplemenetedElementClasses from '../config/NonImplemenetedElementClasses';
import DOMParser from '../dom-parser/DOMParser';
import XMLSerializer from '../xml-serializer/XMLSerializer';
import ResizeObserver from '../resize-observer/ResizeObserver';
import Blob from '../file/Blob';
import File from '../file/File';
import DOMException from '../exception/DOMException';
import FileReader from '../file/FileReader';
import History from '../history/History';
import CSSStyleSheet from '../css/CSSStyleSheet';
import CSSStyleDeclaration from '../css/CSSStyleDeclaration';
import CSS from '../css/CSS';
import CSSUnitValue from '../css/CSSUnitValue';
import MouseEvent from '../event/events/MouseEvent';
import PointerEvent from '../event/events/PointerEvent';
import FocusEvent from '../event/events/FocusEvent';
import WheelEvent from '../event/events/WheelEvent';
import DataTransfer from '../event/DataTransfer';
import DataTransferItem from '../event/DataTransferItem';
import DataTransferItemList from '../event/DataTransferItemList';
import InputEvent from '../event/events/InputEvent';
import UIEvent from '../event/UIEvent';
import ErrorEvent from '../event/events/ErrorEvent';
import StorageEvent from '../event/events/StorageEvent';
import Screen from '../screen/Screen';
import AsyncTaskManager from './AsyncTaskManager';
import AsyncTaskTypeEnum from './AsyncTaskTypeEnum';
import RelativeURL from '../location/RelativeURL';
import Storage from '../storage/Storage';
import URLSearchParams from '../url-search-params/URLSearchParams';
import HTMLCollection from '../nodes/element/HTMLCollection';
import NodeList from '../nodes/node/NodeList';
import MediaQueryList from '../match-media/MediaQueryList';
import Selection from '../selection/Selection';
import * as PerfHooks from 'perf_hooks';
import Navigator from '../navigator/Navigator';
import MimeType from '../navigator/MimeType';
import MimeTypeArray from '../navigator/MimeTypeArray';
import Plugin from '../navigator/Plugin';
import PluginArray from '../navigator/PluginArray';
var FETCH_RESPONSE_TYPE_METHODS = ['blob', 'json', 'text'];
/**
 * Handles the Window.
 */
var Window = /** @class */ (function (_super) {
    __extends(Window, _super);
    /**
     * Constructor.
     */
    function Window() {
        var _this = _super.call(this) || this;
        // Public Properties
        _this.happyDOM = {
            whenAsyncComplete: function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.happyDOM.asyncTaskManager.whenComplete()];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); },
            cancelAsync: function () {
                _this.happyDOM.asyncTaskManager.cancelAllTasks();
            },
            asyncTaskManager: new AsyncTaskManager()
        };
        // Global classes
        _this.Node = Node;
        _this.HTMLElement = HTMLElement;
        _this.HTMLUnknownElement = HTMLUnknownElement;
        _this.HTMLTemplateElement = HTMLTemplateElement;
        _this.HTMLFormElement = HTMLFormElement;
        _this.HTMLInputElement = HTMLInputElement;
        _this.HTMLTextAreaElement = HTMLTextAreaElement;
        _this.HTMLImageElement = HTMLImageElement;
        _this.Image = Image;
        _this.HTMLScriptElement = HTMLScriptElement;
        _this.HTMLLinkElement = HTMLLinkElement;
        _this.HTMLStyleElement = HTMLStyleElement;
        _this.HTMLLabelElement = HTMLLabelElement;
        _this.HTMLSlotElement = HTMLSlotElement;
        _this.HTMLMetaElement = HTMLMetaElement;
        _this.SVGSVGElement = SVGSVGElement;
        _this.SVGElement = SVGElement;
        _this.Text = Text;
        _this.Comment = Comment;
        _this.ShadowRoot = ShadowRoot;
        _this.Element = Element;
        _this.DocumentFragment = DocumentFragment;
        _this.CharacterData = CharacterData;
        _this.NodeFilter = NodeFilter;
        _this.TreeWalker = TreeWalker;
        _this.DOMParser = DOMParser;
        _this.MutationObserver = MutationObserver;
        _this.Document = Document;
        _this.HTMLDocument = HTMLDocument;
        _this.XMLDocument = XMLDocument;
        _this.SVGDocument = SVGDocument;
        _this.Event = Event;
        _this.UIEvent = UIEvent;
        _this.CustomEvent = CustomEvent;
        _this.AnimationEvent = AnimationEvent;
        _this.KeyboardEvent = KeyboardEvent;
        _this.MouseEvent = MouseEvent;
        _this.PointerEvent = PointerEvent;
        _this.FocusEvent = FocusEvent;
        _this.WheelEvent = WheelEvent;
        _this.InputEvent = InputEvent;
        _this.ErrorEvent = ErrorEvent;
        _this.StorageEvent = StorageEvent;
        _this.ProgressEvent = ProgressEvent;
        _this.EventTarget = EventTarget;
        _this.DataTransfer = DataTransfer;
        _this.DataTransferItem = DataTransferItem;
        _this.DataTransferItemList = DataTransferItemList;
        _this.URL = URL;
        _this.Location = Location;
        _this.CustomElementRegistry = CustomElementRegistry;
        _this.Window = Window;
        _this.Headers = Map;
        _this.XMLSerializer = XMLSerializer;
        _this.ResizeObserver = ResizeObserver;
        _this.CSSStyleSheet = CSSStyleSheet;
        _this.Blob = Blob;
        _this.File = File;
        _this.FileReader = FileReader;
        _this.DOMException = DOMException;
        _this.History = History;
        _this.Screen = Screen;
        _this.Storage = Storage;
        _this.URLSearchParams = URLSearchParams;
        _this.HTMLCollection = HTMLCollection;
        _this.NodeList = NodeList;
        _this.MediaQueryList = MediaQueryList;
        _this.CSSUnitValue = CSSUnitValue;
        _this.Selection = Selection;
        _this.Navigator = Navigator;
        _this.MimeType = MimeType;
        _this.MimeTypeArray = MimeTypeArray;
        _this.Plugin = Plugin;
        _this.PluginArray = PluginArray;
        // Events
        _this.onload = null;
        _this.onerror = null;
        _this.customElements = new CustomElementRegistry();
        _this.location = new Location();
        _this.history = new History();
        _this.navigator = new Navigator();
        _this.console = global ? global.console : null;
        _this.self = _this;
        _this.top = _this;
        _this.parent = _this;
        _this.window = _this;
        _this.globalThis = _this;
        _this.screen = new Screen();
        _this.innerWidth = 1024;
        _this.innerHeight = 768;
        _this.devicePixelRatio = 1;
        _this.sessionStorage = new Storage();
        _this.localStorage = new Storage();
        _this.performance = PerfHooks.performance;
        // Node.js Globals
        _this.Array = global ? global.Array : null;
        _this.ArrayBuffer = global ? global.ArrayBuffer : null;
        _this.Boolean = global ? global.Boolean : null;
        _this.Buffer = null;
        _this.DataView = global ? global.DataView : null;
        _this.Date = global ? global.Date : null;
        _this.Error = global ? global.Error : null;
        _this.EvalError = global ? global.EvalError : null;
        _this.Float32Array = global ? global.Float32Array : null;
        _this.Float64Array = global ? global.Float64Array : null;
        _this.GLOBAL = null;
        _this.Infinity = global ? global.Infinity : null;
        _this.Int16Array = global ? global.Int16Array : null;
        _this.Int32Array = global ? global.Int32Array : null;
        _this.Int8Array = global ? global.Int8Array : null;
        _this.Intl = global ? global.Intl : null;
        _this.JSON = global ? global.JSON : null;
        _this.Map = global ? global.Map : null;
        _this.Math = global ? global.Math : null;
        _this.NaN = global ? global.NaN : null;
        _this.Number = global ? global.Number : null;
        _this.Promise = global ? global.Promise : null;
        _this.RangeError = global ? global.RangeError : null;
        _this.ReferenceError = global ? global.ReferenceError : null;
        _this.RegExp = global ? global.RegExp : null;
        _this.Reflect = global ? global.Reflect : null;
        _this.Set = global ? global.Set : null;
        _this.Symbol = global ? global.Symbol : null;
        _this.SyntaxError = global ? global.SyntaxError : null;
        _this.String = global ? global.String : null;
        _this.TypeError = global ? global.TypeError : null;
        _this.URIError = global ? global.URIError : null;
        _this.Uint16Array = global ? global.Uint16Array : null;
        _this.Uint32Array = global ? global.Uint32Array : null;
        _this.Uint8Array = global ? global.Uint8Array : null;
        _this.Uint8ClampedArray = global ? global.Uint8ClampedArray : null;
        _this.WeakMap = global ? global.WeakMap : null;
        _this.WeakSet = global ? global.WeakSet : null;
        _this.clearImmediate = null;
        _this.decodeURI = global ? global.decodeURI : null;
        _this.decodeURIComponent = global ? global.decodeURIComponent : null;
        _this.encodeURI = global ? global.encodeURI : null;
        _this.encodeURIComponent = global ? global.encodeURIComponent : null;
        _this.escape = global ? global.escape : null;
        _this.global = null;
        _this.isFinite = global ? global.isFinite : null;
        _this.isNaN = global ? global.isNaN : null;
        _this.parseFloat = global ? global.parseFloat : null;
        _this.parseInt = global ? global.parseInt : null;
        _this.process = null;
        _this.root = null;
        _this.setImmediate = null;
        _this.queueMicrotask = global ? global.queueMicrotask : null;
        _this.undefined = global ? global.undefined : null;
        _this.unescape = global ? global.unescape : null;
        _this.gc = null;
        _this.v8debug = null;
        _this.AbortController = global ? global.AbortController : null;
        _this.AbortSignal = global ? global.AbortSignal : null;
        // Private properties
        _this._objectClass = null;
        _this._functionClass = null;
        _this.document = new HTMLDocument();
        _this.document.defaultView = _this;
        _this.document._readyStateManager.whenComplete().then(function () {
            _this.dispatchEvent(new Event('load'));
        });
        DOMParser._ownerDocument = DOMParser._ownerDocument || _this.document;
        FileReader._ownerDocument = FileReader._ownerDocument || _this.document;
        Image.ownerDocument = Image.ownerDocument || _this.document;
        for (var _i = 0, NonImplementedEventTypes_1 = NonImplementedEventTypes; _i < NonImplementedEventTypes_1.length; _i++) {
            var eventType = NonImplementedEventTypes_1[_i];
            if (!_this[eventType]) {
                _this[eventType] = Event;
            }
        }
        for (var _a = 0, NonImplemenetedElementClasses_1 = NonImplemenetedElementClasses; _a < NonImplemenetedElementClasses_1.length; _a++) {
            var className = NonImplemenetedElementClasses_1[_a];
            if (!_this[className]) {
                _this[className] = HTMLElement;
            }
        }
        // Binds all methods to "this", so that it will use the correct context when called globally.
        for (var _b = 0, _c = Object.keys(Window.prototype); _b < _c.length; _b++) {
            var key = _c[_b];
            if (typeof _this[key] === 'function') {
                _this[key] = _this[key].bind(_this);
            }
        }
        return _this;
    }
    Object.defineProperty(Window.prototype, "Object", {
        /**
         * Returns Object class.
         *
         * @returns Object class.
         */
        get: function () {
            if (this._objectClass) {
                return this._objectClass;
            }
            // When inside a VM global.Object is not the same as ({}).constructor
            // We will therefore run the code inside the VM to get the real constructor
            this._objectClass = this.eval('({}).constructor');
            return this._objectClass;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Window.prototype, "Function", {
        /**
         * Returns Function class.
         *
         * @returns Function class.
         */
        get: function () {
            if (this._functionClass) {
                return this._functionClass;
            }
            // When inside a VM global.Function is not the same as (() => {}).constructor
            // We will therefore run the code inside the VM to get the real constructor
            this._functionClass = this.eval('(() => {}).constructor');
            return this._functionClass;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Window.prototype, "CSS", {
        /**
         * The CSS interface holds useful CSS-related methods.
         *
         * @returns CSS interface.
         */
        get: function () {
            return new CSS();
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Evaluates code.
     *
     * @param code Code.
     * @returns Result.
     */
    Window.prototype.eval = function (code) {
        var vmExists = false;
        var vm = null;
        try {
            vmExists = !!require.resolve('vm');
        }
        catch (error) {
            // Ignore error;
        }
        if (vmExists) {
            vm = require('vm');
        }
        if (vm && vm.isContext(this)) {
            return vm.runInContext(code, this);
        }
        return global.eval(code);
    };
    /**
     * Returns an object containing the values of all CSS properties of an element.
     *
     * @param element Element.
     * @returns CSS style declaration.
     */
    Window.prototype.getComputedStyle = function (element) {
        return new CSSStyleDeclaration(element._attributes, element);
    };
    /**
     * Scrolls to a particular set of coordinates.
     *
     * @param x X position or options object.
     * @param y Y position.
     */
    Window.prototype.scroll = function (x, y) {
        var _this = this;
        if (typeof x === 'object') {
            if (x.behavior === 'smooth') {
                this.setTimeout(function () {
                    if (x.top !== undefined) {
                        _this.document.documentElement.scrollTop = x.top;
                    }
                    if (x.left !== undefined) {
                        _this.document.documentElement.scrollLeft = x.left;
                    }
                });
            }
            else {
                if (x.top !== undefined) {
                    this.document.documentElement.scrollTop = x.top;
                }
                if (x.left !== undefined) {
                    this.document.documentElement.scrollLeft = x.left;
                }
            }
        }
        else if (x !== undefined && y !== undefined) {
            this.document.documentElement.scrollLeft = x;
            this.document.documentElement.scrollTop = y;
        }
    };
    /**
     * Scrolls to a particular set of coordinates.
     *
     * @param x X position or options object.
     * @param y Y position.
     */
    Window.prototype.scrollTo = function (x, y) {
        this.scroll(x, y);
    };
    /**
     * Returns a new MediaQueryList object that can then be used to determine if the document matches the media query string.
     *
     * @param mediaQueryString A string specifying the media query to parse into a MediaQueryList.
     * @returns A new MediaQueryList.
     */
    Window.prototype.matchMedia = function (mediaQueryString) {
        var mediaQueryList = new MediaQueryList();
        mediaQueryList._media = mediaQueryString;
        return mediaQueryList;
    };
    /**
     * Sets a timer which executes a function once the timer expires.
     *
     * @override
     * @param callback Function to be executed.
     * @param [delay=0] Delay in ms.
     * @returns Timeout ID.
     */
    Window.prototype.setTimeout = function (callback, delay) {
        var _this = this;
        if (delay === void 0) { delay = 0; }
        var id = global.setTimeout(function () {
            _this.happyDOM.asyncTaskManager.endTimer(id);
            callback();
        }, delay);
        this.happyDOM.asyncTaskManager.startTimer(id);
        return id;
    };
    /**
     * Cancels a timeout previously established by calling setTimeout().
     *
     * @override
     * @param id ID of the timeout.
     */
    Window.prototype.clearTimeout = function (id) {
        global.clearTimeout(id);
        this.happyDOM.asyncTaskManager.endTimer(id);
    };
    /**
     * Calls a function with a fixed time delay between each call.
     *
     * @override
     * @param callback Function to be executed.
     * @param [delay=0] Delay in ms.
     * @returns Interval ID.
     */
    Window.prototype.setInterval = function (callback, delay) {
        if (delay === void 0) { delay = 0; }
        var id = global.setInterval(callback, delay);
        this.happyDOM.asyncTaskManager.startTimer(id);
        return id;
    };
    /**
     * Cancels a timed repeating action which was previously established by a call to setInterval().
     *
     * @override
     * @param id ID of the interval.
     */
    Window.prototype.clearInterval = function (id) {
        global.clearInterval(id);
        this.happyDOM.asyncTaskManager.endTimer(id);
    };
    /**
     * Mock animation frames with timeouts.
     *
     * @override
     * @param callback Callback.
     * @returns Timeout ID.
     */
    Window.prototype.requestAnimationFrame = function (callback) {
        return this.setTimeout(function () {
            callback(2);
        });
    };
    /**
     * Mock animation frames with timeouts.
     *
     * @override
     * @param id Timeout ID.
     */
    Window.prototype.cancelAnimationFrame = function (id) {
        this.clearTimeout(id);
    };
    /**
     * Provides a global fetch() method that provides an easy, logical way to fetch resources asynchronously across the network.
     *
     * @override
     * @param url URL to resource.
     * @param [options] Options.
     * @returns Promise.
     */
    Window.prototype.fetch = function (url, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var fetch = null;
                        try {
                            fetch = require('node-fetch');
                        }
                        catch (error) {
                            throw new Error('Failed to perform fetch. "node-fetch" could not be loaded.');
                        }
                        _this.happyDOM.asyncTaskManager.startTask(AsyncTaskTypeEnum.fetch);
                        fetch(RelativeURL.getAbsoluteURL(_this.location, url), options)
                            .then(function (response) {
                            if (_this.happyDOM.asyncTaskManager.getRunningCount(AsyncTaskTypeEnum.fetch) === 0) {
                                reject(new Error('Failed to complete fetch request. Task was canceled.'));
                            }
                            else {
                                var _loop_1 = function (methodName) {
                                    var asyncMethod = response[methodName];
                                    response[methodName] = function () {
                                        return new Promise(function (resolve, reject) {
                                            _this.happyDOM.asyncTaskManager.startTask(AsyncTaskTypeEnum.fetch);
                                            asyncMethod
                                                .call(response)
                                                .then(function (response) {
                                                if (_this.happyDOM.asyncTaskManager.getRunningCount(AsyncTaskTypeEnum.fetch) ===
                                                    0) {
                                                    reject(new Error('Failed to complete fetch request. Task was canceled.'));
                                                }
                                                else {
                                                    resolve(response);
                                                    _this.happyDOM.asyncTaskManager.endTask(AsyncTaskTypeEnum.fetch);
                                                }
                                            })
                                                .catch(function (error) {
                                                reject(error);
                                                _this.happyDOM.asyncTaskManager.endTask(AsyncTaskTypeEnum.fetch, error);
                                            });
                                        });
                                    };
                                };
                                for (var _i = 0, FETCH_RESPONSE_TYPE_METHODS_1 = FETCH_RESPONSE_TYPE_METHODS; _i < FETCH_RESPONSE_TYPE_METHODS_1.length; _i++) {
                                    var methodName = FETCH_RESPONSE_TYPE_METHODS_1[_i];
                                    _loop_1(methodName);
                                }
                                resolve(response);
                                _this.happyDOM.asyncTaskManager.endTask(AsyncTaskTypeEnum.fetch);
                            }
                        })
                            .catch(function (error) {
                            reject(error);
                            _this.happyDOM.asyncTaskManager.endTask(AsyncTaskTypeEnum.fetch, error);
                        });
                    })];
            });
        });
    };
    return Window;
}(EventTarget));
export default Window;
//# sourceMappingURL=Window.js.map