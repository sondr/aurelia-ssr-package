import Node from '../node/Node';
import MutationRecord from '../../mutation-observer/MutationRecord';
import MutationTypeEnum from '../../mutation-observer/MutationTypeEnum';
import CharacterDataUtility from '../character-data/CharacterDataUtility';
import NonDocumentChildNodeUtility from '../child-node/NonDocumentChildNodeUtility';
import ChildNodeUtility from '../child-node/ChildNodeUtility';
/**
 * Text node.
 */
export default class Text extends Node {
    /**
     * Constructor.
     *
     * @param [text] Text.
     */
    constructor(text) {
        super();
        this.nodeType = Node.TEXT_NODE;
        this._data = '';
        if (text) {
            this._data = text;
        }
    }
    /**
     * Node name.
     *
     * @returns Node name.
     */
    get nodeName() {
        return '#text';
    }
    /**
     * Returns text content.
     *
     * @returns Text content.
     */
    get length() {
        return this._data.length;
    }
    /**
     * Returns text content.
     *
     * @returns Text content.
     */
    get data() {
        return this._data;
    }
    /**
     * Sets text content.
     *
     * @param textContent Text content.
     */
    set data(data) {
        const oldValue = this._data;
        this._data = data;
        // MutationObserver
        if (this._observers.length > 0) {
            for (const observer of this._observers) {
                if (observer.options.characterData) {
                    const record = new MutationRecord();
                    record.type = MutationTypeEnum.characterData;
                    record.oldValue = observer.options.characterDataOldValue ? oldValue : null;
                    observer.callback([record]);
                }
            }
        }
    }
    /**
     * Returns text content.
     *
     * @returns Text content.
     */
    get textContent() {
        return this._data;
    }
    /**
     * Sets text content.
     *
     * @param textContent Text content.
     */
    set textContent(textContent) {
        this.data = textContent;
    }
    /**
     * Returns node value.
     *
     * @returns Node value.
     */
    get nodeValue() {
        return this._data;
    }
    /**
     * Sets node value.
     *
     * @param nodeValue Node value.
     */
    set nodeValue(nodeValue) {
        this.textContent = nodeValue;
    }
    /**
     * Converts to string.
     *
     * @returns String.
     */
    toString() {
        return '[object Text]';
    }
    /**
     * Previous element sibling.
     *
     * @returns Element.
     */
    get previousElementSibling() {
        return NonDocumentChildNodeUtility.previousElementSibling(this);
    }
    /**
     * Next element sibling.
     *
     * @returns Element.
     */
    get nextElementSibling() {
        return NonDocumentChildNodeUtility.nextElementSibling(this);
    }
    /**
     * Appends the given DOMString to the CharacterData.data string; when this method returns, data contains the concatenated DOMString.
     *
     * @param data Data.
     */
    appendData(data) {
        CharacterDataUtility.appendData(this, data);
    }
    /**
     * Removes the specified amount of characters, starting at the specified offset, from the CharacterData.data string; when this method returns, data contains the shortened DOMString.
     *
     * @param offset Offset.
     * @param count Count.
     */
    deleteData(offset, count) {
        CharacterDataUtility.deleteData(this, offset, count);
    }
    /**
     * Inserts the specified characters, at the specified offset, in the CharacterData.data string; when this method returns, data contains the modified DOMString.
     *
     * @param offset Offset.
     * @param data Data.
     */
    insertData(offset, data) {
        CharacterDataUtility.insertData(this, offset, data);
    }
    /**
     * Removes the object from its parent children list.
     */
    remove() {
        ChildNodeUtility.remove(this);
    }
    /**
     * The Node.replaceWith() method replaces this Node in the children list of its parent with a set of Node or DOMString objects.
     *
     * @param nodes List of Node or DOMString.
     */
    replaceWith(...nodes) {
        ChildNodeUtility.replaceWith(this, ...nodes);
    }
    /**
     * Inserts a set of Node or DOMString objects in the children list of this ChildNode's parent, just before this ChildNode. DOMString objects are inserted as equivalent Text nodes.
     *
     * @param nodes List of Node or DOMString.
     */
    before(...nodes) {
        ChildNodeUtility.before(this, ...nodes);
    }
    /**
     * Inserts a set of Node or DOMString objects in the children list of this ChildNode's parent, just after this ChildNode. DOMString objects are inserted as equivalent Text nodes.
     *
     * @param nodes List of Node or DOMString.
     */
    after(...nodes) {
        ChildNodeUtility.after(this, ...nodes);
    }
    /**
     * Replaces the specified amount of characters, starting at the specified offset, with the specified DOMString; when this method returns, data contains the modified DOMString.
     *
     * @param offset Offset.
     * @param count Count.
     * @param data Data.
     */
    replaceData(offset, count, data) {
        CharacterDataUtility.replaceData(this, offset, count, data);
    }
    /**
     * Returns a DOMString containing the part of CharacterData.data of the specified length and starting at the specified offset.
     *
     * @param offset Offset.
     * @param count Count.
     */
    substringData(offset, count) {
        return CharacterDataUtility.substringData(this, offset, count);
    }
    /**
     * Clones a node.
     *
     * @override
     * @param [deep=false] "true" to clone deep.
     * @returns Cloned node.
     */
    cloneNode(deep = false) {
        const clone = super.cloneNode(deep);
        clone._data = this._data;
        return clone;
    }
    get wholeText() {
        const text = [this.textContent];
        let { previousSibling, nextSibling } = this;
        // iterating previous text nodes
        while (previousSibling) {
            if (previousSibling.nodeType === Node.TEXT_NODE) {
                text.unshift(previousSibling.textContent);
            }
            else {
                break;
            }
            previousSibling = previousSibling.previousSibling;
        }
        // iterating next text nodes
        while (nextSibling) {
            if (nextSibling.nodeType === Node.TEXT_NODE) {
                text.push(nextSibling.textContent);
            }
            else {
                break;
            }
            nextSibling = nextSibling.nextSibling;
        }
        return text.join('');
    }
}
