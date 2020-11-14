import Bunyan from 'bunyan';
import Configuration from '@infrastructure/logger/Configuration';

export default class Logger {
    private static instance: Bunyan;

    public static getInstance(): Bunyan {
      if (!Logger.instance) {
        Logger.instance = Bunyan.createLogger({
          name: `${Configuration.APP_NAME}-${Configuration.APP_VERSION}`,
        });
      }

      return Logger.instance;
    }
}
