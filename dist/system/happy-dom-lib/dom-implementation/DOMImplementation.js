System.register(["../nodes/document-type/DocumentType"], function (exports_1, context_1) {
    "use strict";
    var DocumentType_1, DOMImplementation;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (DocumentType_1_1) {
                DocumentType_1 = DocumentType_1_1;
            }
        ],
        execute: function () {
            /**
             * The DOMImplementation interface represents an object providing methods which are not dependent on any particular document. Such an object is returned by the.
             */
            DOMImplementation = /** @class */ (function () {
                function DOMImplementation() {
                    this._ownerDocument = null;
                }
                /**
                 * Creates and returns an XML Document.
                 *
                 * TODO: Not fully implemented.
                 */
                DOMImplementation.prototype.createDocument = function () {
                    var documentClass = this._ownerDocument.constructor;
                    // @ts-ignore
                    return new documentClass();
                };
                /**
                 * Creates and returns an HTML Document.
                 */
                DOMImplementation.prototype.createHTMLDocument = function () {
                    return this.createDocument();
                };
                /**
                 * Creates and returns an HTML Document.
                 *
                 * @param qualifiedName Qualified name.
                 * @param publicId Public ID.
                 * @param systemId System ID.
                 */
                DOMImplementation.prototype.createDocumentType = function (qualifiedName, publicId, systemId) {
                    DocumentType_1.default.ownerDocument = this._ownerDocument;
                    var documentType = new DocumentType_1.default();
                    documentType.name = qualifiedName;
                    documentType.publicId = publicId;
                    documentType.systemId = systemId;
                    return documentType;
                };
                return DOMImplementation;
            }());
            exports_1("default", DOMImplementation);
        }
    };
});
//# sourceMappingURL=DOMImplementation.js.map