var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "./window/Window", "./event/DataTransfer", "./event/DataTransferItem", "./event/DataTransferItemList", "./location/URL", "./location/Location", "./mutation-observer/MutationObserver", "./resize-observer/ResizeObserver", "./file/Blob", "./file/File", "./file/FileReader", "./exception/DOMException", "./history/History", "./css/CSSStyleDeclaration", "./screen/Screen", "./window/AsyncTaskManager", "./tree-walker/NodeFilter", "./event/Event", "./event/EventTarget", "./event/UIEvent", "./event/events/ErrorEvent", "./event/events/FocusEvent", "./event/events/CustomEvent", "./event/events/AnimationEvent", "./event/events/InputEvent", "./event/events/KeyboardEvent", "./event/events/MouseEvent", "./event/events/ProgressEvent", "./event/events/WheelEvent", "./window/AsyncWindow", "./dom-parser/DOMParser", "./nodes/document/Document", "./nodes/html-document/HTMLDocument", "./nodes/xml-document/XMLDocument", "./nodes/svg-document/SVGDocument", "./nodes/element/Element", "./nodes/html-element/HTMLElement", "./nodes/html-template-element/HTMLTemplateElement", "./nodes/html-form-element/HTMLFormElement", "./nodes/html-input-element/HTMLInputElement", "./nodes/html-text-area-element/HTMLTextAreaElement", "./nodes/html-image-element/HTMLImageElement", "./nodes/html-image-element/Image", "./nodes/html-script-element/HTMLScriptElement", "./nodes/html-link-element/HTMLLinkElement", "./nodes/html-style-element/HTMLStyleElement", "./nodes/html-slot-element/HTMLSlotElement", "./nodes/html-label-element/HTMLLabelElement", "./nodes/html-meta-element/HTMLMetaElement", "./nodes/svg-element/SVGElement", "./nodes/svg-element/SVGGraphicsElement", "./nodes/svg-element/SVGSVGElement", "./nodes/document-fragment/DocumentFragment", "./nodes/shadow-root/ShadowRoot", "./nodes/node/Node", "./nodes/text/Text", "./nodes/comment/Comment", "./nodes/document-type/DocumentType", "./tree-walker/TreeWalker", "./custom-element/CustomElementRegistry", "./xml-parser/XMLParser", "./xml-serializer/XMLSerializer", "./css/CSSStyleSheet", "./storage/Storage", "./url-search-params/URLSearchParams", "./selection/Selection"], function (require, exports, Window_1, DataTransfer_1, DataTransferItem_1, DataTransferItemList_1, URL_1, Location_1, MutationObserver_1, ResizeObserver_1, Blob_1, File_1, FileReader_1, DOMException_1, History_1, CSSStyleDeclaration_1, Screen_1, AsyncTaskManager_1, NodeFilter_1, Event_1, EventTarget_1, UIEvent_1, ErrorEvent_1, FocusEvent_1, CustomEvent_1, AnimationEvent_1, InputEvent_1, KeyboardEvent_1, MouseEvent_1, ProgressEvent_1, WheelEvent_1, AsyncWindow_1, DOMParser_1, Document_1, HTMLDocument_1, XMLDocument_1, SVGDocument_1, Element_1, HTMLElement_1, HTMLTemplateElement_1, HTMLFormElement_1, HTMLInputElement_1, HTMLTextAreaElement_1, HTMLImageElement_1, Image_1, HTMLScriptElement_1, HTMLLinkElement_1, HTMLStyleElement_1, HTMLSlotElement_1, HTMLLabelElement_1, HTMLMetaElement_1, SVGElement_1, SVGGraphicsElement_1, SVGSVGElement_1, DocumentFragment_1, ShadowRoot_1, Node_1, Text_1, Comment_1, DocumentType_1, TreeWalker_1, CustomElementRegistry_1, XMLParser_1, XMLSerializer_1, CSSStyleSheet_1, Storage_1, URLSearchParams_1, Selection_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Selection = exports.URLSearchParams = exports.Storage = exports.CSSStyleSheet = exports.XMLSerializer = exports.XMLParser = exports.CustomElementRegistry = exports.TreeWalker = exports.DocumentType = exports.Comment = exports.Text = exports.Node = exports.ShadowRoot = exports.DocumentFragment = exports.SVGSVGElement = exports.SVGGraphicsElement = exports.SVGElement = exports.HTMLMetaElement = exports.HTMLLabelElement = exports.HTMLSlotElement = exports.HTMLStyleElement = exports.HTMLLinkElement = exports.HTMLScriptElement = exports.Image = exports.HTMLImageElement = exports.HTMLTextAreaElement = exports.HTMLInputElement = exports.HTMLFormElement = exports.HTMLTemplateElement = exports.HTMLElement = exports.Element = exports.SVGDocument = exports.XMLDocument = exports.HTMLDocument = exports.Document = exports.DOMParser = exports.WheelEvent = exports.ProgressEvent = exports.MouseEvent = exports.KeyboardEvent = exports.InputEvent = exports.CustomEvent = exports.AnimationEvent = exports.FocusEvent = exports.ErrorEvent = exports.UIEvent = exports.EventTarget = exports.Event = exports.NodeFilter = exports.AsyncTaskManager = exports.Screen = exports.CSSStyleDeclaration = exports.History = exports.DOMException = exports.FileReader = exports.File = exports.Blob = exports.ResizeObserver = exports.MutationObserver = exports.Location = exports.URL = exports.DataTransferItemList = exports.DataTransferItem = exports.DataTransfer = exports.Window = exports.AsyncWindow = void 0;
    Window_1 = __importDefault(Window_1);
    DataTransfer_1 = __importDefault(DataTransfer_1);
    DataTransferItem_1 = __importDefault(DataTransferItem_1);
    DataTransferItemList_1 = __importDefault(DataTransferItemList_1);
    URL_1 = __importDefault(URL_1);
    Location_1 = __importDefault(Location_1);
    MutationObserver_1 = __importDefault(MutationObserver_1);
    ResizeObserver_1 = __importDefault(ResizeObserver_1);
    Blob_1 = __importDefault(Blob_1);
    File_1 = __importDefault(File_1);
    FileReader_1 = __importDefault(FileReader_1);
    DOMException_1 = __importDefault(DOMException_1);
    History_1 = __importDefault(History_1);
    CSSStyleDeclaration_1 = __importDefault(CSSStyleDeclaration_1);
    Screen_1 = __importDefault(Screen_1);
    AsyncTaskManager_1 = __importDefault(AsyncTaskManager_1);
    NodeFilter_1 = __importDefault(NodeFilter_1);
    Event_1 = __importDefault(Event_1);
    EventTarget_1 = __importDefault(EventTarget_1);
    UIEvent_1 = __importDefault(UIEvent_1);
    ErrorEvent_1 = __importDefault(ErrorEvent_1);
    FocusEvent_1 = __importDefault(FocusEvent_1);
    CustomEvent_1 = __importDefault(CustomEvent_1);
    AnimationEvent_1 = __importDefault(AnimationEvent_1);
    InputEvent_1 = __importDefault(InputEvent_1);
    KeyboardEvent_1 = __importDefault(KeyboardEvent_1);
    MouseEvent_1 = __importDefault(MouseEvent_1);
    ProgressEvent_1 = __importDefault(ProgressEvent_1);
    WheelEvent_1 = __importDefault(WheelEvent_1);
    AsyncWindow_1 = __importDefault(AsyncWindow_1);
    DOMParser_1 = __importDefault(DOMParser_1);
    Document_1 = __importDefault(Document_1);
    HTMLDocument_1 = __importDefault(HTMLDocument_1);
    XMLDocument_1 = __importDefault(XMLDocument_1);
    SVGDocument_1 = __importDefault(SVGDocument_1);
    Element_1 = __importDefault(Element_1);
    HTMLElement_1 = __importDefault(HTMLElement_1);
    HTMLTemplateElement_1 = __importDefault(HTMLTemplateElement_1);
    HTMLFormElement_1 = __importDefault(HTMLFormElement_1);
    HTMLInputElement_1 = __importDefault(HTMLInputElement_1);
    HTMLTextAreaElement_1 = __importDefault(HTMLTextAreaElement_1);
    HTMLImageElement_1 = __importDefault(HTMLImageElement_1);
    Image_1 = __importDefault(Image_1);
    HTMLScriptElement_1 = __importDefault(HTMLScriptElement_1);
    HTMLLinkElement_1 = __importDefault(HTMLLinkElement_1);
    HTMLStyleElement_1 = __importDefault(HTMLStyleElement_1);
    HTMLSlotElement_1 = __importDefault(HTMLSlotElement_1);
    HTMLLabelElement_1 = __importDefault(HTMLLabelElement_1);
    HTMLMetaElement_1 = __importDefault(HTMLMetaElement_1);
    SVGElement_1 = __importDefault(SVGElement_1);
    SVGGraphicsElement_1 = __importDefault(SVGGraphicsElement_1);
    SVGSVGElement_1 = __importDefault(SVGSVGElement_1);
    DocumentFragment_1 = __importDefault(DocumentFragment_1);
    ShadowRoot_1 = __importDefault(ShadowRoot_1);
    Node_1 = __importDefault(Node_1);
    Text_1 = __importDefault(Text_1);
    Comment_1 = __importDefault(Comment_1);
    DocumentType_1 = __importDefault(DocumentType_1);
    TreeWalker_1 = __importDefault(TreeWalker_1);
    CustomElementRegistry_1 = __importDefault(CustomElementRegistry_1);
    XMLParser_1 = __importDefault(XMLParser_1);
    XMLSerializer_1 = __importDefault(XMLSerializer_1);
    CSSStyleSheet_1 = __importDefault(CSSStyleSheet_1);
    Storage_1 = __importDefault(Storage_1);
    URLSearchParams_1 = __importDefault(URLSearchParams_1);
    Selection_1 = __importDefault(Selection_1);
    exports.Window = Window_1.default;
    exports.DataTransfer = DataTransfer_1.default;
    exports.DataTransferItem = DataTransferItem_1.default;
    exports.DataTransferItemList = DataTransferItemList_1.default;
    exports.URL = URL_1.default;
    exports.Location = Location_1.default;
    exports.MutationObserver = MutationObserver_1.default;
    exports.ResizeObserver = ResizeObserver_1.default;
    exports.Blob = Blob_1.default;
    exports.File = File_1.default;
    exports.FileReader = FileReader_1.default;
    exports.DOMException = DOMException_1.default;
    exports.History = History_1.default;
    exports.CSSStyleDeclaration = CSSStyleDeclaration_1.default;
    exports.Screen = Screen_1.default;
    exports.AsyncTaskManager = AsyncTaskManager_1.default;
    exports.NodeFilter = NodeFilter_1.default;
    exports.Event = Event_1.default;
    exports.EventTarget = EventTarget_1.default;
    exports.UIEvent = UIEvent_1.default;
    exports.ErrorEvent = ErrorEvent_1.default;
    exports.FocusEvent = FocusEvent_1.default;
    exports.CustomEvent = CustomEvent_1.default;
    exports.AnimationEvent = AnimationEvent_1.default;
    exports.InputEvent = InputEvent_1.default;
    exports.KeyboardEvent = KeyboardEvent_1.default;
    exports.MouseEvent = MouseEvent_1.default;
    exports.ProgressEvent = ProgressEvent_1.default;
    exports.WheelEvent = WheelEvent_1.default;
    exports.AsyncWindow = AsyncWindow_1.default;
    exports.DOMParser = DOMParser_1.default;
    exports.Document = Document_1.default;
    exports.HTMLDocument = HTMLDocument_1.default;
    exports.XMLDocument = XMLDocument_1.default;
    exports.SVGDocument = SVGDocument_1.default;
    exports.Element = Element_1.default;
    exports.HTMLElement = HTMLElement_1.default;
    exports.HTMLTemplateElement = HTMLTemplateElement_1.default;
    exports.HTMLFormElement = HTMLFormElement_1.default;
    exports.HTMLInputElement = HTMLInputElement_1.default;
    exports.HTMLTextAreaElement = HTMLTextAreaElement_1.default;
    exports.HTMLImageElement = HTMLImageElement_1.default;
    exports.Image = Image_1.default;
    exports.HTMLScriptElement = HTMLScriptElement_1.default;
    exports.HTMLLinkElement = HTMLLinkElement_1.default;
    exports.HTMLStyleElement = HTMLStyleElement_1.default;
    exports.HTMLSlotElement = HTMLSlotElement_1.default;
    exports.HTMLLabelElement = HTMLLabelElement_1.default;
    exports.HTMLMetaElement = HTMLMetaElement_1.default;
    exports.SVGElement = SVGElement_1.default;
    exports.SVGGraphicsElement = SVGGraphicsElement_1.default;
    exports.SVGSVGElement = SVGSVGElement_1.default;
    exports.DocumentFragment = DocumentFragment_1.default;
    exports.ShadowRoot = ShadowRoot_1.default;
    exports.Node = Node_1.default;
    exports.Text = Text_1.default;
    exports.Comment = Comment_1.default;
    exports.DocumentType = DocumentType_1.default;
    exports.TreeWalker = TreeWalker_1.default;
    exports.CustomElementRegistry = CustomElementRegistry_1.default;
    exports.XMLParser = XMLParser_1.default;
    exports.XMLSerializer = XMLSerializer_1.default;
    exports.CSSStyleSheet = CSSStyleSheet_1.default;
    exports.Storage = Storage_1.default;
    exports.URLSearchParams = URLSearchParams_1.default;
    exports.Selection = Selection_1.default;
});
//# sourceMappingURL=index.js.map