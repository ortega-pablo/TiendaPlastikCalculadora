import { DataSource } from 'typeorm'
import { App } from './app'
import { MysqlDataSource } from './db'

class Server extends App{

    private port: number = this.getNumberEnv("PORT")

    constructor() {
        super()
        this.serverConnection()
    }

    async serverConnection(): Promise<DataSource | void> {
        return MysqlDataSource.initialize()
          .then(() => {
            console.log("Database successfully connected!!");
          })
          .catch((err) => {
            console.error(err);
          })
          .then(() => {
              this.app.listen(this.port, () => {
                  console.log(`Server is listening on port ${this.port}`)
              })
          })
          .catch((err) => {
            console.error(err);
          });
      }
}

new Server()