import { RangesMapaDTO } from "../dto/ranges-mapa.dto";
import { RangesMapa } from "../models/ranges-mapa.model";
import { IRangesMapaRepository } from "../ports/ranges-mapa.repository.interface";

class RangesMapaRepository implements IRangesMapaRepository {
  async findAll(): Promise<RangesMapaDTO> {
    const data = await RangesMapa.findAll();
    const dadosPorAba = {};

    for (const item of data) {
      if (!dadosPorAba[item.no_aba]) {
        dadosPorAba[item.no_aba] = [];
      }
      const isPercentual = ['Vacina'].includes(item.no_aba);

      dadosPorAba[item.no_aba].push({
        cor: item.co_cor,
        minimo: isPercentual ? item.vl_minimo * 100 : item.vl_minimo,
        maximo: isPercentual ? item.vl_maximo * 100 : item.vl_maximo,
      });
    }

    return dadosPorAba;
  }
}

export const rangesMapaRepository = new RangesMapaRepository();
