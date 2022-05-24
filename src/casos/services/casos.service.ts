import RequestFilter from "../../common/types/RequestFilter";
import { Casos } from "../models/casos.model";
import { ICasosRepository } from "../ports/casos.repository.interface";
import { ICasosService } from "../ports/casos.service.interface";

export class CasosService implements ICasosService{
  private readonly repository: ICasosRepository;

  constructor(repository: ICasosRepository) {
    this.repository = repository;
  } 
  findTotalCasosPorSituacao(params: RequestFilter): Promise<Casos[]> {
    return this.repository.findTotaoCasosPorSituacao(params);
  }
  findTotalCasos(params: RequestFilter): Promise<Casos> {
    return this.repository.findTotalCasos(params);
  }
  findNovosCasos(params: RequestFilter): Promise<Casos> {
    return this.repository.findNovosCasos(params);
  }
  findDadosPorRegiao(params: RequestFilter): Promise<Casos[]> {
    return this.repository.findDadosPorRegiao(params);
  }
  findCasosPorFaixaEtaria(params: RequestFilter): Promise<Casos[]> {
    return this.repository.findCasosPorFaixaEtaria(params);
  }
}