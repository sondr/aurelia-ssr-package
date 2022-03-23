System.register(["../nodes/node/Node", "../config/SelfClosingElements", "../config/UnclosedElements", "he"], function (exports_1, context_1) {
    "use strict";
    var Node_1, SelfClosingElements_1, UnclosedElements_1, he_1, XMLSerializer;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Node_1_1) {
                Node_1 = Node_1_1;
            },
            function (SelfClosingElements_1_1) {
                SelfClosingElements_1 = SelfClosingElements_1_1;
            },
            function (UnclosedElements_1_1) {
                UnclosedElements_1 = UnclosedElements_1_1;
            },
            function (he_1_1) {
                he_1 = he_1_1;
            }
        ],
        execute: function () {
            /**
             * Utility for converting an element to string.
             */
            XMLSerializer = /** @class */ (function () {
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
                        case Node_1.default.DOCUMENT_FRAGMENT_NODE:
                        case Node_1.default.DOCUMENT_NODE:
                            var html = '';
                            for (var _d = 0, _e = root.childNodes; _d < _e.length; _d++) {
                                var node = _e[_d];
                                html += this.serializeToString(node, options);
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
                            attributeString += ' ' + attribute.name + '="' + he_1.escape(attribute.value) + '"';
                        }
                    }
                    return attributeString;
                };
                return XMLSerializer;
            }());
            exports_1("default", XMLSerializer);
        }
    };
});
//# sourceMappingURL=XMLSerializer.js.map