import { FindDadosPorRegiaoController } from "../controllers/find-dados-por-regiao.casos.controller";
import { FindDadosPorRegiaoUseCase } from "../usecases/find-dados-por-regiao.casos.usecase";
import { casosRepository } from "../repository/casos.repository";
import { CasosService } from "../services/casos.service";

export const makeFindDadosPorRegiaoController = (): FindDadosPorRegiaoController => {
  const casosService = new CasosService(casosRepository);
  const useCase = new FindDadosPorRegiaoUseCase(casosService);

  return new FindDadosPorRegiaoController(useCase);
}