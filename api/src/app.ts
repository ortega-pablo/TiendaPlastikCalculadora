import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { UserRouter } from './routes/example.route'
import { Config } from './config/config'

export class App extends Config{
    
    public app: express.Application = express()

    constructor() {
        
        super()
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }))
        this.app.use(morgan('dev'))
        this.app.use(cors())

        this.app.use('/api', this.routes())

    }

    routes(): Array<express.Router> {
        return [new UserRouter().router]
    }

}