import Window from '../../window/Window';
import Node from '../node/Node';
import TreeWalker from '../../tree-walker/TreeWalker';
import Event from '../../event/Event';
import DOMImplementation from '../../dom-implementation/DOMImplementation';
import INodeFilter from '../../tree-walker/INodeFilter';
import Attr from '../../attribute/Attr';
import IDocument from './IDocument';
import CSSStyleSheet from '../../css/CSSStyleSheet';
import IElement from '../element/IElement';
import IHTMLScriptElement from '../html-script-element/IHTMLScriptElement';
import IHTMLElement from '../html-element/IHTMLElement';
import IDocumentType from '../document-type/IDocumentType';
import INode from '../node/INode';
import IComment from '../comment/IComment';
import IText from '../text/IText';
import IDocumentFragment from '../document-fragment/IDocumentFragment';
import INodeList from '../node/INodeList';
import IHTMLCollection from '../element/IHTMLCollection';
import DocumentReadyStateEnum from './DocumentReadyStateEnum';
import DocumentReadyStateManager from './DocumentReadyStateManager';
import Location from '../../location/Location';
import Selection from '../../selection/Selection';
/**
 * Document.
 */
export default class Document extends Node implements IDocument {
    onreadystatechange: (event: Event) => void;
    nodeType: number;
    adoptedStyleSheets: CSSStyleSheet[];
    implementation: DOMImplementation;
    readonly children: IHTMLCollection<IElement>;
    readonly readyState = DocumentReadyStateEnum.interactive;
    readonly isConnected: boolean;
    _readyStateManager: DocumentReadyStateManager;
    _activeElement: IHTMLElement;
    protected _isFirstWrite: boolean;
    protected _isFirstWriteAfterOpen: boolean;
    private _defaultView;
    private _cookie;
    /**
     * Creates an instance of Document.
     */
    constructor();
    /**
     * Returns character set.
     *
     * @deprecated
     * @returns Character set.
     */
    get charset(): string;
    /**
     * Returns character set.
     *
     * @returns Character set.
     */
    get characterSet(): string;
    /**
     * Returns default view.
     *
     * @returns Default view.
     */
    get defaultView(): Window;
    /**
     * Sets a default view.
     *
     * @param defaultView Default view.
     */
    set defaultView(defaultView: Window);
    /**
     * Last element child.
     *
     * @returns Element.
     */
    get childElementCount(): number;
    /**
     * First element child.
     *
     * @returns Element.
     */
    get firstElementChild(): IElement;
    /**
     * Last element child.
     *
     * @returns Element.
     */
    get lastElementChild(): IElement;
    /**
     * Returns cookie string.
     *
     * @returns Cookie.
     */
    get cookie(): string;
    /**
     * Sets a cookie string.
     *
     * @param cookie Cookie string.
     */
    set cookie(cookie: string);
    /**
     * Node name.
     *
     * @returns Node name.
     */
    get nodeName(): string;
    /**
     * Returns <html> element.
     *
     * @returns Element.
     */
    get documentElement(): IHTMLElement;
    /**
     * Returns document type element.
     *
     * @returns Document type.
     */
    get doctype(): IDocumentType;
    /**
     * Returns <body> element.
     *
     * @returns Element.
     */
    get body(): IHTMLElement;
    /**
     * Returns <head> element.
     *
     * @returns Element.
     */
    get head(): IHTMLElement;
    /**
     * Returns CSS style sheets.
     *
     * @returns CSS style sheets.
     */
    get styleSheets(): CSSStyleSheet[];
    /**
     * Returns active element.
     *
     * @returns Active element.
     */
    get activeElement(): IHTMLElement;
    /**
     * Returns scrolling element.
     *
     * @returns Scrolling element.
     */
    get scrollingElement(): IHTMLElement;
    /**
     * Returns location.
     *
     * @returns Location.
     */
    get location(): Location;
    /**
     * Returns scripts.
     *
     * @returns Scripts.
     */
    get scripts(): IHTMLCollection<IHTMLScriptElement>;
    /**
     * Inserts a set of Node objects or DOMString objects after the last child of the ParentNode. DOMString objects are inserted as equivalent Text nodes.
     *
     * @param nodes List of Node or DOMString.
     */
    append(...nodes: (INode | string)[]): void;
    /**
     * Inserts a set of Node objects or DOMString objects before the first child of the ParentNode. DOMString objects are inserted as equivalent Text nodes.
     *
     * @param nodes List of Node or DOMString.
     */
    prepend(...nodes: (INode | string)[]): void;
    /**
     * Replaces the existing children of a node with a specified new set of children.
     *
     * @param nodes List of Node or DOMString.
     */
    replaceChildren(...nodes: (INode | string)[]): void;
    /**
     * Query CSS selector to find matching elments.
     *
     * @param selector CSS selector.
     * @returns Matching elements.
     */
    querySelectorAll(selector: string): INodeList<IElement>;
    /**
     * Query CSS Selector to find a matching element.
     *
     * @param selector CSS selector.
     * @returns Matching element.
     */
    querySelector(selector: string): IElement;
    /**
     * Returns an elements by class name.
     *
     * @param className Tag name.
     * @returns Matching element.
     */
    getElementsByClassName(className: string): IHTMLCollection<IElement>;
    /**
     * Returns an elements by tag name.
     *
     * @param tagName Tag name.
     * @returns Matching element.
     */
    getElementsByTagName(tagName: string): IHTMLCollection<IElement>;
    /**
     * Returns an elements by tag name and namespace.
     *
     * @param namespaceURI Namespace URI.
     * @param tagName Tag name.
     * @returns Matching element.
     */
    getElementsByTagNameNS(namespaceURI: string, tagName: string): IHTMLCollection<IElement>;
    /**
     * Returns an element by ID.
     *
     * @param id ID.
     * @returns Matching element.
     */
    getElementById(id: string): IElement;
    /**
     * Returns an element by Name.
     *
     * @returns Matching element.
     * @param name
     */
    getElementsByName(name: string): INodeList<IElement>;
    /**
     * Clones a node.
     *
     * @override
     * @param [deep=false] "true" to clone deep.
     * @returns Cloned node.
     */
    cloneNode(deep?: boolean): IDocument;
    /**
     * Append a child node to childNodes.
     *
     * @override
     * @param  node Node to append.
     * @returns Appended node.
     */
    appendChild(node: INode): INode;
    /**
     * Remove Child element from childNodes array.
     *
     * @override
     * @param node Node to remove.
     */
    removeChild(node: INode): INode;
    /**
     * Inserts a node before another.
     *
     * @override
     * @param newNode Node to insert.
     * @param [referenceNode] Node to insert before.
     * @returns Inserted node.
     */
    insertBefore(newNode: INode, referenceNode?: INode): INode;
    /**
     * Replaces the document HTML with new HTML.
     *
     * @param html HTML.
     */
    write(html: string): void;
    /**
     * Opens the document.
     *
     * @returns Document.
     */
    open(): IDocument;
    /**
     * Closes the document.
     */
    close(): void;
    /**
     * Creates an element.
     *
     * @param qualifiedName Tag name.
     * @param [options] Options.
     * @param [options.is] Tag name of a custom element previously defined via customElements.define().
     * @returns Element.
     */
    createElement(qualifiedName: string, options?: {
        is?: string;
    }): IElement;
    /**
     * Creates an element with the specified namespace URI and qualified name.
     *
     * @param namespaceURI Namespace URI.
     * @param qualifiedName Tag name.
     * @param [options] Options.
     * @param [options.is] Tag name of a custom element previously defined via customElements.define().
     * @returns Element.
     */
    createElementNS(namespaceURI: string, qualifiedName: string, options?: {
        is?: string;
    }): IElement;
    /**
     * Creates a text node.
     *
     * @param [data] Text data.
     * @returns Text node.
     */
    createTextNode(data?: string): IText;
    /**
     * Creates a comment node.
     *
     * @param [data] Text data.
     * @returns Text node.
     */
    createComment(data?: string): IComment;
    /**
     * Creates a document fragment.
     *
     * @returns Document fragment.
     */
    createDocumentFragment(): IDocumentFragment;
    /**
     * Creates a Tree Walker.
     *
     * @param root Root.
     * @param [whatToShow] What to show.
     * @param [filter] Filter.
     */
    createTreeWalker(root: INode, whatToShow?: number, filter?: INodeFilter): TreeWalker;
    /**
     * Creates an event.
     *
     * @deprecated
     * @param type Type.
     * @returns Event.
     */
    createEvent(type: string): Event;
    /**
     * Creates an Attr node.
     *
     * @param name Name.
     * @returns Attribute.
     */
    createAttribute(name: string): Attr;
    /**
     * Creates a namespaced Attr node.
     *
     * @param namespaceURI Namespace URI.
     * @param qualifiedName Qualified name.
     * @returns Element.
     */
    createAttributeNS(namespaceURI: string, qualifiedName: string): Attr;
    /**
     * Imports a node.
     *
     * @param node Node to import.
     * @param [deep=false] Set to "true" if the clone should be deep.
     * @param Imported Node.
     */
    importNode(node: INode, deep?: boolean): INode;
    /**
     * Adopts a node.
     *
     * @param node Node to adopt.
     * @returns Adopted node.
     */
    adoptNode(node: INode): INode;
    /**
     * Returns selection.
     *
     * @returns Selection.
     */
    getSelection(): Selection;
    /**
     * Returns a boolean value indicating whether the document or any element inside the document has focus.
     *
     * @returns "true" if the document has focus.
     */
    hasFocus(): boolean;
    /**
     * @override
     */
    dispatchEvent(event: Event): boolean;
}
