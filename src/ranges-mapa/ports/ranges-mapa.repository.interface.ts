import { RangesMapaDTO } from "../dto/ranges-mapa.dto";

export interface IRangesMapaRepository {
  findAll(): Promise<RangesMapaDTO>;
}
