import CSSRule from './CSSRule';
import CSSStyleRule from './rules/CSSStyleRule';
import CSSKeyframeRule from './rules/CSSKeyframeRule';
import CSSKeyframesRule from './rules/CSSKeyframesRule';
import CSSMediaRule from './rules/CSSMediaRule';
import CSSStyleDeclaration from './CSSStyleDeclaration';
var COMMENT_REGEXP = /\/\*[^*]*\*\//gm;
/**
 * CSS parser.
 */
var CSSParser = /** @class */ (function () {
    function CSSParser() {
    }
    /**
     * Parses HTML and returns a root element.
     *
     * @param parentStyleSheet Parent style sheet.
     * @param cssText CSS code.
     * @returns Root element.
     */
    CSSParser.parseFromString = function (parentStyleSheet, cssText) {
        var css = cssText.replace(COMMENT_REGEXP, '');
        var cssRules = [];
        var regExp = /{|}/gm;
        var stack = [];
        var parentRule = null;
        var lastIndex = 0;
        var match;
        while ((match = regExp.exec(css))) {
            if (match[0] === '{') {
                var selectorText = css.substring(lastIndex, match.index).trim();
                if (selectorText.startsWith('@keyframes')) {
                    var newRule = new CSSKeyframesRule();
                    newRule.name = selectorText.replace('@keyframes ', '');
                    newRule.parentStyleSheet = parentStyleSheet;
                    cssRules.push(newRule);
                    parentRule = newRule;
                }
                else if (selectorText.startsWith('@media')) {
                    var mediums = selectorText.replace('@media', '').split(',');
                    var newRule = new CSSMediaRule();
                    for (var _i = 0, mediums_1 = mediums; _i < mediums_1.length; _i++) {
                        var medium = mediums_1[_i];
                        newRule.media.appendMedium(medium.trim());
                    }
                    newRule.parentStyleSheet = parentStyleSheet;
                    cssRules.push(newRule);
                    parentRule = newRule;
                }
                else if (parentRule && parentRule.type === CSSRule.KEYFRAMES_RULE) {
                    var newRule = new CSSKeyframeRule();
                    newRule.keyText = selectorText.trim();
                    newRule.parentStyleSheet = parentStyleSheet;
                    newRule.parentRule = parentRule;
                    parentRule.cssRules.push(newRule);
                    parentRule = newRule;
                }
                else if (parentRule && parentRule.type === CSSRule.MEDIA_RULE) {
                    var newRule = new CSSStyleRule();
                    newRule.selectorText = selectorText;
                    newRule.parentStyleSheet = parentStyleSheet;
                    newRule.parentRule = parentRule;
                    parentRule.cssRules.push(newRule);
                    parentRule = newRule;
                }
                else {
                    var newRule = new CSSStyleRule();
                    newRule.selectorText = selectorText;
                    newRule.parentStyleSheet = parentStyleSheet;
                    newRule.parentRule = parentRule;
                    if (!parentRule) {
                        cssRules.push(newRule);
                    }
                    parentRule = newRule;
                }
                stack.push(parentRule);
            }
            else {
                if (parentRule) {
                    var cssText_1 = css.substring(lastIndex, match.index).trim();
                    switch (parentRule.type) {
                        case CSSRule.FONT_FACE_RULE:
                        case CSSRule.KEYFRAME_RULE:
                        case CSSRule.STYLE_RULE:
                            var style = new CSSStyleDeclaration();
                            style.cssText = cssText_1;
                            style.parentRule = parentRule;
                            parentRule.style = style;
                            break;
                    }
                }
                stack.pop();
                parentRule = stack[stack.length - 1] || null;
            }
            lastIndex = match.index + 1;
        }
        return cssRules;
    };
    return CSSParser;
}());
export default CSSParser;
//# sourceMappingURL=CSSParser.js.map