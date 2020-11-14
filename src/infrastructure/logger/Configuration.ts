import { name, version } from '../../../package.json';

export default class Configuration {
    public static APP_NAME: string = name;

    public static APP_VERSION: string = version;
}
