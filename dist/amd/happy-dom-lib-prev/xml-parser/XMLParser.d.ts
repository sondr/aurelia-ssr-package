import IDocument from '../nodes/document/IDocument';
import IElement from '../nodes/element/IElement';
/**
 * XML parser.
 */
export default class XMLParser {
    /**
     * Parses XML/HTML and returns a root element.
     *
     * @param document Document.
     * @param data HTML data.
     * @param [evaluateScripts = false] Set to "true" to enable script execution.
     * @returns Root element.
     */
    static parse(document: IDocument, data: string, evaluateScripts?: boolean): IElement;
    /**
     * Returns a tag name if element is unnestable.
     *
     * @param element Element.
     * @returns Tag name if element is unnestable.
     */
    private static getUnnestableTagName;
    /**
     * Appends text and comment nodes.
     *
     * @param document Document.
     * @param node Node.
     * @param text Text to search in.
     */
    private static appendTextAndCommentNodes;
    /**
     * Returns text and comment nodes from a text.
     *
     * @param document Document.
     * @param text Text to search in.
     * @returns Nodes.
     */
    private static getTextAndCommentNodes;
    /**
     * Returns XMLNS attribute.
     *
     * @param attributesString Raw attributes.
     */
    private static getXmlnsAttribute;
    /**
     * Sets raw attributes.
     *
     * @param element Element.
     * @param namespaceURI Namespace URI.
     * @param attributesString Raw attributes.
     */
    private static setAttributes;
    /**
     * Returns attribute name.
     *
     * @param namespaceURI Namespace URI.
     * @param name Name.
     * @returns Attribute name based on namespace.
     */
    private static _getAttributeName;
}
