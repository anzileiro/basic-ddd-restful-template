import env from 'env-var';
import { Environments } from '@application/configuration/Environments';

export default class Tweets {
    private static instance: Tweets;

    private readonly ENVIRONMENT: string = env.get('NODE_ENV').asString();

    public static getInstance(): Tweets {
      if (!Tweets.instance) {
        Tweets.instance = new Tweets();
      }

      return Tweets.instance;
    }

    private required(): boolean {
      return Boolean(this.ENVIRONMENT !== Environments.TEST);
    }

    public configuration(): any {
      return {
        web: {
          host: env.get('TWEETS_WEB_HOST').required(this.required()).asString(),
          authorize: env.get('TWEETS_WEB_AUTHORIZE_PATH').required(this.required()).asString(),
          tweets: env.get('TWEETS_WEB_TWEETS_PATH').required(this.required()).asString(),
        },
      };
    }
}
