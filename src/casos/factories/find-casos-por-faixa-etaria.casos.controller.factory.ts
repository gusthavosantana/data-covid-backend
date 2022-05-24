import { FindCasosPorFaixaEtariaController } from "../controllers/find-casos-por-faixa-etaria.casos.controller";
import { FindCasosPorFaixaEtariaUseCase } from "../usecases/find-casos-por-faixa-etaria.casos.usecase";
import { casosRepository } from "../repository/casos.repository";
import { CasosService } from "../services/casos.service";

export const makeFindCasosPorFaixaEtariaController = (): FindCasosPorFaixaEtariaController => {
  const casosService = new CasosService(casosRepository);
  const useCase = new FindCasosPorFaixaEtariaUseCase(casosService);

  return new FindCasosPorFaixaEtariaController(useCase);
}