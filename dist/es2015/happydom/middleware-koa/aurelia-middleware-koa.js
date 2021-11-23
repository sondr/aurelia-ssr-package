import { render } from '../ssr-engine/aurelia-ssr-engine';
export let aureliaKoaMiddleware = (renderOptions, initializationOptions) => {
    return (ctx, next) => {
        const url = ctx.request.URL;
        const pathname = url.pathname;
        // skip requests where urls have an extension
        const extensionMatcher = /^.*\.[^\\]+$/;
        if (pathname.match(extensionMatcher)) {
            return next();
        }
        // set client request headers
        renderOptions.headers = Object.assign({}, ctx.req.headers);
        return render(Object.assign({ url }, renderOptions), initializationOptions)
            .then((html) => {
            ctx.body = html;
        })
            .catch((e) => {
            ctx.body = `<html><body>Failed to render ${pathname}</body></html>`;
            console.log(`Failed to render ${pathname}`);
            console.log(e);
        });
    };
};
