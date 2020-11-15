import Environment from 'env-var';
import { name, version } from '../../../package.json';

export default class Configuration {
    public static APP_NAME: string = name;

    public static APP_VERSION: string = version;

    public static AZQUERY_KEY: string = Environment.get('AZQUERY_KEY').required(true).asString();

    public static AZQUERY_SECRET: string = Environment.get('AZQUERY_SECRET').required(true).asString();
}
