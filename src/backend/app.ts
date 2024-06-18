import { injectable } from 'inversify';
import Fastify, { FastifyInstance } from 'fastify';
import fstatic from '@fastify/static';
import path from 'path';
import { getLogger } from './logger/logger';

const logger = getLogger('App');

@injectable()
export class App {
    private fastify: FastifyInstance;
    public constructor() {
        this.fastify = Fastify();
        this.fastify.register(fstatic, {
            root: path.join(__dirname, '../static')
        });
    }

    public async start() {
        await this.fastify.listen({
            port: 2024,
            host: '0.0.0.0'
        });

        logger.info('Listening on 0.0.0.0:{0}', 2024);
    }
}