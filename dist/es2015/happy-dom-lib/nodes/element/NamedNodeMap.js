/**
 *
 */
export default class NamedNodeMap extends Array {
    /**
     * Adds class names.
     *
     * @param ownerElement Owner element.
     */
    constructor(ownerElement) {
        super();
        this._ownerElement = ownerElement;
    }
    getNamedItem(name) {
        return this._ownerElement.getAttributeNode(name);
    }
    getNamedItemNS(namespace, name) {
        return this._ownerElement.getAttributeNodeNS(namespace, name);
    }
    setNamedItem(attr) {
        return this._ownerElement.setAttributeNode(attr);
    }
    setNamedItemNS(attr) {
        return this._ownerElement.setAttributeNodeNS(attr);
    }
    removeNamedItem(name) {
        const attr = this.getNamedItem(name);
        if (attr != null) {
            this._ownerElement.removeAttributeNode(attr);
        }
        return attr;
    }
    removeNamedItemNS(namespace, name) {
        const attr = this.getNamedItemNS(namespace, name);
        if (attr != null) {
            this._ownerElement.removeAttributeNodeNS(attr);
        }
        return attr;
    }
}
