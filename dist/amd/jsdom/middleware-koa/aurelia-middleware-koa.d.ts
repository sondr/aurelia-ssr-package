import { RenderOptions, AppInitializationOptions } from '../ssr-engine/aurelia-ssr-engine';
import { Context } from 'koa';
export declare let aureliaKoaMiddleware: (renderOptions: RenderOptions, initializationOptions: AppInitializationOptions) => (ctx: Context, next: () => void) => void | Promise<void>;
