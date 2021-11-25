System.register([], function (exports_1, context_1) {
    "use strict";
    var NodeListFactory;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            /**
             *
             */
            NodeListFactory = /** @class */ (function () {
                function NodeListFactory() {
                }
                /**
                 * Creates a NodeList.
                 *
                 * @param nodes Nodes.
                 * @returns NodeList.
                 */
                NodeListFactory.create = function (nodes) {
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
                NodeListFactory.getItem = function (nodes, index) {
                    return nodes[index] || null;
                };
                return NodeListFactory;
            }());
            exports_1("default", NodeListFactory);
        }
    };
});
