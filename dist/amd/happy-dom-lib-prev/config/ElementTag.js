var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "../nodes/html-template-element/HTMLTemplateElement", "../nodes/html-form-element/HTMLFormElement", "../nodes/html-input-element/HTMLInputElement", "../nodes/html-text-area-element/HTMLTextAreaElement", "../nodes/svg-element/SVGSVGElement", "../nodes/svg-element/SVGElement", "../nodes/html-script-element/HTMLScriptElement", "../nodes/html-image-element/HTMLImageElement", "../nodes/html-link-element/HTMLLinkElement", "../nodes/html-style-element/HTMLStyleElement"], function (require, exports, HTMLTemplateElement_1, HTMLFormElement_1, HTMLInputElement_1, HTMLTextAreaElement_1, SVGSVGElement_1, SVGElement_1, HTMLScriptElement_1, HTMLImageElement_1, HTMLLinkElement_1, HTMLStyleElement_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    HTMLTemplateElement_1 = __importDefault(HTMLTemplateElement_1);
    HTMLFormElement_1 = __importDefault(HTMLFormElement_1);
    HTMLInputElement_1 = __importDefault(HTMLInputElement_1);
    HTMLTextAreaElement_1 = __importDefault(HTMLTextAreaElement_1);
    SVGSVGElement_1 = __importDefault(SVGSVGElement_1);
    SVGElement_1 = __importDefault(SVGElement_1);
    HTMLScriptElement_1 = __importDefault(HTMLScriptElement_1);
    HTMLImageElement_1 = __importDefault(HTMLImageElement_1);
    HTMLLinkElement_1 = __importDefault(HTMLLinkElement_1);
    HTMLStyleElement_1 = __importDefault(HTMLStyleElement_1);
    exports.default = {
        template: HTMLTemplateElement_1.default,
        form: HTMLFormElement_1.default,
        input: HTMLInputElement_1.default,
        textarea: HTMLTextAreaElement_1.default,
        script: HTMLScriptElement_1.default,
        img: HTMLImageElement_1.default,
        link: HTMLLinkElement_1.default,
        style: HTMLStyleElement_1.default,
        svg: SVGSVGElement_1.default,
        circle: SVGElement_1.default,
        ellipse: SVGElement_1.default,
        line: SVGElement_1.default,
        path: SVGElement_1.default,
        polygon: SVGElement_1.default,
        polyline: SVGElement_1.default,
        rect: SVGElement_1.default,
        stop: SVGElement_1.default,
        use: SVGElement_1.default
    };
});
//# sourceMappingURL=ElementTag.js.map