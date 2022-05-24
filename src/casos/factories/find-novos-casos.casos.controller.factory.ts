import { FindNovosCasosController } from "../controllers/find-novos-casos.casos.controller";
import { FindNovosCasosUseCase } from "../usecases/find-novos-casos.casos.usecase";
import { casosRepository } from "../repository/casos.repository";
import { CasosService } from "../services/casos.service";

export const makeFindNovosCasosController = (): FindNovosCasosController => {
  const casosService = new CasosService(casosRepository);
  const useCase = new FindNovosCasosUseCase(casosService);

  return new FindNovosCasosController(useCase);
}