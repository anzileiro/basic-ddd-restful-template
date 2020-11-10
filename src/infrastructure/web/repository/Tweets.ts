import ZulDigital from '@infrastructure/web/driver/ZulDigital';
import Configuration from '@application/configuration/Tweets';

export default class Tweets extends ZulDigital {
  constructor() {
    super(Configuration.getInstance().configuration());
  }

  public async fetchAll(): Promise<any> {
    await this.authorize();

    const { data, status } = await this.tweets();

    if (status !== 200) {
      throw new Error(`Request failed with the status ${status}`);
    }

    return data;
  }
}
