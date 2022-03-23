import DOMException from '../exception/DOMException';
/**
 * Custom elements registry.
 */
export default class CustomElementRegistry {
    constructor() {
        this._registry = {};
        this._callbacks = {};
    }
    /**
     * Defines a custom element class.
     *
     * @param tagName Tag name of element.
     * @param elementClass Element class.
     * @param [options] Options.
     * @param options.extends
     */
    define(tagName, elementClass, options) {
        const name = tagName.toLowerCase();
        if (!name.includes('-')) {
            throw new DOMException("Failed to execute 'define' on 'CustomElementRegistry': \"" +
                name +
                '" is not a valid custom element name.');
        }
        this._registry[name] = {
            elementClass,
            extends: options && options.extends ? options.extends.toLowerCase() : null
        };
        // ObservedAttributes should only be called once by CustomElementRegistry (see #117)
        if (elementClass.prototype.attributeChangedCallback) {
            elementClass._observedAttributes = elementClass.observedAttributes;
        }
        if (this._callbacks[name]) {
            for (const callback of this._callbacks[name]) {
                callback();
            }
            delete this._callbacks[name];
        }
    }
    /**
     * Returns a defined element class.
     *
     * @param tagName Tag name of element.
     * @param HTMLElement Class defined.
     */
    get(tagName) {
        const name = tagName.toLowerCase();
        return this._registry[name] ? this._registry[name].elementClass : undefined;
    }
    /**
     * Upgrades a custom element directly, even before it is connected to its shadow root.
     *
     * Not implemented yet.
     *
     * @param _root Root node.
     */
    upgrade(_root) {
        // Do nothing
    }
    /**
     * When defined.
     *
     * @param tagName Tag name of element.
     * @returns Promise.
     */
    whenDefined(tagName) {
        const name = tagName.toLowerCase();
        if (this.get(name)) {
            return Promise.resolve();
        }
        return new Promise(resolve => {
            this._callbacks[name] = this._callbacks[name] || [];
            this._callbacks[name].push(resolve);
        });
    }
}
//# sourceMappingURL=CustomElementRegistry.js.map