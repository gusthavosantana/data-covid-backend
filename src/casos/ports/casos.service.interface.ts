import RequestFilter from "../../common/types/RequestFilter";
import { Casos } from "../models/casos.model";

export interface ICasosService {
  findTotalCasosPorSituacao(params: RequestFilter): Promise<Casos[]>;
  findTotalCasos(params: RequestFilter): Promise<Casos>;
  findNovosCasos(params: RequestFilter): Promise<Casos>;
  findDadosPorRegiao(params: RequestFilter): Promise<Casos[]>;
  findCasosPorFaixaEtaria(params: RequestFilter): Promise<Casos[]>;
}