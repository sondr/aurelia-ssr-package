System.register(["../xml-parser/XMLParser", "../nodes/node/Node", "../exception/DOMException", "../nodes/html-document/HTMLDocument", "../nodes/xml-document/XMLDocument", "../nodes/svg-document/SVGDocument"], function (exports_1, context_1) {
    "use strict";
    var XMLParser_1, Node_1, DOMException_1, HTMLDocument_1, XMLDocument_1, SVGDocument_1, DOMParser;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (XMLParser_1_1) {
                XMLParser_1 = XMLParser_1_1;
            },
            function (Node_1_1) {
                Node_1 = Node_1_1;
            },
            function (DOMException_1_1) {
                DOMException_1 = DOMException_1_1;
            },
            function (HTMLDocument_1_1) {
                HTMLDocument_1 = HTMLDocument_1_1;
            },
            function (XMLDocument_1_1) {
                XMLDocument_1 = XMLDocument_1_1;
            },
            function (SVGDocument_1_1) {
                SVGDocument_1 = SVGDocument_1_1;
            }
        ],
        execute: function () {
            DOMParser = /** @class */ (function () {
                /**
                 * DOM parser.
                 *
                 * Reference:
                 * https://developer.mozilla.org/en-US/docs/Web/API/DOMParser.
                 */
                function DOMParser() {
                }
                /**
                 * Parses HTML and returns a root element.
                 *
                 * @param string HTML data.
                 * @param mimeType Mime type.
                 * @returns Root element.
                 */
                DOMParser.prototype.parseFromString = function (string, mimeType) {
                    if (!mimeType) {
                        throw new DOMException_1.default('Second parameter "mimeType" is mandatory.');
                    }
                    var ownerDocument = this.constructor._ownerDocument;
                    var newDocument = this._createDocument(mimeType);
                    newDocument.defaultView = ownerDocument.defaultView;
                    newDocument.childNodes.length = 0;
                    newDocument.children.length = 0;
                    var root = XMLParser_1.default.parse(newDocument, string, true);
                    var documentElement = null;
                    var documentTypeNode = null;
                    for (var _i = 0, _a = root.childNodes; _i < _a.length; _i++) {
                        var node = _a[_i];
                        if (node['tagName'] === 'HTML') {
                            documentElement = node;
                        }
                        else if (node.nodeType === Node_1.default.DOCUMENT_TYPE_NODE) {
                            documentTypeNode = node;
                        }
                        if (documentElement && documentTypeNode) {
                            break;
                        }
                    }
                    if (documentElement) {
                        if (documentTypeNode) {
                            newDocument.appendChild(documentTypeNode);
                        }
                        newDocument.appendChild(documentElement);
                        var body = newDocument.querySelector('body');
                        if (body) {
                            for (var _b = 0, _c = root.childNodes.slice(); _b < _c.length; _b++) {
                                var child = _c[_b];
                                body.appendChild(child);
                            }
                        }
                    }
                    else {
                        var documentElement_1 = newDocument.createElement('html');
                        var bodyElement = newDocument.createElement('body');
                        var headElement = newDocument.createElement('head');
                        for (var _d = 0, _e = root.childNodes.slice(); _d < _e.length; _d++) {
                            var node = _e[_d];
                            bodyElement.appendChild(node);
                        }
                        documentElement_1.appendChild(headElement);
                        documentElement_1.appendChild(bodyElement);
                        newDocument.appendChild(documentElement_1);
                    }
                    return newDocument;
                };
                /**
                 *
                 * @param mimeType Mime type.
                 * @returns Document.
                 */
                DOMParser.prototype._createDocument = function (mimeType) {
                    switch (mimeType) {
                        case 'text/html':
                            return new HTMLDocument_1.default();
                        case 'image/svg+xml':
                            return new SVGDocument_1.default();
                        case 'text/xml':
                        case 'application/xml':
                        case 'application/xhtml+xml':
                            return new XMLDocument_1.default();
                        default:
                            throw new DOMException_1.default("Unknown mime type \"".concat(mimeType, "\"."));
                    }
                };
                DOMParser._ownerDocument = null;
                return DOMParser;
            }());
            exports_1("default", DOMParser);
        }
    };
});
//# sourceMappingURL=DOMParser.js.map