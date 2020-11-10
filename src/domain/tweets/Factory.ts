import Tweet from '@domain/tweets/Tweet';

export default class Factory {
  public createTweetFromRepository({ id, text }: any): Tweet {
    return new Tweet(id, text);
  }
}
