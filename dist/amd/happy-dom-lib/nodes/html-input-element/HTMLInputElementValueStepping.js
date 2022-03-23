var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "../../exception/DOMException"], function (require, exports, DOMException_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    DOMException_1 = __importDefault(DOMException_1);
    /**
     * HTML input element value stepping.
     */
    var HTMLInputElementValueStepping = /** @class */ (function () {
        function HTMLInputElementValueStepping() {
        }
        /**
         * Steps up or down.
         *
         * @param type Type.
         * @param value Value.
         * @param direction Direction.
         * @param [increment] Increment.
         * @returns New value.
         */
        HTMLInputElementValueStepping.step = function (type, value, direction, increment) {
            switch (type) {
                case 'number':
                    return String(Number(value) + (increment !== undefined ? increment * direction : direction));
                case 'date':
                case 'month':
                case 'week':
                case 'time':
                case 'datetime-local':
                case 'range':
                    // TODO: Implement support for additional types
                    return null;
                default:
                    throw new DOMException_1.default('This form element is not steppable.');
            }
        };
        return HTMLInputElementValueStepping;
    }());
    exports.default = HTMLInputElementValueStepping;
});
//# sourceMappingURL=HTMLInputElementValueStepping.js.map