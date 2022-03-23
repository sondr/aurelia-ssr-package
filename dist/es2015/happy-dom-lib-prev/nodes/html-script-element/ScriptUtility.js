var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Event from '../../event/Event';
import ErrorEvent from '../../event/events/ErrorEvent';
import ResourceFetcher from '../../fetch/ResourceFetcher';
/**
 * Helper class for getting the URL relative to a Location object.
 */
export default class ScriptUtility {
    /**
     * Returns a URL relative to the given Location object.
     *
     * @param options Options.
     * @param options.element Element.
     * @param element
     */
    static loadExternalScript(element) {
        return __awaiter(this, void 0, void 0, function* () {
            const src = element.getAttributeNS(null, 'src');
            const async = element.getAttributeNS(null, 'async') !== null;
            if (async) {
                let code = null;
                element.ownerDocument._readyStateManager.startTask();
                try {
                    code = yield ResourceFetcher.fetch({
                        window: element.ownerDocument.defaultView,
                        url: src
                    });
                }
                catch (error) {
                    element.dispatchEvent(new ErrorEvent('error', {
                        message: error.message,
                        error
                    }));
                    element.ownerDocument.defaultView.dispatchEvent(new ErrorEvent('error', {
                        message: error.message,
                        error
                    }));
                    if (!element._listeners['error'] &&
                        !element.ownerDocument.defaultView._listeners['error']) {
                        element.ownerDocument.defaultView.console.error(error);
                    }
                }
                if (code) {
                    element.ownerDocument.defaultView.eval(code);
                    element.dispatchEvent(new Event('load'));
                }
                element.ownerDocument._readyStateManager.endTask();
            }
            else {
                let code = null;
                try {
                    code = ResourceFetcher.fetchSync({
                        window: element.ownerDocument.defaultView,
                        url: src
                    });
                }
                catch (error) {
                    element.dispatchEvent(new ErrorEvent('error', {
                        message: error.message,
                        error
                    }));
                    element.ownerDocument.defaultView.dispatchEvent(new ErrorEvent('error', {
                        message: error.message,
                        error
                    }));
                    if (!element._listeners['error'] &&
                        !element.ownerDocument.defaultView._listeners['error']) {
                        element.ownerDocument.defaultView.console.error(error);
                    }
                }
                if (code) {
                    element.ownerDocument.defaultView.eval(code);
                    element.dispatchEvent(new Event('load'));
                }
            }
        });
    }
}
