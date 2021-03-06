import Attr from '../attribute/Attr';
/**
 * CSS Style Declaration.
 */
export default class CSSStyleDeclaration {
    /**
     * Constructor.
     *
     * @param [attributes] Attributes.
     * @param [computedStyleElement] Computed style element.
     * @param computedStyleElement.isConnected
     */
    constructor(attributes = {}, computedStyleElement = null) {
        this.length = 0;
        this.parentRule = null;
        this._attributes = null;
        this._computedStyleElement = null;
        const style = attributes['style'];
        let index = 0;
        this._attributes = attributes;
        this._computedStyleElement = computedStyleElement;
        if (style && style.value) {
            const parts = style.value.split(';');
            for (const part of parts) {
                if (part) {
                    const [name] = part.trim().split(':');
                    this[index] = name;
                    index++;
                }
            }
        }
        this.length = index;
    }
    /* eslint-disable require-jsdoc */
    /**
     *
     */
    get alignContent() {
        return this.getPropertyValue('align-content');
    }
    /**
     *
     */
    set alignContent(alignContent) {
        this.setProperty('align-content', alignContent);
    }
    /**
     *
     */
    get alignItems() {
        return this.getPropertyValue('align-items');
    }
    /**
     *
     */
    set alignItems(alignItems) {
        this.setProperty('align-items', alignItems);
    }
    /**
     *
     */
    get alignSelf() {
        return this.getPropertyValue('align-self');
    }
    /**
     *
     */
    set alignSelf(alignSelf) {
        this.setProperty('align-self', alignSelf);
    }
    /**
     *
     */
    get alignmentBaseline() {
        return this.getPropertyValue('alignment-baseline');
    }
    /**
     *
     */
    set alignmentBaseline(alignmentBaseline) {
        this.setProperty('alignment-baseline', alignmentBaseline);
    }
    /**
     *
     */
    get all() {
        return this.getPropertyValue('all');
    }
    /**
     *
     */
    set all(all) {
        this.setProperty('all', all);
    }
    /**
     *
     */
    get animation() {
        return this.getPropertyValue('animation');
    }
    /**
     *
     */
    set animation(animation) {
        this.setProperty('animation', animation);
    }
    /**
     *
     */
    get animationDelay() {
        return this.getPropertyValue('animation-delay');
    }
    /**
     *
     */
    set animationDelay(animationDelay) {
        this.setProperty('animation-delay', animationDelay);
    }
    /**
     *
     */
    get animationDirection() {
        return this.getPropertyValue('animation-direction');
    }
    /**
     *
     */
    set animationDirection(animationDirection) {
        this.setProperty('animation-direction', animationDirection);
    }
    /**
     *
     */
    get animationDuration() {
        return this.getPropertyValue('animation-duration');
    }
    /**
     *
     */
    set animationDuration(animationDuration) {
        this.setProperty('animation-duration', animationDuration);
    }
    /**
     *
     */
    get animationFillMode() {
        return this.getPropertyValue('animation-fill-mode');
    }
    /**
     *
     */
    set animationFillMode(animationFillMode) {
        this.setProperty('animation-fill-mode', animationFillMode);
    }
    /**
     *
     */
    get animationIterationCount() {
        return this.getPropertyValue('animation-iteration-count');
    }
    /**
     *
     */
    set animationIterationCount(animationIterationCount) {
        this.setProperty('animation-iteration-count', animationIterationCount);
    }
    /**
     *
     */
    get animationName() {
        return this.getPropertyValue('animation-name');
    }
    /**
     *
     */
    set animationName(animationName) {
        this.setProperty('animation-name', animationName);
    }
    /**
     *
     */
    get animationPlayState() {
        return this.getPropertyValue('animation-play-state');
    }
    /**
     *
     */
    set animationPlayState(animationPlayState) {
        this.setProperty('animation-play-state', animationPlayState);
    }
    /**
     *
     */
    get animationTimingFunction() {
        return this.getPropertyValue('animation-timing-function');
    }
    /**
     *
     */
    set animationTimingFunction(animationTimingFunction) {
        this.setProperty('animation-timing-function', animationTimingFunction);
    }
    /**
     *
     */
    get appearance() {
        return this.getPropertyValue('appearance');
    }
    /**
     *
     */
    set appearance(appearance) {
        this.setProperty('appearance', appearance);
    }
    /**
     *
     */
    get backdropFilter() {
        return this.getPropertyValue('backdrop-filter');
    }
    /**
     *
     */
    set backdropFilter(backdropFilter) {
        this.setProperty('backdrop-filter', backdropFilter);
    }
    /**
     *
     */
    get backfaceVisibility() {
        return this.getPropertyValue('backface-visibility');
    }
    /**
     *
     */
    set backfaceVisibility(backfaceVisibility) {
        this.setProperty('backface-visibility', backfaceVisibility);
    }
    /**
     *
     */
    get background() {
        return this.getPropertyValue('background');
    }
    /**
     *
     */
    set background(background) {
        this.setProperty('background', background);
    }
    /**
     *
     */
    get backgroundAttachment() {
        return this.getPropertyValue('background-attachment');
    }
    /**
     *
     */
    set backgroundAttachment(backgroundAttachment) {
        this.setProperty('background-attachment', backgroundAttachment);
    }
    /**
     *
     */
    get backgroundBlendMode() {
        return this.getPropertyValue('background-blend-mode');
    }
    /**
     *
     */
    set backgroundBlendMode(backgroundBlendMode) {
        this.setProperty('background-blend-mode', backgroundBlendMode);
    }
    /**
     *
     */
    get backgroundClip() {
        return this.getPropertyValue('background-clip');
    }
    /**
     *
     */
    set backgroundClip(backgroundClip) {
        this.setProperty('background-clip', backgroundClip);
    }
    /**
     *
     */
    get backgroundColor() {
        return this.getPropertyValue('background-color');
    }
    /**
     *
     */
    set backgroundColor(backgroundColor) {
        this.setProperty('background-color', backgroundColor);
    }
    /**
     *
     */
    get backgroundImage() {
        return this.getPropertyValue('background-image');
    }
    /**
     *
     */
    set backgroundImage(backgroundImage) {
        this.setProperty('background-image', backgroundImage);
    }
    /**
     *
     */
    get backgroundOrigin() {
        return this.getPropertyValue('background-origin');
    }
    /**
     *
     */
    set backgroundOrigin(backgroundOrigin) {
        this.setProperty('background-origin', backgroundOrigin);
    }
    /**
     *
     */
    get backgroundPosition() {
        return this.getPropertyValue('background-position');
    }
    /**
     *
     */
    set backgroundPosition(backgroundPosition) {
        this.setProperty('background-position', backgroundPosition);
    }
    /**
     *
     */
    get backgroundPositionX() {
        return this.getPropertyValue('background-position-x');
    }
    /**
     *
     */
    set backgroundPositionX(backgroundPositionX) {
        this.setProperty('background-position-x', backgroundPositionX);
    }
    /**
     *
     */
    get backgroundPositionY() {
        return this.getPropertyValue('background-position-y');
    }
    /**
     *
     */
    set backgroundPositionY(backgroundPositionY) {
        this.setProperty('background-position-y', backgroundPositionY);
    }
    /**
     *
     */
    get backgroundRepeat() {
        return this.getPropertyValue('background-repeat');
    }
    /**
     *
     */
    set backgroundRepeat(backgroundRepeat) {
        this.setProperty('background-repeat', backgroundRepeat);
    }
    /**
     *
     */
    get backgroundRepeatX() {
        return this.getPropertyValue('background-repeat-x');
    }
    /**
     *
     */
    set backgroundRepeatX(backgroundRepeatX) {
        this.setProperty('background-repeat-x', backgroundRepeatX);
    }
    /**
     *
     */
    get backgroundRepeatY() {
        return this.getPropertyValue('background-repeat-y');
    }
    /**
     *
     */
    set backgroundRepeatY(backgroundRepeatY) {
        this.setProperty('background-repeat-y', backgroundRepeatY);
    }
    /**
     *
     */
    get backgroundSize() {
        return this.getPropertyValue('background-size');
    }
    /**
     *
     */
    set backgroundSize(backgroundSize) {
        this.setProperty('background-size', backgroundSize);
    }
    /**
     *
     */
    get baselineShift() {
        return this.getPropertyValue('baseline-shift');
    }
    /**
     *
     */
    set baselineShift(baselineShift) {
        this.setProperty('baseline-shift', baselineShift);
    }
    /**
     *
     */
    get blockSize() {
        return this.getPropertyValue('block-size');
    }
    /**
     *
     */
    set blockSize(blockSize) {
        this.setProperty('block-size', blockSize);
    }
    /**
     *
     */
    get border() {
        return this.getPropertyValue('border');
    }
    /**
     *
     */
    set border(border) {
        this.setProperty('border', border);
    }
    /**
     *
     */
    get borderBlockEnd() {
        return this.getPropertyValue('border-block-end');
    }
    /**
     *
     */
    set borderBlockEnd(borderBlockEnd) {
        this.setProperty('border-block-end', borderBlockEnd);
    }
    /**
     *
     */
    get borderBlockEndColor() {
        return this.getPropertyValue('border-block-end-color');
    }
    /**
     *
     */
    set borderBlockEndColor(borderBlockEndColor) {
        this.setProperty('border-block-end-color', borderBlockEndColor);
    }
    /**
     *
     */
    get borderBlockEndStyle() {
        return this.getPropertyValue('border-block-end-style');
    }
    /**
     *
     */
    set borderBlockEndStyle(borderBlockEndStyle) {
        this.setProperty('border-block-end-style', borderBlockEndStyle);
    }
    /**
     *
     */
    get borderBlockEndWidth() {
        return this.getPropertyValue('border-block-end-width');
    }
    /**
     *
     */
    set borderBlockEndWidth(borderBlockEndWidth) {
        this.setProperty('border-block-end-width', borderBlockEndWidth);
    }
    /**
     *
     */
    get borderBlockStart() {
        return this.getPropertyValue('border-block-start');
    }
    /**
     *
     */
    set borderBlockStart(borderBlockStart) {
        this.setProperty('border-block-start', borderBlockStart);
    }
    /**
     *
     */
    get borderBlockStartColor() {
        return this.getPropertyValue('border-block-start-color');
    }
    /**
     *
     */
    set borderBlockStartColor(borderBlockStartColor) {
        this.setProperty('border-block-start-color', borderBlockStartColor);
    }
    /**
     *
     */
    get borderBlockStartStyle() {
        return this.getPropertyValue('border-block-start-style');
    }
    /**
     *
     */
    set borderBlockStartStyle(borderBlockStartStyle) {
        this.setProperty('border-block-start-style', borderBlockStartStyle);
    }
    /**
     *
     */
    get borderBlockStartWidth() {
        return this.getPropertyValue('border-block-start-width');
    }
    /**
     *
     */
    set borderBlockStartWidth(borderBlockStartWidth) {
        this.setProperty('border-block-start-width', borderBlockStartWidth);
    }
    /**
     *
     */
    get borderBottom() {
        return this.getPropertyValue('border-bottom');
    }
    /**
     *
     */
    set borderBottom(borderBottom) {
        this.setProperty('border-bottom', borderBottom);
    }
    /**
     *
     */
    get borderBottomColor() {
        return this.getPropertyValue('border-bottom-color');
    }
    /**
     *
     */
    set borderBottomColor(borderBottomColor) {
        this.setProperty('border-bottom-color', borderBottomColor);
    }
    /**
     *
     */
    get borderBottomLeftRadius() {
        return this.getPropertyValue('border-bottom-left-radius');
    }
    /**
     *
     */
    set borderBottomLeftRadius(borderBottomLeftRadius) {
        this.setProperty('border-bottom-left-radius', borderBottomLeftRadius);
    }
    /**
     *
     */
    get borderBottomRightRadius() {
        return this.getPropertyValue('border-bottom-right-radius');
    }
    /**
     *
     */
    set borderBottomRightRadius(borderBottomRightRadius) {
        this.setProperty('border-bottom-right-radius', borderBottomRightRadius);
    }
    /**
     *
     */
    get borderBottomStyle() {
        return this.getPropertyValue('border-bottom-style');
    }
    /**
     *
     */
    set borderBottomStyle(borderBottomStyle) {
        this.setProperty('border-bottom-style', borderBottomStyle);
    }
    /**
     *
     */
    get borderBottomWidth() {
        return this.getPropertyValue('border-bottom-width');
    }
    /**
     *
     */
    set borderBottomWidth(borderBottomWidth) {
        this.setProperty('border-bottom-width', borderBottomWidth);
    }
    /**
     *
     */
    get borderCollapse() {
        return this.getPropertyValue('border-collapse');
    }
    /**
     *
     */
    set borderCollapse(borderCollapse) {
        this.setProperty('border-collapse', borderCollapse);
    }
    /**
     *
     */
    get borderColor() {
        return this.getPropertyValue('border-color');
    }
    /**
     *
     */
    set borderColor(borderColor) {
        this.setProperty('border-color', borderColor);
    }
    /**
     *
     */
    get borderImage() {
        return this.getPropertyValue('border-image');
    }
    /**
     *
     */
    set borderImage(borderImage) {
        this.setProperty('border-image', borderImage);
    }
    /**
     *
     */
    get borderImageOutset() {
        return this.getPropertyValue('border-image-outset');
    }
    /**
     *
     */
    set borderImageOutset(borderImageOutset) {
        this.setProperty('border-image-outset', borderImageOutset);
    }
    /**
     *
     */
    get borderImageRepeat() {
        return this.getPropertyValue('border-image-repeat');
    }
    /**
     *
     */
    set borderImageRepeat(borderImageRepeat) {
        this.setProperty('border-image-repeat', borderImageRepeat);
    }
    /**
     *
     */
    get borderImageSlice() {
        return this.getPropertyValue('border-image-slice');
    }
    /**
     *
     */
    set borderImageSlice(borderImageSlice) {
        this.setProperty('border-image-slice', borderImageSlice);
    }
    /**
     *
     */
    get borderImageSource() {
        return this.getPropertyValue('border-image-source');
    }
    /**
     *
     */
    set borderImageSource(borderImageSource) {
        this.setProperty('border-image-source', borderImageSource);
    }
    /**
     *
     */
    get borderImageWidth() {
        return this.getPropertyValue('border-image-width');
    }
    /**
     *
     */
    set borderImageWidth(borderImageWidth) {
        this.setProperty('border-image-width', borderImageWidth);
    }
    /**
     *
     */
    get borderInlineEnd() {
        return this.getPropertyValue('border-inline-end');
    }
    /**
     *
     */
    set borderInlineEnd(borderInlineEnd) {
        this.setProperty('border-inline-end', borderInlineEnd);
    }
    /**
     *
     */
    get borderInlineEndColor() {
        return this.getPropertyValue('border-inline-end-color');
    }
    /**
     *
     */
    set borderInlineEndColor(borderInlineEndColor) {
        this.setProperty('border-inline-end-color', borderInlineEndColor);
    }
    /**
     *
     */
    get borderInlineEndStyle() {
        return this.getPropertyValue('border-inline-end-style');
    }
    /**
     *
     */
    set borderInlineEndStyle(borderInlineEndStyle) {
        this.setProperty('border-inline-end-style', borderInlineEndStyle);
    }
    /**
     *
     */
    get borderInlineEndWidth() {
        return this.getPropertyValue('border-inline-end-width');
    }
    /**
     *
     */
    set borderInlineEndWidth(borderInlineEndWidth) {
        this.setProperty('border-inline-end-width', borderInlineEndWidth);
    }
    /**
     *
     */
    get borderInlineStart() {
        return this.getPropertyValue('border-inline-start');
    }
    /**
     *
     */
    set borderInlineStart(borderInlineStart) {
        this.setProperty('border-inline-start', borderInlineStart);
    }
    /**
     *
     */
    get borderInlineStartColor() {
        return this.getPropertyValue('border-inline-start-color');
    }
    /**
     *
     */
    set borderInlineStartColor(borderInlineStartColor) {
        this.setProperty('border-inline-start-color', borderInlineStartColor);
    }
    /**
     *
     */
    get borderInlineStartStyle() {
        return this.getPropertyValue('border-inline-start-style');
    }
    /**
     *
     */
    set borderInlineStartStyle(borderInlineStartStyle) {
        this.setProperty('border-inline-start-style', borderInlineStartStyle);
    }
    /**
     *
     */
    get borderInlineStartWidth() {
        return this.getPropertyValue('border-inline-start-width');
    }
    /**
     *
     */
    set borderInlineStartWidth(borderInlineStartWidth) {
        this.setProperty('border-inline-start-width', borderInlineStartWidth);
    }
    /**
     *
     */
    get borderLeft() {
        return this.getPropertyValue('border-left');
    }
    /**
     *
     */
    set borderLeft(borderLeft) {
        this.setProperty('border-left', borderLeft);
    }
    /**
     *
     */
    get borderLeftColor() {
        return this.getPropertyValue('border-left-color');
    }
    /**
     *
     */
    set borderLeftColor(borderLeftColor) {
        this.setProperty('border-left-color', borderLeftColor);
    }
    /**
     *
     */
    get borderLeftStyle() {
        return this.getPropertyValue('border-left-style');
    }
    /**
     *
     */
    set borderLeftStyle(borderLeftStyle) {
        this.setProperty('border-left-style', borderLeftStyle);
    }
    /**
     *
     */
    get borderLeftWidth() {
        return this.getPropertyValue('border-left-width');
    }
    /**
     *
     */
    set borderLeftWidth(borderLeftWidth) {
        this.setProperty('border-left-width', borderLeftWidth);
    }
    /**
     *
     */
    get borderRadius() {
        return this.getPropertyValue('border-radius');
    }
    /**
     *
     */
    set borderRadius(borderRadius) {
        this.setProperty('border-radius', borderRadius);
    }
    /**
     *
     */
    get borderRight() {
        return this.getPropertyValue('border-right');
    }
    /**
     *
     */
    set borderRight(borderRight) {
        this.setProperty('border-right', borderRight);
    }
    /**
     *
     */
    get borderRightColor() {
        return this.getPropertyValue('border-right-color');
    }
    /**
     *
     */
    set borderRightColor(borderRightColor) {
        this.setProperty('border-right-color', borderRightColor);
    }
    /**
     *
     */
    get borderRightStyle() {
        return this.getPropertyValue('border-right-style');
    }
    /**
     *
     */
    set borderRightStyle(borderRightStyle) {
        this.setProperty('border-right-style', borderRightStyle);
    }
    /**
     *
     */
    get borderRightWidth() {
        return this.getPropertyValue('border-right-width');
    }
    /**
     *
     */
    set borderRightWidth(borderRightWidth) {
        this.setProperty('border-right-width', borderRightWidth);
    }
    /**
     *
     */
    get borderSpacing() {
        return this.getPropertyValue('border-spacing');
    }
    /**
     *
     */
    set borderSpacing(borderSpacing) {
        this.setProperty('border-spacing', borderSpacing);
    }
    /**
     *
     */
    get borderStyle() {
        return this.getPropertyValue('border-style');
    }
    /**
     *
     */
    set borderStyle(borderStyle) {
        this.setProperty('border-style', borderStyle);
    }
    /**
     *
     */
    get borderTop() {
        return this.getPropertyValue('border-top');
    }
    /**
     *
     */
    set borderTop(borderTop) {
        this.setProperty('border-top', borderTop);
    }
    /**
     *
     */
    get borderTopColor() {
        return this.getPropertyValue('border-top-color');
    }
    /**
     *
     */
    set borderTopColor(borderTopColor) {
        this.setProperty('border-top-color', borderTopColor);
    }
    /**
     *
     */
    get borderTopLeftRadius() {
        return this.getPropertyValue('border-top-left-radius');
    }
    /**
     *
     */
    set borderTopLeftRadius(borderTopLeftRadius) {
        this.setProperty('border-top-left-radius', borderTopLeftRadius);
    }
    /**
     *
     */
    get borderTopRightRadius() {
        return this.getPropertyValue('border-top-right-radius');
    }
    /**
     *
     */
    set borderTopRightRadius(borderTopRightRadius) {
        this.setProperty('border-top-right-radius', borderTopRightRadius);
    }
    /**
     *
     */
    get borderTopStyle() {
        return this.getPropertyValue('border-top-style');
    }
    /**
     *
     */
    set borderTopStyle(borderTopStyle) {
        this.setProperty('border-top-style', borderTopStyle);
    }
    /**
     *
     */
    get borderTopWidth() {
        return this.getPropertyValue('border-top-width');
    }
    /**
     *
     */
    set borderTopWidth(borderTopWidth) {
        this.setProperty('border-top-width', borderTopWidth);
    }
    /**
     *
     */
    get borderWidth() {
        return this.getPropertyValue('border-width');
    }
    /**
     *
     */
    set borderWidth(borderWidth) {
        this.setProperty('border-width', borderWidth);
    }
    /**
     *
     */
    get bottom() {
        return this.getPropertyValue('bottom');
    }
    /**
     *
     */
    set bottom(bottom) {
        this.setProperty('bottom', bottom);
    }
    /**
     *
     */
    get boxShadow() {
        return this.getPropertyValue('box-shadow');
    }
    /**
     *
     */
    set boxShadow(boxShadow) {
        this.setProperty('box-shadow', boxShadow);
    }
    /**
     *
     */
    get boxSizing() {
        return this.getPropertyValue('box-sizing');
    }
    /**
     *
     */
    set boxSizing(boxSizing) {
        this.setProperty('box-sizing', boxSizing);
    }
    /**
     *
     */
    get breakAfter() {
        return this.getPropertyValue('break-after');
    }
    /**
     *
     */
    set breakAfter(breakAfter) {
        this.setProperty('break-after', breakAfter);
    }
    /**
     *
     */
    get breakBefore() {
        return this.getPropertyValue('break-before');
    }
    /**
     *
     */
    set breakBefore(breakBefore) {
        this.setProperty('break-before', breakBefore);
    }
    /**
     *
     */
    get breakInside() {
        return this.getPropertyValue('break-inside');
    }
    /**
     *
     */
    set breakInside(breakInside) {
        this.setProperty('break-inside', breakInside);
    }
    /**
     *
     */
    get bufferedRendering() {
        return this.getPropertyValue('buffered-rendering');
    }
    /**
     *
     */
    set bufferedRendering(bufferedRendering) {
        this.setProperty('buffered-rendering', bufferedRendering);
    }
    /**
     *
     */
    get captionSide() {
        return this.getPropertyValue('caption-side');
    }
    /**
     *
     */
    set captionSide(captionSide) {
        this.setProperty('caption-side', captionSide);
    }
    /**
     *
     */
    get caretColor() {
        return this.getPropertyValue('caret-color');
    }
    /**
     *
     */
    set caretColor(caretColor) {
        this.setProperty('caret-color', caretColor);
    }
    /**
     *
     */
    get clear() {
        return this.getPropertyValue('clear');
    }
    /**
     *
     */
    set clear(clear) {
        this.setProperty('clear', clear);
    }
    /**
     *
     */
    get clip() {
        return this.getPropertyValue('clip');
    }
    /**
     *
     */
    set clip(clip) {
        this.setProperty('clip', clip);
    }
    /**
     *
     */
    get clipPath() {
        return this.getPropertyValue('clip-path');
    }
    /**
     *
     */
    set clipPath(clipPath) {
        this.setProperty('clip-path', clipPath);
    }
    /**
     *
     */
    get clipRule() {
        return this.getPropertyValue('clip-rule');
    }
    /**
     *
     */
    set clipRule(clipRule) {
        this.setProperty('clip-rule', clipRule);
    }
    /**
     *
     */
    get color() {
        return this.getPropertyValue('color');
    }
    /**
     *
     */
    set color(color) {
        this.setProperty('color', color);
    }
    /**
     *
     */
    get colorInterpolation() {
        return this.getPropertyValue('color-interpolation');
    }
    /**
     *
     */
    set colorInterpolation(colorInterpolation) {
        this.setProperty('color-interpolation', colorInterpolation);
    }
    /**
     *
     */
    get colorInterpolationFilters() {
        return this.getPropertyValue('color-interpolation-filters');
    }
    /**
     *
     */
    set colorInterpolationFilters(colorInterpolationFilters) {
        this.setProperty('color-interpolation-filters', colorInterpolationFilters);
    }
    /**
     *
     */
    get colorRendering() {
        return this.getPropertyValue('color-rendering');
    }
    /**
     *
     */
    set colorRendering(colorRendering) {
        this.setProperty('color-rendering', colorRendering);
    }
    /**
     *
     */
    get colorScheme() {
        return this.getPropertyValue('color-scheme');
    }
    /**
     *
     */
    set colorScheme(colorScheme) {
        this.setProperty('color-scheme', colorScheme);
    }
    /**
     *
     */
    get columnCount() {
        return this.getPropertyValue('column-count');
    }
    /**
     *
     */
    set columnCount(columnCount) {
        this.setProperty('column-count', columnCount);
    }
    /**
     *
     */
    get columnFill() {
        return this.getPropertyValue('column-fill');
    }
    /**
     *
     */
    set columnFill(columnFill) {
        this.setProperty('column-fill', columnFill);
    }
    /**
     *
     */
    get columnGap() {
        return this.getPropertyValue('column-gap');
    }
    /**
     *
     */
    set columnGap(columnGap) {
        this.setProperty('column-gap', columnGap);
    }
    /**
     *
     */
    get columnRule() {
        return this.getPropertyValue('column-rule');
    }
    /**
     *
     */
    set columnRule(columnRule) {
        this.setProperty('column-rule', columnRule);
    }
    /**
     *
     */
    get columnRuleColor() {
        return this.getPropertyValue('column-rule-color');
    }
    /**
     *
     */
    set columnRuleColor(columnRuleColor) {
        this.setProperty('column-rule-color', columnRuleColor);
    }
    /**
     *
     */
    get columnRuleStyle() {
        return this.getPropertyValue('column-rule-style');
    }
    /**
     *
     */
    set columnRuleStyle(columnRuleStyle) {
        this.setProperty('column-rule-style', columnRuleStyle);
    }
    /**
     *
     */
    get columnRuleWidth() {
        return this.getPropertyValue('column-rule-width');
    }
    /**
     *
     */
    set columnRuleWidth(columnRuleWidth) {
        this.setProperty('column-rule-width', columnRuleWidth);
    }
    /**
     *
     */
    get columnSpan() {
        return this.getPropertyValue('column-span');
    }
    /**
     *
     */
    set columnSpan(columnSpan) {
        this.setProperty('column-span', columnSpan);
    }
    /**
     *
     */
    get columnWidth() {
        return this.getPropertyValue('column-width');
    }
    /**
     *
     */
    set columnWidth(columnWidth) {
        this.setProperty('column-width', columnWidth);
    }
    /**
     *
     */
    get columns() {
        return this.getPropertyValue('columns');
    }
    /**
     *
     */
    set columns(columns) {
        this.setProperty('columns', columns);
    }
    /**
     *
     */
    get contain() {
        return this.getPropertyValue('contain');
    }
    /**
     *
     */
    set contain(contain) {
        this.setProperty('contain', contain);
    }
    /**
     *
     */
    get containIntrinsicSize() {
        return this.getPropertyValue('contain-intrinsic-size');
    }
    /**
     *
     */
    set containIntrinsicSize(containIntrinsicSize) {
        this.setProperty('contain-intrinsic-size', containIntrinsicSize);
    }
    /**
     *
     */
    get content() {
        return this.getPropertyValue('content');
    }
    /**
     *
     */
    set content(content) {
        this.setProperty('content', content);
    }
    /**
     *
     */
    get contentVisibility() {
        return this.getPropertyValue('content-visibility');
    }
    /**
     *
     */
    set contentVisibility(contentVisibility) {
        this.setProperty('content-visibility', contentVisibility);
    }
    /**
     *
     */
    get counterIncrement() {
        return this.getPropertyValue('counter-increment');
    }
    /**
     *
     */
    set counterIncrement(counterIncrement) {
        this.setProperty('counter-increment', counterIncrement);
    }
    /**
     *
     */
    get counterReset() {
        return this.getPropertyValue('counter-reset');
    }
    /**
     *
     */
    set counterReset(counterReset) {
        this.setProperty('counter-reset', counterReset);
    }
    /**
     *
     */
    get counterSet() {
        return this.getPropertyValue('counter-set');
    }
    /**
     *
     */
    set counterSet(counterSet) {
        this.setProperty('counter-set', counterSet);
    }
    /**
     *
     */
    get cssFloat() {
        return this.getPropertyValue('css-float');
    }
    /**
     *
     */
    set cssFloat(cssFloat) {
        this.setProperty('css-float', cssFloat);
    }
    /**
     *
     */
    get cursor() {
        return this.getPropertyValue('cursor');
    }
    /**
     *
     */
    set cursor(cursor) {
        this.setProperty('cursor', cursor);
    }
    /**
     *
     */
    get cx() {
        return this.getPropertyValue('cx');
    }
    /**
     *
     */
    set cx(cx) {
        this.setProperty('cx', cx);
    }
    /**
     *
     */
    get cy() {
        return this.getPropertyValue('cy');
    }
    /**
     *
     */
    set cy(cy) {
        this.setProperty('cy', cy);
    }
    /**
     *
     */
    get d() {
        return this.getPropertyValue('d');
    }
    /**
     *
     */
    set d(d) {
        this.setProperty('d', d);
    }
    /**
     *
     */
    get direction() {
        return this.getPropertyValue('direction');
    }
    /**
     *
     */
    set direction(direction) {
        this.setProperty('direction', direction);
    }
    /**
     *
     */
    get display() {
        return this.getPropertyValue('display');
    }
    /**
     *
     */
    set display(display) {
        this.setProperty('display', display);
    }
    /**
     *
     */
    get dominantBaseline() {
        return this.getPropertyValue('dominant-baseline');
    }
    /**
     *
     */
    set dominantBaseline(dominantBaseline) {
        this.setProperty('dominant-baseline', dominantBaseline);
    }
    /**
     *
     */
    get emptyCells() {
        return this.getPropertyValue('empty-cells');
    }
    /**
     *
     */
    set emptyCells(emptyCells) {
        this.setProperty('empty-cells', emptyCells);
    }
    /**
     *
     */
    get fill() {
        return this.getPropertyValue('fill');
    }
    /**
     *
     */
    set fill(fill) {
        this.setProperty('fill', fill);
    }
    /**
     *
     */
    get fillOpacity() {
        return this.getPropertyValue('fill-opacity');
    }
    /**
     *
     */
    set fillOpacity(fillOpacity) {
        this.setProperty('fill-opacity', fillOpacity);
    }
    /**
     *
     */
    get fillRule() {
        return this.getPropertyValue('fill-rule');
    }
    /**
     *
     */
    set fillRule(fillRule) {
        this.setProperty('fill-rule', fillRule);
    }
    /**
     *
     */
    get filter() {
        return this.getPropertyValue('filter');
    }
    /**
     *
     */
    set filter(filter) {
        this.setProperty('filter', filter);
    }
    /**
     *
     */
    get flex() {
        return this.getPropertyValue('flex');
    }
    /**
     *
     */
    set flex(flex) {
        this.setProperty('flex', flex);
    }
    /**
     *
     */
    get flexBasis() {
        return this.getPropertyValue('flex-basis');
    }
    /**
     *
     */
    set flexBasis(flexBasis) {
        this.setProperty('flex-basis', flexBasis);
    }
    /**
     *
     */
    get flexDirection() {
        return this.getPropertyValue('flex-direction');
    }
    /**
     *
     */
    set flexDirection(flexDirection) {
        this.setProperty('flex-direction', flexDirection);
    }
    /**
     *
     */
    get flexFlow() {
        return this.getPropertyValue('flex-flow');
    }
    /**
     *
     */
    set flexFlow(flexFlow) {
        this.setProperty('flex-flow', flexFlow);
    }
    /**
     *
     */
    get flexGrow() {
        return this.getPropertyValue('flex-grow');
    }
    /**
     *
     */
    set flexGrow(flexGrow) {
        this.setProperty('flex-grow', flexGrow);
    }
    /**
     *
     */
    get flexShrink() {
        return this.getPropertyValue('flex-shrink');
    }
    /**
     *
     */
    set flexShrink(flexShrink) {
        this.setProperty('flex-shrink', flexShrink);
    }
    /**
     *
     */
    get flexWrap() {
        return this.getPropertyValue('flex-wrap');
    }
    /**
     *
     */
    set flexWrap(flexWrap) {
        this.setProperty('flex-wrap', flexWrap);
    }
    /**
     *
     */
    get float() {
        return this.getPropertyValue('float');
    }
    /**
     *
     */
    set float(float) {
        this.setProperty('float', float);
    }
    /**
     *
     */
    get floodColor() {
        return this.getPropertyValue('flood-color');
    }
    /**
     *
     */
    set floodColor(floodColor) {
        this.setProperty('flood-color', floodColor);
    }
    /**
     *
     */
    get floodOpacity() {
        return this.getPropertyValue('flood-opacity');
    }
    /**
     *
     */
    set floodOpacity(floodOpacity) {
        this.setProperty('flood-opacity', floodOpacity);
    }
    /**
     *
     */
    get font() {
        return this.getPropertyValue('font');
    }
    /**
     *
     */
    set font(font) {
        this.setProperty('font', font);
    }
    /**
     *
     */
    get fontDisplay() {
        return this.getPropertyValue('font-display');
    }
    /**
     *
     */
    set fontDisplay(fontDisplay) {
        this.setProperty('font-display', fontDisplay);
    }
    /**
     *
     */
    get fontFamily() {
        return this.getPropertyValue('font-family');
    }
    /**
     *
     */
    set fontFamily(fontFamily) {
        this.setProperty('font-family', fontFamily);
    }
    /**
     *
     */
    get fontFeatureSettings() {
        return this.getPropertyValue('font-feature-settings');
    }
    /**
     *
     */
    set fontFeatureSettings(fontFeatureSettings) {
        this.setProperty('font-feature-settings', fontFeatureSettings);
    }
    /**
     *
     */
    get fontKerning() {
        return this.getPropertyValue('font-kerning');
    }
    /**
     *
     */
    set fontKerning(fontKerning) {
        this.setProperty('font-kerning', fontKerning);
    }
    /**
     *
     */
    get fontOpticalSizing() {
        return this.getPropertyValue('font-optical-sizing');
    }
    /**
     *
     */
    set fontOpticalSizing(fontOpticalSizing) {
        this.setProperty('font-optical-sizing', fontOpticalSizing);
    }
    /**
     *
     */
    get fontSize() {
        return this.getPropertyValue('font-size');
    }
    /**
     *
     */
    set fontSize(fontSize) {
        this.setProperty('font-size', fontSize);
    }
    /**
     *
     */
    get fontStretch() {
        return this.getPropertyValue('font-stretch');
    }
    /**
     *
     */
    set fontStretch(fontStretch) {
        this.setProperty('font-stretch', fontStretch);
    }
    /**
     *
     */
    get fontStyle() {
        return this.getPropertyValue('font-style');
    }
    /**
     *
     */
    set fontStyle(fontStyle) {
        this.setProperty('font-style', fontStyle);
    }
    /**
     *
     */
    get fontVariant() {
        return this.getPropertyValue('font-variant');
    }
    /**
     *
     */
    set fontVariant(fontVariant) {
        this.setProperty('font-variant', fontVariant);
    }
    /**
     *
     */
    get fontVariantCaps() {
        return this.getPropertyValue('font-variant-caps');
    }
    /**
     *
     */
    set fontVariantCaps(fontVariantCaps) {
        this.setProperty('font-variant-caps', fontVariantCaps);
    }
    /**
     *
     */
    get fontVariantEastAsian() {
        return this.getPropertyValue('font-variant-east-asian');
    }
    /**
     *
     */
    set fontVariantEastAsian(fontVariantEastAsian) {
        this.setProperty('font-variant-east-asian', fontVariantEastAsian);
    }
    /**
     *
     */
    get fontVariantLigatures() {
        return this.getPropertyValue('font-variant-ligatures');
    }
    /**
     *
     */
    set fontVariantLigatures(fontVariantLigatures) {
        this.setProperty('font-variant-ligatures', fontVariantLigatures);
    }
    /**
     *
     */
    get fontVariantNumeric() {
        return this.getPropertyValue('font-variant-numeric');
    }
    /**
     *
     */
    set fontVariantNumeric(fontVariantNumeric) {
        this.setProperty('font-variant-numeric', fontVariantNumeric);
    }
    /**
     *
     */
    get fontVariationSettings() {
        return this.getPropertyValue('font-variation-settings');
    }
    /**
     *
     */
    set fontVariationSettings(fontVariationSettings) {
        this.setProperty('font-variation-settings', fontVariationSettings);
    }
    /**
     *
     */
    get fontWeight() {
        return this.getPropertyValue('font-weight');
    }
    /**
     *
     */
    set fontWeight(fontWeight) {
        this.setProperty('font-weight', fontWeight);
    }
    /**
     *
     */
    get gap() {
        return this.getPropertyValue('gap');
    }
    /**
     *
     */
    set gap(gap) {
        this.setProperty('gap', gap);
    }
    /**
     *
     */
    get grid() {
        return this.getPropertyValue('grid');
    }
    /**
     *
     */
    set grid(grid) {
        this.setProperty('grid', grid);
    }
    /**
     *
     */
    get gridArea() {
        return this.getPropertyValue('grid-area');
    }
    /**
     *
     */
    set gridArea(gridArea) {
        this.setProperty('grid-area', gridArea);
    }
    /**
     *
     */
    get gridAutoColumns() {
        return this.getPropertyValue('grid-auto-columns');
    }
    /**
     *
     */
    set gridAutoColumns(gridAutoColumns) {
        this.setProperty('grid-auto-columns', gridAutoColumns);
    }
    /**
     *
     */
    get gridAutoFlow() {
        return this.getPropertyValue('grid-auto-flow');
    }
    /**
     *
     */
    set gridAutoFlow(gridAutoFlow) {
        this.setProperty('grid-auto-flow', gridAutoFlow);
    }
    /**
     *
     */
    get gridAutoRows() {
        return this.getPropertyValue('grid-auto-rows');
    }
    /**
     *
     */
    set gridAutoRows(gridAutoRows) {
        this.setProperty('grid-auto-rows', gridAutoRows);
    }
    /**
     *
     */
    get gridColumn() {
        return this.getPropertyValue('grid-column');
    }
    /**
     *
     */
    set gridColumn(gridColumn) {
        this.setProperty('grid-column', gridColumn);
    }
    /**
     *
     */
    get gridColumnEnd() {
        return this.getPropertyValue('grid-column-end');
    }
    /**
     *
     */
    set gridColumnEnd(gridColumnEnd) {
        this.setProperty('grid-column-end', gridColumnEnd);
    }
    /**
     *
     */
    get gridColumnGap() {
        return this.getPropertyValue('grid-column-gap');
    }
    /**
     *
     */
    set gridColumnGap(gridColumnGap) {
        this.setProperty('grid-column-gap', gridColumnGap);
    }
    /**
     *
     */
    get gridColumnStart() {
        return this.getPropertyValue('grid-column-start');
    }
    /**
     *
     */
    set gridColumnStart(gridColumnStart) {
        this.setProperty('grid-column-start', gridColumnStart);
    }
    /**
     *
     */
    get gridGap() {
        return this.getPropertyValue('grid-gap');
    }
    /**
     *
     */
    set gridGap(gridGap) {
        this.setProperty('grid-gap', gridGap);
    }
    /**
     *
     */
    get gridRow() {
        return this.getPropertyValue('grid-row');
    }
    /**
     *
     */
    set gridRow(gridRow) {
        this.setProperty('grid-row', gridRow);
    }
    /**
     *
     */
    get gridRowEnd() {
        return this.getPropertyValue('grid-row-end');
    }
    /**
     *
     */
    set gridRowEnd(gridRowEnd) {
        this.setProperty('grid-row-end', gridRowEnd);
    }
    /**
     *
     */
    get gridRowGap() {
        return this.getPropertyValue('grid-row-gap');
    }
    /**
     *
     */
    set gridRowGap(gridRowGap) {
        this.setProperty('grid-row-gap', gridRowGap);
    }
    /**
     *
     */
    get gridRowStart() {
        return this.getPropertyValue('grid-row-start');
    }
    /**
     *
     */
    set gridRowStart(gridRowStart) {
        this.setProperty('grid-row-start', gridRowStart);
    }
    /**
     *
     */
    get gridTemplate() {
        return this.getPropertyValue('grid-template');
    }
    /**
     *
     */
    set gridTemplate(gridTemplate) {
        this.setProperty('grid-template', gridTemplate);
    }
    /**
     *
     */
    get gridTemplateAreas() {
        return this.getPropertyValue('grid-template-areas');
    }
    /**
     *
     */
    set gridTemplateAreas(gridTemplateAreas) {
        this.setProperty('grid-template-areas', gridTemplateAreas);
    }
    /**
     *
     */
    get gridTemplateColumns() {
        return this.getPropertyValue('grid-template-columns');
    }
    /**
     *
     */
    set gridTemplateColumns(gridTemplateColumns) {
        this.setProperty('grid-template-columns', gridTemplateColumns);
    }
    /**
     *
     */
    get gridTemplateRows() {
        return this.getPropertyValue('grid-template-rows');
    }
    /**
     *
     */
    set gridTemplateRows(gridTemplateRows) {
        this.setProperty('grid-template-rows', gridTemplateRows);
    }
    /**
     *
     */
    get height() {
        return this.getPropertyValue('height');
    }
    /**
     *
     */
    set height(height) {
        this.setProperty('height', height);
    }
    /**
     *
     */
    get hyphens() {
        return this.getPropertyValue('hyphens');
    }
    /**
     *
     */
    set hyphens(hyphens) {
        this.setProperty('hyphens', hyphens);
    }
    /**
     *
     */
    get imageOrientation() {
        return this.getPropertyValue('image-orientation');
    }
    /**
     *
     */
    set imageOrientation(imageOrientation) {
        this.setProperty('image-orientation', imageOrientation);
    }
    /**
     *
     */
    get imageRendering() {
        return this.getPropertyValue('image-rendering');
    }
    /**
     *
     */
    set imageRendering(imageRendering) {
        this.setProperty('image-rendering', imageRendering);
    }
    /**
     *
     */
    get inherits() {
        return this.getPropertyValue('inherits');
    }
    /**
     *
     */
    set inherits(inherits) {
        this.setProperty('inherits', inherits);
    }
    /**
     *
     */
    get initialValue() {
        return this.getPropertyValue('initial-value');
    }
    /**
     *
     */
    set initialValue(initialValue) {
        this.setProperty('initial-value', initialValue);
    }
    /**
     *
     */
    get inlineSize() {
        return this.getPropertyValue('inline-size');
    }
    /**
     *
     */
    set inlineSize(inlineSize) {
        this.setProperty('inline-size', inlineSize);
    }
    /**
     *
     */
    get isolation() {
        return this.getPropertyValue('isolation');
    }
    /**
     *
     */
    set isolation(isolation) {
        this.setProperty('isolation', isolation);
    }
    /**
     *
     */
    get justifyContent() {
        return this.getPropertyValue('justify-content');
    }
    /**
     *
     */
    set justifyContent(justifyContent) {
        this.setProperty('justify-content', justifyContent);
    }
    /**
     *
     */
    get justifyItems() {
        return this.getPropertyValue('justify-items');
    }
    /**
     *
     */
    set justifyItems(justifyItems) {
        this.setProperty('justify-items', justifyItems);
    }
    /**
     *
     */
    get justifySelf() {
        return this.getPropertyValue('justify-self');
    }
    /**
     *
     */
    set justifySelf(justifySelf) {
        this.setProperty('justify-self', justifySelf);
    }
    /**
     *
     */
    get left() {
        return this.getPropertyValue('left');
    }
    /**
     *
     */
    set left(left) {
        this.setProperty('left', left);
    }
    /**
     *
     */
    get letterSpacing() {
        return this.getPropertyValue('letter-spacing');
    }
    /**
     *
     */
    set letterSpacing(letterSpacing) {
        this.setProperty('letter-spacing', letterSpacing);
    }
    /**
     *
     */
    get lightingColor() {
        return this.getPropertyValue('lighting-color');
    }
    /**
     *
     */
    set lightingColor(lightingColor) {
        this.setProperty('lighting-color', lightingColor);
    }
    /**
     *
     */
    get lineBreak() {
        return this.getPropertyValue('line-break');
    }
    /**
     *
     */
    set lineBreak(lineBreak) {
        this.setProperty('line-break', lineBreak);
    }
    /**
     *
     */
    get lineHeight() {
        return this.getPropertyValue('line-height');
    }
    /**
     *
     */
    set lineHeight(lineHeight) {
        this.setProperty('line-height', lineHeight);
    }
    /**
     *
     */
    get listStyle() {
        return this.getPropertyValue('list-style');
    }
    /**
     *
     */
    set listStyle(listStyle) {
        this.setProperty('list-style', listStyle);
    }
    /**
     *
     */
    get listStyleImage() {
        return this.getPropertyValue('list-style-image');
    }
    /**
     *
     */
    set listStyleImage(listStyleImage) {
        this.setProperty('list-style-image', listStyleImage);
    }
    /**
     *
     */
    get listStylePosition() {
        return this.getPropertyValue('list-style-position');
    }
    /**
     *
     */
    set listStylePosition(listStylePosition) {
        this.setProperty('list-style-position', listStylePosition);
    }
    /**
     *
     */
    get listStyleType() {
        return this.getPropertyValue('list-style-type');
    }
    /**
     *
     */
    set listStyleType(listStyleType) {
        this.setProperty('list-style-type', listStyleType);
    }
    /**
     *
     */
    get margin() {
        return this.getPropertyValue('margin');
    }
    /**
     *
     */
    set margin(margin) {
        this.setProperty('margin', margin);
    }
    /**
     *
     */
    get marginBlockEnd() {
        return this.getPropertyValue('margin-block-end');
    }
    /**
     *
     */
    set marginBlockEnd(marginBlockEnd) {
        this.setProperty('margin-block-end', marginBlockEnd);
    }
    /**
     *
     */
    get marginBlockStart() {
        return this.getPropertyValue('margin-block-start');
    }
    /**
     *
     */
    set marginBlockStart(marginBlockStart) {
        this.setProperty('margin-block-start', marginBlockStart);
    }
    /**
     *
     */
    get marginBottom() {
        return this.getPropertyValue('margin-bottom');
    }
    /**
     *
     */
    set marginBottom(marginBottom) {
        this.setProperty('margin-bottom', marginBottom);
    }
    /**
     *
     */
    get marginInlineEnd() {
        return this.getPropertyValue('margin-inline-end');
    }
    /**
     *
     */
    set marginInlineEnd(marginInlineEnd) {
        this.setProperty('margin-inline-end', marginInlineEnd);
    }
    /**
     *
     */
    get marginInlineStart() {
        return this.getPropertyValue('margin-inline-start');
    }
    /**
     *
     */
    set marginInlineStart(marginInlineStart) {
        this.setProperty('margin-inline-start', marginInlineStart);
    }
    /**
     *
     */
    get marginLeft() {
        return this.getPropertyValue('margin-left');
    }
    /**
     *
     */
    set marginLeft(marginLeft) {
        this.setProperty('margin-left', marginLeft);
    }
    /**
     *
     */
    get marginRight() {
        return this.getPropertyValue('margin-right');
    }
    /**
     *
     */
    set marginRight(marginRight) {
        this.setProperty('margin-right', marginRight);
    }
    /**
     *
     */
    get marginTop() {
        return this.getPropertyValue('margin-top');
    }
    /**
     *
     */
    set marginTop(marginTop) {
        this.setProperty('margin-top', marginTop);
    }
    /**
     *
     */
    get marker() {
        return this.getPropertyValue('marker');
    }
    /**
     *
     */
    set marker(marker) {
        this.setProperty('marker', marker);
    }
    /**
     *
     */
    get markerEnd() {
        return this.getPropertyValue('marker-end');
    }
    /**
     *
     */
    set markerEnd(markerEnd) {
        this.setProperty('marker-end', markerEnd);
    }
    /**
     *
     */
    get markerMid() {
        return this.getPropertyValue('marker-mid');
    }
    /**
     *
     */
    set markerMid(markerMid) {
        this.setProperty('marker-mid', markerMid);
    }
    /**
     *
     */
    get markerStart() {
        return this.getPropertyValue('marker-start');
    }
    /**
     *
     */
    set markerStart(markerStart) {
        this.setProperty('marker-start', markerStart);
    }
    /**
     *
     */
    get mask() {
        return this.getPropertyValue('mask');
    }
    /**
     *
     */
    set mask(mask) {
        this.setProperty('mask', mask);
    }
    /**
     *
     */
    get maskType() {
        return this.getPropertyValue('mask-type');
    }
    /**
     *
     */
    set maskType(maskType) {
        this.setProperty('mask-type', maskType);
    }
    /**
     *
     */
    get maxBlockSize() {
        return this.getPropertyValue('max-block-size');
    }
    /**
     *
     */
    set maxBlockSize(maxBlockSize) {
        this.setProperty('max-block-size', maxBlockSize);
    }
    /**
     *
     */
    get maxHeight() {
        return this.getPropertyValue('max-height');
    }
    /**
     *
     */
    set maxHeight(maxHeight) {
        this.setProperty('max-height', maxHeight);
    }
    /**
     *
     */
    get maxInlineSize() {
        return this.getPropertyValue('max-inline-size');
    }
    /**
     *
     */
    set maxInlineSize(maxInlineSize) {
        this.setProperty('max-inline-size', maxInlineSize);
    }
    /**
     *
     */
    get maxWidth() {
        return this.getPropertyValue('max-width');
    }
    /**
     *
     */
    set maxWidth(maxWidth) {
        this.setProperty('max-width', maxWidth);
    }
    /**
     *
     */
    get maxZoom() {
        return this.getPropertyValue('max-zoom');
    }
    /**
     *
     */
    set maxZoom(maxZoom) {
        this.setProperty('max-zoom', maxZoom);
    }
    /**
     *
     */
    get minBlockSize() {
        return this.getPropertyValue('min-block-size');
    }
    /**
     *
     */
    set minBlockSize(minBlockSize) {
        this.setProperty('min-block-size', minBlockSize);
    }
    /**
     *
     */
    get minHeight() {
        return this.getPropertyValue('min-height');
    }
    /**
     *
     */
    set minHeight(minHeight) {
        this.setProperty('min-height', minHeight);
    }
    /**
     *
     */
    get minInlineSize() {
        return this.getPropertyValue('min-inline-size');
    }
    /**
     *
     */
    set minInlineSize(minInlineSize) {
        this.setProperty('min-inline-size', minInlineSize);
    }
    /**
     *
     */
    get minWidth() {
        return this.getPropertyValue('min-width');
    }
    /**
     *
     */
    set minWidth(minWidth) {
        this.setProperty('min-width', minWidth);
    }
    /**
     *
     */
    get minZoom() {
        return this.getPropertyValue('min-zoom');
    }
    /**
     *
     */
    set minZoom(minZoom) {
        this.setProperty('min-zoom', minZoom);
    }
    /**
     *
     */
    get mixBlendMode() {
        return this.getPropertyValue('mix-blend-mode');
    }
    /**
     *
     */
    set mixBlendMode(mixBlendMode) {
        this.setProperty('mix-blend-mode', mixBlendMode);
    }
    /**
     *
     */
    get objectFit() {
        return this.getPropertyValue('object-fit');
    }
    /**
     *
     */
    set objectFit(objectFit) {
        this.setProperty('object-fit', objectFit);
    }
    /**
     *
     */
    get objectPosition() {
        return this.getPropertyValue('object-position');
    }
    /**
     *
     */
    set objectPosition(objectPosition) {
        this.setProperty('object-position', objectPosition);
    }
    /**
     *
     */
    get offset() {
        return this.getPropertyValue('offset');
    }
    /**
     *
     */
    set offset(offset) {
        this.setProperty('offset', offset);
    }
    /**
     *
     */
    get offsetDistance() {
        return this.getPropertyValue('offset-distance');
    }
    /**
     *
     */
    set offsetDistance(offsetDistance) {
        this.setProperty('offset-distance', offsetDistance);
    }
    /**
     *
     */
    get offsetPath() {
        return this.getPropertyValue('offset-path');
    }
    /**
     *
     */
    set offsetPath(offsetPath) {
        this.setProperty('offset-path', offsetPath);
    }
    /**
     *
     */
    get offsetRotate() {
        return this.getPropertyValue('offset-rotate');
    }
    /**
     *
     */
    set offsetRotate(offsetRotate) {
        this.setProperty('offset-rotate', offsetRotate);
    }
    /**
     *
     */
    get opacity() {
        return this.getPropertyValue('opacity');
    }
    /**
     *
     */
    set opacity(opacity) {
        this.setProperty('opacity', opacity);
    }
    /**
     *
     */
    get order() {
        return this.getPropertyValue('order');
    }
    /**
     *
     */
    set order(order) {
        this.setProperty('order', order);
    }
    /**
     *
     */
    get orientation() {
        return this.getPropertyValue('orientation');
    }
    /**
     *
     */
    set orientation(orientation) {
        this.setProperty('orientation', orientation);
    }
    /**
     *
     */
    get orphans() {
        return this.getPropertyValue('orphans');
    }
    /**
     *
     */
    set orphans(orphans) {
        this.setProperty('orphans', orphans);
    }
    /**
     *
     */
    get outline() {
        return this.getPropertyValue('outline');
    }
    /**
     *
     */
    set outline(outline) {
        this.setProperty('outline', outline);
    }
    /**
     *
     */
    get outlineColor() {
        return this.getPropertyValue('outline-color');
    }
    /**
     *
     */
    set outlineColor(outlineColor) {
        this.setProperty('outline-color', outlineColor);
    }
    /**
     *
     */
    get outlineOffset() {
        return this.getPropertyValue('outline-offset');
    }
    /**
     *
     */
    set outlineOffset(outlineOffset) {
        this.setProperty('outline-offset', outlineOffset);
    }
    /**
     *
     */
    get outlineStyle() {
        return this.getPropertyValue('outline-style');
    }
    /**
     *
     */
    set outlineStyle(outlineStyle) {
        this.setProperty('outline-style', outlineStyle);
    }
    /**
     *
     */
    get outlineWidth() {
        return this.getPropertyValue('outline-width');
    }
    /**
     *
     */
    set outlineWidth(outlineWidth) {
        this.setProperty('outline-width', outlineWidth);
    }
    /**
     *
     */
    get overflow() {
        return this.getPropertyValue('overflow');
    }
    /**
     *
     */
    set overflow(overflow) {
        this.setProperty('overflow', overflow);
    }
    /**
     *
     */
    get overflowAnchor() {
        return this.getPropertyValue('overflow-anchor');
    }
    /**
     *
     */
    set overflowAnchor(overflowAnchor) {
        this.setProperty('overflow-anchor', overflowAnchor);
    }
    /**
     *
     */
    get overflowWrap() {
        return this.getPropertyValue('overflow-wrap');
    }
    /**
     *
     */
    set overflowWrap(overflowWrap) {
        this.setProperty('overflow-wrap', overflowWrap);
    }
    /**
     *
     */
    get overflowX() {
        return this.getPropertyValue('overflow-x');
    }
    /**
     *
     */
    set overflowX(overflowX) {
        this.setProperty('overflow-x', overflowX);
    }
    /**
     *
     */
    get overflowY() {
        return this.getPropertyValue('overflow-y');
    }
    /**
     *
     */
    set overflowY(overflowY) {
        this.setProperty('overflow-y', overflowY);
    }
    /**
     *
     */
    get overscrollBehavior() {
        return this.getPropertyValue('overscroll-behavior');
    }
    /**
     *
     */
    set overscrollBehavior(overscrollBehavior) {
        this.setProperty('overscroll-behavior', overscrollBehavior);
    }
    /**
     *
     */
    get overscrollBehaviorBlock() {
        return this.getPropertyValue('overscroll-behavior-block');
    }
    /**
     *
     */
    set overscrollBehaviorBlock(overscrollBehaviorBlock) {
        this.setProperty('overscroll-behavior-block', overscrollBehaviorBlock);
    }
    /**
     *
     */
    get overscrollBehaviorInline() {
        return this.getPropertyValue('overscroll-behavior-inline');
    }
    /**
     *
     */
    set overscrollBehaviorInline(overscrollBehaviorInline) {
        this.setProperty('overscroll-behavior-inline', overscrollBehaviorInline);
    }
    /**
     *
     */
    get overscrollBehaviorX() {
        return this.getPropertyValue('overscroll-behavior-x');
    }
    /**
     *
     */
    set overscrollBehaviorX(overscrollBehaviorX) {
        this.setProperty('overscroll-behavior-x', overscrollBehaviorX);
    }
    /**
     *
     */
    get overscrollBehaviorY() {
        return this.getPropertyValue('overscroll-behavior-y');
    }
    /**
     *
     */
    set overscrollBehaviorY(overscrollBehaviorY) {
        this.setProperty('overscroll-behavior-y', overscrollBehaviorY);
    }
    /**
     *
     */
    get padding() {
        return this.getPropertyValue('padding');
    }
    /**
     *
     */
    set padding(padding) {
        this.setProperty('padding', padding);
    }
    /**
     *
     */
    get paddingBlockEnd() {
        return this.getPropertyValue('padding-block-end');
    }
    /**
     *
     */
    set paddingBlockEnd(paddingBlockEnd) {
        this.setProperty('padding-block-end', paddingBlockEnd);
    }
    /**
     *
     */
    get paddingBlockStart() {
        return this.getPropertyValue('padding-block-start');
    }
    /**
     *
     */
    set paddingBlockStart(paddingBlockStart) {
        this.setProperty('padding-block-start', paddingBlockStart);
    }
    /**
     *
     */
    get paddingBottom() {
        return this.getPropertyValue('padding-bottom');
    }
    /**
     *
     */
    set paddingBottom(paddingBottom) {
        this.setProperty('padding-bottom', paddingBottom);
    }
    /**
     *
     */
    get paddingInlineEnd() {
        return this.getPropertyValue('padding-inline-end');
    }
    /**
     *
     */
    set paddingInlineEnd(paddingInlineEnd) {
        this.setProperty('padding-inline-end', paddingInlineEnd);
    }
    /**
     *
     */
    get paddingInlineStart() {
        return this.getPropertyValue('padding-inline-start');
    }
    /**
     *
     */
    set paddingInlineStart(paddingInlineStart) {
        this.setProperty('padding-inline-start', paddingInlineStart);
    }
    /**
     *
     */
    get paddingLeft() {
        return this.getPropertyValue('padding-left');
    }
    /**
     *
     */
    set paddingLeft(paddingLeft) {
        this.setProperty('padding-left', paddingLeft);
    }
    /**
     *
     */
    get paddingRight() {
        return this.getPropertyValue('padding-right');
    }
    /**
     *
     */
    set paddingRight(paddingRight) {
        this.setProperty('padding-right', paddingRight);
    }
    /**
     *
     */
    get paddingTop() {
        return this.getPropertyValue('padding-top');
    }
    /**
     *
     */
    set paddingTop(paddingTop) {
        this.setProperty('padding-top', paddingTop);
    }
    /**
     *
     */
    get page() {
        return this.getPropertyValue('page');
    }
    /**
     *
     */
    set page(page) {
        this.setProperty('page', page);
    }
    /**
     *
     */
    get pageBreakAfter() {
        return this.getPropertyValue('page-break-after');
    }
    /**
     *
     */
    set pageBreakAfter(pageBreakAfter) {
        this.setProperty('page-break-after', pageBreakAfter);
    }
    /**
     *
     */
    get pageBreakBefore() {
        return this.getPropertyValue('page-break-before');
    }
    /**
     *
     */
    set pageBreakBefore(pageBreakBefore) {
        this.setProperty('page-break-before', pageBreakBefore);
    }
    /**
     *
     */
    get pageBreakInside() {
        return this.getPropertyValue('page-break-inside');
    }
    /**
     *
     */
    set pageBreakInside(pageBreakInside) {
        this.setProperty('page-break-inside', pageBreakInside);
    }
    /**
     *
     */
    get pageOrientation() {
        return this.getPropertyValue('page-orientation');
    }
    /**
     *
     */
    set pageOrientation(pageOrientation) {
        this.setProperty('page-orientation', pageOrientation);
    }
    /**
     *
     */
    get paintOrder() {
        return this.getPropertyValue('paint-order');
    }
    /**
     *
     */
    set paintOrder(paintOrder) {
        this.setProperty('paint-order', paintOrder);
    }
    /**
     *
     */
    get perspective() {
        return this.getPropertyValue('perspective');
    }
    /**
     *
     */
    set perspective(perspective) {
        this.setProperty('perspective', perspective);
    }
    /**
     *
     */
    get perspectiveOrigin() {
        return this.getPropertyValue('perspective-origin');
    }
    /**
     *
     */
    set perspectiveOrigin(perspectiveOrigin) {
        this.setProperty('perspective-origin', perspectiveOrigin);
    }
    /**
     *
     */
    get placeContent() {
        return this.getPropertyValue('place-content');
    }
    /**
     *
     */
    set placeContent(placeContent) {
        this.setProperty('place-content', placeContent);
    }
    /**
     *
     */
    get placeItems() {
        return this.getPropertyValue('place-items');
    }
    /**
     *
     */
    set placeItems(placeItems) {
        this.setProperty('place-items', placeItems);
    }
    /**
     *
     */
    get placeSelf() {
        return this.getPropertyValue('place-self');
    }
    /**
     *
     */
    set placeSelf(placeSelf) {
        this.setProperty('place-self', placeSelf);
    }
    /**
     *
     */
    get pointerEvents() {
        return this.getPropertyValue('pointer-events');
    }
    /**
     *
     */
    set pointerEvents(pointerEvents) {
        this.setProperty('pointer-events', pointerEvents);
    }
    /**
     *
     */
    get position() {
        return this.getPropertyValue('position');
    }
    /**
     *
     */
    set position(position) {
        this.setProperty('position', position);
    }
    /**
     *
     */
    get quotes() {
        return this.getPropertyValue('quotes');
    }
    /**
     *
     */
    set quotes(quotes) {
        this.setProperty('quotes', quotes);
    }
    /**
     *
     */
    get r() {
        return this.getPropertyValue('r');
    }
    /**
     *
     */
    set r(r) {
        this.setProperty('r', r);
    }
    /**
     *
     */
    get resize() {
        return this.getPropertyValue('resize');
    }
    /**
     *
     */
    set resize(resize) {
        this.setProperty('resize', resize);
    }
    /**
     *
     */
    get right() {
        return this.getPropertyValue('right');
    }
    /**
     *
     */
    set right(right) {
        this.setProperty('right', right);
    }
    /**
     *
     */
    get rowGap() {
        return this.getPropertyValue('row-gap');
    }
    /**
     *
     */
    set rowGap(rowGap) {
        this.setProperty('row-gap', rowGap);
    }
    /**
     *
     */
    get rubyPosition() {
        return this.getPropertyValue('ruby-position');
    }
    /**
     *
     */
    set rubyPosition(rubyPosition) {
        this.setProperty('ruby-position', rubyPosition);
    }
    /**
     *
     */
    get rx() {
        return this.getPropertyValue('rx');
    }
    /**
     *
     */
    set rx(rx) {
        this.setProperty('rx', rx);
    }
    /**
     *
     */
    get ry() {
        return this.getPropertyValue('ry');
    }
    /**
     *
     */
    set ry(ry) {
        this.setProperty('ry', ry);
    }
    /**
     *
     */
    get scrollBehavior() {
        return this.getPropertyValue('scroll-behavior');
    }
    /**
     *
     */
    set scrollBehavior(scrollBehavior) {
        this.setProperty('scroll-behavior', scrollBehavior);
    }
    /**
     *
     */
    get scrollMargin() {
        return this.getPropertyValue('scroll-margin');
    }
    /**
     *
     */
    set scrollMargin(scrollMargin) {
        this.setProperty('scroll-margin', scrollMargin);
    }
    /**
     *
     */
    get scrollMarginBlock() {
        return this.getPropertyValue('scroll-margin-block');
    }
    /**
     *
     */
    set scrollMarginBlock(scrollMarginBlock) {
        this.setProperty('scroll-margin-block', scrollMarginBlock);
    }
    /**
     *
     */
    get scrollMarginBlockEnd() {
        return this.getPropertyValue('scroll-margin-block-end');
    }
    /**
     *
     */
    set scrollMarginBlockEnd(scrollMarginBlockEnd) {
        this.setProperty('scroll-margin-block-end', scrollMarginBlockEnd);
    }
    /**
     *
     */
    get scrollMarginBlockStart() {
        return this.getPropertyValue('scroll-margin-block-start');
    }
    /**
     *
     */
    set scrollMarginBlockStart(scrollMarginBlockStart) {
        this.setProperty('scroll-margin-block-start', scrollMarginBlockStart);
    }
    /**
     *
     */
    get scrollMarginBottom() {
        return this.getPropertyValue('scroll-margin-bottom');
    }
    /**
     *
     */
    set scrollMarginBottom(scrollMarginBottom) {
        this.setProperty('scroll-margin-bottom', scrollMarginBottom);
    }
    /**
     *
     */
    get scrollMarginInline() {
        return this.getPropertyValue('scroll-margin-inline');
    }
    /**
     *
     */
    set scrollMarginInline(scrollMarginInline) {
        this.setProperty('scroll-margin-inline', scrollMarginInline);
    }
    /**
     *
     */
    get scrollMarginInlineEnd() {
        return this.getPropertyValue('scroll-margin-inline-end');
    }
    /**
     *
     */
    set scrollMarginInlineEnd(scrollMarginInlineEnd) {
        this.setProperty('scroll-margin-inline-end', scrollMarginInlineEnd);
    }
    /**
     *
     */
    get scrollMarginInlineStart() {
        return this.getPropertyValue('scroll-margin-inline-start');
    }
    /**
     *
     */
    set scrollMarginInlineStart(scrollMarginInlineStart) {
        this.setProperty('scroll-margin-inline-start', scrollMarginInlineStart);
    }
    /**
     *
     */
    get scrollMarginLeft() {
        return this.getPropertyValue('scroll-margin-left');
    }
    /**
     *
     */
    set scrollMarginLeft(scrollMarginLeft) {
        this.setProperty('scroll-margin-left', scrollMarginLeft);
    }
    /**
     *
     */
    get scrollMarginRight() {
        return this.getPropertyValue('scroll-margin-right');
    }
    /**
     *
     */
    set scrollMarginRight(scrollMarginRight) {
        this.setProperty('scroll-margin-right', scrollMarginRight);
    }
    /**
     *
     */
    get scrollMarginTop() {
        return this.getPropertyValue('scroll-margin-top');
    }
    /**
     *
     */
    set scrollMarginTop(scrollMarginTop) {
        this.setProperty('scroll-margin-top', scrollMarginTop);
    }
    /**
     *
     */
    get scrollPadding() {
        return this.getPropertyValue('scroll-padding');
    }
    /**
     *
     */
    set scrollPadding(scrollPadding) {
        this.setProperty('scroll-padding', scrollPadding);
    }
    /**
     *
     */
    get scrollPaddingBlock() {
        return this.getPropertyValue('scroll-padding-block');
    }
    /**
     *
     */
    set scrollPaddingBlock(scrollPaddingBlock) {
        this.setProperty('scroll-padding-block', scrollPaddingBlock);
    }
    /**
     *
     */
    get scrollPaddingBlockEnd() {
        return this.getPropertyValue('scroll-padding-block-end');
    }
    /**
     *
     */
    set scrollPaddingBlockEnd(scrollPaddingBlockEnd) {
        this.setProperty('scroll-padding-block-end', scrollPaddingBlockEnd);
    }
    /**
     *
     */
    get scrollPaddingBlockStart() {
        return this.getPropertyValue('scroll-padding-block-start');
    }
    /**
     *
     */
    set scrollPaddingBlockStart(scrollPaddingBlockStart) {
        this.setProperty('scroll-padding-block-start', scrollPaddingBlockStart);
    }
    /**
     *
     */
    get scrollPaddingBottom() {
        return this.getPropertyValue('scroll-padding-bottom');
    }
    /**
     *
     */
    set scrollPaddingBottom(scrollPaddingBottom) {
        this.setProperty('scroll-padding-bottom', scrollPaddingBottom);
    }
    /**
     *
     */
    get scrollPaddingInline() {
        return this.getPropertyValue('scroll-padding-inline');
    }
    /**
     *
     */
    set scrollPaddingInline(scrollPaddingInline) {
        this.setProperty('scroll-padding-inline', scrollPaddingInline);
    }
    /**
     *
     */
    get scrollPaddingInlineEnd() {
        return this.getPropertyValue('scroll-padding-inline-end');
    }
    /**
     *
     */
    set scrollPaddingInlineEnd(scrollPaddingInlineEnd) {
        this.setProperty('scroll-padding-inline-end', scrollPaddingInlineEnd);
    }
    /**
     *
     */
    get scrollPaddingInlineStart() {
        return this.getPropertyValue('scroll-padding-inline-start');
    }
    /**
     *
     */
    set scrollPaddingInlineStart(scrollPaddingInlineStart) {
        this.setProperty('scroll-padding-inline-start', scrollPaddingInlineStart);
    }
    /**
     *
     */
    get scrollPaddingLeft() {
        return this.getPropertyValue('scroll-padding-left');
    }
    /**
     *
     */
    set scrollPaddingLeft(scrollPaddingLeft) {
        this.setProperty('scroll-padding-left', scrollPaddingLeft);
    }
    /**
     *
     */
    get scrollPaddingRight() {
        return this.getPropertyValue('scroll-padding-right');
    }
    /**
     *
     */
    set scrollPaddingRight(scrollPaddingRight) {
        this.setProperty('scroll-padding-right', scrollPaddingRight);
    }
    /**
     *
     */
    get scrollPaddingTop() {
        return this.getPropertyValue('scroll-padding-top');
    }
    /**
     *
     */
    set scrollPaddingTop(scrollPaddingTop) {
        this.setProperty('scroll-padding-top', scrollPaddingTop);
    }
    /**
     *
     */
    get scrollSnapAlign() {
        return this.getPropertyValue('scroll-snap-align');
    }
    /**
     *
     */
    set scrollSnapAlign(scrollSnapAlign) {
        this.setProperty('scroll-snap-align', scrollSnapAlign);
    }
    /**
     *
     */
    get scrollSnapStop() {
        return this.getPropertyValue('scroll-snap-stop');
    }
    /**
     *
     */
    set scrollSnapStop(scrollSnapStop) {
        this.setProperty('scroll-snap-stop', scrollSnapStop);
    }
    /**
     *
     */
    get scrollSnapType() {
        return this.getPropertyValue('scroll-snap-type');
    }
    /**
     *
     */
    set scrollSnapType(scrollSnapType) {
        this.setProperty('scroll-snap-type', scrollSnapType);
    }
    /**
     *
     */
    get shapeImageThreshold() {
        return this.getPropertyValue('shape-image-threshold');
    }
    /**
     *
     */
    set shapeImageThreshold(shapeImageThreshold) {
        this.setProperty('shape-image-threshold', shapeImageThreshold);
    }
    /**
     *
     */
    get shapeMargin() {
        return this.getPropertyValue('shape-margin');
    }
    /**
     *
     */
    set shapeMargin(shapeMargin) {
        this.setProperty('shape-margin', shapeMargin);
    }
    /**
     *
     */
    get shapeOutside() {
        return this.getPropertyValue('shape-outside');
    }
    /**
     *
     */
    set shapeOutside(shapeOutside) {
        this.setProperty('shape-outside', shapeOutside);
    }
    /**
     *
     */
    get shapeRendering() {
        return this.getPropertyValue('shape-rendering');
    }
    /**
     *
     */
    set shapeRendering(shapeRendering) {
        this.setProperty('shape-rendering', shapeRendering);
    }
    /**
     *
     */
    get size() {
        return this.getPropertyValue('size');
    }
    /**
     *
     */
    set size(size) {
        this.setProperty('size', size);
    }
    /**
     *
     */
    get speak() {
        return this.getPropertyValue('speak');
    }
    /**
     *
     */
    set speak(speak) {
        this.setProperty('speak', speak);
    }
    /**
     *
     */
    get src() {
        return this.getPropertyValue('src');
    }
    /**
     *
     */
    set src(src) {
        this.setProperty('src', src);
    }
    /**
     *
     */
    get stopColor() {
        return this.getPropertyValue('stop-color');
    }
    /**
     *
     */
    set stopColor(stopColor) {
        this.setProperty('stop-color', stopColor);
    }
    /**
     *
     */
    get stopOpacity() {
        return this.getPropertyValue('stop-opacity');
    }
    /**
     *
     */
    set stopOpacity(stopOpacity) {
        this.setProperty('stop-opacity', stopOpacity);
    }
    /**
     *
     */
    get stroke() {
        return this.getPropertyValue('stroke');
    }
    /**
     *
     */
    set stroke(stroke) {
        this.setProperty('stroke', stroke);
    }
    /**
     *
     */
    get strokeDasharray() {
        return this.getPropertyValue('stroke-dasharray');
    }
    /**
     *
     */
    set strokeDasharray(strokeDasharray) {
        this.setProperty('stroke-dasharray', strokeDasharray);
    }
    /**
     *
     */
    get strokeDashoffset() {
        return this.getPropertyValue('stroke-dashoffset');
    }
    /**
     *
     */
    set strokeDashoffset(strokeDashoffset) {
        this.setProperty('stroke-dashoffset', strokeDashoffset);
    }
    /**
     *
     */
    get strokeLinecap() {
        return this.getPropertyValue('stroke-linecap');
    }
    /**
     *
     */
    set strokeLinecap(strokeLinecap) {
        this.setProperty('stroke-linecap', strokeLinecap);
    }
    /**
     *
     */
    get strokeLinejoin() {
        return this.getPropertyValue('stroke-linejoin');
    }
    /**
     *
     */
    set strokeLinejoin(strokeLinejoin) {
        this.setProperty('stroke-linejoin', strokeLinejoin);
    }
    /**
     *
     */
    get strokeMiterlimit() {
        return this.getPropertyValue('stroke-miterlimit');
    }
    /**
     *
     */
    set strokeMiterlimit(strokeMiterlimit) {
        this.setProperty('stroke-miterlimit', strokeMiterlimit);
    }
    /**
     *
     */
    get strokeOpacity() {
        return this.getPropertyValue('stroke-opacity');
    }
    /**
     *
     */
    set strokeOpacity(strokeOpacity) {
        this.setProperty('stroke-opacity', strokeOpacity);
    }
    /**
     *
     */
    get strokeWidth() {
        return this.getPropertyValue('stroke-width');
    }
    /**
     *
     */
    set strokeWidth(strokeWidth) {
        this.setProperty('stroke-width', strokeWidth);
    }
    /**
     *
     */
    get syntax() {
        return this.getPropertyValue('syntax');
    }
    /**
     *
     */
    set syntax(syntax) {
        this.setProperty('syntax', syntax);
    }
    /**
     *
     */
    get tabSize() {
        return this.getPropertyValue('tab-size');
    }
    /**
     *
     */
    set tabSize(tabSize) {
        this.setProperty('tab-size', tabSize);
    }
    /**
     *
     */
    get tableLayout() {
        return this.getPropertyValue('table-layout');
    }
    /**
     *
     */
    set tableLayout(tableLayout) {
        this.setProperty('table-layout', tableLayout);
    }
    /**
     *
     */
    get textAlign() {
        return this.getPropertyValue('text-align');
    }
    /**
     *
     */
    set textAlign(textAlign) {
        this.setProperty('text-align', textAlign);
    }
    /**
     *
     */
    get textAlignLast() {
        return this.getPropertyValue('text-align-last');
    }
    /**
     *
     */
    set textAlignLast(textAlignLast) {
        this.setProperty('text-align-last', textAlignLast);
    }
    /**
     *
     */
    get textAnchor() {
        return this.getPropertyValue('text-anchor');
    }
    /**
     *
     */
    set textAnchor(textAnchor) {
        this.setProperty('text-anchor', textAnchor);
    }
    /**
     *
     */
    get textCombineUpright() {
        return this.getPropertyValue('text-combine-upright');
    }
    /**
     *
     */
    set textCombineUpright(textCombineUpright) {
        this.setProperty('text-combine-upright', textCombineUpright);
    }
    /**
     *
     */
    get textDecoration() {
        return this.getPropertyValue('text-decoration');
    }
    /**
     *
     */
    set textDecoration(textDecoration) {
        this.setProperty('text-decoration', textDecoration);
    }
    /**
     *
     */
    get textDecorationColor() {
        return this.getPropertyValue('text-decoration-color');
    }
    /**
     *
     */
    set textDecorationColor(textDecorationColor) {
        this.setProperty('text-decoration-color', textDecorationColor);
    }
    /**
     *
     */
    get textDecorationLine() {
        return this.getPropertyValue('text-decoration-line');
    }
    /**
     *
     */
    set textDecorationLine(textDecorationLine) {
        this.setProperty('text-decoration-line', textDecorationLine);
    }
    /**
     *
     */
    get textDecorationSkipInk() {
        return this.getPropertyValue('text-decoration-skip-ink');
    }
    /**
     *
     */
    set textDecorationSkipInk(textDecorationSkipInk) {
        this.setProperty('text-decoration-skip-ink', textDecorationSkipInk);
    }
    /**
     *
     */
    get textDecorationStyle() {
        return this.getPropertyValue('text-decoration-style');
    }
    /**
     *
     */
    set textDecorationStyle(textDecorationStyle) {
        this.setProperty('text-decoration-style', textDecorationStyle);
    }
    /**
     *
     */
    get textIndent() {
        return this.getPropertyValue('text-indent');
    }
    /**
     *
     */
    set textIndent(textIndent) {
        this.setProperty('text-indent', textIndent);
    }
    /**
     *
     */
    get textOrientation() {
        return this.getPropertyValue('text-orientation');
    }
    /**
     *
     */
    set textOrientation(textOrientation) {
        this.setProperty('text-orientation', textOrientation);
    }
    /**
     *
     */
    get textOverflow() {
        return this.getPropertyValue('text-overflow');
    }
    /**
     *
     */
    set textOverflow(textOverflow) {
        this.setProperty('text-overflow', textOverflow);
    }
    /**
     *
     */
    get textRendering() {
        return this.getPropertyValue('text-rendering');
    }
    /**
     *
     */
    set textRendering(textRendering) {
        this.setProperty('text-rendering', textRendering);
    }
    /**
     *
     */
    get textShadow() {
        return this.getPropertyValue('text-shadow');
    }
    /**
     *
     */
    set textShadow(textShadow) {
        this.setProperty('text-shadow', textShadow);
    }
    /**
     *
     */
    get textSizeAdjust() {
        return this.getPropertyValue('text-size-adjust');
    }
    /**
     *
     */
    set textSizeAdjust(textSizeAdjust) {
        this.setProperty('text-size-adjust', textSizeAdjust);
    }
    /**
     *
     */
    get textTransform() {
        return this.getPropertyValue('text-transform');
    }
    /**
     *
     */
    set textTransform(textTransform) {
        this.setProperty('text-transform', textTransform);
    }
    /**
     *
     */
    get textUnderlinePosition() {
        return this.getPropertyValue('text-underline-position');
    }
    /**
     *
     */
    set textUnderlinePosition(textUnderlinePosition) {
        this.setProperty('text-underline-position', textUnderlinePosition);
    }
    /**
     *
     */
    get top() {
        return this.getPropertyValue('top');
    }
    /**
     *
     */
    set top(top) {
        this.setProperty('top', top);
    }
    /**
     *
     */
    get touchAction() {
        return this.getPropertyValue('touch-action');
    }
    /**
     *
     */
    set touchAction(touchAction) {
        this.setProperty('touch-action', touchAction);
    }
    /**
     *
     */
    get transform() {
        return this.getPropertyValue('transform');
    }
    /**
     *
     */
    set transform(transform) {
        this.setProperty('transform', transform);
    }
    /**
     *
     */
    get transformBox() {
        return this.getPropertyValue('transform-box');
    }
    /**
     *
     */
    set transformBox(transformBox) {
        this.setProperty('transform-box', transformBox);
    }
    /**
     *
     */
    get transformOrigin() {
        return this.getPropertyValue('transform-origin');
    }
    /**
     *
     */
    set transformOrigin(transformOrigin) {
        this.setProperty('transform-origin', transformOrigin);
    }
    /**
     *
     */
    get transformStyle() {
        return this.getPropertyValue('transform-style');
    }
    /**
     *
     */
    set transformStyle(transformStyle) {
        this.setProperty('transform-style', transformStyle);
    }
    /**
     *
     */
    get transition() {
        return this.getPropertyValue('transition');
    }
    /**
     *
     */
    set transition(transition) {
        this.setProperty('transition', transition);
    }
    /**
     *
     */
    get transitionDelay() {
        return this.getPropertyValue('transition-delay');
    }
    /**
     *
     */
    set transitionDelay(transitionDelay) {
        this.setProperty('transition-delay', transitionDelay);
    }
    /**
     *
     */
    get transitionDuration() {
        return this.getPropertyValue('transition-duration');
    }
    /**
     *
     */
    set transitionDuration(transitionDuration) {
        this.setProperty('transition-duration', transitionDuration);
    }
    /**
     *
     */
    get transitionProperty() {
        return this.getPropertyValue('transition-property');
    }
    /**
     *
     */
    set transitionProperty(transitionProperty) {
        this.setProperty('transition-property', transitionProperty);
    }
    /**
     *
     */
    get transitionTimingFunction() {
        return this.getPropertyValue('transition-timing-function');
    }
    /**
     *
     */
    set transitionTimingFunction(transitionTimingFunction) {
        this.setProperty('transition-timing-function', transitionTimingFunction);
    }
    /**
     *
     */
    get unicodeBidi() {
        return this.getPropertyValue('unicode-bidi');
    }
    /**
     *
     */
    set unicodeBidi(unicodeBidi) {
        this.setProperty('unicode-bidi', unicodeBidi);
    }
    /**
     *
     */
    get unicodeRange() {
        return this.getPropertyValue('unicode-range');
    }
    /**
     *
     */
    set unicodeRange(unicodeRange) {
        this.setProperty('unicode-range', unicodeRange);
    }
    /**
     *
     */
    get userSelect() {
        return this.getPropertyValue('user-select');
    }
    /**
     *
     */
    set userSelect(userSelect) {
        this.setProperty('user-select', userSelect);
    }
    /**
     *
     */
    get userZoom() {
        return this.getPropertyValue('user-zoom');
    }
    /**
     *
     */
    set userZoom(userZoom) {
        this.setProperty('user-zoom', userZoom);
    }
    /**
     *
     */
    get vectorEffect() {
        return this.getPropertyValue('vector-effect');
    }
    /**
     *
     */
    set vectorEffect(vectorEffect) {
        this.setProperty('vector-effect', vectorEffect);
    }
    /**
     *
     */
    get verticalAlign() {
        return this.getPropertyValue('vertical-align');
    }
    /**
     *
     */
    set verticalAlign(verticalAlign) {
        this.setProperty('vertical-align', verticalAlign);
    }
    /**
     *
     */
    get visibility() {
        return this.getPropertyValue('visibility');
    }
    /**
     *
     */
    set visibility(visibility) {
        this.setProperty('visibility', visibility);
    }
    /**
     *
     */
    get whiteSpace() {
        return this.getPropertyValue('white-space');
    }
    /**
     *
     */
    set whiteSpace(whiteSpace) {
        this.setProperty('white-space', whiteSpace);
    }
    /**
     *
     */
    get widows() {
        return this.getPropertyValue('widows');
    }
    /**
     *
     */
    set widows(widows) {
        this.setProperty('widows', widows);
    }
    /**
     *
     */
    get width() {
        return this.getPropertyValue('width');
    }
    /**
     *
     */
    set width(width) {
        this.setProperty('width', width);
    }
    /**
     *
     */
    get willChange() {
        return this.getPropertyValue('will-change');
    }
    /**
     *
     */
    set willChange(willChange) {
        this.setProperty('will-change', willChange);
    }
    /**
     *
     */
    get wordBreak() {
        return this.getPropertyValue('word-break');
    }
    /**
     *
     */
    set wordBreak(wordBreak) {
        this.setProperty('word-break', wordBreak);
    }
    /**
     *
     */
    get wordSpacing() {
        return this.getPropertyValue('word-spacing');
    }
    /**
     *
     */
    set wordSpacing(wordSpacing) {
        this.setProperty('word-spacing', wordSpacing);
    }
    /**
     *
     */
    get wordWrap() {
        return this.getPropertyValue('word-wrap');
    }
    /**
     *
     */
    set wordWrap(wordWrap) {
        this.setProperty('word-wrap', wordWrap);
    }
    /**
     *
     */
    get writingMode() {
        return this.getPropertyValue('writing-mode');
    }
    /**
     *
     */
    set writingMode(writingMode) {
        this.setProperty('writing-mode', writingMode);
    }
    /**
     *
     */
    get x() {
        return this.getPropertyValue('x');
    }
    /**
     *
     */
    set x(x) {
        this.setProperty('x', x);
    }
    /**
     *
     */
    get y() {
        return this.getPropertyValue('y');
    }
    /**
     *
     */
    set y(y) {
        this.setProperty('y', y);
    }
    /**
     *
     */
    get zIndex() {
        return this.getPropertyValue('z-index');
    }
    /**
     *
     */
    set zIndex(zIndex) {
        this.setProperty('z-index', zIndex);
    }
    /**
     *
     */
    get zoom() {
        return this.getPropertyValue('zoom');
    }
    /**
     *
     */
    set zoom(zoom) {
        this.setProperty('zoom', zoom);
    }
    /* eslint-enable require-jsdoc */
    /**
     * Returns the style decleration as a CSS text.
     *
     * @returns CSS text.
     */
    get cssText() {
        const style = this._attributes['style'];
        if (style && style.value) {
            return style.value;
        }
        return '';
    }
    /**
     * Sets CSS text.
     *
     * @param cssText CSS text.
     */
    set cssText(cssText) {
        if (cssText) {
            if (!this._attributes['style']) {
                this._attributes['style'] = new Attr();
                this._attributes['style'].name = 'style';
            }
            const parts = cssText.split(';');
            const newStyle = [];
            let index = 0;
            for (let i = 0; i < this.length; i++) {
                delete this[i];
            }
            for (const part of parts) {
                if (part) {
                    const [name, value] = part.trim().split(':');
                    newStyle.push(`${name}: ${value.trim()};`);
                    this[index] = name;
                    index++;
                }
            }
            this.length = index;
            this._attributes['style'].value = newStyle.join(' ');
        }
        else {
            delete this._attributes['style'];
            for (let i = 0; i < this.length; i++) {
                delete this[i];
            }
            this.length = 0;
        }
    }
    /**
     * Returns item.
     *
     * @param index Index.
     * @returns Item.
     */
    item(index) {
        return this[String(index)] || '';
    }
    /**
     * Set a property.
     *
     * @param propertyName Property name.
     * @param value Value. Must not contain "!important" as that should be set using the priority parameter.
     * @param [priority] Can be "important", or an empty string.
     */
    setProperty(propertyName, value, priority = '') {
        if (!value) {
            this.removeProperty(propertyName);
            return;
        }
        if (!this._attributes['style']) {
            this._attributes['style'] = new Attr();
            this._attributes['style'].name = 'style';
        }
        const style = this._attributes['style'];
        const newStyle = [];
        let index = 0;
        let isExisting = false;
        if (style && style.value) {
            const parts = style.value.split(';');
            for (const part of parts) {
                if (part) {
                    const [name, existingValue] = part.trim().split(':');
                    if (name === propertyName) {
                        newStyle.push(`${name}: ${value};`);
                        isExisting = true;
                    }
                    else {
                        newStyle.push(`${name}: ${existingValue.trim()};`);
                    }
                    this[index] = name;
                    index++;
                }
            }
        }
        if (!isExisting) {
            newStyle.push(`${propertyName}: ${value}${priority ? '' + priority : ''};`);
            this[index] = propertyName;
            index++;
        }
        this._attributes['style'].value = newStyle.join(' ');
        this.length = index;
    }
    /**
     * Removes a property.
     *
     * @param propertyName Property name in kebab case.
     * @param value Value. Must not contain "!important" as that should be set using the priority parameter.
     * @param [priority] Can be "important", or an empty string.
     */
    removeProperty(propertyName) {
        const style = this._attributes['style'];
        const newStyle = [];
        let hasProperty = false;
        let index = 0;
        if (style && style.value) {
            const parts = style.value.split(';');
            for (const part of parts) {
                if (part) {
                    const [name, value] = part.trim().split(':');
                    if (name !== propertyName) {
                        newStyle.push(`${name}: ${value.trim()};`);
                        this[index] = name;
                        index++;
                        hasProperty = true;
                    }
                }
            }
        }
        if (newStyle.length) {
            this._attributes['style'].value = newStyle.join(' ');
        }
        else {
            delete this._attributes['style'];
        }
        if (hasProperty) {
            delete this[index];
        }
        this.length = index;
    }
    /**
     * Returns a property.
     *
     * @param propertyName Property name in kebab case.
     * @returns Property value.
     */
    getPropertyValue(propertyName) {
        if (this._computedStyleElement && !this._computedStyleElement.isConnected) {
            return '';
        }
        const style = this._attributes['style'];
        if (style && style.value) {
            const parts = style.value.split(';');
            for (const part of parts) {
                if (part) {
                    const [name, value] = part.trim().split(':');
                    if (name === propertyName) {
                        return value.trim();
                    }
                }
            }
        }
        return '';
    }
}
//# sourceMappingURL=CSSStyleDeclaration.js.map