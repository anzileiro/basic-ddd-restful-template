/* eslint-disable import/no-cycle */
import { Router as HttpRouter } from 'express';
import Controller from '@application/rest/v1/Controller';

export default class Router {
  private httpRouter: HttpRouter;

  private controller: Controller;

  public constructor() {
    this.httpRouter = HttpRouter();
    this.controller = new Controller();
  }

  public async setup(): Promise<any> {
    const controllers = await this.controller.setup();
    return controllers
      .shift()
      .map((item: any) => this.httpRouter[item.method](item.path, item.handler));
  }
}
