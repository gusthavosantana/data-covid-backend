import { RangesMapaDTO } from "../dto/ranges-mapa.dto";

export interface IRangesMapaService {
  findAll(): Promise<RangesMapaDTO>;
}