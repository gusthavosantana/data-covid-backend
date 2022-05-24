import debug, { IDebugger } from "debug";
import RequestFilter from "../../common/types/RequestFilter";
import { Casos } from "../models/casos.model";
import { ICasosService } from "../ports/casos.service.interface";
import { UseCase } from '../../common/ports/usecase';

const log: IDebugger = debug('app:FindDadosPorRegiaoUseCase');

export class FindDadosPorRegiaoUseCase implements UseCase {
  
  private readonly service: ICasosService;

  constructor(service: ICasosService) {
    this.service = service;
  }

  execute(params: RequestFilter): Promise<Casos[]> {
    return this.service.findDadosPorRegiao(params);
  }
}