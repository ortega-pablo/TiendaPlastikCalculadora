import { Router } from "express";

export class indexRouter<T> {
    public router: Router
    public controller: T
    //public middleware: Middleware

    constructor(TController: {new (): T } ) {
        this.router = Router()
        this.controller = new TController
        this.routes()
    }

    routes(){}
}