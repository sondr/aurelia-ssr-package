const URL_REGEXP = /(https?:)\/\/([-a-zA-Z0-9@:%._\+~#=]{2,256}[a-z]{2,6})(:[0-9]*)?([-a-zA-Z0-9@:%_\+.~c&//=]*)(\?[^#]*)?(#.*)?/;
const PATH_REGEXP = /([-a-zA-Z0-9@:%_\+.~c&//=]*)(\?[^#]*)?(#.*)?/;
/**
 *
 */
export default class URL {
    /**
     * Constructor.
     *
     * @param [url] URL.
     */
    constructor(url) {
        this.protocol = '';
        this.hostname = '';
        this.port = '';
        this.pathname = '';
        this.search = '';
        this.hash = '';
        this.username = '';
        this.password = '';
        if (url) {
            this.parse(url);
        }
    }
    /**
     * Returns the entire URL as a string.
     *
     * @returns Href.
     */
    get href() {
        const credentials = this.username ? `${this.username}:${this.password}@` : '';
        return this.protocol + '//' + credentials + this.host + this.pathname + this.search + this.hash;
    }
    /**
     * Sets the href.
     *
     * @param url URL.
     */
    set href(url) {
        this.parse(url);
    }
    /**
     * Returns the origin.
     *
     * @returns HREF.
     */
    get origin() {
        return this.protocol + '//' + this.host;
    }
    /**
     * Returns the entire URL as a string.
     *
     * @returns Host.
     */
    get host() {
        return this.hostname + this.port;
    }
    /**
     * Returns the entire URL as a string.
     */
    toString() {
        return this.href;
    }
    /**
     * Parses an URL.
     *
     * @param url URL.
     */
    parse(url) {
        const match = url.match(URL_REGEXP);
        if (match) {
            const hostnamePart = match[2] ? match[2].split('@') : '';
            const credentialsPart = hostnamePart.length > 1 ? hostnamePart[0].split(':') : null;
            this.protocol = match[1] || '';
            this.hostname = hostnamePart.length > 1 ? hostnamePart[1] : hostnamePart[0];
            this.port = match[3] || '';
            this.pathname = match[4] || '';
            this.search = match[5] || '';
            this.hash = match[6] || '';
            this.username = credentialsPart ? credentialsPart[0] : '';
            this.password = credentialsPart ? credentialsPart[1] : '';
        }
        else {
            const pathMatch = url.match(PATH_REGEXP);
            if (pathMatch) {
                this.pathname = pathMatch[1] || '';
                this.search = pathMatch[2] || '';
                this.hash = pathMatch[3] || '';
            }
        }
    }
}
//# sourceMappingURL=URL.js.map