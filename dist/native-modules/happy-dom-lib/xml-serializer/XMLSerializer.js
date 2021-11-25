import Node from '../nodes/node/Node';
import SelfClosingElements from '../config/SelfClosingElements';
import UnclosedElements from '../config/UnclosedElements';
import { encode } from 'he';
/**
 * Utility for converting an element to string.
 *
 * @class QuerySelector
 */
var XMLSerializer = /** @class */ (function () {
    function XMLSerializer() {
    }
    /**
     * Renders an element as HTML.
     *
     * @param element Element to render.
     * @param root
     * @returns Result.
     */
    XMLSerializer.prototype.serializeToString = function (root) {
        switch (root.nodeType) {
            case Node.ELEMENT_NODE:
                var element = root;
                var tagName = element.tagName.toLowerCase();
                if (UnclosedElements.includes(tagName)) {
                    return "<" + tagName + this._getAttributes(element) + ">";
                }
                else if (SelfClosingElements.includes(tagName)) {
                    return "<" + tagName + this._getAttributes(element) + "/>";
                }
                var innerHTML = '';
                for (var _i = 0, _a = root.childNodes; _i < _a.length; _i++) {
                    var node = _a[_i];
                    innerHTML += this.serializeToString(node);
                }
                return "<" + tagName + this._getAttributes(element) + ">" + innerHTML + "</" + tagName + ">";
            case Node.DOCUMENT_FRAGMENT_NODE:
            case Node.DOCUMENT_NODE:
                var html = '';
                for (var _b = 0, _c = root.childNodes; _b < _c.length; _b++) {
                    var node = _c[_b];
                    html += this.serializeToString(node);
                }
                return html;
            case Node.COMMENT_NODE:
                return "<!--" + root.textContent + "-->";
            case Node.TEXT_NODE:
                return root['textContent'];
            case Node.DOCUMENT_TYPE_NODE:
                var doctype = root;
                var identifier = doctype.publicId ? ' PUBLIC' : doctype.systemId ? ' SYSTEM' : '';
                var publicId = doctype.publicId ? " \"" + doctype.publicId + "\"" : '';
                var systemId = doctype.systemId ? " \"" + doctype.systemId + "\"" : '';
                return "<!DOCTYPE " + doctype.name + identifier + publicId + systemId + ">";
        }
        return '';
    };
    /**
     * Returns attributes as a string.
     *
     * @param element Element.
     * @returns Attributes.
     */
    XMLSerializer.prototype._getAttributes = function (element) {
        var attributeString = '';
        for (var _i = 0, _a = Object.values(element._attributes); _i < _a.length; _i++) {
            var attribute = _a[_i];
            if (attribute.value !== null) {
                attributeString += ' ' + attribute.name + '="' + encode(attribute.value) + '"';
            }
        }
        return attributeString;
    };
    return XMLSerializer;
}());
export default XMLSerializer;
