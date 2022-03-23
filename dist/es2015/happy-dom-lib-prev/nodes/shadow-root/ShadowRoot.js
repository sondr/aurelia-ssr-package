import DocumentFragment from '../document-fragment/DocumentFragment';
import XMLParser from '../../xml-parser/XMLParser';
import XMLSerializer from '../../xml-serializer/XMLSerializer';
/**
 * ShadowRoot.
 */
export default class ShadowRoot extends DocumentFragment {
    constructor() {
        super(...arguments);
        this.mode = 'open';
        this.host = null;
        this.adoptedStyleSheets = [];
    }
    /**
     * Returns inner HTML.
     *
     * @returns HTML.
     */
    get innerHTML() {
        const xmlSerializer = new XMLSerializer();
        let xml = '';
        for (const node of this.childNodes) {
            xml += xmlSerializer.serializeToString(node);
        }
        return xml;
    }
    /**
     * Sets inner HTML.
     *
     * @param html HTML.
     */
    set innerHTML(html) {
        for (const child of this.childNodes.slice()) {
            this.removeChild(child);
        }
        for (const node of XMLParser.parse(this.ownerDocument, html).childNodes.slice()) {
            this.appendChild(node);
        }
    }
    /**
     * Converts to string.
     *
     * @returns String.
     */
    toString() {
        return this.innerHTML;
    }
    /**
     * Clones a node.
     *
     * @override
     * @param [deep=false] "true" to clone deep.
     * @returns Cloned node.
     */
    cloneNode(deep = false) {
        const clone = super.cloneNode(deep);
        clone.mode = this.mode;
        return clone;
    }
}
//# sourceMappingURL=ShadowRoot.js.map