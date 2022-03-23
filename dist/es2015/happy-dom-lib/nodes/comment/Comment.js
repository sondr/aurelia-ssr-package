import Node from '../node/Node';
import CharacterData from '../character-data/CharacterData';
/**
 * Comment node.
 */
export default class Comment extends CharacterData {
    constructor() {
        super(...arguments);
        this.nodeType = Node.COMMENT_NODE;
    }
    /**
     * Node name.
     *
     * @returns Node name.
     */
    get nodeName() {
        return '#comment';
    }
    /**
     * Converts to string.
     *
     * @returns String.
     */
    toString() {
        return '[object Comment]';
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
