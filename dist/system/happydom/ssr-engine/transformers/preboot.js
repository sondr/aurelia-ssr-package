System.register(["preboot", "./utils"], function (exports_1, context_1) {
    "use strict";
    var preboot, utils_1;
    var __moduleName = context_1 && context_1.id;
    /**
     * Append Angular preboot to the rendered HTML
     * @see https://github.com/angular/preboot
     * @param {string} html
     * @param {TransformerContext} transformerCtx
     * @param {RenderOptions} options
     * @returns {string}
     */
    function default_1(html, transformerCtx, options) {
        if (options.preboot) {
            if (options.replayDelay === undefined) {
                options.replayDelay = 10;
            }
            // preboot catches all events that happens before Aurelia gets loaded client-side
            // so that they can be replayed afterwards
            var prebootOptions = Object.assign({
                appRoot: options.appRoots || ['body'],
                eventSelectors: [
                    // for recording changes in form elements
                    { selector: 'input,textarea', events: ['keypress', 'keyup', 'keydown', 'input', 'change'] },
                    { selector: 'select,option', events: ['change'] },
                    // when user hits return button in an input box
                    { selector: 'input', events: ['keyup'], preventDefault: true, keyCodes: [13], freeze: true },
                    // for tracking focus (no need to replay)
                    { selector: 'input,textarea', events: ['focusin', 'focusout', 'mousedown', 'mouseup'], noReplay: true },
                    { selector: 'button[type="submit"]', events: ['submit'], preventDefault: false, freeze: true },
                    { selector: 'form', events: ['submit'], preventDefault: true, freeze: true },
                    // user clicks on a button
                    { selector: 'button:not([type="submit"])', events: ['click'], preventDefault: true, freeze: true }
                ]
            }, options.prebootOptions);
            var inlinePrebootCode = preboot.getInlineCode(prebootOptions);
            html = utils_1.replaceString(html, '</head>', "\r\n<script>".concat(inlinePrebootCode, "</script>\r\n</head>"));
            // preboot_browser can replay events that were stored by the preboot code
            html = utils_1.replaceString(html, '</body>', "\r\n<script src=\"preboot_browser.js\"></script>\n      <script>\n      document.addEventListener('aurelia-started', function () {\n        setTimeout(function () { preboot.complete(); }, ".concat(options.replayDelay, ");\n      });\n      </script>\r\n</body>"));
        }
        return html;
    }
    exports_1("default", default_1);
    return {
        setters: [
            function (preboot_1) {
                preboot = preboot_1;
            },
            function (utils_1_1) {
                utils_1 = utils_1_1;
            }
        ],
        execute: function () {
            ;
        }
    };
});
//# sourceMappingURL=preboot.js.map