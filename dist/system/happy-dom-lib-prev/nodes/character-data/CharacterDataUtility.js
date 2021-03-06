System.register([], function (exports_1, context_1) {
    "use strict";
    var CharacterDataUtility;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            /**
             * Child node utility.
             */
            CharacterDataUtility = /** @class */ (function () {
                function CharacterDataUtility() {
                }
                /**
                 * Appends the given DOMString to the CharacterData.data string; when this method returns, data contains the concatenated DOMString.
                 *
                 * @param characterData Character data.
                 * @param data Data.
                 */
                CharacterDataUtility.appendData = function (characterData, data) {
                    characterData.data += data;
                };
                /**
                 * Removes the specified amount of characters, starting at the specified offset, from the CharacterData.data string; when this method returns, data contains the shortened DOMString.
                 *
                 * @param characterData Character data.
                 * @param offset Offset.
                 * @param count Count.
                 */
                CharacterDataUtility.deleteData = function (characterData, offset, count) {
                    characterData.data =
                        characterData.data.substring(0, offset) + characterData.data.substring(offset + count);
                };
                /**
                 * Inserts the specified characters, at the specified offset, in the CharacterData.data string; when this method returns, data contains the modified DOMString.
                 *
                 * @param characterData Character data.
                 * @param offset Offset.
                 * @param data Data.
                 */
                CharacterDataUtility.insertData = function (characterData, offset, data) {
                    characterData.data =
                        characterData.data.substring(0, offset) + data + characterData.data.substring(offset);
                };
                /**
                 * Replaces the specified amount of characters, starting at the specified offset, with the specified DOMString; when this method returns, data contains the modified DOMString.
                 *
                 * @param characterData Character data.
                 * @param offset Offset.
                 * @param count Count.
                 * @param data Data.
                 */
                CharacterDataUtility.replaceData = function (characterData, offset, count, data) {
                    characterData.data =
                        characterData.data.substring(0, offset) + data + characterData.data.substring(offset + count);
                };
                /**
                 * Returns a DOMString containing the part of CharacterData.data of the specified length and starting at the specified offset.
                 *
                 * @param characterData Character data.
                 * @param offset Offset.
                 * @param count Count.
                 */
                CharacterDataUtility.substringData = function (characterData, offset, count) {
                    return characterData.data.substring(offset, offset + count);
                };
                return CharacterDataUtility;
            }());
            exports_1("default", CharacterDataUtility);
        }
    };
});
//# sourceMappingURL=CharacterDataUtility.js.map