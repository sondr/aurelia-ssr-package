import CSSRule from '../CSSRule';
/**
 * CSSRule interface.
 */
export default class CSSStyleRule extends CSSRule {
    constructor() {
        super(...arguments);
        this.type = CSSRule.STYLE_RULE;
        this.selectorText = '';
        this.styleMap = new Map();
    }
    /**
     * Returns css text.
     *
     * @returns CSS text.
     */
    get cssText() {
        return `${this.selectorText} { ${this.style.cssText} }`;
    }
}
//# sourceMappingURL=CSSStyleRule.js.map