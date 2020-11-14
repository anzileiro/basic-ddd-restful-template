import { Request, Response } from 'express';

export default class Account {
  private getAll(): any {
    return {
      method: 'get',
      path: '/accounts/',
      handler: (request: Request, response: Response) => response
        .status(200)
        .json({ account: 12345 }),
    };
  }

  private getById(): any {
    return {
      method: 'get',
      path: '/accounts/:id',
      handler: (request: Request, response: Response) => response
        .status(200)
        .json({ account: request.params.id }),
    };
  }

  public setup(): Array<any> {
    return [this.getAll(), this.getById()];
  }
}
