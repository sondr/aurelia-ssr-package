System.register(["./window/Window", "./event/DataTransfer", "./event/DataTransferItem", "./event/DataTransferItemList", "./location/URL", "./location/Location", "./mutation-observer/MutationObserver", "./resize-observer/ResizeObserver", "./file/Blob", "./file/File", "./file/FileReader", "./exception/DOMException", "./history/History", "./css/CSSStyleDeclaration", "./screen/Screen", "./window/AsyncTaskManager", "./tree-walker/NodeFilter", "./event/Event", "./event/EventTarget", "./event/UIEvent", "./event/events/ErrorEvent", "./event/events/FocusEvent", "./event/events/CustomEvent", "./event/events/AnimationEvent", "./event/events/InputEvent", "./event/events/KeyboardEvent", "./event/events/MouseEvent", "./event/events/ProgressEvent", "./event/events/WheelEvent", "./window/AsyncWindow", "./dom-parser/DOMParser", "./nodes/document/Document", "./nodes/html-document/HTMLDocument", "./nodes/xml-document/XMLDocument", "./nodes/svg-document/SVGDocument", "./nodes/element/Element", "./nodes/html-element/HTMLElement", "./nodes/html-template-element/HTMLTemplateElement", "./nodes/html-form-element/HTMLFormElement", "./nodes/html-input-element/HTMLInputElement", "./nodes/html-text-area-element/HTMLTextAreaElement", "./nodes/html-image-element/HTMLImageElement", "./nodes/html-script-element/HTMLScriptElement", "./nodes/html-link-element/HTMLLinkElement", "./nodes/html-style-element/HTMLStyleElement", "./nodes/svg-element/SVGElement", "./nodes/svg-element/SVGGraphicsElement", "./nodes/svg-element/SVGSVGElement", "./nodes/document-fragment/DocumentFragment", "./nodes/shadow-root/ShadowRoot", "./nodes/node/Node", "./nodes/text/Text", "./nodes/comment/Comment", "./nodes/document-type/DocumentType", "./tree-walker/TreeWalker", "./custom-element/CustomElementRegistry", "./xml-parser/XMLParser", "./xml-serializer/XMLSerializer", "./config/ElementTag", "./config/SelfClosingElements", "./config/UnclosedElements", "./css/CSSStyleSheet", "./storage/Storage", "./url-search-params/URLSearchParams"], function (exports_1, context_1) {
    "use strict";
    var Window_1, DataTransfer_1, DataTransferItem_1, DataTransferItemList_1, URL_1, Location_1, MutationObserver_1, ResizeObserver_1, Blob_1, File_1, FileReader_1, DOMException_1, History_1, CSSStyleDeclaration_1, Screen_1, AsyncTaskManager_1, NodeFilter_1, Event_1, EventTarget_1, UIEvent_1, ErrorEvent_1, FocusEvent_1, CustomEvent_1, AnimationEvent_1, InputEvent_1, KeyboardEvent_1, MouseEvent_1, ProgressEvent_1, WheelEvent_1, AsyncWindow_1, DOMParser_1, Document_1, HTMLDocument_1, XMLDocument_1, SVGDocument_1, Element_1, HTMLElement_1, HTMLTemplateElement_1, HTMLFormElement_1, HTMLInputElement_1, HTMLTextAreaElement_1, HTMLImageElement_1, HTMLScriptElement_1, HTMLLinkElement_1, HTMLStyleElement_1, SVGElement_1, SVGGraphicsElement_1, SVGSVGElement_1, DocumentFragment_1, ShadowRoot_1, Node_1, Text_1, Comment_1, DocumentType_1, TreeWalker_1, CustomElementRegistry_1, XMLParser_1, XMLSerializer_1, ElementTag_1, SelfClosingElements_1, UnclosedElements_1, CSSStyleSheet_1, Storage_1, URLSearchParams_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Window_1_1) {
                Window_1 = Window_1_1;
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
            function (URL_1_1) {
                URL_1 = URL_1_1;
            },
            function (Location_1_1) {
                Location_1 = Location_1_1;
            },
            function (MutationObserver_1_1) {
                MutationObserver_1 = MutationObserver_1_1;
            },
            function (ResizeObserver_1_1) {
                ResizeObserver_1 = ResizeObserver_1_1;
            },
            function (Blob_1_1) {
                Blob_1 = Blob_1_1;
            },
            function (File_1_1) {
                File_1 = File_1_1;
            },
            function (FileReader_1_1) {
                FileReader_1 = FileReader_1_1;
            },
            function (DOMException_1_1) {
                DOMException_1 = DOMException_1_1;
            },
            function (History_1_1) {
                History_1 = History_1_1;
            },
            function (CSSStyleDeclaration_1_1) {
                CSSStyleDeclaration_1 = CSSStyleDeclaration_1_1;
            },
            function (Screen_1_1) {
                Screen_1 = Screen_1_1;
            },
            function (AsyncTaskManager_1_1) {
                AsyncTaskManager_1 = AsyncTaskManager_1_1;
            },
            function (NodeFilter_1_1) {
                NodeFilter_1 = NodeFilter_1_1;
            },
            function (Event_1_1) {
                Event_1 = Event_1_1;
            },
            function (EventTarget_1_1) {
                EventTarget_1 = EventTarget_1_1;
            },
            function (UIEvent_1_1) {
                UIEvent_1 = UIEvent_1_1;
            },
            function (ErrorEvent_1_1) {
                ErrorEvent_1 = ErrorEvent_1_1;
            },
            function (FocusEvent_1_1) {
                FocusEvent_1 = FocusEvent_1_1;
            },
            function (CustomEvent_1_1) {
                CustomEvent_1 = CustomEvent_1_1;
            },
            function (AnimationEvent_1_1) {
                AnimationEvent_1 = AnimationEvent_1_1;
            },
            function (InputEvent_1_1) {
                InputEvent_1 = InputEvent_1_1;
            },
            function (KeyboardEvent_1_1) {
                KeyboardEvent_1 = KeyboardEvent_1_1;
            },
            function (MouseEvent_1_1) {
                MouseEvent_1 = MouseEvent_1_1;
            },
            function (ProgressEvent_1_1) {
                ProgressEvent_1 = ProgressEvent_1_1;
            },
            function (WheelEvent_1_1) {
                WheelEvent_1 = WheelEvent_1_1;
            },
            function (AsyncWindow_1_1) {
                AsyncWindow_1 = AsyncWindow_1_1;
            },
            function (DOMParser_1_1) {
                DOMParser_1 = DOMParser_1_1;
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
            function (Element_1_1) {
                Element_1 = Element_1_1;
            },
            function (HTMLElement_1_1) {
                HTMLElement_1 = HTMLElement_1_1;
            },
            function (HTMLTemplateElement_1_1) {
                HTMLTemplateElement_1 = HTMLTemplateElement_1_1;
            },
            function (HTMLFormElement_1_1) {
                HTMLFormElement_1 = HTMLFormElement_1_1;
            },
            function (HTMLInputElement_1_1) {
                HTMLInputElement_1 = HTMLInputElement_1_1;
            },
            function (HTMLTextAreaElement_1_1) {
                HTMLTextAreaElement_1 = HTMLTextAreaElement_1_1;
            },
            function (HTMLImageElement_1_1) {
                HTMLImageElement_1 = HTMLImageElement_1_1;
            },
            function (HTMLScriptElement_1_1) {
                HTMLScriptElement_1 = HTMLScriptElement_1_1;
            },
            function (HTMLLinkElement_1_1) {
                HTMLLinkElement_1 = HTMLLinkElement_1_1;
            },
            function (HTMLStyleElement_1_1) {
                HTMLStyleElement_1 = HTMLStyleElement_1_1;
            },
            function (SVGElement_1_1) {
                SVGElement_1 = SVGElement_1_1;
            },
            function (SVGGraphicsElement_1_1) {
                SVGGraphicsElement_1 = SVGGraphicsElement_1_1;
            },
            function (SVGSVGElement_1_1) {
                SVGSVGElement_1 = SVGSVGElement_1_1;
            },
            function (DocumentFragment_1_1) {
                DocumentFragment_1 = DocumentFragment_1_1;
            },
            function (ShadowRoot_1_1) {
                ShadowRoot_1 = ShadowRoot_1_1;
            },
            function (Node_1_1) {
                Node_1 = Node_1_1;
            },
            function (Text_1_1) {
                Text_1 = Text_1_1;
            },
            function (Comment_1_1) {
                Comment_1 = Comment_1_1;
            },
            function (DocumentType_1_1) {
                DocumentType_1 = DocumentType_1_1;
            },
            function (TreeWalker_1_1) {
                TreeWalker_1 = TreeWalker_1_1;
            },
            function (CustomElementRegistry_1_1) {
                CustomElementRegistry_1 = CustomElementRegistry_1_1;
            },
            function (XMLParser_1_1) {
                XMLParser_1 = XMLParser_1_1;
            },
            function (XMLSerializer_1_1) {
                XMLSerializer_1 = XMLSerializer_1_1;
            },
            function (ElementTag_1_1) {
                ElementTag_1 = ElementTag_1_1;
            },
            function (SelfClosingElements_1_1) {
                SelfClosingElements_1 = SelfClosingElements_1_1;
            },
            function (UnclosedElements_1_1) {
                UnclosedElements_1 = UnclosedElements_1_1;
            },
            function (CSSStyleSheet_1_1) {
                CSSStyleSheet_1 = CSSStyleSheet_1_1;
            },
            function (Storage_1_1) {
                Storage_1 = Storage_1_1;
            },
            function (URLSearchParams_1_1) {
                URLSearchParams_1 = URLSearchParams_1_1;
            }
        ],
        execute: function () {
            exports_1("Window", Window_1.default);
            exports_1("DataTransfer", DataTransfer_1.default);
            exports_1("DataTransferItem", DataTransferItem_1.default);
            exports_1("DataTransferItemList", DataTransferItemList_1.default);
            exports_1("URL", URL_1.default);
            exports_1("Location", Location_1.default);
            exports_1("MutationObserver", MutationObserver_1.default);
            exports_1("ResizeObserver", ResizeObserver_1.default);
            exports_1("Blob", Blob_1.default);
            exports_1("File", File_1.default);
            exports_1("FileReader", FileReader_1.default);
            exports_1("DOMException", DOMException_1.default);
            exports_1("History", History_1.default);
            exports_1("CSSStyleDeclaration", CSSStyleDeclaration_1.default);
            exports_1("Screen", Screen_1.default);
            exports_1("AsyncTaskManager", AsyncTaskManager_1.default);
            exports_1("NodeFilter", NodeFilter_1.default);
            exports_1("Event", Event_1.default);
            exports_1("EventTarget", EventTarget_1.default);
            exports_1("UIEvent", UIEvent_1.default);
            exports_1("ErrorEvent", ErrorEvent_1.default);
            exports_1("FocusEvent", FocusEvent_1.default);
            exports_1("CustomEvent", CustomEvent_1.default);
            exports_1("AnimationEvent", AnimationEvent_1.default);
            exports_1("InputEvent", InputEvent_1.default);
            exports_1("KeyboardEvent", KeyboardEvent_1.default);
            exports_1("MouseEvent", MouseEvent_1.default);
            exports_1("ProgressEvent", ProgressEvent_1.default);
            exports_1("WheelEvent", WheelEvent_1.default);
            exports_1("AsyncWindow", AsyncWindow_1.default);
            exports_1("DOMParser", DOMParser_1.default);
            exports_1("Document", Document_1.default);
            exports_1("HTMLDocument", HTMLDocument_1.default);
            exports_1("XMLDocument", XMLDocument_1.default);
            exports_1("SVGDocument", SVGDocument_1.default);
            exports_1("Element", Element_1.default);
            exports_1("HTMLElement", HTMLElement_1.default);
            exports_1("HTMLTemplateElement", HTMLTemplateElement_1.default);
            exports_1("HTMLFormElement", HTMLFormElement_1.default);
            exports_1("HTMLInputElement", HTMLInputElement_1.default);
            exports_1("HTMLTextAreaElement", HTMLTextAreaElement_1.default);
            exports_1("HTMLImageElement", HTMLImageElement_1.default);
            exports_1("HTMLScriptElement", HTMLScriptElement_1.default);
            exports_1("HTMLLinkElement", HTMLLinkElement_1.default);
            exports_1("HTMLStyleElement", HTMLStyleElement_1.default);
            exports_1("SVGElement", SVGElement_1.default);
            exports_1("SVGGraphicsElement", SVGGraphicsElement_1.default);
            exports_1("SVGSVGElement", SVGSVGElement_1.default);
            exports_1("DocumentFragment", DocumentFragment_1.default);
            exports_1("ShadowRoot", ShadowRoot_1.default);
            exports_1("Node", Node_1.default);
            exports_1("Text", Text_1.default);
            exports_1("Comment", Comment_1.default);
            exports_1("DocumentType", DocumentType_1.default);
            exports_1("TreeWalker", TreeWalker_1.default);
            exports_1("CustomElementRegistry", CustomElementRegistry_1.default);
            exports_1("XMLParser", XMLParser_1.default);
            exports_1("XMLSerializer", XMLSerializer_1.default);
            exports_1("ElementTag", ElementTag_1.default);
            exports_1("SelfClosingElements", SelfClosingElements_1.default);
            exports_1("UnclosedElements", UnclosedElements_1.default);
            exports_1("CSSStyleSheet", CSSStyleSheet_1.default);
            exports_1("Storage", Storage_1.default);
            exports_1("URLSearchParams", URLSearchParams_1.default);
        }
    };
});
//# sourceMappingURL=index.js.map