import IShadowRoot from '../shadow-root/IShadowRoot';
import Attr from '../../attribute/Attr';
import NamedNodeMap from './NamedNodeMap';
import DOMRect from './DOMRect';
import Range from './Range';
import ClassList from './ClassList';
import INode from './../node/INode';
import IChildNode from '../child-node/IChildNode';
import IParentNode from '../parent-node/IParentNode';
import INonDocumentTypeChildNode from '../child-node/INonDocumentTypeChildNode';
export declare type TInsertAdjacentPositions = 'beforebegin' | 'afterbegin' | 'beforeend' | 'afterend';
/**
 * Element.
 */
export default interface IElement extends IChildNode, INonDocumentTypeChildNode, IParentNode {
    readonly tagName: string;
    readonly shadowRoot: IShadowRoot;
    readonly classList: ClassList;
    readonly namespaceURI: string;
    scrollTop: number;
    scrollLeft: number;
    id: string;
    className: string;
    innerHTML: string;
    outerHTML: string;
    readonly attributes: NamedNodeMap;
    /**
     * Attribute changed callback.
     *
     * @param name Name.
     * @param oldValue Old value.
     * @param newValue New value.
     */
    attributeChangedCallback?(name: string, oldValue: string, newValue: string): void;
    /**
     * Sets an attribute.
     *
     * @param name Name.
     * @param value Value.
     */
    setAttribute(name: string, value: string): void;
    /**
     * Sets a namespace attribute.
     *
     * @param namespaceURI Namespace URI.
     * @param name Name.
     * @param value Value.
     */
    setAttributeNS(namespaceURI: string, name: string, value: string): void;
    /**
     * Returns attribute value.
     *
     * @param name Name.
     */
    getAttribute(name: string): string;
    /**
     * Returns namespace attribute value.
     *
     * @param namespace Namespace URI.
     * @param localName Local name.
     */
    getAttributeNS(namespace: string, localName: string): string;
    /**
     * Returns a boolean value indicating whether the specified element has the attribute or not.
     *
     * @param name Attribute name.
     * @returns True if attribute exists, false otherwise.
     */
    hasAttribute(name: string): boolean;
    /**
     * Returns a boolean value indicating whether the specified element has the namespace attribute or not.
     *
     * @param namespace Namespace URI.
     * @param localName Local name.
     * @returns True if attribute exists, false otherwise.
     */
    hasAttributeNS(namespace: string, localName: string): boolean;
    /**
     * Returns "true" if the element has attributes.
     *
     * @returns "true" if the element has attributes.
     */
    hasAttributes(): boolean;
    /**
     * Removes an attribute.
     *
     * @param name Name.
     */
    removeAttribute(name: string): void;
    /**
     * Removes a namespace attribute.
     *
     * @param namespace Namespace URI.
     * @param localName Local name.
     */
    removeAttributeNS(namespace: string, localName: string): void;
    /**
     * Attaches a shadow root.
     *
     * @param _shadowRootInit Shadow root init.
     * @returns Shadow root.
     */
    attachShadow(_shadowRootInit: {
        mode: string;
    }): IShadowRoot;
    /**
     * Scrolls to a particular set of coordinates.
     *
     * @param x X position or options object.
     * @param y Y position.
     */
    scroll(x: {
        top?: number;
        left?: number;
        behavior?: string;
    } | number, y: number): void;
    /**
     * Scrolls to a particular set of coordinates.
     *
     * @param x X position or options object.
     * @param y Y position.
     */
    scrollTo(x: {
        top?: number;
        left?: number;
        behavior?: string;
    } | number, y: number): void;
    /**
     * Returns the size of an element and its position relative to the viewport.
     *
     * @returns DOM rect.
     */
    getBoundingClientRect(): DOMRect;
    /**
     * Returns a range.
     *
     * @returns Range.
     */
    createTextRange(): Range;
    /**
     * The matches() method checks to see if the Element would be selected by the provided selectorString.
     *
     * @param selector Selector.
     * @returns "true" if matching.
     */
    matches(selector: string): boolean;
    /**
     * The setAttributeNode() method adds a new Attr node to the specified element.
     *
     * @param attribute Attribute.
     * @returns Replaced attribute.
     */
    setAttributeNode(attribute: Attr): Attr;
    /**
     * The setAttributeNodeNS() method adds a new Attr node to the specified element.
     *
     * @param attribute Attribute.
     * @returns Replaced attribute.
     */
    setAttributeNodeNS(attribute: Attr): Attr;
    /**
     * Returns an Attr node.
     *
     * @param name Name.
     * @returns Replaced attribute.
     */
    getAttributeNode(name: string): Attr;
    /**
     * Returns a namespaced Attr node.
     *
     * @param namespace Namespace.
     * @param nodeName Node name.
     * @returns Replaced attribute.
     */
    getAttributeNodeNS(namespace: string, nodeName: string): Attr;
    /**
     * Removes an Attr node.
     *
     * @param attribute Attribute.
     */
    removeAttributeNode(attribute: Attr): void;
    /**
     * Removes an Attr node.
     *
     * @param attribute Attribute.
     */
    removeAttributeNodeNS(attribute: Attr): void;
    /**
     * Clones a node.
     *
     * @override
     * @param [deep=false] "true" to clone deep.
     * @returns Cloned node.
     */
    cloneNode(deep: boolean): IElement;
    /**
     * Inserts a node to the given position.
     *
     * @param position Position to insert element.
     * @param element Node to insert.
     * @returns Inserted node or null if couldn't insert.
     */
    insertAdjacentElement(position: TInsertAdjacentPositions, node: INode): INode | null;
    /**
     * Inserts an HTML string to the given position.
     *
     * @param position Position to insert text.
     * @param text HTML string to insert.
     */
    insertAdjacentHTML(position: TInsertAdjacentPositions, text: string): void;
    /**
     * Inserts text to the given position.
     *
     * @param position Position to insert text.
     * @param text String to insert.
     */
    insertAdjacentText(position: TInsertAdjacentPositions, text: string): void;
}
