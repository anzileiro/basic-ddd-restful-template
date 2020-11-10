import Splitter from '@domain/tweets/Splitter';
import Factory from '@domain/tweets/Factory';
import Repository from '@infrastructure/web/repository/Tweets';
import Fetcher from '@domain/tweets/use-case/Fetcher';

export default class UseCase {
  public create(): Fetcher {
    return new Fetcher(
      new Repository(),
      new Splitter(20),
      new Factory(),
    );
  }
}
