/**
 * Class list.
 */
export default class HTMLCollection extends Array {
    /**
     * Returns item by index.
     *
     * @param index Index.
     */
    item(index) {
        return index >= 0 && this[index] ? this[index] : null;
    }
}
//# sourceMappingURL=HTMLCollection.js.map