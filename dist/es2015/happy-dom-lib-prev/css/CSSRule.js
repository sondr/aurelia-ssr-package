/**
 * CSSRule interface.
 */
export default class CSSRule {
    constructor() {
        this.parentRule = null;
        this.parentStyleSheet = null;
        this.type = null;
    }
    /**
     * Returns selector text.
     *
     * @returns Selector text.
     */
    get cssText() {
        return '';
    }
}
CSSRule.STYLE_RULE = 1;
CSSRule.IMPORT_RULE = 3;
CSSRule.MEDIA_RULE = 4;
CSSRule.FONT_FACE_RULE = 5;
CSSRule.PAGE_RULE = 6;
CSSRule.KEYFRAMES_RULE = 7;
CSSRule.KEYFRAME_RULE = 8;
CSSRule.NAMESPACE_RULE = 10;
CSSRule.COUNTER_STYLE_RULE = 11;
CSSRule.SUPPORTS_RULE = 12;
CSSRule.DOCUMENT_RULE = 13;
CSSRule.FONT_FEATURE_VALUES_RULE = 14;
CSSRule.REGION_STYLE_RULE = 16;
//# sourceMappingURL=CSSRule.js.map