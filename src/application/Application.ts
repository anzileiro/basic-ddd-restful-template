import Rest from '@infrastructure/rest/Server';

export default class Application {
    private static instance: Application;

    private rest: Rest;

    public constructor() {
      this.rest = new Rest();
    }

    public static getInstance(): Application {
      if (!Application.instance) {
        Application.instance = new Application();
      }

      return Application.instance;
    }

    public async setup(): Promise<void> {
      await this.rest.start();
    }
}
