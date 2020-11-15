import HttpServer, { Express } from 'express';
import Configuration from '@infrastructure/rest/Configuration';
import Router from '@infrastructure/rest/Router';
import Logger from '@infrastructure/logger/Logger';

export default class Server {
    private server: Express;

    public constructor() {
      this.server = HttpServer();
    }

    public async start(): Promise<void> {
      this.server.use(await new Router().setup());

      this.server.listen(Configuration.HTTP_PORT, () => {
        Logger.getInstance().info({ message: 'info' });
      });
    }
}
