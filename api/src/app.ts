import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { Config } from './config/config';
import { ExampleRouter } from './routes/Example.route';

export class App extends Config {
  public app: express.Application = express();

  constructor() {
    super();
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(morgan('dev'));
    this.app.use(cors());

    this.app.use('/api', this.routes());
  }

  routes(): express.Router[] {
    return [new ExampleRouter().router];
  }
}
