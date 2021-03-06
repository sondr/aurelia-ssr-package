import DocumentFragment from '../document-fragment/DocumentFragment';
import DOMRect from './DOMRect';
/**
 * Range object.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Range
 */
export default class Range {
    constructor() {
        this._startContainer = null;
        this._endContainer = null;
        this._startOffset = -1;
        this._endOffset = -1;
        this._collapsed = false;
    }
    /**
     * Returns collapsed.
     *
     * @returns "true" if collapsed.
     */
    get collapsed() {
        return this._collapsed;
    }
    /**
     * Returns common ancestor container.
     *
     * @returns Node.
     */
    get commonAncestorContainer() {
        return null;
    }
    /**
     * Returns end container.
     *
     * @returns Node.
     */
    get endContainer() {
        return this._endContainer;
    }
    /**
     * Returns start container.
     *
     * @returns Node.
     */
    get startContainer() {
        return this._startContainer;
    }
    /**
     * Returns end offset.
     *
     * @returns Offset.
     */
    get endOffset() {
        return this._endOffset;
    }
    /**
     * Returns start offset.
     *
     * @returns Offset.
     */
    get startOffset() {
        return this._startOffset;
    }
    /**
     * Sets start.
     *
     * @param startNode Start node.
     * @param startOffset Start offset.
     */
    setStart(startNode, startOffset) {
        this._startContainer = startNode;
        this._startOffset = startOffset;
    }
    /**
     * Sets end.
     *
     * @param endNode End node.
     * @param endOffset End offset.
     */
    setEnd(endNode, endOffset) {
        this._endContainer = endNode;
        this._endOffset = endOffset;
    }
    /**
     * Sets start before.
     */
    setStartBefore() { }
    /**
     * Sets start after.
     */
    setStartAfter() { }
    /**
     * Sets end before.
     */
    setEndBefore() { }
    /**
     * Sets end after.
     */
    setEndAfter() { }
    /**
     * Selects a node.
     */
    selectNode() { }
    /**
     * Selects node content.
     */
    selectNodeContents() { }
    /**
     * Collapses the Range to one of its boundary points.
     */
    collapse() {
        this._collapsed = true;
    }
    /**
     * Removes the contents of a Range from the Document.
     */
    deleteContents() { }
    /**
     * Moves contents of a Range from the document tree into a DocumentFragment.
     */
    extractContents() {
        return new DocumentFragment();
    }
    /**
     * Insert a Node at the start of a Range.
     */
    insertNode() { }
    /**
     * Moves content of a Range into a new Node.
     */
    surroundContents() { }
    /**
     * Compares the boundary points of the Range with another Range.
     *
     * @returns "true" when equal.
     */
    compareBoundaryPoints() {
        return false;
    }
    /**
     * Clones the range.
     *
     * @returns Range.
     */
    cloneRange() {
        return new Range();
    }
    /**
     * Releases the Range from use to improve performance.
     */
    detach() { }
    /**
     * Returns the text of the Range.
     *
     * @returns Text.
     */
    toString() {
        return '';
    }
    /**
     * Returns -1, 0, or 1 indicating whether the point occurs before, inside, or after the Range.
     *
     * @returns Number.
     */
    comparePoint() {
        return 0;
    }
    /**
     * Returns a DocumentFragment created from a given string of code.
     *
     * @returns Document fragment.
     */
    createContextualFragment() {
        return new DocumentFragment();
    }
    /**
     * Returns a DOMRect object which bounds the entire contents of the Range; this would be the union of all the rectangles returned by range.getClientRects().
     *
     * @returns DOM rect.
     */
    getBoundingClientRect() {
        return new DOMRect();
    }
    /**
     * Returns a list of DOMRect objects that aggregates the results of Element.getClientRects() for all the elements in the Range.
     *
     * @returns DOM rect.
     */
    getClientRects() {
        return new DOMRect();
    }
    /**
     * Returns a boolean indicating whether the given node intersects the Range.
     *
     * @returns "true" when intersecting.
     */
    intersectsNode() {
        return false;
    }
    /**
     * Returns a boolean indicating whether the given point is in the Range.
     *
     * @returns "true" when in range.
     */
    isPointInRange() {
        return false;
    }
}
//# sourceMappingURL=Range.js.map