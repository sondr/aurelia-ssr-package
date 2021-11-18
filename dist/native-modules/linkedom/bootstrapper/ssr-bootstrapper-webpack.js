import { Aurelia } from 'aurelia-framework';
import { WebpackLoader } from 'aurelia-loader-webpack';
import { DirtyCheckProperty } from 'aurelia-binding';
//import * as palNodeJS from '../pal-nodejs/index';
//import { palNodeJS } from '../index';
// disable the dirty checker
// otherwise the setTimeout of the dirty checker
// prevents nodejs from garbage collecting the app
DirtyCheckProperty.prototype.subscribe = function () { };
// https://github.com/angular/angular-cli/issues/8412
// https://github.com/ag-grid/ag-grid-react/issues/24
global.Element = typeof Element === 'undefined' ? function () { } : Element;
global.HTMLElement = typeof HTMLElement === 'undefined' ? function () { } : HTMLElement;
global.HTMLSelectElement = typeof HTMLSelectElement === 'undefined' ? function () { } : HTMLSelectElement;
var palNodeJS = require('../pal-nodejs/index');
var pal = require('aurelia-pal');
function initialize() {
    var initialize = palNodeJS.initialize;
    var PLATFORM = pal.PLATFORM;
    initialize();
    // expose anything the ssr-engine needs
    return {
        PLATFORM: PLATFORM,
    };
}
function start(configure) {
    var _a;
    var aurelia = new Aurelia(new WebpackLoader());
    console.log("au started:");
    console.log("pal:");
    console.dir(pal);
    aurelia.host = pal.DOM.querySelectorAll('body')[0];
    console.log("au host exosts:" + aurelia.host);
    var attribute = pal.DOM.createAttribute('aurelia-app');
    attribute.value = 'main';
    console.log("au host attributes exist: " + ((_a = aurelia === null || aurelia === void 0 ? void 0 : aurelia.host) === null || _a === void 0 ? void 0 : _a.attributes) != null);
    aurelia.host.attributes.setNamedItem(attribute);
    return new Promise(function (resolve) {
        // we need to wait for aurelia-composed as otherwise
        // the router hasn't been fully initialized and 
        // generated routes by route-href will be undefined
        pal.DOM.global.window.addEventListener('aurelia-composed', function () {
            setTimeout(function () {
                resolve({ aurelia: aurelia, pal: pal, palNodeJS: palNodeJS, stop: stop });
            }, 20);
        });
        return configure(aurelia);
    });
}
function stop() {
    require('aurelia-pal').reset();
    require('../pal-nodejs/index').reset();
    //palNodeJS.reset(pal.DOM.global.window);
    // require('aurelia-pal-nodejs').reset(pal.DOM.global.window);
}
export default function (configure) {
    return {
        initialize: initialize,
        stop: stop,
        start: function () {
            return start(configure);
        }
    };
}
;
