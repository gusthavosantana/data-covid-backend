import { sequelizeWhere } from "../utils/where-builder";
import RequestFilter from "./RequestFilter";

export default class VacinaFilters extends RequestFilter {
  fabricante?: string;
  acima_12_anos?: 'Sim' | 'Não';
}

export const where = (params: VacinaFilters) => {
  return sequelizeWhere(params);
}