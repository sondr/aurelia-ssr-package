define(["require", "exports", "./CSSRule", "./rules/CSSStyleRule", "./rules/CSSKeyframeRule", "./rules/CSSKeyframesRule", "./rules/CSSMediaRule", "./CSSStyleDeclaration"], function (require, exports, CSSRule_1, CSSStyleRule_1, CSSKeyframeRule_1, CSSKeyframesRule_1, CSSMediaRule_1, CSSStyleDeclaration_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
                        var newRule = new CSSKeyframesRule_1.default();
                        newRule.name = selectorText.replace('@keyframes ', '');
                        newRule.parentStyleSheet = parentStyleSheet;
                        cssRules.push(newRule);
                        parentRule = newRule;
                    }
                    else if (selectorText.startsWith('@media')) {
                        var mediums = selectorText.replace('@media', '').split(',');
                        var newRule = new CSSMediaRule_1.default();
                        for (var _i = 0, mediums_1 = mediums; _i < mediums_1.length; _i++) {
                            var medium = mediums_1[_i];
                            newRule.media.appendMedium(medium.trim());
                        }
                        newRule.parentStyleSheet = parentStyleSheet;
                        cssRules.push(newRule);
                        parentRule = newRule;
                    }
                    else if (parentRule && parentRule.type === CSSRule_1.default.KEYFRAMES_RULE) {
                        var newRule = new CSSKeyframeRule_1.default();
                        newRule.keyText = selectorText.trim();
                        newRule.parentStyleSheet = parentStyleSheet;
                        newRule.parentRule = parentRule;
                        parentRule.cssRules.push(newRule);
                        parentRule = newRule;
                    }
                    else if (parentRule && parentRule.type === CSSRule_1.default.MEDIA_RULE) {
                        var newRule = new CSSStyleRule_1.default();
                        newRule.selectorText = selectorText;
                        newRule.parentStyleSheet = parentStyleSheet;
                        newRule.parentRule = parentRule;
                        parentRule.cssRules.push(newRule);
                        parentRule = newRule;
                    }
                    else {
                        var newRule = new CSSStyleRule_1.default();
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
                            case CSSRule_1.default.FONT_FACE_RULE:
                            case CSSRule_1.default.KEYFRAME_RULE:
                            case CSSRule_1.default.STYLE_RULE:
                                var style = new CSSStyleDeclaration_1.default();
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
    exports.default = CSSParser;
});
