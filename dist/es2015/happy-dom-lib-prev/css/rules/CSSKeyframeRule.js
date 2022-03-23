import CSSRule from '../CSSRule';
/**
 * CSSRule interface.
 */
export default class CSSKeyframeRule extends CSSRule {
    constructor() {
        super(...arguments);
        this.type = CSSRule.KEYFRAME_RULE;
    }
    /**
     * Returns css text.
     *
     * @returns CSS text.
     */
    get cssText() {
        return `${this.keyText} { ${this.style.cssText} }`;
    }
}
