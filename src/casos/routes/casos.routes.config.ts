import { Application, Request, Response, Router } from 'express';
import { CommonRoutesConfig } from "../../common/routes/common.routes.config";
import { makeFindDadosPorRegiaoController } from '../factories/find-dados-por-regiao.casos.controller.factory';
import { makeFindCasosPorFaixaEtariaController } from '../factories/find-casos-por-faixa-etaria.casos.controller.factory';
import { makeFindNovosCasosController } from '../factories/find-novos-casos.casos.controller.factory';
import { makeFindTotalCasosController } from '../factories/find-total-casos.casos.controller.factory';
import { makeFindTotalCasosPorSituacaoController } from '../factories/find-total-casos-por-situacao.casos.controller.factory';

const findDadosPorRegiaoController = makeFindDadosPorRegiaoController();
const findCasosPorFaixaEtariaController = makeFindCasosPorFaixaEtariaController();
const findNovosCasosController = makeFindNovosCasosController();
const findTotalCasosController = makeFindTotalCasosController();
const findTotalCasosPorSituacaoController = makeFindTotalCasosPorSituacaoController();

export class CasosRoutes extends CommonRoutesConfig {
  constructor(app: Application) {
    super(app, 'CasosRoutes');
  }

  configureRoutes(): Application {    
    const router = Router();
    router
      .get('/dados-por-regiao', (req: Request, res: Response) => 
        findDadosPorRegiaoController.handle(req, res)
      )
      .get('/casos-por-faixa-etaria', (req: Request, res: Response) => 
        findCasosPorFaixaEtariaController.handle(req, res)
      )
      .get('/novos-casos', (req: Request, res: Response) => 
        findNovosCasosController.handle(req, res)
      )
      .get('/total-casos', (req: Request, res: Response) => 
        findTotalCasosController.handle(req, res)
      )
      .get('/total-casos-por-situacao', (req: Request, res: Response) => 
        findTotalCasosPorSituacaoController.handle(req, res)
      );
    
    this.app.use('/api/casos', router);
    
    return this.app;
  }
}