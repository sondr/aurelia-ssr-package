var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import DOMException from '../exception/DOMException';
import DOMExceptionNameEnum from '../exception/DOMExceptionNameEnum';
import CSSParser from './CSSParser';
/**
 * Attr node interface.
 *
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet.
 */
export default class CSSStyleSheet {
    /**
     * Constructor.
     *
     * Constructable Stylesheets is a new feature that only Blink supports:
     * https://wicg.github.io/construct-stylesheets/.
     *
     * @param [options] Options.
     * @param [options.media] Media.
     * @param [options.title] Title.
     * @param [options.alternate] Alternate.
     * @param [options.disabled] Disabled.
     */
    constructor(options) {
        this.value = null;
        this.name = null;
        this.namespaceURI = null;
        this.cssRules = [];
        this.media = options && options.media ? options.media : '';
        this.title = options && options.title ? options.title : '';
        this.alternate = options && options.alternate ? options.alternate : false;
        this.disabled = options && options.disabled ? options.disabled : false;
    }
    /**
     * Inserts a rule.
     *
     * Constructable Stylesheets is a new feature that only Blink supports:
     * https://wicg.github.io/construct-stylesheets/.
     *
     * @param rule Rule.
     * @param [index] Index.
     * @returns The newly inserterted rule's index.
     */
    insertRule(rule, index) {
        const rules = CSSParser.parseFromString(this, rule);
        if (rules.length === 0) {
            throw new DOMException('Invalid CSS rule.', DOMExceptionNameEnum.hierarchyRequestError);
        }
        if (rules.length > 1) {
            throw new DOMException('Only one rule is allowed to be added.', DOMExceptionNameEnum.syntaxError);
        }
        if (index !== undefined) {
            if (index > this.cssRules.length) {
                throw new DOMException('Index is more than the length of CSSRuleList.', DOMExceptionNameEnum.indexSizeError);
            }
            this.cssRules.splice(index, 0);
            this.cssRules.push(rules[0]);
            return index;
        }
        const newIndex = this.cssRules.length;
        this.cssRules.push(rules[0]);
        return newIndex;
    }
    /**
     * Removes a rule.
     *
     * Constructable Stylesheets is a new feature that only Blink supports:
     * https://wicg.github.io/construct-stylesheets/.
     *
     * @param index Index.
     */
    deleteRule(index) {
        delete this.cssRules[index];
    }
    /**
     * Replaces all CSS rules.
     *
     * Constructable Stylesheets is a new feature that only Blink supports:
     * https://wicg.github.io/construct-stylesheets/.
     *
     * @param text CSS text.
     * @returns Promise.
     */
    replace(text) {
        return __awaiter(this, void 0, void 0, function* () {
            this.replaceSync(text);
        });
    }
    /**
     * Replaces all CSS rules.
     *
     * Constructable Stylesheets is a new feature that only Blink supports:
     * https://wicg.github.io/construct-stylesheets/.
     *
     * @param text CSS text.
     */
    replaceSync(text) {
        this.cssRules = CSSParser.parseFromString(this, text);
    }
}
