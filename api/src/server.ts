import { DataSource } from 'typeorm';
import { App } from './app';
import { PostgresDataSource } from './db';

export class Server extends App {
  private readonly port: number = this.getNumberEnv('PORT');

  constructor() {
    super();
    void this.serverConnection();
  }

  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  async serverConnection(): Promise<DataSource | void> {
    return await PostgresDataSource.initialize()
      .then(() => {
        console.log('Database successfully connected!!');
      })
      .catch((err) => {
        console.error(err);
      })
      .then(() => {
        this.app.listen(this.port, () => {
          console.log(`Server is listening on port ${this.port}`);
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }
}

// eslint-disable-next-line no-new
new Server();
