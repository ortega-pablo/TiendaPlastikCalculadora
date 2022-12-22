import { ExampleController } from '../controllers/Example.controller';
import { IndexRouter } from './Index.route';

export class ExampleRouter extends IndexRouter<ExampleController> {
  constructor() {
    super(ExampleController);
  }

  routes(): void {
    this.router.get('/example', (req, res) =>
      this.controller.getExample(req, res)
    );
  }
}
