import Environment from 'env-var';

export default class Configuration {
    public static HTTP_PORT: Number = Environment.get('HTTP_PORT').required(true).asInt();
}
