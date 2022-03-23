import Node from '../node/Node';
import CharacterData from '../character-data/CharacterData';
/**
 * Text node.
 */
export default class Text extends CharacterData {
    constructor() {
        super(...arguments);
        this.nodeType = Node.TEXT_NODE;
    }
    /**
     * Node name.
     *
     * @returns Node name.
     */
    get nodeName() {
        return '#text';
    }
    /**
     * Converts to string.
     *
     * @returns String.
     */
    toString() {
        return '[object Text]';
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
//# sourceMappingURL=Text.js.map