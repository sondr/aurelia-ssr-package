System.register(["../element/Element", "../../event/Event", "../../css/CSSStyleDeclaration"], function (exports_1, context_1) {
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
    var Element_1, Event_1, CSSStyleDeclaration_1, HTMLElement;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Element_1_1) {
                Element_1 = Element_1_1;
            },
            function (Event_1_1) {
                Event_1 = Event_1_1;
            },
            function (CSSStyleDeclaration_1_1) {
                CSSStyleDeclaration_1 = CSSStyleDeclaration_1_1;
            }
        ],
        execute: function () {
            /**
             * HTML Element.
             *
             * Reference:
             * https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement.
             */
            HTMLElement = /** @class */ (function (_super) {
                __extends(HTMLElement, _super);
                function HTMLElement() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.accessKey = '';
                    _this.accessKeyLabel = '';
                    _this.contentEditable = 'inherit';
                    _this.isContentEditable = false;
                    _this.offsetHeight = 0;
                    _this.offsetWidth = 0;
                    _this.offsetLeft = 0;
                    _this.offsetTop = 0;
                    _this.clientHeight = 0;
                    _this.clientWidth = 0;
                    _this._style = null;
                    return _this;
                }
                Object.defineProperty(HTMLElement.prototype, "tabIndex", {
                    /**
                     * Returns tab index.
                     *
                     * @returns Tab index.
                     */
                    get: function () {
                        var tabIndex = this.getAttributeNS(null, 'tabindex');
                        return tabIndex !== null ? Number(tabIndex) : -1;
                    },
                    /**
                     * Returns tab index.
                     *
                     * @param tabIndex Tab index.
                     */
                    set: function (tabIndex) {
                        if (tabIndex === -1) {
                            this.removeAttributeNS(null, 'tabindex');
                        }
                        else {
                            this.setAttributeNS(null, 'tabindex', String(tabIndex));
                        }
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(HTMLElement.prototype, "innerText", {
                    /**
                     * Returns inner text.
                     *
                     * @returns Text.
                     */
                    get: function () {
                        return this.textContent;
                    },
                    /**
                     * Sets inner text.
                     *
                     * @param text Text.
                     */
                    set: function (text) {
                        this.textContent = text;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(HTMLElement.prototype, "style", {
                    /**
                     * Returns style.
                     *
                     * @returns Style.
                     */
                    get: function () {
                        if (!this._style) {
                            this._style = new CSSStyleDeclaration_1.default(this._attributes);
                        }
                        return this._style;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(HTMLElement.prototype, "dataset", {
                    /**
                     * Returns data set.
                     *
                     * @returns Data set.
                     */
                    get: function () {
                        var dataset = {};
                        for (var _i = 0, _a = Object.keys(this._attributes); _i < _a.length; _i++) {
                            var name_1 = _a[_i];
                            if (name_1.startsWith('data-')) {
                                dataset[name_1.replace('data-', '')] = this._attributes[name_1].value;
                            }
                        }
                        return dataset;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(HTMLElement.prototype, "dir", {
                    /**
                     * Returns direction.
                     *
                     * @returns Direction.
                     */
                    get: function () {
                        return this.getAttributeNS(null, 'dir') || '';
                    },
                    /**
                     * Returns direction.
                     *
                     * @param direction Direction.
                     */
                    set: function (direction) {
                        this.setAttributeNS(null, 'dir', direction);
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(HTMLElement.prototype, "hidden", {
                    /**
                     * Returns hidden.
                     *
                     * @returns Hidden.
                     */
                    get: function () {
                        return this.getAttributeNS(null, 'hidden') !== null;
                    },
                    /**
                     * Returns hidden.
                     *
                     * @param hidden Hidden.
                     */
                    set: function (hidden) {
                        if (!hidden) {
                            this.removeAttributeNS(null, 'hidden');
                        }
                        else {
                            this.setAttributeNS(null, 'hidden', '');
                        }
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(HTMLElement.prototype, "lang", {
                    /**
                     * Returns language.
                     *
                     * @returns Language.
                     */
                    get: function () {
                        return this.getAttributeNS(null, 'lang') || '';
                    },
                    /**
                     * Returns language.
                     *
                     * @param language Language.
                     */
                    set: function (lang) {
                        this.setAttributeNS(null, 'lang', lang);
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(HTMLElement.prototype, "title", {
                    /**
                     * Returns title.
                     *
                     * @returns Title.
                     */
                    get: function () {
                        return this.getAttributeNS(null, 'title') || '';
                    },
                    /**
                     * Returns title.
                     *
                     * @param title Title.
                     */
                    set: function (title) {
                        this.setAttributeNS(null, 'title', title);
                    },
                    enumerable: false,
                    configurable: true
                });
                /**
                 * Triggers a click event.
                 */
                HTMLElement.prototype.click = function () {
                    var event = new Event_1.default('click', {
                        bubbles: true,
                        composed: true
                    });
                    event.target = this;
                    event.currentTarget = this;
                    this.dispatchEvent(event);
                };
                /**
                 * Triggers a blur event.
                 */
                HTMLElement.prototype.blur = function () {
                    for (var _i = 0, _a = ['blur', 'focusout']; _i < _a.length; _i++) {
                        var eventType = _a[_i];
                        var event_1 = new Event_1.default(eventType, {
                            bubbles: true,
                            composed: true
                        });
                        event_1.target = this;
                        event_1.currentTarget = this;
                        this.dispatchEvent(event_1);
                    }
                };
                /**
                 * Triggers a focus event.
                 */
                HTMLElement.prototype.focus = function () {
                    for (var _i = 0, _a = ['focus', 'focusin']; _i < _a.length; _i++) {
                        var eventType = _a[_i];
                        var event_2 = new Event_1.default(eventType, {
                            bubbles: true,
                            composed: true
                        });
                        event_2.target = this;
                        event_2.currentTarget = this;
                        this.dispatchEvent(event_2);
                    }
                };
                /**
                 * The setAttributeNode() method adds a new Attr node to the specified element.
                 *
                 * @override
                 * @param attribute Attribute.
                 * @returns Replaced attribute.
                 */
                HTMLElement.prototype.setAttributeNode = function (attribute) {
                    var replacedAttribute = _super.prototype.setAttributeNode.call(this, attribute);
                    if (attribute.name === 'style' && this._style) {
                        this._style.cssText = attribute.value;
                    }
                    return replacedAttribute;
                };
                /**
                 * Removes an Attr node.
                 *
                 * @override
                 * @param attribute Attribute.
                 */
                HTMLElement.prototype.removeAttributeNode = function (attribute) {
                    _super.prototype.removeAttributeNode.call(this, attribute);
                    if (attribute.name === 'style' && this._style) {
                        this._style.cssText = '';
                    }
                };
                /**
                 * Clones a node.
                 *
                 * @override
                 * @param [deep=false] "true" to clone deep.
                 * @returns Cloned node.
                 */
                HTMLElement.prototype.cloneNode = function (deep) {
                    if (deep === void 0) { deep = false; }
                    var clone = _super.prototype.cloneNode.call(this, deep);
                    clone.accessKey = this.accessKey;
                    clone.accessKeyLabel = this.accessKeyLabel;
                    clone.contentEditable = this.contentEditable;
                    clone.isContentEditable = this.isContentEditable;
                    if (this._style) {
                        clone.style.cssText = this._style.cssText;
                    }
                    return clone;
                };
                return HTMLElement;
            }(Element_1.default));
            exports_1("default", HTMLElement);
        }
    };
});
//# sourceMappingURL=HTMLElement.js.map