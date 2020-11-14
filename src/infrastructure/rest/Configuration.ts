import Environment from 'env-var';

export default class Configuration {
    public static HTTP_PORT: Number = Environment.get('HTTP_PORT').required(true).asInt();

    public static CONTROLLER_PATH: string = '../../application/rest/v1/controller/';
}
