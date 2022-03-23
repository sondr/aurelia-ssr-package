import Node from '../nodes/node/Node';
import SelfClosingElements from '../config/SelfClosingElements';
import UnclosedElements from '../config/UnclosedElements';
import { escape } from 'he';
/**
 * Utility for converting an element to string.
 */
var XMLSerializer = /** @class */ (function () {
    function XMLSerializer() {
    }
    /**
     * Renders an element as HTML.
     *
     * @param root Root element.
     * @param [options] Options.
     * @param [options.includeShadowRoots] Set to "true" to include shadow roots.
     * @returns Result.
     */
    XMLSerializer.prototype.serializeToString = function (root, options) {
        switch (root.nodeType) {
            case Node.ELEMENT_NODE:
                var element = root;
                var tagName = element.tagName.toLowerCase();
                if (UnclosedElements.includes(tagName)) {
                    return "<".concat(tagName).concat(this._getAttributes(element), ">");
                }
                else if (SelfClosingElements.includes(tagName)) {
                    return "<".concat(tagName).concat(this._getAttributes(element), "/>");
                }
                var innerHTML = '';
                for (var _i = 0, _a = root.childNodes; _i < _a.length; _i++) {
                    var node = _a[_i];
                    innerHTML += this.serializeToString(node, options);
                }
                if ((options === null || options === void 0 ? void 0 : options.includeShadowRoots) && element.shadowRoot) {
                    innerHTML += "<template shadowroot=\"".concat(element.shadowRoot.mode, "\">");
                    for (var _b = 0, _c = element.shadowRoot.childNodes; _b < _c.length; _b++) {
                        var node = _c[_b];
                        innerHTML += this.serializeToString(node, options);
                    }
                    innerHTML += '</template>';
                }
                return "<".concat(tagName).concat(this._getAttributes(element), ">").concat(innerHTML, "</").concat(tagName, ">");
            case Node.DOCUMENT_FRAGMENT_NODE:
            case Node.DOCUMENT_NODE:
                var html = '';
                for (var _d = 0, _e = root.childNodes; _d < _e.length; _d++) {
                    var node = _e[_d];
                    html += this.serializeToString(node, options);
                }
                return html;
            case Node.COMMENT_NODE:
                return "<!--".concat(root.textContent, "-->");
            case Node.TEXT_NODE:
                return root['textContent'];
            case Node.DOCUMENT_TYPE_NODE:
                var doctype = root;
                var identifier = doctype.publicId ? ' PUBLIC' : doctype.systemId ? ' SYSTEM' : '';
                var publicId = doctype.publicId ? " \"".concat(doctype.publicId, "\"") : '';
                var systemId = doctype.systemId ? " \"".concat(doctype.systemId, "\"") : '';
                return "<!DOCTYPE ".concat(doctype.name).concat(identifier).concat(publicId).concat(systemId, ">");
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
                attributeString += ' ' + attribute.name + '="' + escape(attribute.value) + '"';
            }
        }
        return attributeString;
    };
    return XMLSerializer;
}());
export default XMLSerializer;
