import { Request, Response } from 'express';
import { UseCase } from './usecase';

export abstract class ControllerOperation {

  useCase: UseCase;

  constructor(useCase: UseCase) {
    this.useCase = useCase;
  }

  abstract handle(req: Request, res: Response) : Promise<any>;
}