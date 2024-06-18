import { Container, interfaces } from 'inversify';

import { App } from './app';
import { getLogger } from './logger/logger';

const logger = getLogger('Kernel');
export class Kernel {
    public static Instance = new Kernel();

    private container: interfaces.Container;
    private constructor() {
        this.container = new Container();
        this.container.bind(App).to(App).inSingletonScope();
        logger.info('Kernel container services bound');
    }

    public static getService<T>(service: any): T {
        return Kernel.Instance.getService<T>(service);
    }

    public getService<T>(service: any): T {
        return Kernel.Instance.container.get<T>(service);
    }
}