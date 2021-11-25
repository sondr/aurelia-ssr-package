import Attr from '../../attribute/Attr';
import Element from './Element';
/**
 *
 */
export default class NamedNodeMap extends Array<Attr> {
    private _ownerElement;
    /**
     * Adds class names.
     *
     * @param ownerElement Owner element.
     */
    constructor(ownerElement: Element);
    getNamedItem(name: string): Attr;
    getNamedItemNS(namespace: string, name: string): Attr;
    setNamedItem(attr: Attr): Attr;
    setNamedItemNS(attr: Attr): Attr;
    removeNamedItem(name: string): Attr;
    removeNamedItemNS(namespace: string, name: string): Attr;
}
