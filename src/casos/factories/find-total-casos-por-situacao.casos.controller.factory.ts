import { FindTotalCasosPorSituacaoController } from "../controllers/find-total-casos-por-situacao.casos.controller";
import { FindTotalCasosPorSituacaoUseCase } from "../usecases/find-total-casos-por-situacao.casos.usecase";
import { casosRepository } from "../repository/casos.repository";
import { CasosService } from "../services/casos.service";

export const makeFindTotalCasosPorSituacaoController = (): FindTotalCasosPorSituacaoController => {
  const casosService = new CasosService(casosRepository);
  const useCase = new FindTotalCasosPorSituacaoUseCase(casosService);

  return new FindTotalCasosPorSituacaoController(useCase);
}