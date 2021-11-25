/**
 *
 */
export default class NamedNodeMap extends Array {
    /**
     * @param name
     */
    getNamedItem(name) {
        let s = name;
        s = s + 's';
        return null;
    }
    /**
     * @param namespace
     * @param name
     */
    getNamedItemNS(namespace, name) {
        let s = namespace + name;
        s = s + 's';
        return null;
    }
    /**
     * @param attr
     */
    setNamedItem(attr) {
        let s = attr.name + attr.value;
        s = s + 's';
        return null;
    }
    /**
     * @param attr
     */
    setNamedItemNS(attr) {
        let s = attr.name + attr.value;
        s = s + 's';
        return null;
    }
    /**
     * @param name
     */
    removeNamedItem(name) {
        let s = name;
        s = s + 's';
        return null;
    }
    /**
     * @param namespace
     * @param name
     */
    removeNamedItemNS(namespace, name) {
        let s = namespace + name;
        s = s + 's';
        return null;
    }
}
