import Fetcher from '@domain/tweets/use-case/Fetcher';
import Splitter from '@domain/tweets/Splitter';
import Factory from '@domain/tweets/Factory';
import Repository from '@infrastructure/web/repository/Tweets';

describe('Domain Layer Unit Test', () => {
  test('Should split the tweets without any errors', async () => {
    const repository = new Repository();
    const splitter = new Splitter(20);
    const factory = new Factory();

    repository.fetchAll = async (): Promise<Array<any>> => ([
      {
        id: 984105036543381500,
        text: 'Referente a interferência na Marginal Pinheiros, sentido Castelo Branco, pista expressa, junto a Ponte Itapaiúna, via liberada.',
      },
    ]);

    const fetcher = new Fetcher(repository, splitter, factory);
    const result = await fetcher.execute();

    expect(result).toBeTruthy();
    expect(result.length).toBe(1);
  });

  test('Should split the tweets respecting the maximum of 45 chars per Tweet text fetched', async () => {
    const repository = new Repository();
    const splitter = new Splitter(20);
    const factory = new Factory();

    repository.fetchAll = async (): Promise<Array<any>> => ([
      {
        id: 984105036543381500,
        text: 'Referente a interferência na Marginal Pinheiros, sentido Castelo Branco, pista expressa, junto a Ponte Itapaiúna, via liberada.',
      },
    ]);

    const fetcher = new Fetcher(repository, splitter, factory);
    const result = await fetcher.execute();

    const slices = result.shift().getSlices();

    slices.forEach((slice) => {
      expect(slice.length).toBeLessThan(45);
    });
  });
});
