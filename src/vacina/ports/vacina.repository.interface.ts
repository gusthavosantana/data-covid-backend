import VacinaFilters from "../../common/types/VacinaFilters";
import RequestFilter from "../../common/types/RequestFilter";
import { Vacinas } from "../models/vacina.model";

export interface IVacinaRepository {
  findDadosPorRegiao(params: VacinaFilters);
  findDoses(params: RequestFilter) : Promise<Vacinas[]>;
  findEstoque(params: RequestFilter): Promise<Vacinas[]>;
}
