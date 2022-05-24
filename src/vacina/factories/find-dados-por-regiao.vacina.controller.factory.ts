import { FindDadosPorRegiaoController } from "../controllers/find-dados-por-regiao.vacina.controller";
import { FindDadosPorRegiaoUseCase } from "../usecases/find-dados-por-regiao.vacina.usecase";
import { vacinaRepository } from "../repository/vacina.repository";
import { VacinaService } from "../services/vacina.service";

export const makeFindDadosPorRegiaoController = (): FindDadosPorRegiaoController => {
  const vacinaService = new VacinaService(vacinaRepository);
  const useCase = new FindDadosPorRegiaoUseCase(vacinaService);

  return new FindDadosPorRegiaoController(useCase);
}