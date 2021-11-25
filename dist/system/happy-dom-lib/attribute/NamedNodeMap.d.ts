import Attr from './Attr';
/**
 *
 */
export default class NamedNodeMap extends Array<Attr> {
    /**
     * @param name
     */
    getNamedItem(name: string): Attr;
    /**
     * @param namespace
     * @param name
     */
    getNamedItemNS(namespace: string, name: string): Attr;
    /**
     * @param attr
     */
    setNamedItem(attr: Attr): Attr;
    /**
     * @param attr
     */
    setNamedItemNS(attr: Attr): Attr;
    /**
     * @param name
     */
    removeNamedItem(name: string): Attr;
    /**
     * @param namespace
     * @param name
     */
    removeNamedItemNS(namespace: string, name: string): Attr;
}
