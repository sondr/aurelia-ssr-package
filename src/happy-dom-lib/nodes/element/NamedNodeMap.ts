import Attr from '../../attribute/Attr';
import Element from './Element';

/**
 *
 */
export default class NamedNodeMap {// extends Array<Attr> {
	private _ownerElement: Element;

	/**
	 * Adds class names.
	 *
	 * @param ownerElement Owner element.
	 */
	constructor(ownerElement: Element) {
		this._ownerElement = ownerElement;
	}

	public getNamedItem(name: string): Attr {
		return this._ownerElement.getAttributeNode(name);
	}

	public getNamedItemNS(namespace: string, name: string): Attr {
		return this._ownerElement.getAttributeNodeNS(namespace, name);
	}

	public setNamedItem(attr: Attr): Attr {
		return this._ownerElement.setAttributeNode(attr);
	}

	public setNamedItemNS(attr: Attr): Attr {
		return this._ownerElement.setAttributeNodeNS(attr);
	}

	public removeNamedItem(name: string): Attr {
		const attr = this.getNamedItem(name);
		if (attr != null) {
			this._ownerElement.removeAttributeNode(attr);
		}

		return attr;
	}

	public removeNamedItemNS(namespace: string, name: string): Attr {
		const attr = this.getNamedItemNS(namespace, name);

		if (attr != null) {
			this._ownerElement.removeAttributeNodeNS(attr);
		}

		return attr;
	}

	public get length(): number{
		return Object.keys(this._ownerElement._attributes).length;
	}
}
