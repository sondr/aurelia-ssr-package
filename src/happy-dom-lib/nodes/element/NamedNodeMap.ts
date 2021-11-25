import Attr from '../../attribute/Attr';
import Element from './Element';

/**
 *
 */
export default class NamedNodeMap extends Array<Attr> {
	private _ownerElement: Element;

	/**
	 * Adds class names.
	 *
	 * @param ownerElement Owner element.
	 */
	constructor(ownerElement: Element) {
		super();

		this._ownerElement = ownerElement;
	}

	getNamedItem(name: string): Attr {
		return this._ownerElement.getAttributeNode(name);
	}

	getNamedItemNS(namespace: string, name: string): Attr {
		return this._ownerElement.getAttributeNodeNS(namespace, name);
	}

	setNamedItem(attr: Attr): Attr {
		return this._ownerElement.setAttributeNode(attr);
	}

	setNamedItemNS(attr: Attr): Attr {
		return this._ownerElement.setAttributeNodeNS(attr);
	}

	removeNamedItem(name: string): Attr {
		const attr = this.getNamedItem(name);
		if (attr != null) {
			this._ownerElement.removeAttributeNode(attr);
		}

		return attr;
	}

	removeNamedItemNS(namespace: string, name: string): Attr {
		const attr = this.getNamedItemNS(namespace, name);

		if (attr != null) {
			this._ownerElement.removeAttributeNodeNS(attr);
		}

		return attr;
	}
}
