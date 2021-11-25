define(["require", "exports", "../../exception/DOMException"], function (require, exports, DOMException_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Class list.
     */
    var ClassList = /** @class */ (function () {
        /**
         * Adds class names.
         *
         * @param ownerElement Owner element.
         */
        function ClassList(ownerElement) {
            this._ownerElement = ownerElement;
        }
        /**
         * Adds class names.
         *
         * @param classNames Class names.
         */
        ClassList.prototype.add = function () {
            var classNames = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                classNames[_i] = arguments[_i];
            }
            var attr = this._ownerElement.getAttribute('class');
            var list = attr ? attr.split(' ') : [];
            for (var _a = 0, classNames_1 = classNames; _a < classNames_1.length; _a++) {
                var className = classNames_1[_a];
                if (!list.includes(className)) {
                    if (className.includes(' ')) {
                        throw new DOMException_1.default("Failed to execute 'add' on 'DOMTokenList': The token provided ('" + className + "') contains HTML space characters, which are not valid in tokens.");
                    }
                    list.push(className);
                }
            }
            this._ownerElement.setAttribute('class', list.join(' '));
        };
        /**
         * Adds class names.
         *
         * @param classNames Class names.
         */
        ClassList.prototype.remove = function () {
            var classNames = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                classNames[_i] = arguments[_i];
            }
            var attr = this._ownerElement.getAttribute('class');
            var list = attr ? attr.split(' ') : [];
            for (var _a = 0, classNames_2 = classNames; _a < classNames_2.length; _a++) {
                var className = classNames_2[_a];
                var index = list.indexOf(className);
                if (index !== -1) {
                    list.splice(index, 1);
                }
            }
            this._ownerElement.setAttribute('class', list.join(' '));
        };
        /**
         * Check if the list contains a class.
         *
         * @param className Class name.
         * @returns TRUE if it contains.
         */
        ClassList.prototype.contains = function (className) {
            var attr = this._ownerElement.getAttribute('class');
            var list = attr ? attr.split(' ') : [];
            return list.includes(className);
        };
        return ClassList;
    }());
    exports.default = ClassList;
});