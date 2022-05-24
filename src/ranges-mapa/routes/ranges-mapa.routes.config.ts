import { Application, Request, Response, Router } from 'express';
import { CommonRoutesConfig } from "../../common/routes/common.routes.config";
import { makeFindAllController } from '../factories/find-all.ranges-mapa.controller.factory';

const findAllController = makeFindAllController();

export class RangesMapaRoutes extends CommonRoutesConfig {
  constructor(app: Application) {
    super(app, 'RangesMapaRoutes');
  }

  configureRoutes(): Application {    
    this.app.get('/api/ranges-mapa', (req: Request, res: Response) => 
      findAllController.handle(req, res)
    );
    
    return this.app;
  }
}