import Node from '../nodes/node/Node';
import SelfClosingElements from '../config/SelfClosingElements';
import UnclosedElements from '../config/UnclosedElements';
import { escape } from 'he';
/**
 * Utility for converting an element to string.
 */
export default class XMLSerializer {
    /**
     * Renders an element as HTML.
     *
     * @param root Root element.
     * @param [options] Options.
     * @param [options.includeShadowRoots] Set to "true" to include shadow roots.
     * @returns Result.
     */
    serializeToString(root, options) {
        switch (root.nodeType) {
            case Node.ELEMENT_NODE:
                const element = root;
                const tagName = element.tagName.toLowerCase();
                if (UnclosedElements.includes(tagName)) {
                    return `<${tagName}${this._getAttributes(element)}>`;
                }
                else if (SelfClosingElements.includes(tagName)) {
                    return `<${tagName}${this._getAttributes(element)}/>`;
                }
                let innerHTML = '';
                for (const node of root.childNodes) {
                    innerHTML += this.serializeToString(node, options);
                }
                if ((options === null || options === void 0 ? void 0 : options.includeShadowRoots) && element.shadowRoot) {
                    innerHTML += `<template shadowroot="${element.shadowRoot.mode}">`;
                    for (const node of element.shadowRoot.childNodes) {
                        innerHTML += this.serializeToString(node, options);
                    }
                    innerHTML += '</template>';
                }
                return `<${tagName}${this._getAttributes(element)}>${innerHTML}</${tagName}>`;
            case Node.DOCUMENT_FRAGMENT_NODE:
            case Node.DOCUMENT_NODE:
                let html = '';
                for (const node of root.childNodes) {
                    html += this.serializeToString(node, options);
                }
                return html;
            case Node.COMMENT_NODE:
                return `<!--${root.textContent}-->`;
            case Node.TEXT_NODE:
                return root['textContent'];
            case Node.DOCUMENT_TYPE_NODE:
                const doctype = root;
                const identifier = doctype.publicId ? ' PUBLIC' : doctype.systemId ? ' SYSTEM' : '';
                const publicId = doctype.publicId ? ` "${doctype.publicId}"` : '';
                const systemId = doctype.systemId ? ` "${doctype.systemId}"` : '';
                return `<!DOCTYPE ${doctype.name}${identifier}${publicId}${systemId}>`;
        }
        return '';
    }
    /**
     * Returns attributes as a string.
     *
     * @param element Element.
     * @returns Attributes.
     */
    _getAttributes(element) {
        let attributeString = '';
        for (const attribute of Object.values(element._attributes)) {
            if (attribute.value !== null) {
                attributeString += ' ' + attribute.name + '="' + escape(attribute.value) + '"';
            }
        }
        return attributeString;
    }
}
