import Splitter from '@domain/tweets/Splitter';
import Factory from '@domain/tweets/Factory';
import Repository from '@infrastructure/web/repository/Tweets';
import Message from '@domain/shared/Message';

export default class Fetcher {
  private factory: Factory;

  private readonly repository: Repository;

  private readonly splitter: Splitter;

  constructor(repository: Repository, splitter: Splitter, factory: Factory) {
    this.repository = repository;
    this.splitter = splitter;
    this.factory = factory;
  }

  public async execute(): Promise<Message[]> {
    const tweets = await this.repository.fetchAll();

    tweets.forEach((item) => {
      this.splitter.addMessages(this.factory.createTweetFromRepository(item));
    });

    return this.splitter.listMessages();
  }
}
