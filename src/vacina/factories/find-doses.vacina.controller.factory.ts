import { FindDosesController } from "../controllers/find-doses.vacina.controller";
import { FindDosesUseCase } from "../usecases/find-doses.vacina.usecase";
import { vacinaRepository } from "../repository/vacina.repository";
import { VacinaService } from "../services/vacina.service";

export const makeFindDosesController = (): FindDosesController => {
  const vacinaService = new VacinaService(vacinaRepository);
  const useCase = new FindDosesUseCase(vacinaService);

  return new FindDosesController(useCase);
}