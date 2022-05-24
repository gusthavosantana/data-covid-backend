import { RangesMapaDTO } from "../dto/ranges-mapa.dto";
import { IRangesMapaRepository } from "../ports/ranges-mapa.repository.interface";
import { IRangesMapaService } from "../ports/ranges-mapa.service.interface";

export class RangesMapaService implements IRangesMapaService {
  private readonly repository: IRangesMapaRepository;

  constructor(repository: IRangesMapaRepository) {
    this.repository = repository;
  }
  findAll(): Promise<RangesMapaDTO> {
    return this.repository.findAll();
  }

}