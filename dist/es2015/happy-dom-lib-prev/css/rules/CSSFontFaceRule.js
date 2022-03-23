import CSSRule from '../CSSRule';
/**
 * CSSRule interface.
 */
export default class CSSFontFaceRule extends CSSRule {
    constructor() {
        super(...arguments);
        this.type = CSSRule.FONT_FACE_RULE;
    }
}
