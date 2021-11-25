/**
 *
 */
export default class NodeListFactory {
    /**
     * Creates a NodeList.
     *
     * @param nodes Nodes.
     * @returns NodeList.
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
