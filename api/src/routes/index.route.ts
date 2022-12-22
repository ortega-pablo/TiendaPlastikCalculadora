import { Router } from 'express';

export class IndexRouter<T> {
  public router: Router;
  public controller: T;
  // public middleware: Middleware

  constructor(TController: new () => T) {
    this.router = Router();
    this.controller = new TController();
    this.routes();
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  routes(): void {}
}
