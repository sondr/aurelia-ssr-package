import './reflect';
import './property-descriptor';
import { RenderOptions, AppInitializationOptions } from '../../interface/ssr-engine/interfaces';
declare function render(options: RenderOptions, initOptions: AppInitializationOptions): Promise<string>;
export { render, AppInitializationOptions, RenderOptions };
