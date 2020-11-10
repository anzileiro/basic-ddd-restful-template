import TweetUseCase from '@application/tweets/container/UseCase';

export default class Application {
  public static async start(): Promise<void> {
    const result = await new TweetUseCase().create().execute();

    console.log('result: ', result);
  }
}
