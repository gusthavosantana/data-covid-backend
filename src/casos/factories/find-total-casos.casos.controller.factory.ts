import { FindTotalCasosController } from "../controllers/find-total-casos.casos.controller";
import { FindTotalCasosUseCase } from "../usecases/find-total-casos.casos.usecase";
import { casosRepository } from "../repository/casos.repository";
import { CasosService } from "../services/casos.service";

export const makeFindTotalCasosController = (): FindTotalCasosController => {
  const casosService = new CasosService(casosRepository);
  const useCase = new FindTotalCasosUseCase(casosService);

  return new FindTotalCasosController(useCase);
}