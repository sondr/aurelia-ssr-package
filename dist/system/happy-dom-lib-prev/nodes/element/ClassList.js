System.register(["../../exception/DOMException"], function (exports_1, context_1) {
    "use strict";
    var DOMException_1, ClassList;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (DOMException_1_1) {
                DOMException_1 = DOMException_1_1;
            }
        ],
        execute: function () {
            /**
             * Class list.
             */
            ClassList = /** @class */ (function () {
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
                                throw new DOMException_1.default("Failed to execute 'add' on 'DOMTokenList': The token provided ('".concat(className, "') contains HTML space characters, which are not valid in tokens."));
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
            exports_1("default", ClassList);
        }
    };
});
//# sourceMappingURL=ClassList.js.map