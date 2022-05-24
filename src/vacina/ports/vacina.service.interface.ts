import VacinaFilters from "../../common/types/VacinaFilters";
import RequestFilter from "../../common/types/RequestFilter";
import { Vacinas } from "../models/vacina.model";

export interface IVacinaService {
  findDadosPorRegiao(params: VacinaFilters): Promise<Vacinas[]>;
  findDoses(params: RequestFilter) : Promise<Vacinas[]>;
  findEstoque(params: RequestFilter): Promise<Vacinas[]>;
}