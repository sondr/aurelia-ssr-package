"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.NodeJsFeature = NodeJsFeature;
