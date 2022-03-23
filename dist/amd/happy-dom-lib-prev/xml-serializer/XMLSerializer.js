define(["require", "exports", "../nodes/node/Node", "../config/SelfClosingElements", "../config/UnclosedElements", "he"], function (require, exports, Node_1, SelfClosingElements_1, UnclosedElements_1, he_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
                case Node_1.default.ELEMENT_NODE:
                    var element = root;
                    var tagName = element.tagName.toLowerCase();
                    if (UnclosedElements_1.default.includes(tagName)) {
                        return "<".concat(tagName).concat(this._getAttributes(element), ">");
                    }
                    else if (SelfClosingElements_1.default.includes(tagName)) {
                        return "<".concat(tagName).concat(this._getAttributes(element), "/>");
                    }
                    var innerHTML = '';
                    for (var _i = 0, _a = root.childNodes; _i < _a.length; _i++) {
                        var node = _a[_i];
                        innerHTML += this.serializeToString(node);
                    }
                    return "<".concat(tagName).concat(this._getAttributes(element), ">").concat(innerHTML, "</").concat(tagName, ">");
                case Node_1.default.DOCUMENT_FRAGMENT_NODE:
                case Node_1.default.DOCUMENT_NODE:
                    var html = '';
                    for (var _b = 0, _c = root.childNodes; _b < _c.length; _b++) {
                        var node = _c[_b];
                        html += this.serializeToString(node);
                    }
                    return html;
                case Node_1.default.COMMENT_NODE:
                    return "<!--".concat(root.textContent, "-->");
                case Node_1.default.TEXT_NODE:
                    return root['textContent'];
                case Node_1.default.DOCUMENT_TYPE_NODE:
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
                    attributeString += ' ' + attribute.name + '="' + (0, he_1.encode)(attribute.value) + '"';
                }
            }
            return attributeString;
        };
        return XMLSerializer;
    }());
    exports.default = XMLSerializer;
});
