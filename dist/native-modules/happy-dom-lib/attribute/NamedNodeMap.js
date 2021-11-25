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
import Attr from './Attr';
/**
 *
 */
var NamedNodeMap = /** @class */ (function (_super) {
    __extends(NamedNodeMap, _super);
    function NamedNodeMap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param name
     */
    NamedNodeMap.prototype.getNamedItem = function (name) {
        var s = name;
        s = s + 's';
        return new Attr();
    };
    /**
     * @param namespace
     * @param name
     */
    NamedNodeMap.prototype.getNamedItemNS = function (namespace, name) {
        var s = namespace + name;
        s = s + 's';
        return new Attr();
    };
    /**
     * @param attr
     */
    NamedNodeMap.prototype.setNamedItem = function (attr) {
        var s = attr.name + attr.value;
        s = s + 's';
        return new Attr();
    };
    /**
     * @param attr
     */
    NamedNodeMap.prototype.setNamedItemNS = function (attr) {
        var s = attr.name + attr.value;
        s = s + 's';
        return new Attr();
    };
    /**
     * @param name
     */
    NamedNodeMap.prototype.removeNamedItem = function (name) {
        var s = name;
        s = s + 's';
        return new Attr();
    };
    /**
     * @param namespace
     * @param name
     */
    NamedNodeMap.prototype.removeNamedItemNS = function (namespace, name) {
        var s = namespace + name;
        s = s + 's';
        return new Attr();
    };
    return NamedNodeMap;
}(Array));
export default NamedNodeMap;
