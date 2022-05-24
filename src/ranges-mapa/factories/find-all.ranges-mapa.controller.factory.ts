import { FindAllController } from "../controllers/find-all.ranges-mapa.controller";
import { rangesMapaRepository } from "../repository/ranges-mapa.repository";
import { RangesMapaService } from "../services/ranges-mapa.service";
import { FindAllUseCase } from "../usecases/find-all.ranges-mapa.usecase";

export const makeFindAllController = (): FindAllController => {
  const rangesMapaService = new RangesMapaService(rangesMapaRepository);
  const useCase = new FindAllUseCase(rangesMapaService);

  return new FindAllController(useCase);
}