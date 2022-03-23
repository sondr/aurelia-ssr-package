import DocumentType from '../nodes/document-type/DocumentType';
/**
 * The DOMImplementation interface represents an object providing methods which are not dependent on any particular document. Such an object is returned by the.
 */
var DOMImplementation = /** @class */ (function () {
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
        DocumentType.ownerDocument = this._ownerDocument;
        var documentType = new DocumentType();
        documentType.name = qualifiedName;
        documentType.publicId = publicId;
        documentType.systemId = systemId;
        return documentType;
    };
    return DOMImplementation;
}());
export default DOMImplementation;
