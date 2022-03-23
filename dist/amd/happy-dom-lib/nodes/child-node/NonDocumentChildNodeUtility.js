var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "../element/Element"], function (require, exports, Element_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Element_1 = __importDefault(Element_1);
    /**
     * Non Document Child node utility.
     */
    var NonDocumentChildNodeUtility = /** @class */ (function () {
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
    exports.default = NonDocumentChildNodeUtility;
});
//# sourceMappingURL=NonDocumentChildNodeUtility.js.map