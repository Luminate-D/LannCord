import 'reflect-metadata';
import 'source-map-support/register';
import { App } from './app';
import { Kernel } from './kernel';
import { getLogger } from './logger/logger';

const startupTime = process.hrtime.bigint();

const logger = getLogger('Bootstrap');
void (async () => {
    const app = Kernel.getService<App>(App);
    await app.start();

    logger.info('Started in {0}ms', Math.floor(Number(process.hrtime.bigint() - startupTime) / 1e6));
})();