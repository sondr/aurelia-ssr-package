/**
 *
 */
var HTMLCollectionFactory = /** @class */ (function () {
    function HTMLCollectionFactory() {
    }
    /**
     * Creates an HTMLCollection.
     *
     * @param nodes Nodes.
     * @returns HTMLCollection.
     */
    HTMLCollectionFactory.create = function (nodes) {
        nodes = nodes ? nodes.slice() : [];
        Object.defineProperty(nodes, 'item', {
            value: this.getItem.bind(null, nodes)
        });
        return nodes;
    };
    /**
     * Returns node by index.
     *
     * @param nodes
     * @param index Index.
     */
    HTMLCollectionFactory.getItem = function (nodes, index) {
        return nodes[index] || null;
    };
    return HTMLCollectionFactory;
}());
export default HTMLCollectionFactory;
//# sourceMappingURL=HTMLCollectionFactory.js.map