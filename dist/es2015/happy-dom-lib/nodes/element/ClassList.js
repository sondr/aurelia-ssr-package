import DOMException from '../../exception/DOMException';
/**
 * Class list.
 */
export default class ClassList {
    /**
     * Adds class names.
     *
     * @param ownerElement Owner element.
     */
    constructor(ownerElement) {
        this._ownerElement = ownerElement;
    }
    /**
     * Adds class names.
     *
     * @param classNames Class names.
     */
    add(...classNames) {
        const attr = this._ownerElement.getAttribute('class');
        const list = attr ? attr.split(' ') : [];
        for (const className of classNames) {
            if (!list.includes(className)) {
                if (className.includes(' ')) {
                    throw new DOMException(`Failed to execute 'add' on 'DOMTokenList': The token provided ('${className}') contains HTML space characters, which are not valid in tokens.`);
                }
                list.push(className);
            }
        }
        this._ownerElement.setAttribute('class', list.join(' '));
    }
    /**
     * Adds class names.
     *
     * @param classNames Class names.
     */
    remove(...classNames) {
        const attr = this._ownerElement.getAttribute('class');
        const list = attr ? attr.split(' ') : [];
        for (const className of classNames) {
            const index = list.indexOf(className);
            if (index !== -1) {
                list.splice(index, 1);
            }
        }
        this._ownerElement.setAttribute('class', list.join(' '));
    }
    /**
     * Check if the list contains a class.
     *
     * @param className Class name.
     * @returns TRUE if it contains.
     */
    contains(className) {
        const attr = this._ownerElement.getAttribute('class');
        const list = attr ? attr.split(' ') : [];
        return list.includes(className);
    }
}
