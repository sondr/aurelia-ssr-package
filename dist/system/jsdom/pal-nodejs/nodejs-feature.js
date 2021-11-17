System.register([], function (exports_1, context_1) {
    "use strict";
    var NodeJsFeature;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            NodeJsFeature = /** @class */ (function () {
                function NodeJsFeature(global) {
                    this.global = global;
                    this.shadowDOM = this.global.window.HTMLElement.prototype.attachShadow != undefined;
                    this.scopedCSS = 'scoped' in this.global.document.createElement('style');
                    this.htmlTemplateElement = true;
                    this.mutationObserver = true; // partial
                }
                return NodeJsFeature;
            }());
            exports_1("NodeJsFeature", NodeJsFeature);
        }
    };
});
