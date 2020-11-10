import MessageSplitter from '@root/src/domain/tweets/MessageSplitter';
import Tweet from '@root/src/domain/tweets/Tweet';

import Web from '@infrastructure/web/repository/Tweets';

export default class Application {
  public static async start(): Promise<void> {
    try {
      console.log('application started');

      const web = new Web();

      const tweets = await web.fetchAll();

      const splitter = new MessageSplitter(20);

      const items = tweets.map((item) => splitter.addMessages(new Tweet(item.id, item.text)));

      console.log(splitter.listMessages());
    } catch (error) {
      console.log('InternalApplicationError: ', error);
    }
  }
}
