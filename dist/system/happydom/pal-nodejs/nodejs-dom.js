System.register([], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            if (typeof b !== "function" && b !== null)
                throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var NodeJsDom;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            /**
            * Represents the core APIs of the DOM.
            */
            NodeJsDom = /** @class */ (function () {
                function NodeJsDom(global) {
                    this.global = global;
                    this.boundary = 'aurelia-dom-boundary';
                    this.title = "";
                    this.activeElement = null;
                    var d = global.window.document;
                    this.Element = global.Element;
                    this.NodeList = global.NodeList;
                    this.SVGElement = global.SVGElement || /** @class */ (function (_super) {
                        __extends(SVGElement, _super);
                        function SVGElement() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        return SVGElement;
                    }(global.Element));
                }
                NodeJsDom.prototype.addEventListener = function (eventName, callback, capture) {
                    return this.global.document.addEventListener(eventName, callback, capture);
                };
                NodeJsDom.prototype.removeEventListener = function (eventName, callback, capture) {
                    return this.global.document.removeEventListener(eventName, callback, capture);
                };
                NodeJsDom.prototype.createElement = function (tagName) {
                    return this.global.document.createElement(tagName);
                };
                NodeJsDom.prototype.createAttribute = function (name) {
                    return this.global.document.createAttribute(name);
                };
                NodeJsDom.prototype.createTextNode = function (text) {
                    return this.global.document.createTextNode(text);
                };
                NodeJsDom.prototype.createComment = function (text) {
                    return this.global.document.createComment(text);
                };
                NodeJsDom.prototype.createDocumentFragment = function () {
                    return this.global.document.createDocumentFragment();
                };
                NodeJsDom.prototype.createTemplateElement = function () {
                    return this.global.document.createElement('template');
                };
                NodeJsDom.prototype.createMutationObserver = function (callback) {
                    return new (this.global.window.MutationObserver)(callback);
                };
                NodeJsDom.prototype.createCustomEvent = function (eventType, options) {
                    return new this.global.CustomEvent(eventType, options);
                };
                NodeJsDom.prototype.dispatchEvent = function (evt) {
                    this.global.window.dispatchEvent(evt);
                };
                NodeJsDom.prototype.getComputedStyle = function (element) {
                    return this.global.window.getComputedStyle(element);
                };
                NodeJsDom.prototype.getElementById = function (id) {
                    return this.global.document.getElementById(id);
                };
                NodeJsDom.prototype.querySelector = function (query) {
                    return this.global.document.querySelector(query);
                };
                NodeJsDom.prototype.querySelectorAll = function (query) {
                    return this.global.document.querySelectorAll(query);
                };
                NodeJsDom.prototype.nextElementSibling = function (element) {
                    return element.nextElementSibling;
                };
                NodeJsDom.prototype.createTemplateFromMarkup = function (markup) {
                    var parser = this.global.document.createElement('div');
                    parser.innerHTML = markup;
                    var temp = parser.firstElementChild;
                    if (!temp || temp.nodeName !== 'TEMPLATE') {
                        throw new Error('Template markup must be wrapped in a <template> element e.g. <template> <!-- markup here --> </template>');
                    }
                    return temp;
                };
                NodeJsDom.prototype.injectStyles = function (styles, destination, prepend) {
                    var node = this.global.document.createElement('style');
                    node.innerHTML = styles;
                    node.type = 'text/css';
                    destination = destination || this.global.document.head;
                    if (prepend && destination.childNodes.length > 0) {
                        destination.insertBefore(node, destination.childNodes[0]);
                    }
                    else {
                        destination.appendChild(node);
                    }
                    return node;
                };
                NodeJsDom.prototype.adoptNode = function (node) {
                    return this.global.document.adoptNode(node);
                    // let parentNode = node.parentNode!;
                    // if (parentNode) {
                    //   this.removeNode(node, parentNode);
                    // }
                    // return this.global.document.importNode(node, true);
                };
                NodeJsDom.prototype.appendNode = function (newNode, parentNode) {
                    (parentNode || this.global.document.body).appendChild(newNode);
                };
                NodeJsDom.prototype.replaceNode = function (newNode, node, parentNode) {
                    if (node.parentNode) {
                        node.parentNode.replaceChild(newNode, node);
                    }
                    else {
                        parentNode.replaceChild(newNode, node);
                    }
                };
                // needs verifying
                NodeJsDom.prototype.removeNode = function (node, parentNode) {
                    // Does not work for linkeddom
                    //(node as Element).remove();
                    // old method, wont work without else if(parentNode) in place of else
                    if (node.parentNode) {
                        node.parentNode.removeChild(node);
                    }
                    else {
                        parentNode.removeChild(node);
                    }
                };
                return NodeJsDom;
            }());
            exports_1("NodeJsDom", NodeJsDom);
        }
    };
});
