import Bunyan from 'bunyan';
import Configuration from '@infrastructure/logger/Configuration';
import Azquery from '@azdata/azquery-logger';

export default class Logger {
  private static instance: Bunyan;

  public static getInstance(): Bunyan {
    if (!Logger.instance) {
      Logger.instance = Azquery.create(
        `${Configuration.APP_NAME}-${Configuration.APP_VERSION}`,
        Configuration.AZQUERY_KEY,
        Configuration.AZQUERY_SECRET,
      );
    }

    return Logger.instance;
  }
}
