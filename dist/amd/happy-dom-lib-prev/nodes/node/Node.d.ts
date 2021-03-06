import EventTarget from '../../event/EventTarget';
import MutationObserverListener from '../../mutation-observer/MutationListener';
import Event from '../../event/Event';
import INode from './INode';
import IDocument from '../document/IDocument';
import IElement from '../element/IElement';
import INodeList from './INodeList';
/**
 * Node.
 */
export default class Node extends EventTarget implements INode {
    static readonly ELEMENT_NODE = 1;
    static readonly TEXT_NODE = 3;
    static readonly COMMENT_NODE = 8;
    static readonly DOCUMENT_NODE = 9;
    static readonly DOCUMENT_TYPE_NODE = 10;
    static readonly DOCUMENT_FRAGMENT_NODE = 11;
    static ownerDocument: IDocument;
    readonly ownerDocument: IDocument;
    readonly parentNode: INode;
    readonly nodeType: number;
    readonly childNodes: INodeList<INode>;
    protected _isConnected: boolean;
    protected _observers: MutationObserverListener[];
    /**
     * Constructor.
     */
    constructor();
    /**
     * Returns "true" if connected to DOM.
     *
     * @returns "true" if connected.
     */
    get isConnected(): boolean;
    /**
     * Sets the connected state.
     *
     * @param isConnected "true" if connected.
     */
    set isConnected(isConnected: boolean);
    /**
     * Get text value of children.
     *
     * @returns Text content.
     */
    get textContent(): string;
    /**
     * Sets text content.
     *
     * @param textContent Text content.
     */
    set textContent(_textContent: string);
    /**
     * Node value.
     *
     * @returns Node value.
     */
    get nodeValue(): string;
    /**
     * Node name.
     *
     * @returns Node name.
     */
    get nodeName(): string;
    /**
     * Previous sibling.
     *
     * @returns Node.
     */
    get previousSibling(): INode;
    /**
     * Next sibling.
     *
     * @returns Node.
     */
    get nextSibling(): INode;
    /**
     * First child.
     *
     * @returns Node.
     */
    get firstChild(): INode;
    /**
     * Last child.
     *
     * @returns Node.
     */
    get lastChild(): INode;
    /**
     * Returns parent element.
     *
     * @returns Element.
     */
    get parentElement(): IElement;
    /**
     * Connected callback.
     */
    connectedCallback?(): void;
    /**
     * Disconnected callback.
     */
    disconnectedCallback?(): void;
    /**
     * Returns "true" if the node has child nodes.
     *
     * @returns "true" if the node has child nodes.
     */
    hasChildNodes(): boolean;
    /**
     * Returns closest root node (Document or ShadowRoot).
     *
     * @param options Options.
     * @param options.composed A Boolean that indicates whether the shadow root should be returned (false, the default), or a root node beyond shadow root (true).
     * @returns Node.
     */
    getRootNode(options?: {
        composed: boolean;
    }): INode;
    /**
     * Clones a node.
     *
     * @param [deep=false] "true" to clone deep.
     * @returns Cloned node.
     */
    cloneNode(deep?: boolean): INode;
    /**
     * Append a child node to childNodes.
     *
     * @param  node Node to append.
     * @returns Appended node.
     */
    appendChild(node: INode): INode;
    /**
     * Remove Child element from childNodes array.
     *
     * @param node Node to remove.
     * @returns Removed node.
     */
    removeChild(node: INode): INode;
    /**
     * Inserts a node before another.
     *
     * @param newNode Node to insert.
     * @param [referenceNode] Node to insert before.
     * @returns Inserted node.
     */
    insertBefore(newNode: INode, referenceNode: INode | null): INode;
    /**
     * Replaces a node with another.
     *
     * @param newChild New child.
     * @param oldChild Old child.
     * @returns Replaced node.
     */
    replaceChild(newChild: INode, oldChild: INode): INode;
    /**
     * @override
     */
    dispatchEvent(event: Event): boolean;
    /**
     * Converts the node to a string.
     *
     * @param listener Listener.
     */
    toString(): string;
    /**
     * Observeres the node.
     * Used by MutationObserver, but it is not part of the HTML standard.
     *
     * @param listener Listener.
     */
    _observe(listener: MutationObserverListener): void;
    /**
     * Stops observing the node.
     * Used by MutationObserver, but it is not part of the HTML standard.
     *
     * @param listener Listener.
     */
    _unobserve(listener: MutationObserverListener): void;
}
