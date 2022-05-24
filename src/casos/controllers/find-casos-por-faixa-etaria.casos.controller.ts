import debug from 'debug';
import { Request, Response } from 'express';
import { ControllerOperation } from '../../common/ports/controller-operation';
import { UseCase } from '../../common/ports/usecase';

const log: debug.IDebugger = debug('app:FindCasosPorFaixaEtariaController');

export class FindCasosPorFaixaEtariaController extends ControllerOperation {
  constructor(useCase: UseCase) {
    super(useCase);
  }

  async handle(req: Request, res: Response): Promise<Response<void, Record<string, any>>> {
    try {
      const data = await this.useCase.execute(req.query);
      return res.status(200).json(data);
    } catch (error) {
      log(error);
      console.error(error);
      return res.status(500).json({ error: 'erro ao buscar casos por faixa etária.' });
    }
  }
}