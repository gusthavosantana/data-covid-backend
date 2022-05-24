import { Application, Request, Response, Router } from 'express';
import { CommonRoutesConfig } from "../../common/routes/common.routes.config";
import { makeFindDosesController } from '../factories/find-doses.vacina.controller.factory';
import { makeFindEstoqueController } from '../factories/find-estoque.vacina.controller.factory';
import { makeFindDadosPorRegiaoController } from '../factories/find-dados-por-regiao.vacina.controller.factory';

export class VacinaRoutes extends CommonRoutesConfig {
  constructor(app: Application) {
    super(app, 'VacinaRoutes');
  }

  configureRoutes(): Application {
    
    const findDosesController = makeFindDosesController();
    const findEstoqueController = makeFindEstoqueController();
    const findDadosPorRegiaoController = makeFindDadosPorRegiaoController();

    const router = Router();
    router
      .get('/doses', (req: Request, res: Response) => findDosesController.handle(req, res))
      .get('/estoque', (req: Request, res: Response) => findEstoqueController.handle(req, res))
      .get('/dados-por-regiao', (req: Request, res: Response) => findDadosPorRegiaoController.handle(req, res));
    
    this.app.use('/api/vacinas', router);
    
    return this.app;
  }
}