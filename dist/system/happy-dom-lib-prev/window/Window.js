System.register(["../custom-element/CustomElementRegistry", "../nodes/document/Document", "../nodes/html-document/HTMLDocument", "../nodes/xml-document/XMLDocument", "../nodes/svg-document/SVGDocument", "../nodes/node/Node", "../tree-walker/NodeFilter", "../nodes/text/Text", "../nodes/comment/Comment", "../nodes/shadow-root/ShadowRoot", "../nodes/element/Element", "../nodes/html-template-element/HTMLTemplateElement", "../nodes/html-form-element/HTMLFormElement", "../nodes/html-element/HTMLElement", "../nodes/html-input-element/HTMLInputElement", "../nodes/html-text-area-element/HTMLTextAreaElement", "../nodes/svg-element/SVGSVGElement", "../nodes/svg-element/SVGElement", "../nodes/html-script-element/HTMLScriptElement", "../nodes/html-image-element/HTMLImageElement", "../nodes/document-fragment/DocumentFragment", "../tree-walker/TreeWalker", "../event/Event", "../event/events/CustomEvent", "../event/events/AnimationEvent", "../event/events/KeyboardEvent", "../event/events/ProgressEvent", "../event/EventTarget", "../location/URL", "../location/Location", "../event/NonImplementedEventTypes", "../mutation-observer/MutationObserver", "../config/ElementClass", "../dom-parser/DOMParser", "../xml-serializer/XMLSerializer", "../resize-observer/ResizeObserver", "../css/CSSStyleSheet", "../file/Blob", "../file/File", "../exception/DOMException", "../file/FileReader", "../history/History", "../css/CSSStyleDeclaration", "../event/events/MouseEvent", "../event/events/FocusEvent", "../event/events/WheelEvent", "../event/DataTransfer", "../event/DataTransferItem", "../event/DataTransferItemList", "../event/events/InputEvent", "../event/UIEvent", "../event/events/ErrorEvent", "../screen/Screen", "./AsyncTaskManager", "./AsyncTaskTypeEnum", "../location/RelativeURL", "../storage/Storage", "../nodes/html-link-element/HTMLLinkElement", "../nodes/html-style-element/HTMLStyleElement", "../url-search-params/URLSearchParams"], function (exports_1, context_1) {
    "use strict";
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
    var CustomElementRegistry_1, Document_1, HTMLDocument_1, XMLDocument_1, SVGDocument_1, Node_1, NodeFilter_1, Text_1, Comment_1, ShadowRoot_1, Element_1, HTMLTemplateElement_1, HTMLFormElement_1, HTMLElement_1, HTMLInputElement_1, HTMLTextAreaElement_1, SVGSVGElement_1, SVGElement_1, HTMLScriptElement_1, HTMLImageElement_1, DocumentFragment_1, TreeWalker_1, Event_1, CustomEvent_1, AnimationEvent_1, KeyboardEvent_1, ProgressEvent_1, EventTarget_1, URL_1, Location_1, NonImplementedEventTypes_1, MutationObserver_1, ElementClass_1, DOMParser_1, XMLSerializer_1, ResizeObserver_1, CSSStyleSheet_1, Blob_1, File_1, DOMException_1, FileReader_1, History_1, CSSStyleDeclaration_1, MouseEvent_1, FocusEvent_1, WheelEvent_1, DataTransfer_1, DataTransferItem_1, DataTransferItemList_1, InputEvent_1, UIEvent_1, ErrorEvent_1, Screen_1, AsyncTaskManager_1, AsyncTaskTypeEnum_1, RelativeURL_1, Storage_1, HTMLLinkElement_1, HTMLStyleElement_1, URLSearchParams_1, FETCH_RESPONSE_TYPE_METHODS, Window;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (CustomElementRegistry_1_1) {
                CustomElementRegistry_1 = CustomElementRegistry_1_1;
            },
            function (Document_1_1) {
                Document_1 = Document_1_1;
            },
            function (HTMLDocument_1_1) {
                HTMLDocument_1 = HTMLDocument_1_1;
            },
            function (XMLDocument_1_1) {
                XMLDocument_1 = XMLDocument_1_1;
            },
            function (SVGDocument_1_1) {
                SVGDocument_1 = SVGDocument_1_1;
            },
            function (Node_1_1) {
                Node_1 = Node_1_1;
            },
            function (NodeFilter_1_1) {
                NodeFilter_1 = NodeFilter_1_1;
            },
            function (Text_1_1) {
                Text_1 = Text_1_1;
            },
            function (Comment_1_1) {
                Comment_1 = Comment_1_1;
            },
            function (ShadowRoot_1_1) {
                ShadowRoot_1 = ShadowRoot_1_1;
            },
            function (Element_1_1) {
                Element_1 = Element_1_1;
            },
            function (HTMLTemplateElement_1_1) {
                HTMLTemplateElement_1 = HTMLTemplateElement_1_1;
            },
            function (HTMLFormElement_1_1) {
                HTMLFormElement_1 = HTMLFormElement_1_1;
            },
            function (HTMLElement_1_1) {
                HTMLElement_1 = HTMLElement_1_1;
            },
            function (HTMLInputElement_1_1) {
                HTMLInputElement_1 = HTMLInputElement_1_1;
            },
            function (HTMLTextAreaElement_1_1) {
                HTMLTextAreaElement_1 = HTMLTextAreaElement_1_1;
            },
            function (SVGSVGElement_1_1) {
                SVGSVGElement_1 = SVGSVGElement_1_1;
            },
            function (SVGElement_1_1) {
                SVGElement_1 = SVGElement_1_1;
            },
            function (HTMLScriptElement_1_1) {
                HTMLScriptElement_1 = HTMLScriptElement_1_1;
            },
            function (HTMLImageElement_1_1) {
                HTMLImageElement_1 = HTMLImageElement_1_1;
            },
            function (DocumentFragment_1_1) {
                DocumentFragment_1 = DocumentFragment_1_1;
            },
            function (TreeWalker_1_1) {
                TreeWalker_1 = TreeWalker_1_1;
            },
            function (Event_1_1) {
                Event_1 = Event_1_1;
            },
            function (CustomEvent_1_1) {
                CustomEvent_1 = CustomEvent_1_1;
            },
            function (AnimationEvent_1_1) {
                AnimationEvent_1 = AnimationEvent_1_1;
            },
            function (KeyboardEvent_1_1) {
                KeyboardEvent_1 = KeyboardEvent_1_1;
            },
            function (ProgressEvent_1_1) {
                ProgressEvent_1 = ProgressEvent_1_1;
            },
            function (EventTarget_1_1) {
                EventTarget_1 = EventTarget_1_1;
            },
            function (URL_1_1) {
                URL_1 = URL_1_1;
            },
            function (Location_1_1) {
                Location_1 = Location_1_1;
            },
            function (NonImplementedEventTypes_1_1) {
                NonImplementedEventTypes_1 = NonImplementedEventTypes_1_1;
            },
            function (MutationObserver_1_1) {
                MutationObserver_1 = MutationObserver_1_1;
            },
            function (ElementClass_1_1) {
                ElementClass_1 = ElementClass_1_1;
            },
            function (DOMParser_1_1) {
                DOMParser_1 = DOMParser_1_1;
            },
            function (XMLSerializer_1_1) {
                XMLSerializer_1 = XMLSerializer_1_1;
            },
            function (ResizeObserver_1_1) {
                ResizeObserver_1 = ResizeObserver_1_1;
            },
            function (CSSStyleSheet_1_1) {
                CSSStyleSheet_1 = CSSStyleSheet_1_1;
            },
            function (Blob_1_1) {
                Blob_1 = Blob_1_1;
            },
            function (File_1_1) {
                File_1 = File_1_1;
            },
            function (DOMException_1_1) {
                DOMException_1 = DOMException_1_1;
            },
            function (FileReader_1_1) {
                FileReader_1 = FileReader_1_1;
            },
            function (History_1_1) {
                History_1 = History_1_1;
            },
            function (CSSStyleDeclaration_1_1) {
                CSSStyleDeclaration_1 = CSSStyleDeclaration_1_1;
            },
            function (MouseEvent_1_1) {
                MouseEvent_1 = MouseEvent_1_1;
            },
            function (FocusEvent_1_1) {
                FocusEvent_1 = FocusEvent_1_1;
            },
            function (WheelEvent_1_1) {
                WheelEvent_1 = WheelEvent_1_1;
            },
            function (DataTransfer_1_1) {
                DataTransfer_1 = DataTransfer_1_1;
            },
            function (DataTransferItem_1_1) {
                DataTransferItem_1 = DataTransferItem_1_1;
            },
            function (DataTransferItemList_1_1) {
                DataTransferItemList_1 = DataTransferItemList_1_1;
            },
            function (InputEvent_1_1) {
                InputEvent_1 = InputEvent_1_1;
            },
            function (UIEvent_1_1) {
                UIEvent_1 = UIEvent_1_1;
            },
            function (ErrorEvent_1_1) {
                ErrorEvent_1 = ErrorEvent_1_1;
            },
            function (Screen_1_1) {
                Screen_1 = Screen_1_1;
            },
            function (AsyncTaskManager_1_1) {
                AsyncTaskManager_1 = AsyncTaskManager_1_1;
            },
            function (AsyncTaskTypeEnum_1_1) {
                AsyncTaskTypeEnum_1 = AsyncTaskTypeEnum_1_1;
            },
            function (RelativeURL_1_1) {
                RelativeURL_1 = RelativeURL_1_1;
            },
            function (Storage_1_1) {
                Storage_1 = Storage_1_1;
            },
            function (HTMLLinkElement_1_1) {
                HTMLLinkElement_1 = HTMLLinkElement_1_1;
            },
            function (HTMLStyleElement_1_1) {
                HTMLStyleElement_1 = HTMLStyleElement_1_1;
            },
            function (URLSearchParams_1_1) {
                URLSearchParams_1 = URLSearchParams_1_1;
            }
        ],
        execute: function () {
            FETCH_RESPONSE_TYPE_METHODS = ['blob', 'json', 'text'];
            /**
             * Handles the Window.
             */
            Window = /** @class */ (function (_super) {
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
                        asyncTaskManager: new AsyncTaskManager_1.default()
                    };
                    // Global classes
                    _this.Node = Node_1.default;
                    _this.HTMLElement = HTMLElement_1.default;
                    _this.HTMLTemplateElement = HTMLTemplateElement_1.default;
                    _this.HTMLFormElement = HTMLFormElement_1.default;
                    _this.HTMLInputElement = HTMLInputElement_1.default;
                    _this.HTMLTextAreaElement = HTMLTextAreaElement_1.default;
                    _this.HTMLImageElement = HTMLImageElement_1.default;
                    _this.HTMLScriptElement = HTMLScriptElement_1.default;
                    _this.HTMLLinkElement = HTMLLinkElement_1.default;
                    _this.HTMLStyleElement = HTMLStyleElement_1.default;
                    _this.SVGSVGElement = SVGSVGElement_1.default;
                    _this.SVGElement = SVGElement_1.default;
                    _this.Text = Text_1.default;
                    _this.Comment = Comment_1.default;
                    _this.ShadowRoot = ShadowRoot_1.default;
                    _this.Element = Element_1.default;
                    _this.DocumentFragment = DocumentFragment_1.default;
                    _this.NodeFilter = NodeFilter_1.default;
                    _this.TreeWalker = TreeWalker_1.default;
                    _this.DOMParser = DOMParser_1.default;
                    _this.MutationObserver = MutationObserver_1.default;
                    _this.Document = Document_1.default;
                    _this.HTMLDocument = HTMLDocument_1.default;
                    _this.XMLDocument = XMLDocument_1.default;
                    _this.SVGDocument = SVGDocument_1.default;
                    _this.Event = Event_1.default;
                    _this.UIEvent = UIEvent_1.default;
                    _this.CustomEvent = CustomEvent_1.default;
                    _this.AnimationEvent = AnimationEvent_1.default;
                    _this.KeyboardEvent = KeyboardEvent_1.default;
                    _this.MouseEvent = MouseEvent_1.default;
                    _this.FocusEvent = FocusEvent_1.default;
                    _this.WheelEvent = WheelEvent_1.default;
                    _this.InputEvent = InputEvent_1.default;
                    _this.ErrorEvent = ErrorEvent_1.default;
                    _this.ProgressEvent = ProgressEvent_1.default;
                    _this.EventTarget = EventTarget_1.default;
                    _this.DataTransfer = DataTransfer_1.default;
                    _this.DataTransferItem = DataTransferItem_1.default;
                    _this.DataTransferItemList = DataTransferItemList_1.default;
                    _this.URL = URL_1.default;
                    _this.Location = Location_1.default;
                    _this.CustomElementRegistry = CustomElementRegistry_1.default;
                    _this.Window = Window;
                    _this.Headers = Map;
                    _this.XMLSerializer = XMLSerializer_1.default;
                    _this.ResizeObserver = ResizeObserver_1.default;
                    _this.CSSStyleSheet = CSSStyleSheet_1.default;
                    _this.Blob = Blob_1.default;
                    _this.File = File_1.default;
                    _this.FileReader = FileReader_1.default;
                    _this.DOMException = DOMException_1.default;
                    _this.History = History_1.default;
                    _this.Screen = Screen_1.default;
                    _this.Storage = Storage_1.default;
                    _this.URLSearchParams = URLSearchParams_1.default;
                    // Events
                    _this.onload = null;
                    _this.onerror = null;
                    _this.customElements = new CustomElementRegistry_1.default();
                    _this.location = new Location_1.default();
                    _this.history = new History_1.default();
                    _this.navigator = { userAgent: 'happy-dom' };
                    _this.console = global ? global.console : null;
                    _this.self = _this;
                    _this.top = _this;
                    _this.parent = _this;
                    _this.window = _this;
                    _this.screen = new Screen_1.default();
                    _this.innerWidth = 1024;
                    _this.innerHeight = 768;
                    _this.sessionStorage = new Storage_1.default();
                    _this.localStorage = new Storage_1.default();
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
                    _this.Function = global ? global.Function : null;
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
                    _this.Object = global ? global.Object : null;
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
                    _this.document = new HTMLDocument_1.default();
                    _this.document.defaultView = _this;
                    _this.document._readyStateManager.whenComplete().then(function () {
                        _this.dispatchEvent(new Event_1.default('load'));
                    });
                    DOMParser_1.default._ownerDocument = DOMParser_1.default._ownerDocument || _this.document;
                    FileReader_1.default._ownerDocument = FileReader_1.default._ownerDocument || _this.document;
                    for (var _i = 0, NonImplementedEventTypes_2 = NonImplementedEventTypes_1.default; _i < NonImplementedEventTypes_2.length; _i++) {
                        var eventType = NonImplementedEventTypes_2[_i];
                        if (!_this[eventType]) {
                            _this[eventType] = Event_1.default;
                        }
                    }
                    for (var _a = 0, _b = Object.keys(ElementClass_1.default); _a < _b.length; _a++) {
                        var className = _b[_a];
                        if (!_this[className]) {
                            _this[className] = ElementClass_1.default[className];
                        }
                    }
                    // Binds all methods to "this", so that it will use the correct context when called globally.
                    for (var _c = 0, _d = Object.keys(Window.prototype); _c < _d.length; _c++) {
                        var key = _d[_c];
                        if (typeof _this[key] === 'function') {
                            _this[key] = _this[key].bind(_this);
                        }
                    }
                    return _this;
                }
                /**
                 * Evaluates code.
                 *
                 * @param code Code.
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
                    if (global && vm && vm.isContext(this)) {
                        vm.runInContext(code, this);
                    }
                    else if (global && global.eval) {
                        global.eval(code);
                    }
                };
                /**
                 * Returns an object containing the values of all CSS properties of an element.
                 *
                 * @param element Element.
                 * @returns CSS style declaration.
                 */
                Window.prototype.getComputedStyle = function (element) {
                    return new CSSStyleDeclaration_1.default(element._attributes, element);
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
                                    _this.happyDOM.asyncTaskManager.startTask(AsyncTaskTypeEnum_1.default.fetch);
                                    fetch(RelativeURL_1.default.getAbsoluteURL(_this.location, url), options)
                                        .then(function (response) {
                                        if (_this.happyDOM.asyncTaskManager.getRunningCount(AsyncTaskTypeEnum_1.default.fetch) === 0) {
                                            reject(new Error('Failed to complete fetch request. Task was canceled.'));
                                        }
                                        else {
                                            var _loop_1 = function (methodName) {
                                                var asyncMethod = response[methodName];
                                                response[methodName] = function () {
                                                    return new Promise(function (resolve, reject) {
                                                        _this.happyDOM.asyncTaskManager.startTask(AsyncTaskTypeEnum_1.default.fetch);
                                                        asyncMethod
                                                            .call(response)
                                                            .then(function (response) {
                                                            if (_this.happyDOM.asyncTaskManager.getRunningCount(AsyncTaskTypeEnum_1.default.fetch) ===
                                                                0) {
                                                                reject(new Error('Failed to complete fetch request. Task was canceled.'));
                                                            }
                                                            else {
                                                                resolve(response);
                                                                _this.happyDOM.asyncTaskManager.endTask(AsyncTaskTypeEnum_1.default.fetch);
                                                            }
                                                        })
                                                            .catch(function (error) {
                                                            reject(error);
                                                            _this.happyDOM.asyncTaskManager.endTask(AsyncTaskTypeEnum_1.default.fetch, error);
                                                        });
                                                    });
                                                };
                                            };
                                            for (var _i = 0, FETCH_RESPONSE_TYPE_METHODS_1 = FETCH_RESPONSE_TYPE_METHODS; _i < FETCH_RESPONSE_TYPE_METHODS_1.length; _i++) {
                                                var methodName = FETCH_RESPONSE_TYPE_METHODS_1[_i];
                                                _loop_1(methodName);
                                            }
                                            resolve(response);
                                            _this.happyDOM.asyncTaskManager.endTask(AsyncTaskTypeEnum_1.default.fetch);
                                        }
                                    })
                                        .catch(function (error) {
                                        reject(error);
                                        _this.happyDOM.asyncTaskManager.endTask(AsyncTaskTypeEnum_1.default.fetch, error);
                                    });
                                })];
                        });
                    });
                };
                return Window;
            }(EventTarget_1.default));
            exports_1("default", Window);
        }
    };
});
//# sourceMappingURL=Window.js.map