import { Aurelia } from 'aurelia-framework';
import { WebpackLoader } from 'aurelia-loader-webpack';
import { DirtyCheckProperty } from 'aurelia-binding';
//import * as palNodeJS from '../pal-nodejs/index';
//import { palNodeJS } from '../index';

// disable the dirty checker
// otherwise the setTimeout of the dirty checker
// prevents nodejs from garbage collecting the app
DirtyCheckProperty.prototype.subscribe = () => { };

// https://github.com/angular/angular-cli/issues/8412
// https://github.com/ag-grid/ag-grid-react/issues/24
(<any>global).Element = typeof Element === 'undefined' ? () => { } : Element;
(<any>global).HTMLElement = typeof HTMLElement === 'undefined' ? () => { } : HTMLElement;
(<any>global).HTMLSelectElement = typeof HTMLSelectElement === 'undefined' ? () => { } : HTMLSelectElement;

const palNodeJS = require('../pal-nodejs/index');
const pal = require('aurelia-pal');

function initialize() {
    const { initialize } = palNodeJS;
    const { PLATFORM } = pal;

    console.log("bootstrapper initializing");
    initialize();

    // expose anything the ssr-engine needs
    return {
        PLATFORM,
    };
}

function start(configure: any) {
    const aurelia = new Aurelia(new WebpackLoader());
    console.log("au started:");
    console.log("pal:");
    console.dir(pal);
    console.dir(pal.DOM.querySelectorAll);
    aurelia.host = pal.DOM.querySelectorAll('body')[0];
    console.log("au host exosts:" + aurelia.host);



    const attribute = pal.DOM.createAttribute('aurelia-app');
    console.log("attribute: " + attribute);
    attribute.value = 'main';
    console.log("au host attributes exist: " + aurelia?.host?.attributes != null);
    aurelia.host.attributes.setNamedItem(attribute);

    return new Promise(resolve => {
        // we need to wait for aurelia-composed as otherwise
        // the router hasn't been fully initialized and 
        // generated routes by route-href will be undefined
        pal.DOM.global.window.addEventListener('aurelia-composed', () => {
            setTimeout(() => {
                resolve({ aurelia, pal, palNodeJS, stop });
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

export default function (configure: any) {
    return {
        initialize,
        stop,
        start: function () {
            return start(configure);
        }
    };
};