import Attr from './Attr';

/**
 *
 */
export default class NamedNodeMap extends Array<Attr> {
	/**
	 * @param name
	 */
	public getNamedItem(name: string): Attr {
		let s = name;
		s = s + 's';
		return new Attr();
	}

	/**
	 * @param namespace
	 * @param name
	 */
	public getNamedItemNS(namespace: string, name: string): Attr {
		let s = namespace + name;
		s = s + 's';
		return new Attr();
	}

	/**
	 * @param attr
	 */
	public setNamedItem(attr: Attr): Attr {
		let s = attr.name + attr.value;
		s = s + 's';
		return new Attr();
	}

	/**
	 * @param attr
	 */
	public setNamedItemNS(attr: Attr): Attr {
		let s = attr.name + attr.value;
		s = s + 's';
		return new Attr();
	}

	/**
	 * @param name
	 */
	public removeNamedItem(name: string): Attr {
		let s = name;
		s = s + 's';
		return new Attr();
	}

	/**
	 * @param namespace
	 * @param name
	 */
	public removeNamedItemNS(namespace: string, name:string): Attr {
		let s = namespace + name;
		s = s + 's';
		return new Attr();
	}

	// GetNamedItem(name: string): Attr {
	//     Return this[0].ownerElement.getAttributeNode(name);
	// }

	// GetNamedItemNS(namespace: string, name: string): Attr {
	//     Return this[0].ownerElement.getAttributeNodeNS(namespace, name);
	// }

	// SetNamedItem(attr: Attr): Attr {
	//     Return this.ownerElement.setAttributeNode(attr);
	// }

	// SetNamedItemNS(attr: Attr): Attr {
	//     Return this.ownerElement.setAttributeNodeNS(attr);
	// }

	// RemoveNamedItem(name: string): Attr {
	//     Const attr = this.getNamedItem(name);
	//     If (attr != null) {
	//         This.ownerElement.removeAttributeNode(attr);
	//     }

	//     Return attr;
	// }

	// RemoveNamedItemNS(namespace, name): Attr {
	//     Const attr = this.getNamedItemNS(namespace, name);

	//     If (attr != null) {
	//         This.ownerElement.removeAttributeNodeNS(name);
	//     }

	//     Return attr;
	// }

	// GetNamedItem(name: string): Attr {
	//     Return this.ownerElement.getAttributeNode(name);
	// }

	// GetNamedItemNS(namespace: string, name: string): Attr {
	//     Return this.ownerElement.getAttributeNodeNS(namespace, name);
	// }

	// SetNamedItem(attr: Attr): Attr {
	//     Return this.ownerElement.setAttributeNode(attr);
	// }

	// SetNamedItemNS(attr: Attr): Attr {
	//     Return this.ownerElement.setAttributeNodeNS(attr);
	// }

	// RemoveNamedItem(name: string): Attr {
	//     Const attr = this.getNamedItem(name);
	//     If (attr != null) {
	//         This.ownerElement.removeAttributeNode(attr);
	//     }

	//     Return attr;
	// }

	// RemoveNamedItemNS(namespace, name): Attr {
	//     Const attr = this.getNamedItemNS(namespace, name);

	//     If (attr != null) {
	//         This.ownerElement.removeAttributeNodeNS(name);
	//     }

	//     Return attr;
	// }
}
