import CustomElementRegistry from '../custom-element/CustomElementRegistry';
import Document from '../nodes/document/Document';
import HTMLDocument from '../nodes/html-document/HTMLDocument';
import XMLDocument from '../nodes/xml-document/XMLDocument';
import SVGDocument from '../nodes/svg-document/SVGDocument';
import Node from '../nodes/node/Node';
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
import MutationObserver from '../mutation-observer/MutationObserver';
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
import IResponse from './IResponse';
import Storage from '../storage/Storage';
import IFetchOptions from './IFetchOptions';
import IWindow from './IWindow';
import URLSearchParams from '../url-search-params/URLSearchParams';
import HTMLCollection from '../nodes/element/HTMLCollection';
import NodeList from '../nodes/node/NodeList';
import MediaQueryList from '../match-media/MediaQueryList';
import Selection from '../selection/Selection';
import Navigator from '../navigator/Navigator';
import MimeType from '../navigator/MimeType';
import MimeTypeArray from '../navigator/MimeTypeArray';
import Plugin from '../navigator/Plugin';
import PluginArray from '../navigator/PluginArray';
/**
 * Handles the Window.
 */
export default class Window extends EventTarget implements IWindow, NodeJS.Global {
    readonly happyDOM: {
        whenAsyncComplete: () => Promise<void>;
        cancelAsync: () => void;
        asyncTaskManager: AsyncTaskManager;
    };
    readonly Node: typeof Node;
    readonly HTMLElement: typeof HTMLElement;
    readonly HTMLUnknownElement: typeof HTMLUnknownElement;
    readonly HTMLTemplateElement: typeof HTMLTemplateElement;
    readonly HTMLFormElement: typeof HTMLFormElement;
    readonly HTMLInputElement: typeof HTMLInputElement;
    readonly HTMLTextAreaElement: typeof HTMLTextAreaElement;
    readonly HTMLImageElement: typeof HTMLImageElement;
    readonly Image: typeof Image;
    readonly HTMLScriptElement: typeof HTMLScriptElement;
    readonly HTMLLinkElement: typeof HTMLLinkElement;
    readonly HTMLStyleElement: typeof HTMLStyleElement;
    readonly HTMLLabelElement: typeof HTMLLabelElement;
    readonly HTMLSlotElement: typeof HTMLSlotElement;
    readonly HTMLMetaElement: typeof HTMLMetaElement;
    readonly SVGSVGElement: typeof SVGSVGElement;
    readonly SVGElement: typeof SVGElement;
    readonly Text: typeof Text;
    readonly Comment: typeof Comment;
    readonly ShadowRoot: typeof ShadowRoot;
    readonly Element: typeof Element;
    readonly DocumentFragment: typeof DocumentFragment;
    readonly CharacterData: typeof CharacterData;
    readonly NodeFilter: {
        FILTER_ACCEPT: number;
        FILTER_REJECT: number;
        FILTER_SKIP: number;
        SHOW_ALL: number;
        SHOW_ELEMENT: number;
        SHOW_ATTRIBUTE: number;
        SHOW_TEXT: number;
        SHOW_CDATA_SECTION: number;
        SHOW_ENTITY_REFERENCE: number;
        SHOW_ENTITY: number;
        SHOW_PROCESSING_INSTRUCTION: number;
        SHOW_COMMENT: number;
        SHOW_DOCUMENT: number;
        SHOW_DOCUMENT_TYPE: number;
        SHOW_DOCUMENT_FRAGMENT: number;
        SHOW_NOTATION: number;
    };
    readonly TreeWalker: typeof TreeWalker;
    readonly DOMParser: typeof DOMParser;
    readonly MutationObserver: typeof MutationObserver;
    readonly Document: typeof Document;
    readonly HTMLDocument: typeof HTMLDocument;
    readonly XMLDocument: typeof XMLDocument;
    readonly SVGDocument: typeof SVGDocument;
    readonly Event: typeof Event;
    readonly UIEvent: typeof UIEvent;
    readonly CustomEvent: typeof CustomEvent;
    readonly AnimationEvent: typeof AnimationEvent;
    readonly KeyboardEvent: typeof KeyboardEvent;
    readonly MouseEvent: typeof MouseEvent;
    readonly PointerEvent: typeof PointerEvent;
    readonly FocusEvent: typeof FocusEvent;
    readonly WheelEvent: typeof WheelEvent;
    readonly InputEvent: typeof InputEvent;
    readonly ErrorEvent: typeof ErrorEvent;
    readonly StorageEvent: typeof StorageEvent;
    readonly ProgressEvent: typeof ProgressEvent;
    readonly EventTarget: typeof EventTarget;
    readonly DataTransfer: typeof DataTransfer;
    readonly DataTransferItem: typeof DataTransferItem;
    readonly DataTransferItemList: typeof DataTransferItemList;
    readonly URL: typeof URL;
    readonly Location: typeof Location;
    readonly CustomElementRegistry: typeof CustomElementRegistry;
    readonly Window: typeof Window;
    readonly Headers: MapConstructor;
    readonly XMLSerializer: typeof XMLSerializer;
    readonly ResizeObserver: typeof ResizeObserver;
    readonly CSSStyleSheet: typeof CSSStyleSheet;
    readonly Blob: typeof Blob;
    readonly File: typeof File;
    readonly FileReader: typeof FileReader;
    readonly DOMException: typeof DOMException;
    readonly History: typeof History;
    readonly Screen: typeof Screen;
    readonly Storage: typeof Storage;
    readonly URLSearchParams: typeof URLSearchParams;
    readonly HTMLCollection: typeof HTMLCollection;
    readonly NodeList: typeof NodeList;
    readonly MediaQueryList: typeof MediaQueryList;
    readonly CSSUnitValue: typeof CSSUnitValue;
    readonly Selection: typeof Selection;
    readonly Navigator: typeof Navigator;
    readonly MimeType: typeof MimeType;
    readonly MimeTypeArray: typeof MimeTypeArray;
    readonly Plugin: typeof Plugin;
    readonly PluginArray: typeof PluginArray;
    onload: (event: Event) => void;
    onerror: (event: ErrorEvent) => void;
    readonly document: Document;
    readonly customElements: CustomElementRegistry;
    readonly location: Location;
    readonly history: History;
    readonly navigator: Navigator;
    readonly console: Console | null;
    readonly self: this;
    readonly top: this;
    readonly parent: this;
    readonly window: this;
    readonly globalThis: this;
    readonly screen: Screen;
    readonly innerWidth = 1024;
    readonly innerHeight = 768;
    readonly devicePixelRatio = 1;
    readonly sessionStorage: Storage;
    readonly localStorage: Storage;
    readonly performance: any;
    Array: ArrayConstructor | null;
    ArrayBuffer: ArrayBufferConstructor | null;
    Boolean: BooleanConstructor | null;
    Buffer: null;
    DataView: DataViewConstructor | null;
    Date: DateConstructor | null;
    Error: ErrorConstructor | null;
    EvalError: EvalErrorConstructor | null;
    Float32Array: Float32ArrayConstructor | null;
    Float64Array: Float64ArrayConstructor | null;
    GLOBAL: null;
    Infinity: number | null;
    Int16Array: Int16ArrayConstructor | null;
    Int32Array: Int32ArrayConstructor | null;
    Int8Array: Int8ArrayConstructor | null;
    Intl: typeof Intl | null;
    JSON: JSON | null;
    Map: MapConstructor | null;
    Math: Math | null;
    NaN: number | null;
    Number: NumberConstructor | null;
    Promise: Function | null;
    RangeError: RangeErrorConstructor | null;
    ReferenceError: ReferenceErrorConstructor | null;
    RegExp: RegExpConstructor | null;
    Reflect: any;
    Set: SetConstructor | null;
    Symbol: Function | null;
    SyntaxError: SyntaxErrorConstructor | null;
    String: StringConstructor | null;
    TypeError: TypeErrorConstructor | null;
    URIError: URIErrorConstructor | null;
    Uint16Array: Uint16ArrayConstructor | null;
    Uint32Array: Uint32ArrayConstructor | null;
    Uint8Array: Uint8ArrayConstructor | null;
    Uint8ClampedArray: Function | null;
    WeakMap: WeakMapConstructor | null;
    WeakSet: WeakSetConstructor | null;
    clearImmediate: null;
    decodeURI: typeof decodeURI | null;
    decodeURIComponent: typeof decodeURIComponent | null;
    encodeURI: typeof encodeURI | null;
    encodeURIComponent: typeof encodeURIComponent | null;
    escape: ((str: string) => string) | null;
    global: null;
    isFinite: typeof isFinite | null;
    isNaN: typeof isNaN | null;
    parseFloat: typeof parseFloat | null;
    parseInt: typeof parseInt | null;
    process: null;
    root: null;
    setImmediate: null;
    queueMicrotask: any;
    undefined: null | undefined;
    unescape: ((str: string) => string) | null;
    gc: null;
    v8debug: null;
    AbortController: any;
    AbortSignal: any;
    private _objectClass;
    private _functionClass;
    /**
     * Constructor.
     */
    constructor();
    /**
     * Returns Object class.
     *
     * @returns Object class.
     */
    get Object(): typeof globalThis.Object;
    /**
     * Returns Function class.
     *
     * @returns Function class.
     */
    get Function(): typeof globalThis.Function;
    /**
     * The CSS interface holds useful CSS-related methods.
     *
     * @returns CSS interface.
     */
    get CSS(): CSS;
    /**
     * Evaluates code.
     *
     * @param code Code.
     * @returns Result.
     */
    eval(code: string): unknown;
    /**
     * Returns an object containing the values of all CSS properties of an element.
     *
     * @param element Element.
     * @returns CSS style declaration.
     */
    getComputedStyle(element: HTMLElement): CSSStyleDeclaration;
    /**
     * Scrolls to a particular set of coordinates.
     *
     * @param x X position or options object.
     * @param y Y position.
     */
    scroll(x: {
        top?: number;
        left?: number;
        behavior?: string;
    } | number, y?: number): void;
    /**
     * Scrolls to a particular set of coordinates.
     *
     * @param x X position or options object.
     * @param y Y position.
     */
    scrollTo(x: {
        top?: number;
        left?: number;
        behavior?: string;
    } | number, y?: number): void;
    /**
     * Returns a new MediaQueryList object that can then be used to determine if the document matches the media query string.
     *
     * @param mediaQueryString A string specifying the media query to parse into a MediaQueryList.
     * @returns A new MediaQueryList.
     */
    matchMedia(mediaQueryString: string): MediaQueryList;
    /**
     * Sets a timer which executes a function once the timer expires.
     *
     * @override
     * @param callback Function to be executed.
     * @param [delay=0] Delay in ms.
     * @returns Timeout ID.
     */
    setTimeout(callback: () => void, delay?: number): NodeJS.Timeout;
    /**
     * Cancels a timeout previously established by calling setTimeout().
     *
     * @override
     * @param id ID of the timeout.
     */
    clearTimeout(id: NodeJS.Timeout): void;
    /**
     * Calls a function with a fixed time delay between each call.
     *
     * @override
     * @param callback Function to be executed.
     * @param [delay=0] Delay in ms.
     * @returns Interval ID.
     */
    setInterval(callback: () => void, delay?: number): NodeJS.Timeout;
    /**
     * Cancels a timed repeating action which was previously established by a call to setInterval().
     *
     * @override
     * @param id ID of the interval.
     */
    clearInterval(id: NodeJS.Timeout): void;
    /**
     * Mock animation frames with timeouts.
     *
     * @override
     * @param callback Callback.
     * @returns Timeout ID.
     */
    requestAnimationFrame(callback: (timestamp: number) => void): NodeJS.Timeout;
    /**
     * Mock animation frames with timeouts.
     *
     * @override
     * @param id Timeout ID.
     */
    cancelAnimationFrame(id: NodeJS.Timeout): void;
    /**
     * Provides a global fetch() method that provides an easy, logical way to fetch resources asynchronously across the network.
     *
     * @override
     * @param url URL to resource.
     * @param [options] Options.
     * @returns Promise.
     */
    fetch(url: string, options?: IFetchOptions): Promise<IResponse>;
}
