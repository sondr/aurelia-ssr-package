var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import RelativeURL from '../location/RelativeURL';
import DOMException from '../exception/DOMException';
/**
 * Helper class for performing an asynchonous or synchrounous request to a resource.
 */
export default class ResourceFetcher {
    /**
     * Returns resource data asynchonously.
     *
     * @param options Options.
     * @param options.window Location.
     * @param options.url URL.
     * @returns Response.
     */
    static fetch(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield options.window.fetch(options.url);
            if (!response.ok) {
                throw new DOMException(`Failed to perform request to "${options.url}". Status code: ${response.status}`);
            }
            return yield response.text();
        });
    }
    /**
     * Returns resource data synchonously.
     *
     * @param options Options.
     * @param options.window Location.
     * @param options.url URL.
     * @returns Response.
     */
    static fetchSync(options) {
        const url = RelativeURL.getAbsoluteURL(options.window.location, options.url);
        let request = null;
        try {
            request = require('sync-request');
        }
        catch (error) {
            throw new DOMException('Failed to load script. "sync-request" could not be loaded.');
        }
        const response = request('GET', url);
        if (response.isError()) {
            throw new DOMException(`Failed to perform request to "${url}". Status code: ${response.statusCode}`);
        }
        return response.getBody();
    }
}
//# sourceMappingURL=ResourceFetcher.js.map