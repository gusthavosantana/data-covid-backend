import VacinaFilters from "../../common/types/VacinaFilters";
import RequestFilter from "../../common/types/RequestFilter";
import { Vacinas } from "../models/vacina.model";
import { IVacinaRepository } from "../ports/vacina.repository.interface";
import { IVacinaService } from "../ports/vacina.service.interface";

export class VacinaService implements IVacinaService{
  private readonly repository: IVacinaRepository;

  constructor(repository: IVacinaRepository) {
    this.repository = repository;
  }  
  findDoses(params: RequestFilter): Promise<Vacinas[]> {
    return this.repository.findDoses(params);
  }
  findEstoque(params: RequestFilter): Promise<Vacinas[]> {
    return this.repository.findEstoque(params);
  }
  findDadosPorRegiao(params: VacinaFilters): Promise<Vacinas[]> {
    return this.repository.findDadosPorRegiao(params);
  }
}