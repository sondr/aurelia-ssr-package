import MimeTypeArray from './MimeTypeArray';
import PluginArray from './PluginArray';
/**
 * Browser Navigator API.
 *
 * Mocked information is taken from FireFox.
 *
 * Reference:
 * https://html.spec.whatwg.org/multipage/system-state.html#dom-navigator.
 */
var Navigator = /** @class */ (function () {
    function Navigator() {
        // False if setting a cookie will be ignored and true otherwise.
        this.cookieEnabled = true;
        // TODO: Not implemented.
        this.credentials = null;
        // TODO: Not implemented.
        this.geolocation = null;
        // String representing the preferred language of the user, usually the language of the browser UI.
        this.language = 'en-US';
        // Array of string representing the user's preferred languages.
        this.languages = ['en-US', 'en'];
        // TODO: Not implemented.
        this.locks = null;
        // Maximum number of simultaneous touch contact points are supported by the current device.
        this.maxTouchPoints = 0;
        // Number of logical processors available to run threads on the user's computer.
        this.hardwareConcurrency = 8;
        // Browser app code name.
        this.appCodeName = 'Mozilla';
        // Browser app name.
        this.appName = 'Netscape';
        // Browser app version.
        this.appVersion = '5.0 (Windows)';
        // Browser platform.
        this.platform = 'Win32';
        // Browser product.
        this.product = 'Gecko';
        // Browser product sub.
        this.productSub = '20100101';
        // Browser vendor.
        this.vendor = '';
        // Browser vendor sub.
        this.vendorSub = '';
        // Browser user agent.
        // "appCodeName/appVersion number (Platform; Security; OS-or-CPU; Localization; rv: revision-version-number) product/productSub Application-Name Application-Name-version".
        this.userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:97.0) Gecko/20100101 Firefox/97.0';
        // Boolean value indicating whether the browser is working online.
        this.onLine = true;
        // TODO: Not implemented.
        this.permissions = null;
        // Boolean Indicates whether the user agent is controlled by automation.
        this.webdriver = true;
        // The user's Do Not Track setting, which indicates whether the user is requesting web sites and advertisers to not track them.
        // The value of the property reflects that of the DNT HTTP header, i.e. Values of "1", "0", or "unspecified".
        this.doNotTrack = 'unspecified';
        // Browser mime-types.
        this.mimeTypes = new MimeTypeArray([]);
        // Browser plugins.
        this.plugins = new PluginArray([]);
    }
    /**
     * Returns the object as a string.
     *
     * @returns String.
     */
    Navigator.prototype.toString = function () {
        return '[object Navigator]';
    };
    return Navigator;
}());
export default Navigator;
//# sourceMappingURL=Navigator.js.map