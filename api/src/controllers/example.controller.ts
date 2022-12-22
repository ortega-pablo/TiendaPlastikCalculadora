import { Request, Response } from 'express';

export class ExampleController {
  getExample(req: Request, res: Response): void {
    res.status(200).json({
      message: 'Mensaje de ejemplo!'
    });
  }
}
