import XMLParser from '../xml-parser/XMLParser';
import Node from '../nodes/node/Node';
import DOMException from '../exception/DOMException';
import HTMLDocument from '../nodes/html-document/HTMLDocument';
import XMLDocument from '../nodes/xml-document/XMLDocument';
import SVGDocument from '../nodes/svg-document/SVGDocument';
/**
 * DOM parser.
 *
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/DOMParser.
 */
var DOMParser = /** @class */ (function () {
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
            throw new DOMException('Second parameter "mimeType" is mandatory.');
        }
        var ownerDocument = this.constructor._ownerDocument;
        var newDocument = this._createDocument(mimeType);
        newDocument.defaultView = ownerDocument.defaultView;
        newDocument.childNodes.length = 0;
        newDocument.children.length = 0;
        var root = XMLParser.parse(newDocument, string, true);
        var documentElement = null;
        var documentTypeNode = null;
        for (var _i = 0, _a = root.childNodes; _i < _a.length; _i++) {
            var node = _a[_i];
            if (node['tagName'] === 'HTML') {
                documentElement = node;
            }
            else if (node.nodeType === Node.DOCUMENT_TYPE_NODE) {
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
                return new HTMLDocument();
            case 'image/svg+xml':
                return new SVGDocument();
            case 'text/xml':
            case 'application/xml':
            case 'application/xhtml+xml':
                return new XMLDocument();
            default:
                throw new DOMException("Unknown mime type \"".concat(mimeType, "\"."));
        }
    };
    DOMParser._ownerDocument = null;
    return DOMParser;
}());
export default DOMParser;
//# sourceMappingURL=DOMParser.js.map