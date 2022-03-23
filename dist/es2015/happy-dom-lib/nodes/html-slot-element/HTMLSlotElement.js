import HTMLElement from '../html-element/HTMLElement';
/**
 * HTML Slot Element.
 *
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLSlotElement.
 */
export default class HTMLSlotElement extends HTMLElement {
    /**
     * Returns name.
     *
     * @returns Name.
     */
    get name() {
        return this.getAttributeNS(null, 'name') || '';
    }
    /**
     * Sets name.
     *
     * @param name Name.
     */
    set name(name) {
        this.setAttributeNS(null, 'name', name);
    }
    /**
     * Sets the slot's manually assigned nodes to an ordered set of slottables.
     *
     * @param _nodes Nodes.
     */
    assign(..._nodes) {
        // TODO: Do nothing for now. We need to find an example of how it is expected to work before it can be implemented.
    }
    /**
     * Returns assigned nodes.
     *
     * @param [options] Options.
     * @param [options.flatten] A boolean value indicating whether to return the assigned nodes of any available child <slot> elements (true) or not (false). Defaults to false.
     * @returns Nodes.
     */
    assignedNodes(options) {
        var _a;
        const host = (_a = this.getRootNode()) === null || _a === void 0 ? void 0 : _a.host;
        // TODO: Add support for options.flatten. We need to find an example of how it is expected to work before it can be implemented.
        if (host) {
            const name = this.name;
            if (name) {
                return this.assignedElements(options);
            }
            return host.childNodes.slice();
        }
        return [];
    }
    /**
     * Returns assigned elements.
     *
     * @param [_options] Options.
     * @param [_options.flatten] A boolean value indicating whether to return the assigned elements of any available child <slot> elements (true) or not (false). Defaults to false.
     * @returns Nodes.
     */
    assignedElements(_options) {
        var _a;
        const host = (_a = this.getRootNode()) === null || _a === void 0 ? void 0 : _a.host;
        // TODO: Add support for options.flatten. We need to find an example of how it expected to work before it can be implemented.
        if (host) {
            const name = this.name;
            if (name) {
                const assignedElements = [];
                for (const child of host.children) {
                    if (child.slot === name) {
                        assignedElements.push(child);
                    }
                }
                return assignedElements;
            }
            return host.children.slice();
        }
        return [];
    }
    /**
     * Clones a node.
     *
     * @override
     * @param [deep=false] "true" to clone deep.
     * @returns Cloned node.
     */
    cloneNode(deep = false) {
        return super.cloneNode(deep);
    }
}
