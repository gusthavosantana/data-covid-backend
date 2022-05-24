import { UseCase } from "../../common/ports/usecase";
import { RangesMapaDTO } from "../dto/ranges-mapa.dto";
import { IRangesMapaService } from "../ports/ranges-mapa.service.interface";

export class FindAllUseCase implements UseCase {
  
  private readonly service: IRangesMapaService;

  constructor(service: IRangesMapaService) {
    this.service = service;
  }

  execute(): Promise<RangesMapaDTO> {
    return this.service.findAll();
  }
}