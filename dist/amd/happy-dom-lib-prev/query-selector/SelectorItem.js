var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "../exception/DOMException"], function (require, exports, DOMException_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    DOMException_1 = __importDefault(DOMException_1);
    var ATTRIBUTE_REGEXP = /\[([a-zA-Z0-9-_]+)\]|\[([a-zA-Z0-9-_]+)([~|^$*]{0,1})[ ]*=[ ]*["']{0,1}([^"']+)["']{0,1}\]/g;
    var ATTRIBUTE_NAME_REGEXP = /[^a-zA-Z0-9-_$]/;
    var PSUEDO_REGEXP = /:([a-zA-Z-]+)\(([0-9n+-]+|odd|even)\)|:([a-zA-Z-]+)/g;
    var CLASS_REGEXP = /\.([a-zA-Z0-9-_$]+)/g;
    var TAG_NAME_REGEXP = /^[a-zA-Z0-9-]+/;
    /**
     *
     */
    var SelectorItem = /** @class */ (function () {
        /**
         * Constructor.
         *
         * @param selector Selector.
         */
        function SelectorItem(selector) {
            this.tagName = null;
            this.isAll = selector === '*';
            this.isID = !this.isAll ? selector.startsWith('#') : false;
            this.isAttribute = !this.isAll && !this.isID && selector.includes('[');
            this.isPseudo = !this.isAll && !this.isID && selector.includes(':');
            this.isClass = !this.isAll && !this.isID && new RegExp(CLASS_REGEXP, 'g').test(selector);
            this.tagName = !this.isAll && !this.isID ? selector.match(TAG_NAME_REGEXP) : null;
            this.tagName = this.tagName ? this.tagName[0].toUpperCase() : null;
            this.isTagName = this.tagName !== null;
            this.selector = selector;
            this.id = !this.isAll && this.isID ? this.selector.replace('#', '') : null;
        }
        /**
         * Matches a selector against an element.
         *
         * @param element HTML element.
         * @returns TRUE if matching.
         */
        SelectorItem.prototype.match = function (element) {
            var selector = this.selector;
            var match;
            // Is all (*)
            if (this.isAll) {
                return true;
            }
            // ID Match
            if (this.isID) {
                return this.id === element.id;
            }
            // Tag name match
            if (this.isTagName) {
                if (this.tagName !== element.tagName) {
                    return false;
                }
            }
            // Class match
            if (this.isClass) {
                var regexp = new RegExp(CLASS_REGEXP, 'g');
                while ((match = regexp.exec(selector))) {
                    if (!element.classList.contains(match[1])) {
                        return false;
                    }
                }
            }
            // Pseudo match
            if (this.isPseudo) {
                var regexp = new RegExp(PSUEDO_REGEXP, 'g');
                while ((match = regexp.exec(selector))) {
                    if (match[1] && !this.matchesNthChild(element, match[1], match[2])) {
                        return false;
                    }
                    else if (match[3] && !this.matchesPsuedo(element, match[3])) {
                        return false;
                    }
                }
            }
            // Attribute match
            if (this.isAttribute) {
                var regexp = new RegExp(ATTRIBUTE_REGEXP, 'g');
                while ((match = regexp.exec(selector))) {
                    if ((match[1] && !this.matchesAttributeName(element, match[1])) ||
                        (match[2] && !this.matchesAttributeNameAndValue(element, match[2], match[4], match[3]))) {
                        return false;
                    }
                }
            }
            return true;
        };
        /**
         * Matches a nth-child selector.
         *
         * @param element Element.
         * @param psuedo Psuedo name.
         * @param place Place.
         * @returns True if it is a match.
         */
        SelectorItem.prototype.matchesNthChild = function (element, psuedo, place) {
            var children = element.parentNode ? element.parentNode.children : [];
            switch (psuedo.toLowerCase()) {
                case 'nth-of-type':
                    children = children.filter(function (child) { return child.tagName === element.tagName; });
                    break;
                case 'nth-last-child':
                    children = children.reverse();
                    break;
                case 'nth-last-of-type':
                    children = children.filter(function (child) { return child.tagName === element.tagName; }).reverse();
                    break;
            }
            if (place === 'odd') {
                var index = children.indexOf(element);
                return index !== -1 && (index + 1) % 2 !== 0;
            }
            else if (place === 'even') {
                var index = children.indexOf(element);
                return index !== -1 && (index + 1) % 2 === 0;
            }
            else if (place.includes('n')) {
                var _a = place.replace(/ /g, '').split('n'), a = _a[0], b = _a[1];
                var childIndex = children.indexOf(element);
                var aNumber = Number(a);
                var bNumber = b !== undefined ? Number(b) : 0;
                if (isNaN(aNumber) || isNaN(bNumber)) {
                    throw new DOMException_1.default("The selector \"".concat(this.selector, "\" is not valid."));
                }
                for (var i = 0, max = children.length; i <= max; i += aNumber) {
                    if (childIndex === i + bNumber - 1) {
                        return true;
                    }
                }
                return false;
            }
            var number = Number(place);
            if (isNaN(number)) {
                throw new DOMException_1.default("The selector \"".concat(this.selector, "\" is not valid."));
            }
            return children[number - 1] === element;
        };
        /**
         * Matches a psuedo selector.
         *
         * @param element Element.
         * @param psuedo Psuedo name.
         * @returns True if it is a match.
         */
        SelectorItem.prototype.matchesPsuedo = function (element, psuedo) {
            var parent = element.parentNode;
            if (!parent) {
                return false;
            }
            switch (psuedo.toLowerCase()) {
                case 'first-child':
                    return parent.children[0] === element;
                case 'last-child':
                    var lastChildChildren = parent.children;
                    return lastChildChildren[lastChildChildren.length - 1] === element;
                case 'only-child':
                    var onlyChildChildren = parent.children;
                    return onlyChildChildren.length === 1 && onlyChildChildren[0] === element;
                case 'first-of-type':
                    for (var _i = 0, _a = parent.children; _i < _a.length; _i++) {
                        var child = _a[_i];
                        if (child.tagName === element.tagName) {
                            return child === element;
                        }
                    }
                    return false;
                case 'last-of-type':
                    for (var i = parent.children.length - 1; i >= 0; i--) {
                        var child = parent.children[i];
                        if (child.tagName === element.tagName) {
                            return child === element;
                        }
                    }
                    return false;
                case 'only-of-type':
                    var isFound = false;
                    for (var _b = 0, _c = parent.children; _b < _c.length; _b++) {
                        var child = _c[_b];
                        if (child.tagName === element.tagName) {
                            if (isFound || child !== element) {
                                return false;
                            }
                            isFound = true;
                        }
                    }
                    return isFound;
            }
            return false;
        };
        /**
         * Matches attribute name only.
         *
         * @param element Element.
         * @param attributeName Attribute name.
         * @returns True if it is a match.
         */
        SelectorItem.prototype.matchesAttributeName = function (element, attributeName) {
            if (ATTRIBUTE_NAME_REGEXP.test(attributeName)) {
                throw new DOMException_1.default("The selector \"".concat(this.selector, "\" is not valid."));
            }
            return !!element._attributes[attributeName.toLowerCase()];
        };
        /**
         *
         * Matches attribute name and value.
         *
         * @param element Element.
         * @param attributeName Attribute name.
         * @param attributeValue Attribute value.
         * @param [matchType] Match type.
         * @returns True if it is a match.
         */
        SelectorItem.prototype.matchesAttributeNameAndValue = function (element, attributeName, attributeValue, matchType) {
            if (matchType === void 0) { matchType = null; }
            var attribute = element._attributes[attributeName.toLowerCase()];
            var value = attributeValue;
            if (ATTRIBUTE_NAME_REGEXP.test(attributeName)) {
                throw new DOMException_1.default("The selector \"".concat(this.selector, "\" is not valid."));
            }
            if (!attribute) {
                return false;
            }
            if (matchType) {
                switch (matchType) {
                    // [attribute~="value"] - Contains a specified word.
                    case '~':
                        return attribute.value && attribute.value.split(' ').includes(value);
                    // [attribute|="value"] - Starts with the specified word.
                    case '|':
                        return attribute && attribute.value && new RegExp("^".concat(value, "[- ]")).test(attribute.value);
                    // [attribute^="value"] - Begins with a specified value.
                    case '^':
                        return attribute && attribute.value && attribute.value.startsWith(value);
                    // [attribute$="value"] - Ends with a specified value.
                    case '$':
                        return attribute && attribute.value && attribute.value.endsWith(value);
                    // [attribute*="value"] - Contains a specified value.
                    case '*':
                        return attribute && attribute.value && attribute.value.includes(value);
                }
            }
            return attribute && attribute.value === value;
        };
        return SelectorItem;
    }());
    exports.default = SelectorItem;
});
//# sourceMappingURL=SelectorItem.js.map