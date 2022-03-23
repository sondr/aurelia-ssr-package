var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
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
const FETCH_RESPONSE_TYPE_METHODS = ['blob', 'json', 'text'];
/**
 * Handles the Window.
 */
export default class Window extends EventTarget {
    /**
     * Constructor.
     */
    constructor() {
        super();
        // Public Properties
        this.happyDOM = {
            whenAsyncComplete: () => __awaiter(this, void 0, void 0, function* () {
                return yield this.happyDOM.asyncTaskManager.whenComplete();
            }),
            cancelAsync: () => {
                this.happyDOM.asyncTaskManager.cancelAllTasks();
            },
            asyncTaskManager: new AsyncTaskManager()
        };
        // Global classes
        this.Node = Node;
        this.HTMLElement = HTMLElement;
        this.HTMLUnknownElement = HTMLUnknownElement;
        this.HTMLTemplateElement = HTMLTemplateElement;
        this.HTMLFormElement = HTMLFormElement;
        this.HTMLInputElement = HTMLInputElement;
        this.HTMLTextAreaElement = HTMLTextAreaElement;
        this.HTMLImageElement = HTMLImageElement;
        this.Image = Image;
        this.HTMLScriptElement = HTMLScriptElement;
        this.HTMLLinkElement = HTMLLinkElement;
        this.HTMLStyleElement = HTMLStyleElement;
        this.HTMLLabelElement = HTMLLabelElement;
        this.HTMLSlotElement = HTMLSlotElement;
        this.HTMLMetaElement = HTMLMetaElement;
        this.SVGSVGElement = SVGSVGElement;
        this.SVGElement = SVGElement;
        this.Text = Text;
        this.Comment = Comment;
        this.ShadowRoot = ShadowRoot;
        this.Element = Element;
        this.DocumentFragment = DocumentFragment;
        this.CharacterData = CharacterData;
        this.NodeFilter = NodeFilter;
        this.TreeWalker = TreeWalker;
        this.DOMParser = DOMParser;
        this.MutationObserver = MutationObserver;
        this.Document = Document;
        this.HTMLDocument = HTMLDocument;
        this.XMLDocument = XMLDocument;
        this.SVGDocument = SVGDocument;
        this.Event = Event;
        this.UIEvent = UIEvent;
        this.CustomEvent = CustomEvent;
        this.AnimationEvent = AnimationEvent;
        this.KeyboardEvent = KeyboardEvent;
        this.MouseEvent = MouseEvent;
        this.PointerEvent = PointerEvent;
        this.FocusEvent = FocusEvent;
        this.WheelEvent = WheelEvent;
        this.InputEvent = InputEvent;
        this.ErrorEvent = ErrorEvent;
        this.StorageEvent = StorageEvent;
        this.ProgressEvent = ProgressEvent;
        this.EventTarget = EventTarget;
        this.DataTransfer = DataTransfer;
        this.DataTransferItem = DataTransferItem;
        this.DataTransferItemList = DataTransferItemList;
        this.URL = URL;
        this.Location = Location;
        this.CustomElementRegistry = CustomElementRegistry;
        this.Window = Window;
        this.Headers = Map;
        this.XMLSerializer = XMLSerializer;
        this.ResizeObserver = ResizeObserver;
        this.CSSStyleSheet = CSSStyleSheet;
        this.Blob = Blob;
        this.File = File;
        this.FileReader = FileReader;
        this.DOMException = DOMException;
        this.History = History;
        this.Screen = Screen;
        this.Storage = Storage;
        this.URLSearchParams = URLSearchParams;
        this.HTMLCollection = HTMLCollection;
        this.NodeList = NodeList;
        this.MediaQueryList = MediaQueryList;
        this.CSSUnitValue = CSSUnitValue;
        this.Selection = Selection;
        this.Navigator = Navigator;
        this.MimeType = MimeType;
        this.MimeTypeArray = MimeTypeArray;
        this.Plugin = Plugin;
        this.PluginArray = PluginArray;
        // Events
        this.onload = null;
        this.onerror = null;
        this.customElements = new CustomElementRegistry();
        this.location = new Location();
        this.history = new History();
        this.navigator = new Navigator();
        this.console = global ? global.console : null;
        this.self = this;
        this.top = this;
        this.parent = this;
        this.window = this;
        this.globalThis = this;
        this.screen = new Screen();
        this.innerWidth = 1024;
        this.innerHeight = 768;
        this.devicePixelRatio = 1;
        this.sessionStorage = new Storage();
        this.localStorage = new Storage();
        this.performance = PerfHooks.performance;
        // Node.js Globals
        this.Array = global ? global.Array : null;
        this.ArrayBuffer = global ? global.ArrayBuffer : null;
        this.Boolean = global ? global.Boolean : null;
        this.Buffer = null;
        this.DataView = global ? global.DataView : null;
        this.Date = global ? global.Date : null;
        this.Error = global ? global.Error : null;
        this.EvalError = global ? global.EvalError : null;
        this.Float32Array = global ? global.Float32Array : null;
        this.Float64Array = global ? global.Float64Array : null;
        this.GLOBAL = null;
        this.Infinity = global ? global.Infinity : null;
        this.Int16Array = global ? global.Int16Array : null;
        this.Int32Array = global ? global.Int32Array : null;
        this.Int8Array = global ? global.Int8Array : null;
        this.Intl = global ? global.Intl : null;
        this.JSON = global ? global.JSON : null;
        this.Map = global ? global.Map : null;
        this.Math = global ? global.Math : null;
        this.NaN = global ? global.NaN : null;
        this.Number = global ? global.Number : null;
        this.Promise = global ? global.Promise : null;
        this.RangeError = global ? global.RangeError : null;
        this.ReferenceError = global ? global.ReferenceError : null;
        this.RegExp = global ? global.RegExp : null;
        this.Reflect = global ? global.Reflect : null;
        this.Set = global ? global.Set : null;
        this.Symbol = global ? global.Symbol : null;
        this.SyntaxError = global ? global.SyntaxError : null;
        this.String = global ? global.String : null;
        this.TypeError = global ? global.TypeError : null;
        this.URIError = global ? global.URIError : null;
        this.Uint16Array = global ? global.Uint16Array : null;
        this.Uint32Array = global ? global.Uint32Array : null;
        this.Uint8Array = global ? global.Uint8Array : null;
        this.Uint8ClampedArray = global ? global.Uint8ClampedArray : null;
        this.WeakMap = global ? global.WeakMap : null;
        this.WeakSet = global ? global.WeakSet : null;
        this.clearImmediate = null;
        this.decodeURI = global ? global.decodeURI : null;
        this.decodeURIComponent = global ? global.decodeURIComponent : null;
        this.encodeURI = global ? global.encodeURI : null;
        this.encodeURIComponent = global ? global.encodeURIComponent : null;
        this.escape = global ? global.escape : null;
        this.global = null;
        this.isFinite = global ? global.isFinite : null;
        this.isNaN = global ? global.isNaN : null;
        this.parseFloat = global ? global.parseFloat : null;
        this.parseInt = global ? global.parseInt : null;
        this.process = null;
        this.root = null;
        this.setImmediate = null;
        this.queueMicrotask = global ? global.queueMicrotask : null;
        this.undefined = global ? global.undefined : null;
        this.unescape = global ? global.unescape : null;
        this.gc = null;
        this.v8debug = null;
        this.AbortController = global ? global.AbortController : null;
        this.AbortSignal = global ? global.AbortSignal : null;
        // Private properties
        this._objectClass = null;
        this._functionClass = null;
        this.document = new HTMLDocument();
        this.document.defaultView = this;
        this.document._readyStateManager.whenComplete().then(() => {
            this.dispatchEvent(new Event('load'));
        });
        DOMParser._ownerDocument = DOMParser._ownerDocument || this.document;
        FileReader._ownerDocument = FileReader._ownerDocument || this.document;
        Image.ownerDocument = Image.ownerDocument || this.document;
        for (const eventType of NonImplementedEventTypes) {
            if (!this[eventType]) {
                this[eventType] = Event;
            }
        }
        for (const className of NonImplemenetedElementClasses) {
            if (!this[className]) {
                this[className] = HTMLElement;
            }
        }
        // Binds all methods to "this", so that it will use the correct context when called globally.
        for (const key of Object.keys(Window.prototype)) {
            if (typeof this[key] === 'function') {
                this[key] = this[key].bind(this);
            }
        }
    }
    /**
     * Returns Object class.
     *
     * @returns Object class.
     */
    get Object() {
        if (this._objectClass) {
            return this._objectClass;
        }
        // When inside a VM global.Object is not the same as ({}).constructor
        // We will therefore run the code inside the VM to get the real constructor
        this._objectClass = this.eval('({}).constructor');
        return this._objectClass;
    }
    /**
     * Returns Function class.
     *
     * @returns Function class.
     */
    get Function() {
        if (this._functionClass) {
            return this._functionClass;
        }
        // When inside a VM global.Function is not the same as (() => {}).constructor
        // We will therefore run the code inside the VM to get the real constructor
        this._functionClass = this.eval('(() => {}).constructor');
        return this._functionClass;
    }
    /**
     * The CSS interface holds useful CSS-related methods.
     *
     * @returns CSS interface.
     */
    get CSS() {
        return new CSS();
    }
    /**
     * Evaluates code.
     *
     * @param code Code.
     * @returns Result.
     */
    eval(code) {
        let vmExists = false;
        let vm = null;
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
    }
    /**
     * Returns an object containing the values of all CSS properties of an element.
     *
     * @param element Element.
     * @returns CSS style declaration.
     */
    getComputedStyle(element) {
        return new CSSStyleDeclaration(element._attributes, element);
    }
    /**
     * Scrolls to a particular set of coordinates.
     *
     * @param x X position or options object.
     * @param y Y position.
     */
    scroll(x, y) {
        if (typeof x === 'object') {
            if (x.behavior === 'smooth') {
                this.setTimeout(() => {
                    if (x.top !== undefined) {
                        this.document.documentElement.scrollTop = x.top;
                    }
                    if (x.left !== undefined) {
                        this.document.documentElement.scrollLeft = x.left;
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
    }
    /**
     * Scrolls to a particular set of coordinates.
     *
     * @param x X position or options object.
     * @param y Y position.
     */
    scrollTo(x, y) {
        this.scroll(x, y);
    }
    /**
     * Returns a new MediaQueryList object that can then be used to determine if the document matches the media query string.
     *
     * @param mediaQueryString A string specifying the media query to parse into a MediaQueryList.
     * @returns A new MediaQueryList.
     */
    matchMedia(mediaQueryString) {
        const mediaQueryList = new MediaQueryList();
        mediaQueryList._media = mediaQueryString;
        return mediaQueryList;
    }
    /**
     * Sets a timer which executes a function once the timer expires.
     *
     * @override
     * @param callback Function to be executed.
     * @param [delay=0] Delay in ms.
     * @returns Timeout ID.
     */
    setTimeout(callback, delay = 0) {
        const id = global.setTimeout(() => {
            this.happyDOM.asyncTaskManager.endTimer(id);
            callback();
        }, delay);
        this.happyDOM.asyncTaskManager.startTimer(id);
        return id;
    }
    /**
     * Cancels a timeout previously established by calling setTimeout().
     *
     * @override
     * @param id ID of the timeout.
     */
    clearTimeout(id) {
        global.clearTimeout(id);
        this.happyDOM.asyncTaskManager.endTimer(id);
    }
    /**
     * Calls a function with a fixed time delay between each call.
     *
     * @override
     * @param callback Function to be executed.
     * @param [delay=0] Delay in ms.
     * @returns Interval ID.
     */
    setInterval(callback, delay = 0) {
        const id = global.setInterval(callback, delay);
        this.happyDOM.asyncTaskManager.startTimer(id);
        return id;
    }
    /**
     * Cancels a timed repeating action which was previously established by a call to setInterval().
     *
     * @override
     * @param id ID of the interval.
     */
    clearInterval(id) {
        global.clearInterval(id);
        this.happyDOM.asyncTaskManager.endTimer(id);
    }
    /**
     * Mock animation frames with timeouts.
     *
     * @override
     * @param callback Callback.
     * @returns Timeout ID.
     */
    requestAnimationFrame(callback) {
        return this.setTimeout(() => {
            callback(2);
        });
    }
    /**
     * Mock animation frames with timeouts.
     *
     * @override
     * @param id Timeout ID.
     */
    cancelAnimationFrame(id) {
        this.clearTimeout(id);
    }
    /**
     * Provides a global fetch() method that provides an easy, logical way to fetch resources asynchronously across the network.
     *
     * @override
     * @param url URL to resource.
     * @param [options] Options.
     * @returns Promise.
     */
    fetch(url, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                let fetch = null;
                try {
                    fetch = require('node-fetch');
                }
                catch (error) {
                    throw new Error('Failed to perform fetch. "node-fetch" could not be loaded.');
                }
                this.happyDOM.asyncTaskManager.startTask(AsyncTaskTypeEnum.fetch);
                fetch(RelativeURL.getAbsoluteURL(this.location, url), options)
                    .then((response) => {
                    if (this.happyDOM.asyncTaskManager.getRunningCount(AsyncTaskTypeEnum.fetch) === 0) {
                        reject(new Error('Failed to complete fetch request. Task was canceled.'));
                    }
                    else {
                        for (const methodName of FETCH_RESPONSE_TYPE_METHODS) {
                            const asyncMethod = response[methodName];
                            response[methodName] = () => {
                                return new Promise((resolve, reject) => {
                                    this.happyDOM.asyncTaskManager.startTask(AsyncTaskTypeEnum.fetch);
                                    asyncMethod
                                        .call(response)
                                        .then((response) => {
                                        if (this.happyDOM.asyncTaskManager.getRunningCount(AsyncTaskTypeEnum.fetch) ===
                                            0) {
                                            reject(new Error('Failed to complete fetch request. Task was canceled.'));
                                        }
                                        else {
                                            resolve(response);
                                            this.happyDOM.asyncTaskManager.endTask(AsyncTaskTypeEnum.fetch);
                                        }
                                    })
                                        .catch((error) => {
                                        reject(error);
                                        this.happyDOM.asyncTaskManager.endTask(AsyncTaskTypeEnum.fetch, error);
                                    });
                                });
                            };
                        }
                        resolve(response);
                        this.happyDOM.asyncTaskManager.endTask(AsyncTaskTypeEnum.fetch);
                    }
                })
                    .catch((error) => {
                    reject(error);
                    this.happyDOM.asyncTaskManager.endTask(AsyncTaskTypeEnum.fetch, error);
                });
            });
        });
    }
}
//# sourceMappingURL=Window.js.map