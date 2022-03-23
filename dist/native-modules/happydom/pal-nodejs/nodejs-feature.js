var NodeJsFeature = /** @class */ (function () {
    function NodeJsFeature(global) {
        this.global = global;
        this.shadowDOM = this.global.window.HTMLElement.prototype.attachShadow != undefined;
        this.scopedCSS = 'scoped' in this.global.document.createElement('style');
        this.htmlTemplateElement = true;
        this.mutationObserver = true; // partial
    }
    return NodeJsFeature;
}());
export { NodeJsFeature };
//# sourceMappingURL=nodejs-feature.js.map