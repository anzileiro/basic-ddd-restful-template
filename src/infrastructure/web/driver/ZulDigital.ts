import Axios, { AxiosInstance, AxiosResponse } from 'axios';

export default class ZulDigital {
    private client: AxiosInstance;

    private authorizePath: string;

    private tweetsPath: string;

    constructor({ web: { host, authorize, tweets } }) {
      this.client = Axios.create({
        baseURL: host,
        timeout: 1000,
      });

      this.authorizePath = authorize;
      this.tweetsPath = tweets;
    }

    protected async authorize(): Promise<void> {
      const { data } = await this.client.post(this.authorizePath);

      this.client.defaults.headers.common.Authorization = data.token;
    }

    protected async tweets(): Promise<AxiosResponse> {
      return this.client.get(this.tweetsPath);
    }
}
