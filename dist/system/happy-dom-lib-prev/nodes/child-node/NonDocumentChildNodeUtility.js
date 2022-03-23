System.register(["../element/Element"], function (exports_1, context_1) {
    "use strict";
    var Element_1, NonDocumentChildNodeUtility;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Element_1_1) {
                Element_1 = Element_1_1;
            }
        ],
        execute: function () {
            /**
             * Non Document Child node utility.
             */
            NonDocumentChildNodeUtility = /** @class */ (function () {
                function NonDocumentChildNodeUtility() {
                }
                /**
                 * Previous element sibling.
                 *
                 * @param childNode Child node.
                 * @returns Element.
                 */
                NonDocumentChildNodeUtility.previousElementSibling = function (childNode) {
                    var sibling = childNode.previousSibling;
                    while (sibling && sibling.nodeType !== Element_1.default.ELEMENT_NODE) {
                        sibling = sibling.previousSibling;
                    }
                    return sibling;
                };
                /**
                 * Next element sibling.
                 *
                 * @param childNode Child node.
                 * @returns Element.
                 */
                NonDocumentChildNodeUtility.nextElementSibling = function (childNode) {
                    var sibling = childNode.nextSibling;
                    while (sibling && sibling.nodeType !== Element_1.default.ELEMENT_NODE) {
                        sibling = sibling.nextSibling;
                    }
                    return sibling;
                };
                return NonDocumentChildNodeUtility;
            }());
            exports_1("default", NonDocumentChildNodeUtility);
        }
    };
});
//# sourceMappingURL=NonDocumentChildNodeUtility.js.map