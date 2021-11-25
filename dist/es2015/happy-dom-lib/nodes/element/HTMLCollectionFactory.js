/**
 *
 */
export default class HTMLCollectionFactory {
    /**
     * Creates an HTMLCollection.
     *
     * @param nodes Nodes.
     * @returns HTMLCollection.
     */
    static create(nodes) {
        nodes = nodes ? nodes.slice() : [];
        Object.defineProperty(nodes, 'item', {
            value: this.getItem.bind(null, nodes)
        });
        return nodes;
    }
    /**
     * Returns node by index.
     *
     * @param nodes
     * @param index Index.
     */
    static getItem(nodes, index) {
        return nodes[index] || null;
    }
}
