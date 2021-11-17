import { IPlatform } from '../../interface/pal-nodejs/platform';
import { IGlobal } from './global';
import { IDom } from '../../interface/pal-nodejs/dom';
import { IFeature } from '../../interface/pal-nodejs/feature';
export declare function buildPal(): {
    global: IGlobal;
    platform: IPlatform;
    dom: IDom;
    feature: IFeature;
};
export declare function ensurePerformance(window: any): void;
