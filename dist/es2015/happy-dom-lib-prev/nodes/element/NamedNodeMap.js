/**
 *
 */
export default class NamedNodeMap {
    /**
     * Adds class names.
     *
     * @param ownerElement Owner element.
     */
    constructor(ownerElement) {
        this.length = 0;
        this._ownerElement = ownerElement;
        const attributes = this._ownerElement._attributes;
        Object.assign(this, attributes);
        // sets this.length as well as attributes array
        Array.prototype.push.apply(this, Object.values(attributes));
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
