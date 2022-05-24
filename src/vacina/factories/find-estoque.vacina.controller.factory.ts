import { FindEstoqueController } from "../controllers/find-estoque.vacina.controller";
import { FindEstoqueUseCase } from "../usecases/find-estoque.vacina.usecase";
import { vacinaRepository } from "../repository/vacina.repository";
import { VacinaService } from "../services/vacina.service";

export const makeFindEstoqueController = (): FindEstoqueController => {
  const vacinaService = new VacinaService(vacinaRepository);
  const useCase = new FindEstoqueUseCase(vacinaService);

  return new FindEstoqueController(useCase);
}