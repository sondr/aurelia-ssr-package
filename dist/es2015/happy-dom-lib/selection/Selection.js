/**
 * Selection.
 *
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/Selection.
 */
export default class Selection {
    constructor() {
        this.anchorNode = null;
        this.anchorOffset = 0;
        this.baseNode = null;
        this.baseOffset = 0;
        this.extentNode = null;
        this.extentOffset = 0;
        this.focusNode = null;
        this.focusOffset = 0;
        this.isCollapsed = true;
        this.rangeCount = 0;
        this.type = 'None';
    }
    /**
     * Adds a range.
     *
     * @param _range Range.
     */
    addRange(_range) {
        // Do nothing.
    }
    /**
     * Collapses the current selection to a single point.
     *
     * @param _node Node.
     * @param _offset Offset.
     */
    collapse(_node, _offset) {
        // Do nothing.
    }
    /**
     * Collapses the selection to the end.
     */
    collapseToEnd() {
        // Do nothing.
    }
    /**
     * Collapses the selection to the start.
     */
    collapseToStart() {
        // Do nothing.
    }
    /**
     * Indicates whether a specified node is part of the selection.
     *
     * @param _node Node.
     * @param _partialContainer Partial container.
     * @returns Always returns "true" for now.
     */
    containsNode(_node, _partialContainer) {
        return true;
    }
    /**
     * Deletes the selected text from the document's DOM.
     */
    deleteFromDocument() {
        // Do nothing.
    }
    /**
     * Moves the focus of the selection to a specified point.
     *
     * @param _node Node.
     * @param _offset Offset.
     */
    extend(_node, _offset) {
        // Do nothing.
    }
    /**
     * Moves the focus of the selection to a specified point.
     *
     * @param _index Index.
     */
    getRangeAt(_index) {
        throw new Error('Not a valid index.');
    }
    /**
     * Removes a range from a selection.
     *
     * @param _range Range.
     */
    removeRange(_range) {
        // Do nothing.
    }
    /**
     * Removes all ranges.
     */
    removeAllRanges() {
        // Do nothing.
    }
    /**
     * Selects all children.
     *
     * @param _parentNode Parent node.
     */
    selectAllChildren(_parentNode) {
        // Do nothing.
    }
    /**
     * Sets the selection to be a range including all or parts of two specified DOM nodes, and any content located between them.
     *
     * @param _anchorNode Anchor node.
     * @param _anchorOffset Anchor offset.
     * @param _focusNode Focus node.
     * @param _focusOffset Focus offset.
     */
    setBaseAndExtent(_anchorNode, _anchorOffset, _focusNode, _focusOffset) {
        // Do nothing.
    }
    /**
     * Returns string currently being represented by the selection object.
     */
    toString() {
        return '';
    }
}
//# sourceMappingURL=Selection.js.map